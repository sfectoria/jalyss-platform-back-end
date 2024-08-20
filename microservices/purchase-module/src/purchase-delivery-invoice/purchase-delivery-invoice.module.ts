import { Module } from '@nestjs/common';
import { PurchaseDeliveryInvoiceService } from './purchase-delivery-invoice.service';
import { PurchaseDeliveryInvoiceController } from './purchase-delivery-invoice.controller';

@Module({
  controllers: [PurchaseDeliveryInvoiceController],
  providers: [PurchaseDeliveryInvoiceService],
})
export class PurchaseDeliveryInvoiceModule {}
