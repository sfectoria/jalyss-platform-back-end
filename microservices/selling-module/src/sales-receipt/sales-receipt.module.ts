import { Module } from '@nestjs/common';
import { SalesReceiptService } from './sales-receipt.service';
import { SalesReceiptController } from './sales-receipt.controller';

@Module({
  controllers: [SalesReceiptController],
  providers: [SalesReceiptService],
})
export class SalesReceiptModule {}
