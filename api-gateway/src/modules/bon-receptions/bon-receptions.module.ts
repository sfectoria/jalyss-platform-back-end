import { Module } from '@nestjs/common';
import { BonReceptionsService } from './bon-receptions.service';
import { BonReceptionsController } from './bon-receptions.controller';

@Module({
  controllers: [BonReceptionsController],
  providers: [BonReceptionsService],
})
export class BonReceptionsModule {}
