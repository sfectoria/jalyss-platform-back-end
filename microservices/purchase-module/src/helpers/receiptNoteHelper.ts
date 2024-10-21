import { Global, Injectable } from '@nestjs/common';
import { PaymentStatus, PaymentType, Prisma, TypeReceipt } from '@prisma/client';
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
  idProvider?: number;
  receiptNoteLines: EntityReceiptNoteLine[];
  subTotalAmount?:number;
  totalAmount?: number;
  tax?: number;
  discount?: number;
  payedAmount?:number
  restedAmount?:number
  modified?:boolean
  paymentType?:PaymentType
  paymentStatus?:PaymentStatus
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
      idProvider,
      date,
      typeReceipt,
      totalAmount,
      tax,
      discount,
      subTotalAmount,
      paymentStatus,
      paymentType,
      payedAmount,
      restedAmount,
      modified,
      ...rest
    } = createReceiptNote;

    console.log('give me an id of ', idStock);

    // Vérifier l'existence du stock
    const stock = await prisma.stock.findMany({
      where: { id: idStock },
    });

    if (stock.length) {
      // Trouver le dernier numéro de bon de réception dans ce stock
      const lastReceiptNoteOfStock = await prisma.receiptNote.findMany({
        where: { idStock: stock[0].id },
        take: 1,
        orderBy: {
          numReceiptNote: 'desc',
        },
      });

      numReceiptNote =
        lastReceiptNoteOfStock.length == 0
          ? 1
          : lastReceiptNoteOfStock[0].numReceiptNote + 1;

      console.log('numero ', stock);

      // Créer la Receipt Note
      const receiptNote = await prisma.receiptNote.create({
        data: {
          receiptDate: new Date(date).toISOString(),
          typeReceipt,
          numReceiptNote,
          idStock: idStock,
          idProvider,
          totalAmount,
          tax,
          discount,
          subTotalAmount,
          paymentStatus,
          payedAmount,
          restedAmount,
          modified,
          paymentType,
          receiptNoteLine: {
            createMany: { data: receiptNoteLines },
          },
        },
      });

      

      // Mise à jour des quantités de chaque article dans StockArticle
      for (const line of receiptNoteLines) {
        const { idArticle, quantity } = line;

        // Vérifier si l'article est déjà dans le stock
        const stockArticle = await prisma.stockArticle.findUnique({
          where: {
            stockId_articleId: {
              stockId: idStock,
              articleId: idArticle,
            },
          },
        });

        if (stockArticle) {
          // Si l'article existe, augmenter la quantité
          await prisma.stockArticle.update({
            where: {
              stockId_articleId: {
                stockId: idStock,
                articleId: idArticle,
              },
            },
            data: {
              quantity: { increment: quantity },
            },
          });
        } else {
          // Si l'article n'existe pas, créer une nouvelle entrée dans StockArticle
          await prisma.stockArticle.create({
            data: {
              stockId: idStock,
              articleId: idArticle,
              quantity,
            },
          });
        }
      }

      return receiptNote;
    }
  }
}
