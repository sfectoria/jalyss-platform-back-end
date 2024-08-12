import { Global, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';
@Global()
@Injectable()
class EntityExiteNoteLine {
  articleId: number;
}
class EntityExiteNote {
  exitNoteLines: EntityExiteNoteLine[];
  num_bonSortie?: number;
  saleChannelId: number;
  date: string;
}

export class BonSortie {
  async create(
    prisma: Prisma.TransactionClient,
    type: 'invoice' | 'blf' | 'bl',
    createBonSortyDto: EntityExiteNote,
  ) {
    let {
      exitNoteLines,
      num_bonSortie = 0,
      saleChannelId,
      date,
      ...rest
    } = createBonSortyDto;
    // if (type === 'invoice') {
    const stock = await prisma.stock.findMany({
      where: { sales_channels: { some: { id: saleChannelId } } },
    });
    // }
    if (stock.length) {
      const lastExitNoteOfStock = await prisma.bonSortie.findMany({
        where: { stockId: stock[0].id },
        take: 1,
        orderBy: {
          num_bonSortie: 'desc',
        },
      });

      num_bonSortie =
        lastExitNoteOfStock.length == 0
          ? 1
          : lastExitNoteOfStock[0].num_bonSortie + 1;
      console.log(stock[0], 'numero ');

      return await prisma.bonSortie.create({
        data: {
          sortie_date: new Date(date).toISOString(),
          num_bonSortie,
          stockId: stock[0].id,
          BonSortie_line: {
            createMany: { data: exitNoteLines },
          },
        },
      });
    }
  }
}
