import { Inject, Injectable } from '@nestjs/common';
import { CreateSalesInvioceDto } from './dto/create-selling.dto';
import { UpdateSalesInvioceDto } from './dto/update-selling.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class SalesInviocesService {
  constructor(
    @Inject ('SELLING_MICROSERVICE') private readonly sellingClient: ClientProxy
  ) {}
  create(createSalesInvioceDto: CreateSalesInvioceDto) {
    return this.sellingClient.send(
      {cmd : 'create_salesInvioce'},
      createSalesInvioceDto
    )
  }

  findAll() { 
    return this.sellingClient.send(
      {cmd : 'all_salesInvioces'}, 
      {}
    )
  }

  findOne(id: number) {
    return this.sellingClient.send(
      {cmd : 'getOne_salesInvioce'},
      {id}
    )
  }

  update(id: number, updateSalesInvioceDto: UpdateSalesInvioceDto) {
    return this.sellingClient.send(
      {cmd : 'update_salesInvioce'},
      {id, updateSalesInvioceDto}
    )
  }

  remove(id: number) {
    return this.sellingClient.send(
      {cmd : 'delete_salesInvioce'},
      {id}
    )
  }
}
