import { Inject, Injectable } from '@nestjs/common';
import {  CreateAuthorDto } from './dto/create-article.dto';
import {   UpdateAuthorDto } from './dto/update-article.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AuthorService {
  constructor(
    @Inject('ARTICLE_MICROSERVICE') private readonly authorClient: ClientProxy,
  ) {}
  create(createAuthorDto: CreateAuthorDto) {
    return this.authorClient.send(
      { cmd: 'create_author' }, 
      createAuthorDto);
  }

  findAll() {
    return this.authorClient.send(
      { cmd: 'all_authors' }, 
      {});
  }

  findOne(id: string) {
    return this.authorClient.send(
      { cmd: 'getOne_author' }, 
      { id });
  }

  update(id: string, updateAuthorDto: UpdateAuthorDto) {
    return this.authorClient.send(
      { cmd: 'update_author' },
      { id, updateAuthorDto },
    );
  }

  remove(id: string) {
    return this.authorClient.send(
      { cmd: 'delete_author' }, 
      {id});
  }
}
