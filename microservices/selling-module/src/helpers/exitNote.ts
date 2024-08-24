import { Global, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';
@Global()
@Injectable()
class EntityExiteNoteLine {
  articalId: number;
  quantity: number;
}
class EntityExiteNote {
  date: string;
  numExitNote?: number;
  saleChannelId: number;
  exitNoteLines: EntityExiteNoteLine[];
}

export class ExitNote {
  async create(
    prisma: Prisma.TransactionClient,
    // type: 'invoice' | 'blf' | 'bl',
    createExitNoteDto: EntityExiteNote,
  ) {
    let {
      exitNoteLines,
      numExitNote = 0,
      saleChannelId,
      date,
      ...rest
    } = createExitNoteDto;
    // if (type === 'invoice') {
    const stock = await prisma.stock.findMany({
      where: { salesChannels: { some: { id: saleChannelId } } },
    });
    console.log('Stock',stock);
    
    // }
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

      return await prisma.exitNote.create({
        data: {
          exitDate: new Date(date).toISOString(),
          numExitNote,
          stockId: stock[0].id,
          exitNoteLine: {
            createMany: { data: exitNoteLines },
          },
        },
      });
    }
  }
}
