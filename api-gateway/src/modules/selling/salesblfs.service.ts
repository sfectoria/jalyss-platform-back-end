import { Inject, Injectable } from '@nestjs/common';
import { CreateSalesblfDto } from './dto/create-selling.dto';
import { UpdateSalesblfDto } from './dto/update-selling.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class SalesblfsService {
  constructor(
    @Inject('SELLING_MICROSERVICE') private readonly sellingClient: ClientProxy
  ) {}
  create(createSalesblfDto: CreateSalesblfDto) {
    return this.sellingClient.send(
      { cmd: 'create_salesblf' },
      createSalesblfDto
    )
  }

  findAll() {
    return this.sellingClient.send(
      { cmd: 'all_salesblfs' },
      {}
    )
  }

  findOne(id: number) {
    return this.sellingClient.send(
      { cmd: 'getOne_salesblf' },
      {id}
    )
  }

  update(id: number, updateSalesblfDto: UpdateSalesblfDto) {
    return this.sellingClient.send(
      { cmd: 'update_salesblf' },
      {id, updateSalesblfDto}
    )
  }

  remove(id: number) {
    return this.sellingClient.send(
      { cmd: 'delete_salesblf' },
      {id}
    )
  }
}
