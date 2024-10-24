import { Injectable } from '@nestjs/common';
import {
  CreateInventoryDto,
  InventoryLineDto,
} from './dto/create-inventory.dto';
import {
  UpdateInventoryDto,
  UpdateInventoryLineDto,
} from './dto/update-inventory.dto';
import { PrismaService } from 'nestjs-prisma';
import { InventoryFilters } from './entities/inventory.entity';
import { Prisma } from '@prisma/client';

@Injectable()
export class InventoryService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createInventoryDto: CreateInventoryDto) {
    let { inventoryLine, ...rest } = createInventoryDto;
    return await this.prisma.inventory.create({
      data: {
        ...rest,
        inventoryLine: {
          createMany: { data: inventoryLine },
        },
      },
    });
  }
  async createLine(createInventoryLineDto: InventoryLineDto) {
    return await this.prisma.inventoryLine.create({
      data: createInventoryLineDto,
    });
  }
  async findAll(filters?: InventoryFilters) {
    let { take, skip, stocksIds, createursIds } = filters;
    console.log('THIS', take, skip);
    take = !take ? 10 : +take;
    skip = !skip ? 0 : +skip;
    let where = {};
    if (stocksIds) {
      where['stockId'] = { in: stocksIds.map((e) => +e) };
    }

    if (createursIds) {
      where['createurId'] = { in: createursIds.map((e) => +e) };
    }

    const data = await this.prisma.inventory.findMany({
      orderBy: {
        date: 'desc',
      },
      where,
      include: { inventoryLine: true, createur: {include:{Employee:true}}, stock: true },
      take,
      skip,
    });
    const count = await this.prisma.inventory.count({ where });
    return { data, count };
  }
  async findOne(id: string, filters: InventoryFilters) {
    let { take, skip, articlesIds } = filters;
    console.log('THIS', take, skip);
    take = !take ? 10 : +take;
    skip = !skip ? 0 : +skip;
    let whereinvLine = {};
    let whereCount = {inventoryId:id};
    if (articlesIds) {
      whereinvLine['articleId'] = { in: articlesIds.map((e) => +e) };
      whereCount['articleId'] = { in: articlesIds.map((e) => +e) };

      
    }
    let data= await this.prisma.inventory.findUnique({
      where: { id },
      include: {
        inventoryLine: {
          where: whereinvLine,
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
          take,
          skip,
        },
        createur: true,
        stock: true,
      },
    });

    let count = await this.prisma.inventoryLine.count({where:whereCount})

    return {data,count}
  }

  async update(id: string, updateInventoryDto: UpdateInventoryDto) {
    return await this.prisma.$transaction(
      async (prisma: Prisma.TransactionClient) => {
    let { inventoryLine,status, ...rest } = updateInventoryDto;
    let lines = []
    if (status==='confirmed'){
      console.log('confirmed',updateInventoryDto,status,{...rest},inventoryLine);
      let stockInfo = await this.prisma.inventory.findUnique({where:{id}})
      let responseStockArticle = await this.prisma.stockArticle.findMany({where:{stockId:stockInfo.stockId}})
      let articleInventory = await this.prisma.inventoryLine.findMany({where:{inventoryId:id}})
      let updates = responseStockArticle.map((e)=>{
      let verifyArticle = articleInventory?.find(q => q.articleId === e.articleId)
      if (!verifyArticle){
        lines.push({
          articleId:e.articleId,
          quantity:0,
          reelQuantity:e.quantity
        })
      }
      })
    }
    return await prisma.inventory.update({
      where: { id },
      data: {
        status,
        ...rest,
        inventoryLine: {
          createMany: {data:lines}
        },
      },
    });})
  }
  async updateLine(id: number, updateInventoryLine: UpdateInventoryLineDto) {
    return await this.prisma.inventoryLine.update({
      where: { id },
      data: {
        quantity: updateInventoryLine.quantity,
      },
    });
  }
  async remove(id: string) {
    return await this.prisma.inventory.delete({ where: { id } });
  }
}
