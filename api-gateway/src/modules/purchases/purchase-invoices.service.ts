import { Inject, Injectable } from '@nestjs/common';
import { CreatePurchaseInvoiceDto } from './dto/create-purchase.dto';
import { UpdatePurchaseInvoiceDto } from './dto/update-purchase.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class PurchaseInvoicesService {
  constructor(
    @Inject ('PURCHASE_MICROSERVICE') private readonly purchaseClient: ClientProxy
  ) {}
  create(createPurchaseInvoiceDto: CreatePurchaseInvoiceDto) {
    return this.purchaseClient.send(
      {cmd : 'create_purchaseInvoice'},
      createPurchaseInvoiceDto
    )
  }

  findAll() {
    return this.purchaseClient.send(
      {cmd : 'all_purchaseInvoices'},
      {}
    )
  }

  findOne(id: number) {
    return this.purchaseClient.send(
      {cmd : 'getOne_purchaseInvoice'},
      {id}
    )
  }

  update(id: number, updatePurchaseInvoiceDto: UpdatePurchaseInvoiceDto) {
    return this.purchaseClient.send(
      {cmd : 'update_purchaseInvoice'},
      {id, updatePurchaseInvoiceDto}
    )
  }

  remove(id: number) {
    return this.purchaseClient.send(
      {cmd : 'delete_purchaseInvoice'},
      {id}
    )
  }
}
