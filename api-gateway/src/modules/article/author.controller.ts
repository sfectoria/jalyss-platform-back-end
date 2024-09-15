import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthorService } from './author.service';
import { CreateAuthorDto } from './dto/create-article.dto';
import { UpdateAuthorDto } from './dto/update-article.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('author')
@ApiTags('authors')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Post()
  async create(@Body() createAuthorDto: CreateAuthorDto) {
    return this.authorService.create(createAuthorDto);
  }

  @Get()
  async findAll() {
    return this.authorService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.authorService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateAuthorDto: UpdateAuthorDto) {
    return this.authorService.update(id, updateAuthorDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.authorService.remove(id);
  }
}
