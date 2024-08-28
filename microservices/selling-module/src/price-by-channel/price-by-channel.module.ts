import { Module } from '@nestjs/common';
import { PriceByChannelService } from './price-by-channel.service';
import { PriceByChannelController } from './price-by-channel.controller';
import { PrismaModule } from 'nestjs-prisma';

@Module({
  imports:[PrismaModule],
  controllers: [PriceByChannelController],
  providers: [PriceByChannelService],
  exports: [PriceByChannelService],
})
export class PriceByChannelModule {}
