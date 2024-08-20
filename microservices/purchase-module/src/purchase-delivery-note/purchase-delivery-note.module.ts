import { Module } from '@nestjs/common';
import { PurchaseDeliveryNoteService } from './purchase-delivery-note.service';
import { PurchaseDeliveryNoteController } from './purchase-delivery-note.controller';

@Module({
  controllers: [PurchaseDeliveryNoteController],
  providers: [PurchaseDeliveryNoteService],
})
export class PurchaseDeliveryNoteModule {}
