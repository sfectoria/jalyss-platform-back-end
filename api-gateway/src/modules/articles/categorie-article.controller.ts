import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategorieArticleService } from './categorie-article.service';
import { CreateCategorieArticleDto } from './dto/create-article.dto';
import { UpdateCategorieArticleDto } from './dto/update-article.dto';
// import { CreateCategorieArticleDto } from './dto/create-categorie-article.dto';
// import { UpdateCategorieArticleDto } from './dto/update-categorie-article.dto';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
@ApiTags('categorie-articles')
@ApiSecurity('apiKey')
@Controller('categorie-articles')
export class CategorieArticleController {
  constructor(private readonly categorieArticleService: CategorieArticleService) {}

  @Post()
  create(@Body() createCategorieArticleDto: CreateCategorieArticleDto) {
    return this.categorieArticleService.create(createCategorieArticleDto);
  }

  @Get()
  findAll() {
    return this.categorieArticleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categorieArticleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateCategorieArticleDto: UpdateCategorieArticleDto) {
    return this.categorieArticleService.update(id, updateCategorieArticleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categorieArticleService.remove(+id);
  }
}
