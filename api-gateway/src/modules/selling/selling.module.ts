import { Module } from '@nestjs/common';
import { SellingService } from './selling.service';
import { SellingController } from './selling.controller';
import { PurchaseOrderController } from './purchase-order.controller';
import { PurchaseOrderService } from './purchase-order.service';
import { SalesDeliveryNoteController } from './salesDeliveryNote.controller';
import { SalesDeliveryNoteService } from './salesDeliveryNote.service';
import { SalesInviocesController } from './sales-invioces.controller';
import { SalesInviocesService } from './sales-invioces.service';
import { SalesDeliveryInvoiceController } from './salesDeliveryInvoice.controller';
import { SalesDeliveryInvoiceService } from './salesDeliveryInvoice.service';

@Module({
  controllers: [SellingController, PurchaseOrderController, SalesDeliveryNoteController, SalesInviocesController, SalesDeliveryInvoiceController],
  providers: [SellingService, PurchaseOrderService, SalesDeliveryNoteService, SalesInviocesService, SalesDeliveryInvoiceService],
})
export class SellingModule {}
