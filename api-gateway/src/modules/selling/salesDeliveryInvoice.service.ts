import { Inject, Injectable } from '@nestjs/common';
import { CreateSalesDeliveryInvoiceDto } from './dto/create-selling.dto';
import { UpdateSalesDeliveryInvoiceDto } from './dto/update-selling.dto';
import { ClientProxy } from '@nestjs/microservices';
import { Filters } from './entities/selling.entity';

@Injectable()
export class SalesDeliveryInvoiceService {
  constructor(
    @Inject('SELLING_MICROSERVICE') private readonly sellingClient: ClientProxy
  ) {}
  create(createSalesDeliveryInvoiceDto: CreateSalesDeliveryInvoiceDto) {
    return this.sellingClient.send(
      { cmd: 'create_salesDeliveryInvoice' },
      createSalesDeliveryInvoiceDto
    )
  }

  findAll(filters: Filters) {
    return this.sellingClient.send(
      { cmd: 'all_salesDeliveryInvoices' },
      filters
    )
  }

  findOne(id: number) {
    return this.sellingClient.send(
      { cmd: 'getOne_salesDeliveryInvoice' },
      {id}
    )
  }

  update(id: number, updateSalesDeliveryInvoiceDto: UpdateSalesDeliveryInvoiceDto) {
    return this.sellingClient.send(
      { cmd: 'update_salesDeliveryInvoice' },
      {id, updateSalesDeliveryInvoiceDto}
    )
  }

  remove(id: number) {
    return this.sellingClient.send(
      { cmd: 'delete_salesDeliveryInvoice' },
      {id}
    )
  }
}
