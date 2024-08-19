import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoryArticalsService } from './category-artical.service';
import { CreateCategoryArticalDto } from './dto/create-artical.dto';
import { UpdateCategoryArticalDto } from './dto/update-artical.dto';
// import { CreateCategorieArticleDto } from './dto/create-categorie-article.dto';
// import { UpdateCategorieArticleDto } from './dto/update-categorie-article.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('categoryArtical')
@Controller('catgoryArtical')
export class CategoryArticalController {
  constructor(private readonly categoryArticalsService: CategoryArticalsService) {}

  @Post('create')
  create(@Body() createCategoryArticalDto: CreateCategoryArticalDto) {
    return this.categoryArticalsService.create(createCategoryArticalDto);
  }

  @Get('all')
  findAll() {
    return this.categoryArticalsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.categoryArticalsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateCategoryArticalDto: UpdateCategoryArticalDto) {
    return this.categoryArticalsService.update(id,updateCategoryArticalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.categoryArticalsService.remove(+id);
  }
}
