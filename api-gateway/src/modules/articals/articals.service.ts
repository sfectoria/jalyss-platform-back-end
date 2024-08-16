import { Inject, Injectable } from '@nestjs/common';
import { CreateArticalDto } from './dto/create-artical.dto';
import { UpdateArticalDto } from './dto/update-artical.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class ArticalsService {
  constructor(
    @Inject('ARTICAL_MICROSERVICE') private readonly articalClient: ClientProxy,
  ) {}

  create(createArticalDto: CreateArticalDto) {
    console.log('create article data:', createArticalDto);
    return this.articalClient.send(
      { cmd: 'create_artical' }, 
      createArticalDto);
  }

  findAll() {
    console.log('findAll called');
    return this.articalClient.send(
      { cmd: 'all_articals' },
       {});
  }

  findOne(id: number) {
    console.log('findOne id:', id);
    return this.articalClient.send(
      { cmd: 'getOne_artical' }, 
      { id });
  }

  update(id: number, updateArticalDto: UpdateArticalDto) {
    console.log('update id and data:', id, updateArticalDto);
    return this.articalClient.send(
      { cmd: 'update_artical' },
      { id, updateArticalDto },
    );
  }

  remove(id: number) {
    console.log('remove id:', id);
    return this.articalClient.send(
      { cmd: 'delete_artical' }, 
      { id });
  }
}
