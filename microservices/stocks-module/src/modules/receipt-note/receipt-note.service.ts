import { Injectable } from '@nestjs/common';
import { CreateReceiptNoteDto } from './dto/create-receipt-note.dto';
import { UpdateReceiptNoteDto } from './dto/update-receipt-note.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class ReceiptNoteService {
  constructor(private readonly prisma: PrismaService) { }
  async create(createReceiptNoteDto: CreateReceiptNoteDto) {
    const { lines, ...rest } = createReceiptNoteDto
    return await this.prisma.receiptNote.create(
      {
        data:
        {
          ...rest,
          receiptNoteLine:
          {
            createMany: { data: lines}
          }
        }
      }
    );
  }

  async findAll() {
    return await this.prisma.receiptNote.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.receiptNote.findUnique({
      where: { id },
      include: { receiptNoteLine: { include: { Artical: true } }, stock: true },
    });
  }

  async update(id: number, updatereceiptNoteDto: UpdateReceiptNoteDto) {
    const { lines, ...rest } = updatereceiptNoteDto
    return await this.prisma.receiptNote.update({
      where: { id },
      data:
      {
        ...rest,
        receiptNoteLine:
        {
          updateMany: lines.map(line => ({
            where: {
              idArtical: line.idArtical,
              receiptNoteId: id,
            },
            data: {
              quantity: line.quantity,
            },
          }))
        },
      }
    });
  }

  async remove(id: number) {
    return await this.prisma.receiptNote.delete({
      where: { id },
      include: { receiptNoteLine: { include: { Artical: true } }, stock: true },
    })
  }
}
