import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PurchaseDeliveryNoteModule } from './purchase-delivery-note/purchase-delivery-note.module';
import { PurchaseDeliveryInvoiceModule } from './purchase-delivery-invoice/purchase-delivery-invoice.module';
import { PurchaseInvoiceModule } from './purchase-invoice/purchase-invoice.module';

@Module({
  imports: [PurchaseDeliveryNoteModule, PurchaseDeliveryInvoiceModule, PurchaseInvoiceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
