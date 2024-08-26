import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoryArticlesService } from './category-article.service';
import { CreateCategoryArticleDto } from './dto/create-article.dto';
import { UpdateCategoryArticleDto } from './dto/update-article.dto';
// import { CreateCategorieArticleDto } from './dto/create-categorie-article.dto';
// import { UpdateCategorieArticleDto } from './dto/update-categorie-article.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('categoryArticle')
@Controller('catgoryArticle')
export class CategoryArticleController {
  constructor(private readonly categoryArticlesService: CategoryArticlesService) {}

  @Post('create')
  create(@Body() createCategoryArticleDto: CreateCategoryArticleDto) {
    return this.categoryArticlesService.create(createCategoryArticleDto);
  }

  @Get('all')
  findAll() {
    return this.categoryArticlesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.categoryArticlesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateCategoryArticleDto: UpdateCategoryArticleDto) {
    return this.categoryArticlesService.update(+id,updateCategoryArticleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.categoryArticlesService.remove(+id);
  }
}
