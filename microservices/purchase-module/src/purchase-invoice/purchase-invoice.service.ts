import { Injectable } from '@nestjs/common';
import { CreatePurchaseInvoiceDto } from './dto/create-purchase-invoice.dto';
import { UpdatePurchaseInvoiceDto } from './dto/update-purchase-invoice.dto';
import { PrismaService } from 'nestjs-prisma';
import { ReceiptNoteHelper } from 'src/helpers/receiptNoteHelper';
import {  Prisma } from '@prisma/client';

@Injectable()
export class PurchaseInvoiceService {
  constructor(
    private readonly prisma: PrismaService,
    private helperReceiptNote: ReceiptNoteHelper,
  ) {}

  async create(createPurchaseInvoiceDto: CreatePurchaseInvoiceDto) {
    return await this.prisma.$transaction(
      async (prisma: Prisma.TransactionClient) => {
        let {idReceiptNote,lines,idStock, ...rest } = createPurchaseInvoiceDto;

         
        if(!idReceiptNote){
          const newReceiptNote = await this.helperReceiptNote.create(
            prisma,
            {
              idStock: idStock,
              typeReceipt:"achat",
              date: createPurchaseInvoiceDto.deliveryDate,
              receiptNoteLines: lines,
            },
          );
          idReceiptNote=newReceiptNote.id
        }
         return await prisma.purchaseInvoice.create({
      data: {
        ...rest,
        deliveryDate:new Date(rest.deliveryDate).toISOString(),
        PurchaseInvoiceLine: {
          createMany: { data: lines },
        },
        idReceiptNote,
      },
    });
        
      })

  }

  async findAll() {
    return await this.prisma.purchaseInvoice.findMany({
      include: {
        PurchaseInvoiceLine: { include: { Artical: true } },
        ReceiptNote: true,
      },
    });
  }

  async findOne(id: number) {
    return await this.prisma.purchaseInvoice.findUnique({
      where: { id },
      include: {
        PurchaseInvoiceLine: { include: { Artical: true } },
        ReceiptNote: true,
      },
    });
  }

  async update(id: number, updatepurchaseInvoiceDto: UpdatePurchaseInvoiceDto) {
    const { lines, ...rest } = updatepurchaseInvoiceDto;
    return await this.prisma.purchaseInvoice.update({
      where: { id },
      data: {
        ...rest,
        PurchaseInvoiceLine: {
          updateMany: lines.map((line) => ({
            where: {
              idArtical: line.idArtical,
              purchaseInvoiceId: id,
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
    return await this.prisma.purchaseInvoice.delete({
      where: { id },
      include: {
        PurchaseInvoiceLine: { include: { Artical: true } },
        ReceiptNote: true,
      },
    });
  }
}
