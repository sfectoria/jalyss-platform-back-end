import { Module } from '@nestjs/common';
import { SellingService } from './selling.service';
import { SellingController } from './selling.controller';
import { BonComndsController } from './bon-comnds.controller';
import { BonComndsService } from './bon-comnds.service';
import { SalesblsController } from './salesbls.controller';
import { SalesblsService } from './salesbls.service';
import { SalesInviocesController } from './sales-invioces.controller';
import { SalesInviocesService } from './sales-invioces.service';
import { SalesblfsController } from './salesblfs.controller';
import { SalesblfsService } from './salesblfs.service';

@Module({
  controllers: [SellingController, BonComndsController, SalesblsController, SalesInviocesController, SalesblfsController],
  providers: [SellingService, BonComndsService, SalesblsService, SalesInviocesService, SalesblfsService],
})
export class SellingModule {}
