import { Module } from '@nestjs/common';
import { BonSortiesService } from './bon-sorties.service';
import { BonSortiesController } from './bon-sorties.controller';

@Module({
  controllers: [BonSortiesController],
  providers: [BonSortiesService],
})
export class BonSortiesModule {}
