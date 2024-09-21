import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ArticlesService } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { ApiTags } from '@nestjs/swagger';
import { Filters } from './entities/article.entity';

@Controller('articles')
@ApiTags('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Post('create')
  create(@Body() createArticleDto: CreateArticleDto) {
    return this.articlesService.create(createArticleDto);
  }

  @Get('getAll')
  findAll(@Query() filters:Filters) {
    return this.articlesService.findAll(filters);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.articlesService.findOne(+id);
  }

  @Get('/barCode/:code')
  findBarCode(@Param('code') code: string) {
    return this.articlesService.findBarCode(code);
  }

  @Patch(':id')
  update(@Param ('id') id: number, @Body() updateArticleDto: UpdateArticleDto) {
    return this.articlesService.update(+id, updateArticleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.articlesService.remove(+id);
  }
}
