import { Module } from '@nestjs/common';
import { CategoryArticalsService } from './category-articals.service';
import { CategoryArticalsController } from './category-articals.controller';

@Module({
  controllers: [CategoryArticalsController],
  providers: [CategoryArticalsService],
})
export class CategoryArticalsModule {}
