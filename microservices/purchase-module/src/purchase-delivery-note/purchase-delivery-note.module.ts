import { Module } from '@nestjs/common';
import { PurchaseDeliveryNoteService } from './purchase-delivery-note.service';
import { PurchaseDeliveryNoteController } from './purchase-delivery-note.controller';
import { ReceiptNoteHelper } from 'src/helpers/receiptNoteHelper';

@Module({
  controllers: [PurchaseDeliveryNoteController],
  providers: [PurchaseDeliveryNoteService,ReceiptNoteHelper],
})
export class PurchaseDeliveryNoteModule {}
