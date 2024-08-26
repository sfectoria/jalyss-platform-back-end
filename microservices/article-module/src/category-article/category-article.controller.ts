import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
// import { CategorieArticleService } from './categorie-article.service';
import { CreateCategoryArticleDto } from './dto/create-category-article.dto';
import { UpdateCategoryArticleDto } from './dto/update-category-article.dto';
import { CategoryArticlesService } from './category-article.service';

@Controller()
export class CategoryArticlesController {
  constructor(private readonly categoryArticlesService: CategoryArticlesService) {}

  @MessagePattern({ cmd: 'create_categoryArticle' })
  async create(@Payload() createCategoryArticleDto: CreateCategoryArticleDto) {
    return this.categoryArticlesService.create(createCategoryArticleDto);
  }

  @MessagePattern({ cmd: 'all_categoryArticles' })
  async findAll() {
    return this.categoryArticlesService.findAll();
  }

  @MessagePattern({ cmd: 'getOne_categoryArticle' })
  async findOne(@Payload() data: { id: number }) {
    return this.categoryArticlesService.findOne(data.id);
  }

  @MessagePattern({ cmd: 'update_categoryArticle' })
  async update(@Payload() data: { id: number, updateCategoryArticleDto: UpdateCategoryArticleDto }) {
    return this.categoryArticlesService.update(data.id, data.updateCategoryArticleDto);
  }

  @MessagePattern({ cmd: 'delete_categoryArticle' })
  async remove(@Payload() data: { id: number }) {
    return this.categoryArticlesService.remove(data.id);
  }
}
