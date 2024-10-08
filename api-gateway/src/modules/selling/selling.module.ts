import { Module } from '@nestjs/common';
import { SellingService } from './salesChannels.service';
import { SellingController } from './salesChannels.controller';
import { PurchaseOrderController } from './purchase-order.controller';
import { PurchaseOrderService } from './purchase-order.service';
import { SalesDeliveryNoteController } from './salesDeliveryNote.controller';
import { SalesDeliveryNoteService } from './salesDeliveryNote.service';
import { SalesDeliveryInvoiceController } from './salesDeliveryInvoice.controller';
import { SalesDeliveryInvoiceService } from './salesDeliveryInvoice.service';
import { SalesInvoicesService } from './sales-invoices.service';
import { SalesInvoicesController } from './sales-invoices.controller';
import { PriceByChannelService } from './priceByChannel.service';
import { PriceByChannelController } from './priceByChannel.controller';
import { SalesReceiptController } from './salesReceipt.controller';
import { SalesReceiptService } from './salesReceipt.service';

@Module({
  controllers: [SellingController, PurchaseOrderController, SalesDeliveryNoteController, SalesInvoicesController, SalesDeliveryInvoiceController,PriceByChannelController,SalesReceiptController],
  providers: [SellingService, PurchaseOrderService, SalesDeliveryNoteService, SalesInvoicesService, SalesDeliveryInvoiceService,PriceByChannelService,SalesReceiptService],
})
export class SellingModule {}
