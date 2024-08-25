import { Module } from '@nestjs/common';
import { PurchaseInvoiceService } from './purchase-invoice.service';
import { PurchaseInvoiceController } from './purchase-invoice.controller';
import { ReceiptNoteHelper } from 'src/helpers/receiptNoteHelper';

@Module({
  controllers: [PurchaseInvoiceController],
  providers: [PurchaseInvoiceService,ReceiptNoteHelper],
})
export class PurchaseInvoiceModule {}
