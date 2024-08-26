import { Inject, Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class ArticlesService {
  constructor(
    @Inject('ARTICLE_MICROSERVICE') private readonly articleClient: ClientProxy,
  ) {}

  create(createArticleDto: CreateArticleDto) {
    console.log('create article data:', createArticleDto);
    return this.articleClient.send(
      { cmd: 'create_article' }, 
      createArticleDto);
  }

  findAll() {
    console.log('findAll called');
    return this.articleClient.send(
      { cmd: 'all_articles' },
       {});
  }

  findOne(id: number) {
    console.log('findOne id:', id);
    return this.articleClient.send(
      { cmd: 'getOne_article' }, 
      {id});
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    console.log('update id and data:', id, updateArticleDto);
    return this.articleClient.send(
      { cmd: 'update_article' },
      { id, updateArticleDto },
    );
  }

  remove(id: number) {
    console.log('remove id:', id);
    return this.articleClient.send(
      { cmd: 'delete_article' }, 
      { id });
  }
}