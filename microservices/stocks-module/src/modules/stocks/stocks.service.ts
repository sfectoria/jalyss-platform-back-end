import { Injectable } from '@nestjs/common';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class StocksService {
  constructor(private readonly prisma : PrismaService) {}
  async create(createStockDto: CreateStockDto) {
    return await this.prisma.stock.create({
        data:createStockDto
      });
  }


  async findAll() {
    return await this.prisma.stock.findMany(); 
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
