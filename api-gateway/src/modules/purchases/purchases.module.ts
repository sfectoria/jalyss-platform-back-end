import { Module } from '@nestjs/common';
import { PurchaseInvoicesController } from './purchase-invoices.controller';
import { PurchaseDeliveryNoteController } from './purchase-delivery-note.controller';
import { PurchaseDeliveryInvoicesController } from './purchase-delivery-invoices.controller';
import { PurchaseDeliveryInvoicesService } from './purchase-delivery-invoices.service';
import { PurchaseInvoicesService } from './purchase-invoices.service';
import { PurchaseDeliveryNoteService } from './purchase-delivery-note.service';

@Module({
  controllers: [PurchaseInvoicesController, PurchaseDeliveryNoteController, PurchaseDeliveryInvoicesController],
  providers: [PurchaseInvoicesService, PurchaseDeliveryNoteService, PurchaseDeliveryInvoicesService],
})
export class PurchasesModule {}
