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
  idArticle?:number
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
        where: { id: idStock  },
      });
    console.log('Stock',stock);
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
      let newExitCopy = exitNoteLines.map(a => ({...a}))
      const newExit =newExitCopy.map((e)=>{
        console.log(e);
        e.articleId=e.idArticle
        delete e.idArticle
        console.log(e);
        return e
      })
      console.log('test',exitNoteLines);
      
      return await prisma.exitNote.create({
        data: {
          exitDate: new Date(date).toISOString(),
          numExitNote,
          stockId: stock[0].id,
          exitNoteLine: {
            createMany: { data: newExit },
          },
        },
      });
    }
  }
}