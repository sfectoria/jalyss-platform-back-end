import { Inject, Injectable } from '@nestjs/common';
import { CreateBonReceptionDto } from './dto/create-stock.dto';
import { UpdateBonReceptionDto } from './dto/update-stock.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class BonReceptionsService {
  constructor(@Inject ('STOCKS_MICROSERVICE') private readonly stocksClient: ClientProxy
) {}
  create(createBonReceptionDto: CreateBonReceptionDto) {
    return this.stocksClient.send(
      { cmd: 'create_bonReception' }, 
      createBonReceptionDto
    );
  }

  findAll() {
    return this.stocksClient.send(
      { cmd: 'all_bonReceptions' },
      {}
    )
  }

  findOne(id: number) {
    return this.stocksClient.send(
      { cmd: 'getOne_bonReception' },
      {id}
    )
  }

  update(id: number, updateBonReceptionDto: UpdateBonReceptionDto) {
    return this.stocksClient.send(
      { cmd: 'update_bonReception' },
      {id, updateBonReceptionDto}
    )
  }

  remove(id: number) {
    return this.stocksClient.send(
      { cmd: 'delete_bonReception' },
      {id}
    )
  }
}
