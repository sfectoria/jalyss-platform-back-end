import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PurchaseDeliveryNoteModule } from './purchase-delivery-note/purchase-delivery-note.module';
import { PurchaseDeliveryInvoiceModule } from './purchase-delivery-invoice/purchase-delivery-invoice.module';
import { PurchaseInvoiceModule } from './purchase-invoice/purchase-invoice.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from 'nestjs-prisma';
import { ReceiptNoteHelper } from './helpers/receiptNoteHelper';

@Module({
  imports: [    
    ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: '../../.env',
  }),
  PrismaModule.forRoot({ isGlobal: true }),PurchaseDeliveryNoteModule, PurchaseDeliveryInvoiceModule, PurchaseInvoiceModule],
  controllers: [AppController],
  providers: [AppService,ReceiptNoteHelper],
})
export class AppModule {}
