import { Injectable } from '@nestjs/common';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';
import { PrismaService } from 'nestjs-prisma';
import { InventoryFilters } from './entities/inventory.entity';

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

  async findAll(filters: InventoryFilters) {
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
      where,
      include: { inventoryLine: true, createur: true, stock: true },
      take,
      skip,
    });
    const count = await this.prisma.inventory.count({ where });
    return { data, count };
  }

  async findOne(id: string) {
    return await this.prisma.inventory.findUnique({
      where: { id },
      include: { inventoryLine: true, createur: true, stock: true },
    });
  }

  async update(id: string, updateInventoryDto: UpdateInventoryDto) {
    let { inventoryLine, ...rest } = updateInventoryDto;
    return await this.prisma.inventory.update({
      where: { id },
      data: {
        ...rest,
        inventoryLine: {
          updateMany: inventoryLine?.map((line) => ({
            where: {
              articleId: line.articleId,
              inventoryId: id,
            },
            data: {
              quantity: line.quantity,
            },
          })),
        },
      },
    });
  }

  async remove(id: string) {
    return await this.prisma.inventory.delete({ where: { id } });
  }
}
