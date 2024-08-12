import { Module } from '@nestjs/common';
import { SalesInvoicesService } from './sales-invoices.service';
import { SalesInvoicesController } from './sales-invoices.controller';
import { BonSortie } from 'src/helpers/bonSortie';

@Module({
  controllers: [SalesInvoicesController],
  providers: [SalesInvoicesService,BonSortie],
})
export class SalesInvoicesModule {}
