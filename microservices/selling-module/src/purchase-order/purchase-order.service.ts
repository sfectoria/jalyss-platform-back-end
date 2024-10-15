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
    let { take, skip, clientIds, salesChannelsIds } = filters;
    console.log('THIS', take, skip);

    take = !take ? 10 : +take;
    skip = !skip ? 0 : +skip;

    let where = {};

    if (Array.isArray(clientIds) && clientIds.length > 0) {
      where['idClient'] = {
        in: clientIds.map((elem) => +elem), 
      };
    }
    if (salesChannelsIds) {
      where['salesChannelsId'] = {
        in: salesChannelsIds.map((elem) => +elem),
      };
    }

    let data = await this.prisma.purchaseOrder.findMany({
      orderBy: {
        date: 'desc',
      },
      where,
      take,
      skip,
      include: {
        client: true,
        purchaseOrderLine: {
          include: {
            article: {
              include: {
                articleByAuthor: { include: { author: true } },
                articleByPublishingHouse: {
                  include: { publishingHouse: true },
                },
                priceByChannel: { include: { salesChannel: true } },
                cover: true,
                stockArticle: true,
              },
            },
          },
        },
      },
    });
    let count = await this.prisma.purchaseOrder.count({ where });
    return { data, count };
  }

  async findOne(id: number) {
    return await this.prisma.purchaseOrder.findUnique({
      where: { id },
      include: {
        purchaseOrderLine: {
          include: {
            article: {
              include: {
                articleByAuthor: { include: { author: true } },
                articleByPublishingHouse: {
                  include: { publishingHouse: true },
                },
                priceByChannel: { include: { salesChannel: true } },
                cover: true,
                stockArticle: true,
              },
            },
          },
        },
      },
    });
  }

  async update(id: number, updatePurchaseOrderDto: UpdatePurchaseOrderDto) {
    console.log('Received DTO:', updatePurchaseOrderDto);

    if (!updatePurchaseOrderDto) {
      throw new Error('No data provided for update');
    }
    const { purchaseOrderLine, ...rest } = updatePurchaseOrderDto;
    console.log('rest', rest);
    return await this.prisma.purchaseOrder.update({
      where: { id },
      data: {
        ...rest,
        purchaseOrderLine: {
          updateMany: purchaseOrderLine?.map((line) => ({
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
