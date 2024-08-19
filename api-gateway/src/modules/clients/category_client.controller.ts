import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoryClientsService } from './category_client.service';
import { CreateCategoryClientDto } from './dto/create-client.dto';
import { UpdateCategoryClientDto } from './dto/update-client.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('categoryClients')
@ApiTags('categoryClients')
export class CategoryClientsController {
  constructor(private readonly categoryClientsService: CategoryClientsService) {}
  // @ApiBearerAuth('jwt')
  @Post()
  async create(@Body() createCategoryClientDto: CreateCategoryClientDto) {
    return await this.categoryClientsService.create(createCategoryClientDto);
  }
  // @ApiSecurity('jwt')
//   @ApiParam({
//     name: 'Authorization',
//     required: false,
//     description:
//         '(Leave empty. Use lock icon on the top-right to authorize)',
// })
  @Get()
  async findAll() {
    return await this.categoryClientsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.categoryClientsService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateCategoryClientDto: UpdateCategoryClientDto) {
    return await this.categoryClientsService.update(+id, updateCategoryClientDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.categoryClientsService.remove(+id);
  }
}
