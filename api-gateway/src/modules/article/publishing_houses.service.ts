import { Inject, Injectable } from '@nestjs/common';
import {  CreatePublishingHouseDto } from './dto/create-article.dto';
import {  UpdatePublishingHouses } from './dto/update-article.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class PublishingHousesService {
  constructor(
    @Inject('ARTICLE_MICROSERVICE') private readonly publishingHouseClient: ClientProxy,
  ) {}
  create(createPublishingHouseDto: CreatePublishingHouseDto) {
    return this.publishingHouseClient.send(
      { cmd: 'create_publishingHouse' }, 
      CreatePublishingHouseDto);
  }

  findAll() {
    return this.publishingHouseClient.send(
      { cmd: 'all_publishingHouses' }, 
      {});
  }

  findOne(id: number) {
    return this.publishingHouseClient.send(
      { cmd: 'getOne_publishingHouse' }, 
      { id });
  }

  update(id: number, updatePublishingHouses: UpdatePublishingHouses) {
    return this.publishingHouseClient.send(
      { cmd: 'update_publishingHouse' },
      { id, updatePublishingHouses },
    );
  }

  remove(id: number) {
    return this.publishingHouseClient.send(
      { cmd: 'delete_publishingHouse' }, 
      {id});
  }
}
