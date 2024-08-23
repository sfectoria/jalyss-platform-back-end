import { Injectable } from '@nestjs/common';
import { CreatePurchaseDeliveryNoteDto } from './dto/create-purchase-delivery-note.dto';
import { UpdatePurchaseDeliveryNoteDto } from './dto/update-purchase-delivery-note.dto';
import { PrismaService } from 'nestjs-prisma';
import { Prisma } from '@prisma/client';
import { ReceiptNoteHelper } from 'src/helpers/receiptNoteHelper';

@Injectable()
export class PurchaseDeliveryNoteService {
  constructor(
    private readonly prisma: PrismaService,
    private helperReceiptNote : ReceiptNoteHelper
    ) {}

  async create(createPurchaseDeliveryNoteDto: CreatePurchaseDeliveryNoteDto) {
    return await this.prisma.$transaction(
      async (prisma: Prisma.TransactionClient) => {
        let {idReceiptNote,lines,idStock, ...rest } = createPurchaseDeliveryNoteDto;
         console.log('idReceipt',idReceiptNote);
         console.log('idReceipt');
         
        if(!idReceiptNote){
          const newReceiptNote = await this.helperReceiptNote.create(
            prisma,
            {
              idStock: idStock,
              typeReceipt:"achat",
              date: createPurchaseDeliveryNoteDto.deliveryDate,
              receiptNoteLines: lines,
            },
          );
          idReceiptNote=newReceiptNote.id
          console.log('newReceiptNote',idReceiptNote,newReceiptNote);
        }
         return await this.prisma.purchaseDeliveryNote.create({
      data: {
        ...rest,
        deliveryDate:new Date(rest.deliveryDate).toISOString(),
        purchaseDeliveryNoteLine: {
          createMany: { data: lines },
        },
        idReceiptNote
      },
    });
        
      })

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
          updateMany: lines.map((line) => ({
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
    return await this.prisma.purchaseDeliveryNote.delete({
      where: { id },
      include: {
        purchaseDeliveryNoteLine: { include: { artical: true } },
        receiptNote: true,
      },
    });
  }
}
