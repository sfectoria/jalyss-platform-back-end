import { Inject, Injectable } from '@nestjs/common';
import { CreateBonTransferDto } from './dto/create-stock.dto';
import { UpdateBonTransferDto } from './dto/update-stock.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class BonTransfersService {
  constructor(
    @Inject('STOCKS_MICROSERVICE') private readonly stocksClient: ClientProxy
  ) {}
  create(createBonTransferDto: CreateBonTransferDto) {
    return this.stocksClient.send(
      { cmd: 'create_bonTransfer' }, 
       createBonTransferDto
      );
  }

  findAll() {
    return this.stocksClient.send(
      { cmd: 'all_bonTransfers' }, 
      {}
    );
  }

  findOne(id: number) {
    return this.stocksClient.send(
      { cmd: 'one_bonTransfer' }, 
      {id}
    )
  }

  update(id: number, updateBonTransferDto: UpdateBonTransferDto) {
    return this.stocksClient.send(
      { cmd: 'update_bonTransfer' }, 
      {id, updateBonTransferDto}
    )
  }

  remove(id: number) {
    return this.stocksClient.send(
      { cmd: 'remove_bonTransfer' }, 
      {id}
    )
  }
}
