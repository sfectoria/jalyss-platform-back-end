import { Injectable } from '@nestjs/common';
import { CreatePurchaseInvoiceDto } from './dto/create-purchase-invoice.dto';
import { UpdatePurchaseInvoiceDto } from './dto/update-purchase-invoice.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class PurchaseInvoiceService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPurchaseInvoiceDto: CreatePurchaseInvoiceDto) {
    const { lines, ...rest } = createPurchaseInvoiceDto;
    return await this.prisma.purchaseInvoice.create({
      data: {
        ...rest,
        PurchaseInvoiceLine: {
          createMany: { data: lines },
        },
      },
    });
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
