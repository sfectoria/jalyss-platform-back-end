import { Module } from '@nestjs/common';
import { SellingService } from './selling.service';
import { SellingController } from './selling.controller';
import { PurchaseOrderController } from './purchase-order.controller';
import { PurchaseOrderService } from './purchase-order.service';
import { SalesDeliveryNoteController } from './salesDeliveryNote.controller';
import { SalesDeliveryNoteService } from './salesDeliveryNote.service';
import { SalesInvoicesController } from './sales-invoices.controller';
import { SalesInvoicesService } from './sales-invoices.service';
import { SalesDeliveryInvoiceController } from './salesDeliveryInvoice.controller';
import { SalesDeliveryInvoiceService } from './salesDeliveryInvoice.service';

@Module({
  controllers: [SellingController, PurchaseOrderController, SalesDeliveryNoteController, SalesInvoicesController, SalesDeliveryInvoiceController],
  providers: [SellingService, PurchaseOrderService, SalesDeliveryNoteService, SalesInvoicesService, SalesDeliveryInvoiceService],
})
export class SellingModule {}
