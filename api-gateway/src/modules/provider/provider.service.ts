import { Inject, Injectable } from '@nestjs/common';
import { CreateProviderDto } from './dto/create-provider.dto';
import { UpdateProviderDto } from './dto/update-provider.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class ProviderService {
  constructor(
    @Inject('PROVIDER_MICROSERVICE') private readonly providerClient: ClientProxy,
  ) {}

  create(createProviderDto: CreateProviderDto) {
    console.log('create provider data:', createProviderDto);
    return this.providerClient.send({ cmd: 'create_provider' }, createProviderDto);
  }

  findAll() {
    console.log('findAll called');
    return this.providerClient.send({ cmd: 'all_providers' }, {});
  }

  findOne(id: number) {
    console.log('findOne id:', id);
    return this.providerClient.send({ cmd: 'getOne_provider' }, { id });
  }

  update(id: number, updateProviderDto: UpdateProviderDto) {
    console.log('update id and data:', id, updateProviderDto);
    return this.providerClient.send(
      { cmd: 'update_provider' },
      { id, updateProviderDto },
    );
  }

  remove(id: number) {
    console.log('remove id:', id);
    return this.providerClient.send({ cmd: 'delete_provider' }, { id });
  }
}
