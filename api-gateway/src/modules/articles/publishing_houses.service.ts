import { Inject, Injectable } from '@nestjs/common';
import {  Createpublishing_housesDto } from './dto/create-article.dto';
import {  updatepublishing_houses } from './dto/update-article.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class publishing_housesService {
  constructor(
    @Inject('ARTICLE_MICROSERVICE') private readonly publishing_houseClient: ClientProxy,
  ) {}
  create(createpublishing_housesDto: Createpublishing_housesDto) {
    return this.publishing_houseClient.send({ cmd: 'create_publishing_house' }, createpublishing_housesDto);
  }

  findAll() {
    return this.publishing_houseClient.send({ cmd: 'all_publishing_house' }, {});
  }

  findOne(id: number) {
    return this.publishing_houseClient.send({ cmd: 'getOne_publishing_house' }, { id });
  }

  update(id: number, updatepublishing_houseDto: updatepublishing_houses) {
    return this.publishing_houseClient.send(
      { cmd: 'update_publishing_house' },
      { id, updatepublishing_houseDto },
    );
  }

  remove(id: number) {
    return this.publishing_houseClient.send({ cmd: 'delete_publishing_house' }, id);
  }
}
