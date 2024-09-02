import { Inject, Injectable } from '@nestjs/common';
import { CreatePurchaseDeliveryInvoiceDto } from './dto/create-purchase.dto';
import { UpdatePurchaseDeliveryInvoiceDto } from './dto/update-purchase.dto';
import { ClientProxy } from '@nestjs/microservices';
import { Filters } from './entities/purchase.entity';

@Injectable()
export class PurchaseDeliveryInvoicesService {
  constructor(
    @Inject ('PURCHASE_MICROSERVICE') private readonly purchaseClient: ClientProxy
  ) {}
  create(createPurchaseDeliveryInvoiceDto: CreatePurchaseDeliveryInvoiceDto) {
    return this.purchaseClient.send(
      { cmd : 'create_purchaseDeliveryInvoice'},
       createPurchaseDeliveryInvoiceDto);
  }

  findAll(filters : Filters) {
    return this.purchaseClient.send(
      { cmd: 'all_purchaseDeliveryInvoices' }, 
      filters  
    );
  }

  findOne(id: number) {
    return this.purchaseClient.send(
      { cmd: 'getOne_purchaseDeliveryInvoice' },
      {id}
    )
  }

  update(id: number, updatePurchaseDeliveryInvoiceDto: UpdatePurchaseDeliveryInvoiceDto) {
    return this.purchaseClient.send(
      { cmd: 'update_purchaseDeliveryInvoice' },
      {id, updatePurchaseDeliveryInvoiceDto}
    )
  }

  remove(id: number) {
    return this.purchaseClient.send(
      { cmd: 'delete_purchaseDeliveryInvoice' },
      {id}
    )
  }
}
