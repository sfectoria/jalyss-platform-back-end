import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthorService } from './author.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('author')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @MessagePattern({ cmd: 'create_author' })
  async create(@Payload() createAuthorDto: CreateAuthorDto) {
    return this.authorService.create(createAuthorDto);
  }

  @MessagePattern({ cmd: 'all_authors' })
  async findAll() {
    return this.authorService.findAll();
  }

  @MessagePattern({ cmd: 'getOne_author' })
  async findOne(@Payload('id')  id: string ) {
    return this.authorService.findOne(id);
  }

  @MessagePattern({ cmd: 'update_author' })
  async update(@Payload() data: { id: string, updateAuthorDto: UpdateAuthorDto }) {
    return this.authorService.update(data.id, data.updateAuthorDto);
  }

  @MessagePattern({ cmd: 'delete_author' })
  async remove(@Payload() data: { id: string }) {
    return this.authorService.remove(data.id);
  }
}
