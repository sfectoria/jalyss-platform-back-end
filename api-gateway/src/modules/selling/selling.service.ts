import { Inject, Injectable } from '@nestjs/common';
import { CreateSellingDto } from './dto/create-selling.dto';
import { UpdateSellingDto } from './dto/update-selling.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class SellingService {
  constructor(
    @Inject('SELLING_MICROSERVICE') private readonly sellingClient: ClientProxy
  ) {}
  create(createSellingDto: CreateSellingDto) {
    return this.sellingClient.send(
      {cmd : 'create_salesChannel'},
       createSellingDto);
  }

  findAll() {
    return this.sellingClient.send(
      {cmd : 'all_salesChannels'},
      {}
    );
  }

  findOne(id: number) {
    return this.sellingClient.send(
      {cmd : 'getOne_salesChannel'},
      {id}
    )
  }

  update(id: number, updateSellingDto: UpdateSellingDto) {
    return this.sellingClient.send(
      {cmd : 'update_salesChannel'},
      {id, updateSellingDto}
    )
  }

  remove(id: number) {
    return this.sellingClient.send(
      {cmd : 'delete_salesChannel'},
      {id}
    )
  }
}
