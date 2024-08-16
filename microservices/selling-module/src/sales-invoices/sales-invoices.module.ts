import { Module } from '@nestjs/common';
import { SalesInvoicesService } from './sales-invoices.service';
import { SalesInvoicesController } from './sales-invoices.controller';
import { ExitNote } from 'src/helpers/exitNote';

@Module({
  controllers: [SalesInvoicesController],
  providers: [SalesInvoicesService,ExitNote],
})
export class SalesInvoicesModule {}
