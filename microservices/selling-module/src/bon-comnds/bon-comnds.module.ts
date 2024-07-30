import { Module } from '@nestjs/common';
import { BonComndsService } from './bon-comnds.service';
import { BonComndsController } from './bon-comnds.controller';

@Module({
  controllers: [BonComndsController],
  providers: [BonComndsService],
})
export class BonComndsModule {}
