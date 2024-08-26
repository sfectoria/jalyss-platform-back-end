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
    console.log('give me an id of ',idStock);
    
    const stock = await prisma.stock.findMany({
      where: { id: idStock  },
    });
    if (stock.length) {
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
      console.log('numero ',stock);

      return await prisma.receiptNote.create({
        data: {
        receiptDate: new Date(date).toISOString(),
        typeReceipt,
          numReceiptNote,
          idStock: idStock,
          receiptNoteLine: {
            createMany: { data: receiptNoteLines },
          },
        },
      });
    }
  }
}
