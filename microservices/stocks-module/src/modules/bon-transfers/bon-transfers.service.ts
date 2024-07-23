import { Injectable } from '@nestjs/common';
import { CreateBonTransferDto } from './dto/create-bon-transfer.dto';
import { UpdateBonTransferDto } from './dto/update-bon-transfer.dto';

@Injectable()
export class BonTransfersService {
  create(createBonTransferDto: CreateBonTransferDto) {
    return 'This action adds a new bonTransfer';
  }

  findAll() {
    return `This action returns all bonTransfers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bonTransfer`;
  }

  update(id: number, updateBonTransferDto: UpdateBonTransferDto) {
    return `This action updates a #${id} bonTransfer`;
  }

  remove(id: number) {
    return `This action removes a #${id} bonTransfer`;
  }
}
