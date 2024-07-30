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
      {cmd : 'create_selling'},
       createSellingDto);
  }

  findAll() {
    return this.sellingClient.send(
      {cmd : 'all_selling'},
      {}
    );
  }

  findOne(id: number) {
    return this.sellingClient.send(
      {cmd : 'getOne_selling'},
      {id}
    )
  }

  update(id: number, updateSellingDto: UpdateSellingDto) {
    return this.sellingClient.send(
      {cmd : 'update_selling'},
      {id, updateSellingDto}
    )
  }

  remove(id: number) {
    return this.sellingClient.send(
      {cmd : 'delete_selling'},
      {id}
    )
  }
}
