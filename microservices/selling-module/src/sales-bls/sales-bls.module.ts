import { Module } from '@nestjs/common';
import { SalesBlsService } from './sales-bls.service';
import { SalesBlsController } from './sales-bls.controller';

@Module({
  controllers: [SalesBlsController],
  providers: [SalesBlsService],
})
export class SalesBlsModule {}
