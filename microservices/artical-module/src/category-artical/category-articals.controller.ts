import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
// import { CategorieArticleService } from './categorie-article.service';
import { CreateCategoryArticalDto } from './dto/create-category-artical.dto';
import { UpdateCategoryArticalDto } from './dto/update-category-artical.dto';
import { CategoryArticalsService } from './category-articals.service';

@Controller()
export class CategoryArticalsController {
  constructor(private readonly categoryArticalsService: CategoryArticalsService) {}

  @MessagePattern({ cmd: 'create_categoryArtical' })
  async create(@Payload() createCategoryArticalDto: CreateCategoryArticalDto) {
    return this.categoryArticalsService.create(createCategoryArticalDto);
  }

  @MessagePattern({ cmd: 'all_categoryArticals' })
  async findAll() {
    return this.categoryArticalsService.findAll();
  }

  @MessagePattern({ cmd: 'getOne_categoryArtical' })
  async findOne(@Payload() data: { id: number }) {
    return this.categoryArticalsService.findOne(data.id);
  }

  @MessagePattern({ cmd: 'update_categoryArtical' })
  async update(@Payload() data: { id: number, updateCategoryArticalDto: UpdateCategoryArticalDto }) {
    return this.categoryArticalsService.update(data.id, data.updateCategoryArticalDto);
  }

  @MessagePattern({ cmd: 'delete_categoryArtical' })
  async remove(@Payload() data: { id: number }) {
    return this.categoryArticalsService.remove(data.id);
  }
}
