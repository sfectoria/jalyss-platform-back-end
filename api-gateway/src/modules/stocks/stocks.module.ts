import { Module } from '@nestjs/common';
import { StocksService } from './stocks.service';
import { StocksController } from './stocks.controller';
import { BonReceptionsController } from './bon-receptions.controller';
import { BonReceptionsService } from './bon-receptions.service';
import { BonSortiesController } from './bon-sorties.controller';
import { BonSortiesService } from './bon-sorties.service';
import { BonTransfersController } from './bon-transfers.controller';
import { BonTransfersService } from './bon-transfers.service';
import { BonRetoursController } from './bon-retours.controller';
import { BonRetoursService } from './bon-retours.service';


@Module({
  controllers: [StocksController,BonReceptionsController,BonSortiesController, BonTransfersController, BonRetoursController],
  providers: [StocksService,BonReceptionsService,BonSortiesService, BonTransfersService, BonRetoursService]
})
export class StocksModule {}
