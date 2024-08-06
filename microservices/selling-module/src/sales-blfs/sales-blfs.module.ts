import { Module } from '@nestjs/common';
import { SalesBlfsService } from './sales-blfs.service';
import { SalesBlfsController } from './sales-blfs.controller';

@Module({
  controllers: [SalesBlfsController],
  providers: [SalesBlfsService],
})
export class SalesBlfsModule {}
