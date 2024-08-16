import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { Payload } from '@nestjs/microservices';
@ApiTags('clients')
@ApiSecurity('apiKey')
@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Post()
  create(@Payload() createClientDto: CreateClientDto) {
    return this.clientsService.create(createClientDto);
  }
  @ApiSecurity('apiKey')
  @Get()
  findAll() {
    return this.clientsService.findAll();
  }

  @Get(':id')
  findOne(@Payload() id: number) {
    return this.clientsService.findOne(+id);
  }

  @Patch(':id')
  update(@Payload() data : {id: number, updateClientDto: UpdateClientDto}) {
    return this.clientsService.update(data.id, data.updateClientDto);
  }

  @Delete(':id')
  remove(@Payload() id: number) {
    return this.clientsService.remove(+id);
  }
}
