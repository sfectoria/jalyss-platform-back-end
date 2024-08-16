import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoryArticalsService } from './category-artical.service';
import { CreateCategoryArticalDto } from './dto/create-artical.dto';
import { UpdateCategoryArticalDto } from './dto/update-artical.dto';
// import { CreateCategorieArticleDto } from './dto/create-categorie-article.dto';
// import { UpdateCategorieArticleDto } from './dto/update-categorie-article.dto';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { Payload } from '@nestjs/microservices';
@ApiTags('categoryArtical')
@ApiSecurity('apiKey')
@Controller('catgoryArtical')
export class CategoryArticalController {
  constructor(private readonly categoryArticalsService: CategoryArticalsService) {}

  @Post('create')
  create(@Payload() createCategoryArticalDto: CreateCategoryArticalDto) {
    return this.categoryArticalsService.create(createCategoryArticalDto);
  }

  @Get('all')
  findAll() {
    return this.categoryArticalsService.findAll();
  }

  @Get(':id')
  findOne(@Payload() id: number) {
    return this.categoryArticalsService.findOne(+id);
  }

  @Patch(':id')
  update(@Payload() data : {id: number, updateCategoryArticalDto: UpdateCategoryArticalDto}) {
    return this.categoryArticalsService.update(data.id, data.updateCategoryArticalDto);
  }

  @Delete(':id')
  remove(@Payload() id: number) {
    return this.categoryArticalsService.remove(+id);
  }
}
