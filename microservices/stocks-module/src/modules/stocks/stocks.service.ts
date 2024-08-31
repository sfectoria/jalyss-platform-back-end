import { Injectable } from '@nestjs/common';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
import { PrismaService } from 'nestjs-prisma';
import { FiltersStock } from './entities/stock.entity';

@Injectable()
export class StocksService {
  constructor(private readonly prisma : PrismaService) {}
  async create(createStockDto: CreateStockDto) {
    return await this.prisma.stock.create({
        data:createStockDto
      });
  }


  async findAll(filters?: FiltersStock) {
    let { take, skip, text } = filters;
    take = !take ? 10 : +take;
    skip = !skip ? 0 : +skip;
    let where = {};
    return await this.prisma.stock.findMany({where,take,skip}); 
  }

  async findOne(id: number) {
    return await this.prisma.stock.findUnique({ where: { id } }); 
  }

  async update(id: number, updateStockDto: UpdateStockDto) {
    return await this.prisma.stock.update({ 
      where: { id },
      data: updateStockDto 
    }); 
  }

  async remove(id: number) {
    return await this.prisma.stock.delete({ where: { id } });
  }
}
