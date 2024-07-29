import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategorieClientsService } from './categorie_client.service';
import { CreateCategorieClientDto } from './dto/create-client.dto';
import { UpdateCategorieClientDto } from './dto/update-client.dto';
// import { CategorieClient } from '@prisma/client';
// import { CategorieClientsGatewayService } from './categorie-clients.gateway.service';
// import { CreateCategorieClientDto } from './dto/create-categorie-client.dto';
// import { UpdateCategorieClientDto } from './dto/update-categorie-client.dto';

@Controller('categorie-clients')
export class CategorieClientsController {
  constructor(private readonly categorieClientsGatewayService: CategorieClientsService) {}

  @Post()
  async create(@Body() createCategorieClientDto: CreateCategorieClientDto) {
    return await this.categorieClientsGatewayService.create(createCategorieClientDto);
  }

  @Get()
  async findAll() {
    return await this.categorieClientsGatewayService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.categorieClientsGatewayService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateCategorieClientDto: UpdateCategorieClientDto) {
    return await this.categorieClientsGatewayService.update(+id, updateCategorieClientDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.categorieClientsGatewayService.remove(+id);
  }
}
