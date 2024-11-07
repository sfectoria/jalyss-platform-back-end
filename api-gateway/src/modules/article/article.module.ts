import { Module } from '@nestjs/common';
import { ArticlesService } from './article.service';
import { ArticlesController } from './article.controller';
import { PublishingHousesController } from './publishing_houses.controller';
import { PublishingHousesService } from './publishing_houses.service';
import { CategoryArticleController } from './category-article.controller';
import { CategoryArticlesService } from './category-article.service';
import { AuthorService } from './author.service';
import { AuthorController } from './author.controller';
import { ProviderService } from './provider.service';
import { ProviderController } from './provider.controller';

@Module({
  controllers: [ArticlesController, PublishingHousesController, CategoryArticleController,AuthorController,ProviderController],
  providers: [ArticlesService, PublishingHousesService, CategoryArticlesService,AuthorService,ProviderService],
})
export class ArticlesModule {}
