import { Inject, Injectable } from '@nestjs/common';
import { UpdatePurchaseDeliveryNoteDto } from './dto/update-purchase.dto';
import { CreatePurchaseDeliveryNoteDto } from './dto/create-purchase.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class PurchaseDeliveryNoteService {
  constructor(
    @Inject('PURCHASE_MICROSERVICE') private readonly purchaseClient: ClientProxy
  ) {}
  create(createPurchaseDeliveryNoteDto: CreatePurchaseDeliveryNoteDto) {
    return this.purchaseClient.send(
      { cmd: 'create_purchaseDeliveryNote' },
      createPurchaseDeliveryNoteDto
    )
  }

  findAll() {
    return this.purchaseClient.send(
      { cmd: 'all_purchaseDeliveryNotes' }, 
      {})
  }

  findOne(id: number) {
    return this.purchaseClient.send(
      { cmd: 'getOne_purchaseDeliveryNote' },
      {id}
    )
  }

  update(id: number, updatePurchaseDeliveryNoteDto: UpdatePurchaseDeliveryNoteDto) {
    return this.purchaseClient.send(
      { cmd: 'update_purchaseDeliveryNote' },
      {id, updatePurchaseDeliveryNoteDto}
    )
  }

  remove(id: number) {
    return this.purchaseClient.send(
      { cmd: 'delete_purchaseDeliveryNote' },
      {id}
    )
  }
}
