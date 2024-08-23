import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePurchaseDeliveryInvoiceDto } from './dto/create-purchase-delivery-invoice.dto';
import { UpdatePurchaseDeliveryInvoiceDto } from './dto/update-purchase-delivery-invoice.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class PurchaseDeliveryInvoiceService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    createPurchaseDeliveryInvoiceDto: CreatePurchaseDeliveryInvoiceDto,
  ) {
    const { lines, ...rest } = createPurchaseDeliveryInvoiceDto;
    return await this.prisma.purchaseDeliveryInvoice.create({
      data: {
        ...rest,
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
