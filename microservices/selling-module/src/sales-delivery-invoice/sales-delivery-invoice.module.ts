import { Module } from '@nestjs/common';
import { SalesDeliveryInvoiceService } from './sales-delivery-invoice.service';
import { SalesDeliveryInvoiceController } from './sales-delivery-invoice.controller';
import { ExitNote } from 'src/helpers/exitNote';

@Module({
  controllers: [SalesDeliveryInvoiceController],
  providers: [SalesDeliveryInvoiceService, ExitNote],
})
export class SalesDeliveryInvoiceModule{}
