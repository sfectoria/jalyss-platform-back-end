import { Module } from '@nestjs/common';
import { ArticlesService } from './article.service';
import { ArticlesController } from './article.controller';

@Module({
  controllers: [ArticlesController],
  providers: [ArticlesService],
})
export class ArticlesModule {}
