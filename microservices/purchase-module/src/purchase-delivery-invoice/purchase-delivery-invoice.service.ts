import { Injectable } from '@nestjs/common';
import { CreatePurchaseDeliveryInvoiceDto } from './dto/create-purchase-delivery-invoice.dto';
import { UpdatePurchaseDeliveryInvoiceDto } from './dto/update-purchase-delivery-invoice.dto';
import { PrismaService } from 'nestjs-prisma';
import { ReceiptNoteHelper } from 'src/helpers/receiptNoteHelper';

@Injectable()
export class PurchaseDeliveryInvoiceService {
  constructor(
    private readonly prisma: PrismaService,
    private helperReceiptNote:ReceiptNoteHelper
  ) {}

  async create(
    createPurchaseDeliveryInvoiceDto: CreatePurchaseDeliveryInvoiceDto,
  ) {
    let { lines,idReceiptNote,idStock, ...rest } = createPurchaseDeliveryInvoiceDto;
    idReceiptNote=4
    console.log('maybe type',typeof idReceiptNote);
    
    return await this.prisma.purchaseDeliveryInvoice.create({
      data: {
        ...rest,
        idReceiptNote,
        purchaseDeliveryInvoiceLine: {
          createMany: { data: lines },
        },
      },
    });
  }

  async findAll() {
    return await this.prisma.purchaseDeliveryInvoice.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.purchaseDeliveryInvoice.findUnique({
      where: { id },
      include: {
        purchaseDeliveryInvoiceLine: { include: { artical: true } },
        receiptNote: true,
      },
    });
  }

  async update(
    id: number,
    updatepurchaseDeliveryInvoiceDto: UpdatePurchaseDeliveryInvoiceDto,
  ) {
    const { lines, ...rest } = updatepurchaseDeliveryInvoiceDto;
    return await this.prisma.purchaseDeliveryInvoice.update({
      where: { id },
      data: {
        ...rest,
        purchaseDeliveryInvoiceLine: {
          updateMany: lines.map((line) => ({
            where: {
              idArtical: line.idArtical,
              purchaseDeliveryInvoiceId: id,
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
    return await this.prisma.purchaseDeliveryInvoice.delete({
      where: { id },
      include: {
        purchaseDeliveryInvoiceLine: { include: { artical: true } },
        receiptNote: true,
      },
    });
  }
}
