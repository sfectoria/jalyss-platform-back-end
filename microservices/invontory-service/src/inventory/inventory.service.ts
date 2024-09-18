import { Injectable } from '@nestjs/common';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';
import { PrismaService } from 'nestjs-prisma';
import { InventoryFilters } from './entities/inventory.entity';

@Injectable()
export class InventoryService {
  constructor(private readonly prisma:PrismaService){}
  async create(createInventoryDto: CreateInventoryDto) {
    let {inventoryLine,...rest}=createInventoryDto
    return await this.prisma.inventory.create({
      data:{
        ...rest,
        inventoryLine:{
          createMany:{data:inventoryLine}
        }
      }
    })
  }

  async findAll(filters:InventoryFilters) {
    let { take, skip } = filters;
    console.log('THIS',take,skip);
    take = !take ? 10 : +take;
    skip = !skip ? 0 : +skip;
    let where = {};
    return await this.prisma.inventory.findMany({where,include:{inventoryLine:true},take,skip});
  }

  async findOne(id: string) {
    return await this.prisma.inventory.findUnique({where:{id}})
  }

  async update(id: string, updateInventoryDto: UpdateInventoryDto) {
    let {inventoryLine,...rest}=updateInventoryDto
    return await this.prisma.inventory.update({
      where:{id},
      data:{...rest,
        inventoryLine:{
          updateMany:inventoryLine?.map((line)=>({where :{
            articleId:line.articleId,
            inventoryId:id
          },
        data:{
          quantity:line.quantity
        }}))
        }
      }
    });
  }

  async remove(id: string) {
    return await this.prisma.inventory.delete({where:{id}})
  }
}
