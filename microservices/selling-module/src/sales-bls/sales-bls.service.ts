import { Injectable } from '@nestjs/common';
import { CreateSalesBlDto } from './dto/create-sales-bl.dto';
import { UpdateSalesBlDto } from './dto/update-sales-bl.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class SalesBlsService {
  constructor(private readonly prisma : PrismaService) {}
  async create(createSalesBlDto: CreateSalesBlDto) {
    return await this.prisma.venteBL.create({data:createSalesBlDto})
  }

  async findAll() {
    return await this.prisma.venteBL.findMany();
  }

   async findOne(id: number) {
    return await this.prisma.venteBL.findUnique({where: {id}});
  }

  async update(id: number, updateSalesBlDto: UpdateSalesBlDto) {
    return await this.prisma.venteBL.update({where: {id}, data: updateSalesBlDto});
  }

  async remove(id: number) {
    return await this.prisma.venteBL.delete({where: {id}});
  }
}
