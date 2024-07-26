import { Inject, Injectable } from '@nestjs/common';
// import { CreateCategorieArticleDto } from './dto/create-categorie-article.dto';
// import { UpdateCategorieArticleDto } from './dto/update-categorie-article.dto';
import { ClientProxy } from '@nestjs/microservices';
import { CreateCategorieArticleDto } from './dto/create-article.dto';
import { UpdateCategorieArticleDto } from './dto/update-article.dto';

@Injectable()
export class CategorieArticleService {
  constructor(
    @Inject('ARTICLE_MICROSERVICE') private readonly categorieArticleClient: ClientProxy,
  ) {}

  create(createCategorieArticleDto: CreateCategorieArticleDto) {
    return this.categorieArticleClient.send({ cmd: 'create_categorie_article' }, createCategorieArticleDto);
  }

  findAll() {
    return this.categorieArticleClient.send({ cmd: 'all_categorie_article' }, {});
  }

  findOne(id: number) {
    return this.categorieArticleClient.send({ cmd: 'getOne_categorie_article' }, { id });
  }

  update(id: number, updateCategorieArticleDto: UpdateCategorieArticleDto) {
    return this.categorieArticleClient.send(
      { cmd: 'update_categorie_article' },
      { id, updateCategorieArticleDto },
    );
  }

  remove(id: number) {
    return this.categorieArticleClient.send({ cmd: 'delete_categorie_article' }, { id });
  }
}
