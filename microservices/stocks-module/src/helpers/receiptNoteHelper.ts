import { Global, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';
@Global()
@Injectable()
class EntityReceiptNoteLine {
  idArtical: number;
  quantity: number;
}
class EntityReceiptNote {
  date: string;
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
      ...rest
    } = createReceiptNote;
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
      console.log(stock[0], 'numero ');

      return await prisma.receiptNote.create({
        data: {
        receiptDate: new Date(date).toISOString(),
          numReceiptNote,
          idStock: stock[0].id,
          receiptNoteLine: {
            createMany: { data: receiptNoteLines },
          },
        },
      });
    }
  }
}
