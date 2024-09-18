import { Global, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';
import { SalesChannel } from 'src/sales-channels/entities/sales-channel.entity';

@Global()
@Injectable()
class EntityExiteNoteLine {
  articleId: number;
  quantity: number;
}

class EntityExiteNote {
  date: string;
  numExitNote?: number;
  saleChannelId: number;
  exitNoteLines: EntityExiteNoteLine[];
  totalAmount?: number;
}

export class ExitNote {
  async create(
    prisma: Prisma.TransactionClient,
    createExitNoteDto: EntityExiteNote,
  ) {
    console.log('Received DTO:', createExitNoteDto);

    let {
      exitNoteLines,
      numExitNote = 0,
      saleChannelId,
      date,
      totalAmount,
      ...rest
    } = createExitNoteDto;

    console.log('date', date);
    if (!date) {
      throw new Error('Le champ "date" est requis.');
    }

    // Trouver le stock associé au canal de vente
    const stock = await prisma.stock.findMany({
      where: { salesChannels: { some: { id: saleChannelId } } },
    });
    console.log('Stock', stock, saleChannelId);

    if (stock.length) {
      const lastExitNoteOfStock = await prisma.exitNote.findMany({
        where: { stockId: stock[0].id },
        take: 1,
        orderBy: {
          numExitNote: 'desc',
        },
      });

      numExitNote =
        lastExitNoteOfStock.length == 0
          ? 1
          : lastExitNoteOfStock[0].numExitNote + 1;
      console.log(stock[0].id, exitNoteLines, 'numero ');

      let parsedDate = new Date(date);
      if (isNaN(parsedDate.getTime())) {
        throw new Error(`Le format de date fourni (${date}) est invalide.`);
      }
      const exitNote = await prisma.exitNote.create({
        data: {
          exitDate: new Date(date).toISOString(),
          numExitNote,
          stockId: stock[0].id,
          totalAmount,
          exitNoteLine: {
            createMany: { data: exitNoteLines },
          },
        },
      });
      console.log(exitNote, 'test');

      // Mettre à jour la quantité dans la table stockArticle
      for (const line of exitNoteLines) {
        // Trouver l'article dans le stock
        const stockArticle = await prisma.stockArticle.findFirst({
          where: {
            stockId: stock[0].id,
            articleId: line.articleId,
          },
        });

        if (stockArticle) {
          // Vérification si la quantité est suffisante
          if (stockArticle.quantity >= line.quantity) {
            // Mise à jour de la quantité dans le stock
            await prisma.stockArticle.update({
              where: {
                id: stockArticle.id,
              },
              data: {
                quantity: stockArticle.quantity - line.quantity,
              },
            });
          } else {
            throw new Error(
              `La quantité de l'article ${line.articleId} dans le stock est insuffisante pour la sortie.`,
            );
          }
        } else {
          throw new Error(
            `L'article ${line.articleId} n'existe pas dans le stock ${stock[0].id}.`,
          );
        }
      }

      return exitNote;
    } else {
      throw new Error(
        `Aucun stock trouvé pour le canal de vente ${saleChannelId}.`,
      );
    }
  }
}
