import { Injectable } from '@nestjs/common';
import { CreateSalesBlfDto } from './dto/create-sales-blf.dto';
import { UpdateSalesBlfDto } from './dto/update-sales-blf.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class SalesBlfsService {
  constructor(private readonly prisma : PrismaService) {}
  async create(createSalesBlfDto: CreateSalesBlfDto) {
    return await this.prisma.venteBLFacture.create({data : createSalesBlfDto})
  }

  async findAll() {
    return this.prisma.venteBLFacture.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.venteBLFacture.findUnique({ where: { id } });
  }

  async update(id: number, updateSalesBlfDto: UpdateSalesBlfDto) {
    return await this.prisma.venteBLFacture.update({ where: { id }, data: updateSalesBlfDto });
  }

  async remove(id: number) {
    return await this.prisma.venteBLFacture.delete({ where: { id } });
  }
}
