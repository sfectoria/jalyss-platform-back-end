import { Injectable } from '@nestjs/common';
import { CreateMovementDto } from './dto/create-movement.dto';
import { UpdateMovementDto } from './dto/update-movement.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class MovementsService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createMovementDto: CreateMovementDto) {
    return 'This action adds a new movement';
  }

  async findAll(filters) {
    console.log('filters', filters);
    let { take, skip } = filters;
    take = !take ? 10 : +take;
    skip = !skip ? 0 : +skip;
    let where = {};
    let exitNoteData = await this.prisma.exitNote.findMany({
      include: {
        exitNoteLine: { include: { Article: { include: { cover: true } } } },
        stock: true,
        transferNote: true,
        salesDeliveryInvoice: { include: { client: true } },
        salesDeliveryNote: { include: { client: true } },
        salesInvoice: { include: { client: true } },
      },
    });
    let receiptNoteData = await this.prisma.receiptNote.findMany({
      include: {
        receiptNoteLine: { include: { Article: { include: { cover: true } } } },
        stock: true,
        provider: true,
        transferNote: true,
        purchaseDeliveryInvoice: true,
        purchaseDeliveryNote: true,
        purchaseInvoice: true,
      },
    });

    const mergeAndSortByDate = (exitNotes, receiptNotes) => {
      const combined = [
        ...exitNotes.map((item) => ({
          ...item,
          type: 'exit',
          date: new Date(item.exitDate),
          id: `exit-${item.id}`,
        })),
        ...receiptNotes.map((item) => ({
          ...item,
          type: 'receipt',
          date: new Date(item.receiptDate),
          id: `receipt-${item.id}`,
        })),
      ];

      return combined.sort((a, b) => b.date - a.date);
    };

    const sortedData = mergeAndSortByDate(exitNoteData, receiptNoteData);
    console.log(sortedData);
    const piginatedData = sortedData.slice(skip, skip + take);
    const count = sortedData.length;
    return { data: piginatedData, count };
  }

  async findOne(id: number) {
    return `This action returns a #${id} movement`;
  }

  async update(id: number, updateMovementDto: UpdateMovementDto) {
    return `This action updates a #${id} movement`;
  }

  async remove(id: number) {
    return `This action removes a #${id} movement`;
  }
}
