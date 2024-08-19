import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoryClientsService } from './category_client.service';
import { CreateCategoryClientDto } from './dto/create-client.dto';
import { UpdateCategoryClientDto } from './dto/update-client.dto';
import { ApiBearerAuth, ApiParam, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { Payload } from '@nestjs/microservices';
// import { CategorieClient } from '@prisma/client';
// import { CategorieClientsGatewayService } from './categorie-clients.gateway.service';
// import { CreateCategorieClientDto } from './dto/create-categorie-client.dto';
// import { UpdateCategorieClientDto } from './dto/update-categorie-client.dto';
@Controller('categoryClients')
@ApiTags('categoryClients')
export class CategoryClientsController {
  constructor(private readonly categoryClientsService: CategoryClientsService) {}
  // @ApiBearerAuth('jwt')
  @Post()
  async create(@Payload() createCategoryClientDto: CreateCategoryClientDto) {
    return await this.categoryClientsService.create(createCategoryClientDto);
  }
  // @ApiSecurity('jwt')
  @ApiParam({
    name: 'Authorization',
    required: false,
    description:
        '(Leave empty. Use lock icon on the top-right to authorize)',
})
  @Get()
  async findAll() {
    return await this.categoryClientsService.findAll();
  }

  @Get(':id')
  async findOne(@Payload() id: number) {
    return await this.categoryClientsService.findOne(+id);
  }

  @Patch(':id')
  async update(@Payload() data : {id: number, updateCategoryClientDto: UpdateCategoryClientDto}) {
    return await this.categoryClientsService.update(data.id, data.updateCategoryClientDto);
  }

  @Delete(':id')
  async remove(@Payload() id: number) {
    return await this.categoryClientsService.remove(+id);
  }
}
