import { Module } from '@nestjs/common';
import { CategoryArticlesService } from './category-article.service';
import { CategoryArticlesController } from './category-article.controller';

@Module({
  controllers: [CategoryArticlesController],
  providers: [CategoryArticlesService],
})
export class CategoryArticlesModule {}
