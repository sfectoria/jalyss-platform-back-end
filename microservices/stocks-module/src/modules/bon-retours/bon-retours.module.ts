import { Module } from '@nestjs/common';
import { BonRetoursService } from './bon-retours.service';
import { BonRetoursController } from './bon-retours.controller';

@Module({
  controllers: [BonRetoursController],
  providers: [BonRetoursService],
})
export class BonRetoursModule {}
