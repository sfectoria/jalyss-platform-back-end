import { Injectable } from '@nestjs/common';
import { CreatePurchaseOrderDto } from './dto/create-purchase-order.dto';
import { UpdatePurchaseOrderDto } from './dto/update-purchase-order.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class PurchaseOrderService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createPurchaseOrderDto: CreatePurchaseOrderDto) {
    const { purchaseOrderLine, ...rest } = createPurchaseOrderDto;
    return await this.prisma.purchaseOrder.create({
      data: {
        ...rest,
        purchaseOrderLine: { createMany: { data: purchaseOrderLine } },
      },
    });
  }

  async findAll() {
    return await this.prisma.purchaseOrder.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.purchaseOrder.findUnique({ where: { id } });
  }

  async update(id: number, updatePurchaseOrderDto: UpdatePurchaseOrderDto) {
    const { purchaseOrderLine, ...rest } = updatePurchaseOrderDto;
    return await this.prisma.purchaseOrder.update({
      where: { id },
      data: {
        ...rest,
        purchaseOrderLine: {
          updateMany: purchaseOrderLine.map((line) => ({
            where: {
              idArticle: line.idArticle,
              idPurchaseOrder: id,
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
    return await this.prisma.purchaseOrder.delete({ where: { id } });
  }
}
