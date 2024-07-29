import { Injectable } from '@nestjs/common';
import { CreateSalesInvoiceDto } from './dto/create-sales-invoice.dto';
import { UpdateSalesInvoiceDto } from './dto/update-sales-invoice.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class SalesInvoicesService {
  constructor(private readonly prisma : PrismaService) {}
  async create(createSalesInvoiceDto: CreateSalesInvoiceDto) {
    return await this.prisma.venteFacture.create({data : createSalesInvoiceDto});
  }

  async findAll() {
    return await this.prisma.venteFacture.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.venteFacture.findUnique({where : {id}});
  }

  async update(id: number, updateSalesInvoiceDto: UpdateSalesInvoiceDto) {
    return await this.prisma.venteFacture.update({where : {id}, data : updateSalesInvoiceDto});
  }

  async remove(id: number) {
    return await this.prisma.venteFacture.delete({where : {id}});
  }
}
