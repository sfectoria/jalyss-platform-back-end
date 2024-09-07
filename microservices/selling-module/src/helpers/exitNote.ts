import { Global, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';

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
    let {
      exitNoteLines,
      numExitNote = 0,
      saleChannelId,
      date,
      totalAmount,
      ...rest
    } = createExitNoteDto;

    // Trouver le stock associé au canal de vente
    const stock = await prisma.stock.findMany({
      where: { salesChannels: { some: { id: saleChannelId } } },
    });
    console.log('Stock', stock);

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
      console.log(stock[0], 'numero ');

      // Créer le bon de sortie
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
      throw new Error(`Aucun stock trouvé pour le canal de vente ${saleChannelId}.`);
    }
  }
}
