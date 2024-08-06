import { Module } from '@nestjs/common';
import { CategorieArticlesService } from './categorie-articles.service';
import { CategorieArticlesController } from './categorie-articles.controller';

@Module({
  controllers: [CategorieArticlesController],
  providers: [CategorieArticlesService],
})
export class CategorieArticlesModule {}
