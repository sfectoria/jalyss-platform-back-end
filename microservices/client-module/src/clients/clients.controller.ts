import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @MessagePattern({ cmd: 'create_client' })
  async create(@Payload() message: CreateClientDto): Promise<any> {
    console.log('create payload:', message);
    return await this.clientsService.create(message);
  }

  @MessagePattern({ cmd: 'all_clients' })
  async findAll() {
    console.log('findAll called');
    return await this.clientsService.findAll();
  }

  @MessagePattern({ cmd: 'getOne_client' })
  async findOne(@Payload() data: { id: number }) {
    console.log('findOne payload:', data);
    return await this.clientsService.findOne(data.id);
  }

  @MessagePattern({ cmd: 'update_client' })
  async update(@Payload() data: { id: number, updateClientDto: UpdateClientDto }) {
    console.log('update payload:', data);
    return await this.clientsService.update(data.id, data.updateClientDto);
  }

  @MessagePattern({ cmd: 'delete_client' })
  async remove(@Payload() data: { id: number }) {
    console.log('remove payload:', data);
    return await this.clientsService.remove(data.id);
  }
}
