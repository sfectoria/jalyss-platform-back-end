import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SalesChannelsModule } from './sales-channels/sales-channels.module';
import { PrismaModule } from 'nestjs-prisma';
import { ConfigModule } from '@nestjs/config';
import { SalesInvoicesModule } from './sales-invoices/sales-invoices.module';
import { SalesDeliveryNoteModule } from './sales-Delivery-note/sales-delivery-note.module';
import { SalesDeliveryInvoiceModule } from './sales-delivery-invoice/sales-delivery-invoice.module';
import { PurchaseOrderModule } from './purchase-order/purchase-order.module';
import { ExitNote } from './helpers/exitNote';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '../../.env',
    }),
    PrismaModule.forRoot({ isGlobal: true }),SalesChannelsModule, SalesInvoicesModule, SalesDeliveryNoteModule, SalesDeliveryInvoiceModule, PurchaseOrderModule],
  controllers: [AppController],
  providers: [AppService,ExitNote],
})
export class AppModule {}
