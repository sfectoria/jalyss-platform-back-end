import { Module } from '@nestjs/common';
import { SalesBlsService } from './sales-bls.service';
import { SalesBlsController } from './sales-bls.controller';
import { BonSortie } from 'src/helpers/bonSortie';

@Module({
  controllers: [SalesBlsController],
  providers: [SalesBlsService,BonSortie],
})
export class SalesBlsModule {}
