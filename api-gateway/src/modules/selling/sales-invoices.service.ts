import { Inject, Injectable } from '@nestjs/common';
import { CreateSalesInvoiceDto } from './dto/create-selling.dto';
import { UpdateSalesInvioceDto } from './dto/update-selling.dto';
import { ClientProxy } from '@nestjs/microservices';
import { Filters } from './entities/selling.entity';

@Injectable()
export class SalesInvoicesService {
  constructor(
    @Inject ('SELLING_MICROSERVICE') private readonly sellingClient: ClientProxy
  ) {}
  async create(createSalesInvoiceDto: CreateSalesInvoiceDto) {
    return this.sellingClient.send(
      {cmd : 'create_salesInvioce'},
      createSalesInvoiceDto
    )
  }

  findAll(filters: Filters) { 
    return this.sellingClient.send(
      {cmd : 'all_salesInvioces'}, 
      filters
    )
  }

  findOne(id: number) {
    return this.sellingClient.send(
      {cmd : 'getOne_salesInvoice'},
      {id}
    )
  }

  update(id: number, updateSalesInvoiceDto: UpdateSalesInvioceDto) {
    console.log("gg",updateSalesInvoiceDto);
    return this.sellingClient.send(
      {cmd : 'update_salesInvoice'},
      {id, updateSalesInvoiceDto}
    )
  }

  remove(id: number) {
    return this.sellingClient.send(
      {cmd : 'delete_salesInvoice'},
      {id}
    )
  }
}
