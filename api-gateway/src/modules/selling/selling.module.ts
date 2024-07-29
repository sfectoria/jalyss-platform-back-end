import { Module } from '@nestjs/common';
import { SellingService } from './selling.service';
import { SellingController } from './selling.controller';
import { BonComndsController } from './bon-comnds.controller';
import { BonComndsService } from './bon-comnds.service';
import { SalesblsController } from './salesbls.controller';
import { SalesblsService } from './salesbls.service';

@Module({
  controllers: [SellingController, BonComndsController, SalesblsController],
  providers: [SellingService, BonComndsService, SalesblsService],
})
export class SellingModule {}
