import { Global, Injectable } from '@nestjs/common';
import { Prisma, TypeReceipt } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';

@Global()
@Injectable()
class EntityReceiptNoteLine {
  idArticle: number;
  quantity: number;
}

class EntityReceiptNote {
  date: Date;
  typeReceipt: TypeReceipt;
  numReceiptNote?: number;
  idStock: number;
  receiptNoteLines: EntityReceiptNoteLine[];
}

class EntityExiteNoteLine {
  articleId?: number;
  idArticle?: number;
  quantity: number;
}

class EntityExiteNote {
  date: Date;
  numExitNote?: number;
  idStock: number;
  exitNoteLines: EntityExiteNoteLine[];
}

export class ReceiptNoteHelper {
  async create(
    prisma: Prisma.TransactionClient,
    createReceiptNote: EntityReceiptNote,
  ) {
    let {
      receiptNoteLines,
      numReceiptNote = 0,
      idStock, 
      date,
      typeReceipt,
      ...rest
    } = createReceiptNote;

    console.log('Provided SalesChannel ID (idStock):', idStock);

    
    const salesChannel = await prisma.salesChannels.findUnique({
      where: { id: idStock }, 
      include: { stock: true },
    });

    if (!salesChannel || !salesChannel.stock) {
      throw new Error(
        `No Stock found for the given SalesChannel ID (${idStock}).`
      );
    }

    const stockId = salesChannel.stock.id;
    console.log('Resolved Stock ID:', stockId);

    
    const lastReceiptNoteOfStock = await prisma.receiptNote.findMany({
      where: { idStock: stockId },
      take: 1,
      orderBy: {
        numReceiptNote: 'desc',
      },
    });

    numReceiptNote =
      lastReceiptNoteOfStock.length === 0
        ? 1
        : lastReceiptNoteOfStock[0].numReceiptNote + 1;

    
    const receiptNote = await prisma.receiptNote.create({
      data: {
        receiptDate: new Date(date).toISOString(),
        typeReceipt,
        numReceiptNote,
        idStock: stockId, 
        receiptNoteLine: {
          createMany: { data: receiptNoteLines },
        },
        ...rest,
      },
    });

    
    for (const line of receiptNoteLines) {
      const stockArticle = await prisma.stockArticle.findFirst({
        where: {
          stockId: stockId,
          articleId: line.idArticle,
        },
      });

      if (stockArticle) {
        await prisma.stockArticle.update({
          where: { id: stockArticle.id },
          data: {
            quantity: stockArticle.quantity + line.quantity,
          },
        });
      } else {
        
        await prisma.stockArticle.create({
          data: {
            stockId: stockId,
            articleId: line.idArticle,
            quantity: line.quantity,
          },
        });
      }
    }

    return receiptNote;
  }
}


export class ExitNoteHelper {
  async create(
    prisma: Prisma.TransactionClient,
    createExitNoteDto: EntityExiteNote,
  ) {
    let {
      exitNoteLines,
      numExitNote = 0,
      idStock,
      date,
      ...rest
    } = createExitNoteDto;

    const stock = await prisma.stock.findMany({
      where: { id: idStock },
    });

    console.log('Stock:', stock);

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

      let newExitCopy = exitNoteLines.map((a) => ({ ...a }));
      const newExit = newExitCopy.map((e) => {
        e.articleId = e.idArticle;
        delete e.idArticle;
        return e;
      });

      console.log("newExit:", newExit);
      // Créer la ExitNote
      const exitNote = await prisma.exitNote.create({
        data: {
          exitDate: new Date(date).toISOString(),
          numExitNote,
          stockId: stock[0].id,
          exitNoteLine: {
            createMany: { data: newExit },
          },
        },
      });

      console.log("exitNote",exitNote)
      console.log("newExit:", newExit);

      // Diminuer la quantité du stock
      for (const line of exitNoteLines) {
        const stockArticle = await prisma.stockArticle.findFirst({
          where: {
            stockId: idStock,
            articleId: line.idArticle,
          },
        });
        console.log('stockArticle', stockArticle);
        console.log("line",line)
        if (stockArticle) {
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
              `Quantité insuffisante pour l'article ${line.articleId} dans le stock.`,
            );
          }
        } else {
          throw new Error(
            `L'article ${line.articleId} n'existe pas dans le stock ${idStock}.`,
          );
        }
      }

      return exitNote;
    }
  }
}
