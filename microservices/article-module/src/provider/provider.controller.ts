import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProviderService } from './provider.service';
import { CreateProviderDto } from './dto/create-provider.dto';
import { UpdateProviderDto } from './dto/update-provider.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('provider')
export class ProviderController {
  constructor(private readonly providerService: ProviderService) {}

  @MessagePattern({ cmd: 'create_provider' })
  create(@Payload() createProviderDto: CreateProviderDto) {
    return this.providerService.create(createProviderDto);
  }

  @MessagePattern({ cmd: 'all_providers' })
  findAll() {
    return this.providerService.findAll();
  }

  @MessagePattern({ cmd: 'getOne_provider' })
  findOne(@Payload() data: { id: number }) {
    return this.providerService.findOne(data.id);
  }

  @MessagePattern({ cmd: 'update_provider' })
  update(@Payload() data: { id: number, updateProviderDto: UpdateProviderDto }) {
    return this.providerService.update(data.id, data.updateProviderDto);
  }

  @MessagePattern({ cmd: 'delete_provider' })
  remove (@Payload('id')  id: number ) {
    return this.providerService.remove(+id);
  }
}
