import { Injectable } from '@nestjs/common';
import { CreateSalesBlfDto } from './dto/create-sales-blf.dto';
import { UpdateSalesBlfDto } from './dto/update-sales-blf.dto';

@Injectable()
export class SalesBlfsService {
  create(createSalesBlfDto: CreateSalesBlfDto) {
    return 'This action adds a new salesBlf';
  }

  findAll() {
    return `This action returns all salesBlfs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} salesBlf`;
  }

  update(id: number, updateSalesBlfDto: UpdateSalesBlfDto) {
    return `This action updates a #${id} salesBlf`;
  }

  remove(id: number) {
    return `This action removes a #${id} salesBlf`;
  }
}
