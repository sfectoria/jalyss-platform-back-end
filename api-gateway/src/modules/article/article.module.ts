import { Module } from '@nestjs/common';
import { ArticlesService } from './article.service';
import { ArticlesController } from './article.controller';
import { PublishingHousesController } from './publishing_houses.controller';
import { PublishingHousesService } from './publishing_houses.service';
import { CategoryArticleController } from './category-article.controller';
import { CategoryArticlesService } from './category-article.service';

@Module({
  controllers: [ArticlesController, PublishingHousesController, CategoryArticleController],
  providers: [ArticlesService, PublishingHousesService, CategoryArticlesService],
})
export class ArticlesModule {}
