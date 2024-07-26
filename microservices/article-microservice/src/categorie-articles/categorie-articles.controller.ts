import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
// import { CategorieArticleService } from './categorie-article.service';
import { CreateCategorieArticleDto } from './dto/create-categorie-article.dto';
import { UpdateCategorieArticleDto } from './dto/update-categorie-article.dto';
import { CategorieArticlesService } from './categorie-articles.service';

@Controller()
export class CategorieArticlesController {
  constructor(private readonly categorieArticleService: CategorieArticlesService) {}

  @MessagePattern({ cmd: 'create_categorie_article' })
  async create(@Payload() createCategorieArticleDto: CreateCategorieArticleDto) {
    return this.categorieArticleService.create(createCategorieArticleDto);
  }

  @MessagePattern({ cmd: 'all_categorie_article' })
  async findAll() {
    return this.categorieArticleService.findAll();
  }

  @MessagePattern({ cmd: 'getOne_categorie_article' })
  async findOne(@Payload() data: { id: number }) {
    return this.categorieArticleService.findOne(data.id);
  }

  @MessagePattern({ cmd: 'update_categorie_article' })
  async update(@Payload() data: { id: number, updateCategorieArticleDto: UpdateCategorieArticleDto }) {
    return this.categorieArticleService.update(data.id, data.updateCategorieArticleDto);
  }

  @MessagePattern({ cmd: 'delete_categorie_article' })
  async remove(@Payload() data: { id: number }) {
    return this.categorieArticleService.remove(data.id);
  }
}
