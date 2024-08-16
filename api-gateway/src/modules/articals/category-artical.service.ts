import { Inject, Injectable } from '@nestjs/common';
// import { CreateCategorieArticleDto } from './dto/create-categorie-article.dto';
// import { UpdateCategorieArticleDto } from './dto/update-categorie-article.dto';
import { ClientProxy } from '@nestjs/microservices';
import { CreateCategoryArticalDto } from './dto/create-artical.dto';
import { UpdateCategoryArticalDto } from './dto/update-artical.dto';

@Injectable()
export class CategoryArticalsService {
  constructor(
    @Inject('ARTICAL_MICROSERVICE') private readonly categoryArticalClient: ClientProxy,
  ) {}

  create(createCategoryArticalDto: CreateCategoryArticalDto) {
    return this.categoryArticalClient.send(
      { cmd: 'create_categoryArtical' }, 
      createCategoryArticalDto);
  }

  findAll() {
    return this.categoryArticalClient.send(
      { cmd: 'all_categoryArticals' }, 
      {});
  }

  findOne(id: number) {
    return this.categoryArticalClient.send(
      { cmd: 'getOne_categoryArtical' }, 
      { id });
  }

  update(id: number, updateCategoryArticalDto: UpdateCategoryArticalDto) {
    return this.categoryArticalClient.send(
      { cmd: 'update_categoryArtical' },
      { id, updateCategoryArticalDto },
    );
  }

  remove(id: number) {
    return this.categoryArticalClient.send(
      { cmd: 'delete_categoryArtical' }, 
      { id });
  }
}
