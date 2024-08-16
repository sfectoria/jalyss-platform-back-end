import { Inject, Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class ClientsService {
  constructor(
    @Inject('CLIENT_MICROSERVICE') private readonly clientClient: ClientProxy,
  ) {}

  create(createClientDto: CreateClientDto) {
    console.log('create client data:', createClientDto);
    return this.clientClient.send(
      { cmd: 'create_client' }, 
      createClientDto);
  }

  findAll() {
    console.log('findAll called');
    return this.clientClient.send(
      { cmd: 'all_clients' }, 
      {});
  }

  findOne(id: number) {
    console.log('findOne id:', id);
    return this.clientClient.send(
      { cmd: 'getOne_client' }, 
      { id });
  }

  update(id: number, updateClientDto: UpdateClientDto) {
    console.log('update id and data:', id, updateClientDto);
    return this.clientClient.send(
      { cmd: 'update_client' },
      { id, updateClientDto },
    );
  }

  remove(id: number) {
    console.log('remove id:', id);
    return this.clientClient.send(
      { cmd: 'delete_client' }, 
      { id });
  }
}
