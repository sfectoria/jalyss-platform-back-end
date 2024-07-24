import { Injectable } from '@nestjs/common';
import { CreateSellingDto } from './dto/create-selling.dto';
import { UpdateSellingDto } from './dto/update-selling.dto';

@Injectable()
export class SellingService {
  create(createSellingDto: CreateSellingDto) {
    return 'This action adds a new selling';
  }

  findAll() {
    return `This action returns all selling`;
  }

  findOne(id: number) {
    return `This action returns a #${id} selling`;
  }

  update(id: number, updateSellingDto: UpdateSellingDto) {
    return `This action updates a #${id} selling`;
  }

  remove(id: number) {
    return `This action removes a #${id} selling`;
  }
}
