import { Injectable } from '@nestjs/common';
import { CreateBonSortyDto } from './dto/create-bon-sorty.dto';
import { UpdateBonSortyDto } from './dto/update-bon-sorty.dto';

@Injectable()
export class BonSortiesService {
  create(createBonSortyDto: CreateBonSortyDto) {
    return 'This action adds a new bonSorty';
  }

  findAll() {
    return `This action returns all bonSorties`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bonSorty`;
  }

  update(id: number, updateBonSortyDto: UpdateBonSortyDto) {
    return `This action updates a #${id} bonSorty`;
  }

  remove(id: number) {
    return `This action removes a #${id} bonSorty`;
  }
}
