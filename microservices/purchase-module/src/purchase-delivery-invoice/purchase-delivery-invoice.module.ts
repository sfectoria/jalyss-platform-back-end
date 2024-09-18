import { Module } from '@nestjs/common';
import { PurchaseDeliveryInvoiceService } from './purchase-delivery-invoice.service';
import { PurchaseDeliveryInvoiceController } from './purchase-delivery-invoice.controller';
import { ReceiptNoteHelper } from 'src/helpers/receiptNoteHelper';

@Module({
  controllers: [PurchaseDeliveryInvoiceController],
  providers: [PurchaseDeliveryInvoiceService,ReceiptNoteHelper],
})
export class PurchaseDeliveryInvoiceModule {}
