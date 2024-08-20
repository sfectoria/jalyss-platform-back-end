import { Inject, Injectable } from '@nestjs/common';
import { CreateSalesInvoiceDto } from './dto/create-selling.dto';
import { UpdateSalesInvioceDto } from './dto/update-selling.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class SalesInvoicesService {
  constructor(
    @Inject ('SELLING_MICROSERVICE') private readonly sellingClient: ClientProxy
  ) {}
  async create(createSalesInvoiceDto: CreateSalesInvoiceDto) {
    return await this.sellingClient.send(
      {cmd : 'create_salesInvioce'},
      createSalesInvoiceDto
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
      {cmd : 'getOne_salesInvoice'},
      {id}
    )
  }

  update(id: number, updateSalesInvioceDto: UpdateSalesInvioceDto) {
    return this.sellingClient.send(
      {cmd : 'update_salesInvoice'},
      {id, updateSalesInvioceDto}
    )
  }

  remove(id: number) {
    return this.sellingClient.send(
      {cmd : 'delete_salesInvoice'},
      {id}
    )
  }
}
