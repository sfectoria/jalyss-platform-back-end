import { Module } from '@nestjs/common';
import { SalesReceiptService } from './sales-receipt.service';
import { SalesReceiptController } from './sales-receipt.controller';
import { ExitNote } from 'src/helpers/exitNote';

@Module({
  controllers: [SalesReceiptController],
  providers: [SalesReceiptService,ExitNote],
})
export class SalesReceiptModule {}
