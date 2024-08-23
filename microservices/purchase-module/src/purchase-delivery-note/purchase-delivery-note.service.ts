import { Injectable } from '@nestjs/common';
import { CreatePurchaseDeliveryNoteDto } from './dto/create-purchase-delivery-note.dto';
import { UpdatePurchaseDeliveryNoteDto } from './dto/update-purchase-delivery-note.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class PurchaseDeliveryNoteService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    createPurchaseDeliveryNoteDto: CreatePurchaseDeliveryNoteDto,
  ) {
    const { lines, ...rest } = createPurchaseDeliveryNoteDto;
    return await this.prisma.purchaseDeliveryNote.create({
      data: {
        ...rest,
        purchaseDeliveryNoteLine: {
          createMany: { data: lines },
        },
      },
    });
  }

  async findAll() {
    return await this.prisma.purchaseDeliveryNote.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.purchaseDeliveryNote.findUnique({
      where: { id },
      include: {
        purchaseDeliveryNoteLine: { include: { artical: true } },
        receiptNote: true,
      },
    });
  }

  async update(
    id: number,
    updatepurchaseDeliveryNoteDto: UpdatePurchaseDeliveryNoteDto,
  ) {
    const { lines, ...rest } = updatepurchaseDeliveryNoteDto;
    return await this.prisma.purchaseDeliveryNote.update({
      where: { id },
      data: {
        ...rest,
        purchaseDeliveryNoteLine: {
          updateMany: lines?.map((line) => ({
            where: {
              idArtical: line.idArtical,
              purchaseDeliveryNoteId: id,
            },
            data: {
              quantity: line.quantity,
            },
          })),
        },
      },
    });
  }

  async remove(id: number) {
    await this.prisma.purchaseDeliveryNoteLine.deleteMany({
      where: { idDeliveryNote: id },
    });
    return await this.prisma.purchaseDeliveryNote.delete({
      where: { id },
    });
  }
}
