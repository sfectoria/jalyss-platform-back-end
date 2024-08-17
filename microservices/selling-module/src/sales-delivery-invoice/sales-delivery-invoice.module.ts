import { Module } from '@nestjs/common';
import { SalesDeliveryInvoiceService } from './sales-delivery-invoice.service';
import { SalesDeliveryInvoiceController } from './sales-delivery-invoice.controller';

@Module({
  controllers: [SalesDeliveryInvoiceController],
  providers: [SalesDeliveryInvoiceService],
})
export class SalesDeliveryInvoiceModule{}
