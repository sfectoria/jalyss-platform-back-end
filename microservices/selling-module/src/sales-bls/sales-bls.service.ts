import { Injectable } from '@nestjs/common';
import { CreateSalesBlDto } from './dto/create-sales-bl.dto';
import { UpdateSalesBlDto } from './dto/update-sales-bl.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class SalesBlsService {
  constructor(private readonly prisma : PrismaService) {}
  create(createSalesBlDto: CreateSalesBlDto) {
    return 'This action adds a new salesBl';
  }

  findAll() {
    return `This action returns all salesBls`;
  }

  findOne(id: number) {
    return `This action returns a #${id} salesBl`;
  }

  update(id: number, updateSalesBlDto: UpdateSalesBlDto) {
    return `This action updates a #${id} salesBl`;
  }

  remove(id: number) {
    return `This action removes a #${id} salesBl`;
  }
}
