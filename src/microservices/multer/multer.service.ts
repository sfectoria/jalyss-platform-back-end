import { Injectable } from '@nestjs/common';
import { CreateMulterDto } from './dto/create-multer.dto';
import { UpdateMulterDto } from './dto/update-multer.dto';

@Injectable()
export class MulterService {
  create(createMulterDto: CreateMulterDto) {
    return 'This action adds a new multer';
  }

  findAll() {
    return `This action returns all multer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} multer`;
  }

  update(id: number, updateMulterDto: UpdateMulterDto) {
    return `This action updates a #${id} multer`;
  }

  remove(id: number) {
    return `This action removes a #${id} multer`;
  }
}
