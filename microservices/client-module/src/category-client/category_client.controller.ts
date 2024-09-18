import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateCategoryClientDto } from './dto/create-category_client.dto';
import { CategoryClientsService } from './category_client.service';
import { UpdateCategoryClientDto } from './dto/update-category_client.dto';
// import { CategorieClientService } from './categorie_client.service';
// import { CategorieClientsService } from './categorie_client.service';
// import { CreateCategorieClientDto } from './dto/create-client.dto';
// import { UpdateCategorieClientDto } from './dto/update-client.dto';
// import { CategorieClientsService } from './categorie-clients.service';
// import { CreateCategorieClientDto } from './dto/create-categorie-client.dto';
// import { UpdateCategorieClientDto } from './dto/update-categorie-client.dto';

@Controller('categorie-clients')
export class CategoryClientsController {
  constructor(private readonly categoryClientsService: CategoryClientsService) {}

  @MessagePattern({ cmd: 'create_categoryClient' })
  async create(@Payload() message: CreateCategoryClientDto): Promise<any> {
    console.log('create payload:', message);
    return await this.categoryClientsService.create(message);
  }

  @MessagePattern({ cmd: 'all_categoryClients' })
  async findAll() {
    console.log('findAll called');
    return await this.categoryClientsService.findAll();
  }

  @MessagePattern({ cmd: 'getOne_categoryClient' })
  async findOne(@Payload() data: { id: number }) {
    console.log('findOne payload:', data);
    return await this.categoryClientsService.findOne(data.id);
  }

  @MessagePattern({ cmd: 'update_categoryClient' })
  async update(@Payload() data: { id: number, updateCategorieClientDto: UpdateCategoryClientDto }) {
    console.log('update payload:', data);
    return await this.categoryClientsService.update(data.id, data.updateCategorieClientDto);
  }

  @MessagePattern({ cmd: 'delete_categoryClient' })
  async remove(@Payload() data: { id: number }) {
    console.log('remove payload:', data);
    return await this.categoryClientsService.remove(data.id);
  }
}
