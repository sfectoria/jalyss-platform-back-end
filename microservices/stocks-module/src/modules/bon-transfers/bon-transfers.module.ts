import { Module } from '@nestjs/common';
import { BonTransfersService } from './bon-transfers.service';
import { BonTransfersController } from './bon-transfers.controller';

@Module({
  controllers: [BonTransfersController],
  providers: [BonTransfersService],
})
export class BonTransfersModule {}
