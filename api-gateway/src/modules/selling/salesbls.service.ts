import { Inject, Injectable } from '@nestjs/common';
import { CreateSalesblDto } from './dto/create-selling.dto';
import { UpdateSalesblDto } from './dto/update-selling.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class SalesblsService {
  constructor(
    @Inject ('SELLING_MICROSERVICE') private readonly sellingClient: ClientProxy
  ) {}
  create(createSalesblDto: CreateSalesblDto) {
    return this.sellingClient.send(
      { cmd: 'create_salesbl' },
      createSalesblDto
    )
  }

  findAll() {
    return this.sellingClient.send(
      { cmd: 'all_salesbls' },
      {}
    );
  }

  findOne(id: number) {
    return this.sellingClient.send(
      { cmd: 'getOne_salesbl' },
      {id}
    )
  }

  update(id: number, updateSalesblDto: UpdateSalesblDto) {
    return this.sellingClient.send(
      { cmd: 'update_salesbl' },
      {id, updateSalesblDto}
    )
  }

  remove(id: number) {
    return this.sellingClient.send(
      { cmd: 'delete_salesbl' },
      {id}
    )
  }
}
