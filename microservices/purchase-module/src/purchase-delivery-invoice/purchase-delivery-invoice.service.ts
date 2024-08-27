import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePurchaseDeliveryInvoiceDto } from './dto/create-purchase-delivery-invoice.dto';
import { UpdatePurchaseDeliveryInvoiceDto } from './dto/update-purchase-delivery-invoice.dto';
import { PrismaService } from 'nestjs-prisma';
import { ReceiptNoteHelper } from 'src/helpers/receiptNoteHelper';
import { Prisma } from '@prisma/client';

@Injectable()
export class PurchaseDeliveryInvoiceService {
  constructor(
    private readonly prisma: PrismaService,
    private helperReceiptNote:ReceiptNoteHelper
  ) {}

  async create(
    createPurchaseDeliveryInvoiceDto: CreatePurchaseDeliveryInvoiceDto,
  ) {
    return await this.prisma.$transaction(
      async (prisma: Prisma.TransactionClient) => {
        let {idReceiptNote,lines,idStock, ...rest } = createPurchaseDeliveryInvoiceDto;
        if(!idReceiptNote){
          const newReceiptNote = await this.helperReceiptNote.create(
            prisma,
            {
              idStock: idStock,
              typeReceipt:"achat",
              date: createPurchaseDeliveryInvoiceDto.deliveryDate,
              receiptNoteLines: lines,
              totalAmount:createPurchaseDeliveryInvoiceDto?.totalAmount
            },
          );
          idReceiptNote=newReceiptNote.id
        }
         return await prisma.purchaseDeliveryInvoice.create({
      data: {
        ...rest,
        deliveryDate:new Date(rest.deliveryDate).toISOString(),
        purchaseDeliveryInvoiceLine: {
          createMany: { data: lines },
        },
        idReceiptNote
      },
    });
        
      })
  }

  async findAll() {
    return await this.prisma.purchaseDeliveryInvoice.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.purchaseDeliveryInvoice.findUnique({
      where: { id },
      include: {
        purchaseDeliveryInvoiceLine: { include: { article: true } },
        receiptNote: true,
      },
    });
  }

  async update(
    id: number,
    updatepurchaseDeliveryInvoiceDto: UpdatePurchaseDeliveryInvoiceDto
  ) {
    const { lines, ...rest } = updatepurchaseDeliveryInvoiceDto;
    console.log(lines,"those are lines")
    return await this.prisma.purchaseDeliveryInvoice.update({
      where: { id },
      data: {
        ...rest,
        purchaseDeliveryInvoiceLine: {
          updateMany: lines?.map((line) => ({
            where: {
              idArticle: line.idArticle,
              idDeliveryInvoice: id,
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
    const purchaseDeliveryInvoice = await this.prisma.purchaseDeliveryInvoice.findUnique({ where: { id } });
    if (!purchaseDeliveryInvoice) {
      throw new NotFoundException(`purchase delivery invoice with ID ${id} not found`);
 }
    console.log(purchaseDeliveryInvoice,"purchase delivery invoice")
    await this.prisma.purchaseDeliveryInvoiceLine.deleteMany({
      where: { idDeliveryInvoice: id },
    });
    return await this.prisma.purchaseDeliveryInvoice.delete({
      where: { id },
    });
  }
}
