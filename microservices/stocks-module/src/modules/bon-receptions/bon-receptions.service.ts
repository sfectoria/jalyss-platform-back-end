import { Injectable } from '@nestjs/common';
import { CreateBonReceptionDto } from './dto/create-bon-reception.dto';
import { UpdateBonReceptionDto } from './dto/update-bon-reception.dto';

@Injectable()
export class BonReceptionsService {
  create(createBonReceptionDto: CreateBonReceptionDto) {
    return 'This action adds a new bonReception';
  }

  findAll() {
    return `This action returns all bonReceptions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bonReception`;
  }

  update(id: number, updateBonReceptionDto: UpdateBonReceptionDto) {
    return `This action updates a #${id} bonReception`;
  }

  remove(id: number) {
    return `This action removes a #${id} bonReception`;
  }
}
