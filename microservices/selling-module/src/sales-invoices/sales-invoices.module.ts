import { Module } from '@nestjs/common';
import { SalesInvoicesService } from './sales-invoices.service';
import { SalesInvoicesController } from './sales-invoices.controller';

@Module({
  controllers: [SalesInvoicesController],
  providers: [SalesInvoicesService],
})
export class SalesInvoicesModule {}
