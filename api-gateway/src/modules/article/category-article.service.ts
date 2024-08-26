import { Inject, Injectable } from '@nestjs/common';
// import { CreateCategorieArticleDto } from './dto/create-categorie-article.dto';
// import { UpdateCategorieArticleDto } from './dto/update-categorie-article.dto';
import { ClientProxy } from '@nestjs/microservices';
import { CreateCategoryArticleDto } from './dto/create-article.dto';
import { UpdateCategoryArticleDto } from './dto/update-article.dto';

@Injectable()
export class CategoryArticlesService {
  constructor(
    @Inject('ARTICLE_MICROSERVICE') private readonly categoryArticleClient: ClientProxy,
  ) {}

  create(createCategoryArticleDto: CreateCategoryArticleDto) {
    return this.categoryArticleClient.send(
      { cmd: 'create_categoryArticle' }, 
      createCategoryArticleDto);
  }

  findAll() {
    return this.categoryArticleClient.send(
      { cmd: 'all_categoryArticles' }, 
      {});
  }

  findOne(id: number) {
    return this.categoryArticleClient.send(
      { cmd: 'getOne_categoryArticle' }, 
      { id });
  }

  update(id: number, updateCategoryArticleDto: UpdateCategoryArticleDto) {
    return this.categoryArticleClient.send(
      { cmd: 'update_categoryArticle' },
      { id, updateCategoryArticleDto },
    );
  }

  remove(id: number) {
    return this.categoryArticleClient.send(
      { cmd: 'delete_categoryArticle' }, 
      { id });
  }
}
