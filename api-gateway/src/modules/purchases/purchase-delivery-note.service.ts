import { Injectable } from '@nestjs/common';
import { UpdatePurchaseDeliveryNoteDto } from './dto/update-purchase.dto';
import { CreatePurchaseDeliveryNoteDto } from './dto/create-purchase.dto';

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
