import { Injectable } from '@nestjs/common';
import { CreatePurchaseDeliveryNoteDto } from './dto/create-purchase-delivery-note.dto';
import { UpdatePurchaseDeliveryNoteDto } from './dto/update-purchase-delivery-note.dto';

@Injectable()
export class PurchaseDeliveryNoteService {
  create(createPurchaseDeliveryNoteDto: CreatePurchaseDeliveryNoteDto) {
    return 'This action adds a new purchaseDeliveryNote';
  }

  findAll() {
    return `This action returns all purchaseDeliveryNote`;
  }

  findOne(id: number) {
    return `This action returns a #${id} purchaseDeliveryNote`;
  }

  update(id: number, updatePurchaseDeliveryNoteDto: UpdatePurchaseDeliveryNoteDto) {
    return `This action updates a #${id} purchaseDeliveryNote`;
  }

  remove(id: number) {
    return `This action removes a #${id} purchaseDeliveryNote`;
  }
}
