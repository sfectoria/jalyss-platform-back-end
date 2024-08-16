import { Module } from '@nestjs/common';
import { PublishingHousesService } from './publishing_houses.service';
import { PublishingHousesController } from './publishing_houses.controller';

@Module({
  controllers: [PublishingHousesController],
  providers: [PublishingHousesService],
})
export class PublishingHousesModule {}
