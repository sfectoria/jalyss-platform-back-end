import { Injectable } from '@nestjs/common';
import { CreatePurchaseOrderDto } from './dto/create-purchase-order.dto';
import { UpdatePurchaseOrderDto } from './dto/update-purchase-order.dto';
import { PrismaService } from 'nestjs-prisma';
import { Filters } from './entities/purchase-order.entity';

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

  async findAll(filters: Filters) {
    let { take, skip, clientIds } = filters;
    console.log('THIS', take, skip);

    take = !take ? 10 : +take;
    skip = !skip ? 0 : +skip;

    let where = {};

    if (Array.isArray(clientIds) && clientIds.length > 0) {
      where['idClient'] = {
        in: clientIds.map((elem) => +elem), // Convertir chaque élément en nombre
      };
    }

    return await this.prisma.purchaseOrder.findMany({
      where,
      take,
      skip,
      include: {
        client: true,
        purchaseOrderLine: true,
      },
    });
  }

  async findOne(id: number) {
    return await this.prisma.purchaseOrder.findUnique({
      where: { id },
      include: { purchaseOrderLine: true },
    });
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
