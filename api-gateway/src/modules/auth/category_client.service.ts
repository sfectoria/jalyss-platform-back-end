import { Inject, Injectable } from '@nestjs/common';
// import { CreateCategorieClientDto } from './dto/create-categorie-client.dto';
// import { UpdateCategorieClientDto } from './dto/update-categorie-client.dto';
import { ClientProxyFactory, Transport, ClientProxy } from '@nestjs/microservices';
import { CreateCategoryClientDto } from './dto/create-client.dto';
import { UpdateCategoryClientDto } from './dto/update-client.dto';


@Injectable()
export class CategoryClientsService {

  constructor(
    @Inject('AUTH_MICROSERVICE') private readonly clientClient: ClientProxy,
  ) {}
  async create(createCategoryClientDto: CreateCategoryClientDto) {
    return this.clientClient.send
    ({ cmd: 'create_categoryClient' }, 
      createCategoryClientDto)
  }

  async findAll() {
    return this.clientClient.send(
      { cmd: 'all_categoryClients' }, 
      {})
  }

  async findOne(id: number) {
    return this.clientClient.send(
      { cmd: 'getOne_categoryClient' }, 
      { id })
  }

  async update(id: number, updateCategoryClientDto: UpdateCategoryClientDto) {
    return this.clientClient.send(
      { cmd: 'update_categoryClient' }, 
      { id, updateCategoryClientDto })
  }

  async remove(id: number) {
    return this.clientClient.send(
      { cmd: 'delete_categoryClient' }, 
      { id })
  }
}
