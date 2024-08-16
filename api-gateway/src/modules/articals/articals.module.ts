import { Module } from '@nestjs/common';
import { ArticalsService } from './articals.service';
import { ArticalsController } from './articals.controller';
import { PublishingHousesController } from './publishing_houses.controller';
import { PublishingHousesService } from './publishing_houses.service';
import { CategoryArticalController } from './category-artical.controller';
import { CategoryArticalsService } from './category-artical.service';

@Module({
  controllers: [ArticalsController, PublishingHousesController, CategoryArticalController],
  providers: [ArticalsService, PublishingHousesService, CategoryArticalsService],
})
export class ArticalsModule {}
