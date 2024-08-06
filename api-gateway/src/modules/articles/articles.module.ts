import { Module } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';
import { PublishingHousesController } from './publishing_houses.controller';
import { publishing_housesService } from './publishing_houses.service';
import { CategorieArticleController } from './categorie-article.controller';
import { CategorieArticleService } from './categorie-article.service';

@Module({
  controllers: [ArticlesController, PublishingHousesController, CategorieArticleController],
  providers: [ArticlesService, publishing_housesService, CategorieArticleService],
})
export class ArticlesModule {}
