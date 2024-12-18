import { Controller, Get, Post, Body, Patch, Param, Delete} from '@nestjs/common';
import { ClientsService } from './clients.service';

import { ApiTags } from '@nestjs/swagger';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@ApiTags('clients')
@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Post()
  create(@Body() createClientDto: CreateClientDto) {
    return this.clientsService.create(createClientDto);
  }
  @Get()
  findAll() {
    return this.clientsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.clientsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateClientDto: UpdateClientDto) {
    return this.clientsService.update(+id, updateClientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.clientsService.remove(+id);
  }
}
