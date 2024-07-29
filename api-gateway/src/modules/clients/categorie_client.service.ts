import { Inject, Injectable } from '@nestjs/common';
// import { CreateCategorieClientDto } from './dto/create-categorie-client.dto';
// import { UpdateCategorieClientDto } from './dto/update-categorie-client.dto';
import { ClientProxyFactory, Transport, ClientProxy } from '@nestjs/microservices';
import { CreateCategorieClientDto } from './dto/create-client.dto';
import { UpdateCategorieClientDto } from './dto/update-client.dto';

@Injectable()
export class CategorieClientsService {

  constructor(
    @Inject('CLIENT_MICROSERVICE') private readonly clientClient: ClientProxy,
  ) {}
  async create(createCategorieClientDto: CreateCategorieClientDto) {
    return this.clientClient.send({ cmd: 'create_categorie_client' }, createCategorieClientDto)
  }

  async findAll() {
    return this.clientClient.send({ cmd: 'all_categorie_clients' }, {})
  }

  async findOne(id: number) {
    return this.clientClient.send({ cmd: 'getOne_categorie_client' }, { id })
  }

  async update(id: number, updateCategorieClientDto: UpdateCategorieClientDto) {
    return this.clientClient.send({ cmd: 'update_categorie_client' }, { id, updateCategorieClientDto })
  }

  async remove(id: number) {
    return this.clientClient.send({ cmd: 'delete_categorie_client' }, { id })
  }
}
