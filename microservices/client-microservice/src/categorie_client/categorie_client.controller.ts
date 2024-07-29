import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateCategorieClientDto } from './dto/create-categorie_client.dto';
import { CategorieClientsService } from './categorie_client.service';
import { UpdateCategorieClientDto } from './dto/update-categorie_client.dto';
// import { CategorieClientService } from './categorie_client.service';
// import { CategorieClientsService } from './categorie_client.service';
// import { CreateCategorieClientDto } from './dto/create-client.dto';
// import { UpdateCategorieClientDto } from './dto/update-client.dto';
// import { CategorieClientsService } from './categorie-clients.service';
// import { CreateCategorieClientDto } from './dto/create-categorie-client.dto';
// import { UpdateCategorieClientDto } from './dto/update-categorie-client.dto';

@Controller('categorie-clients')
export class CategorieClientsController {
  constructor(private readonly categorieClientsService: CategorieClientsService) {}

  @MessagePattern({ cmd: 'create_categorie_client' })
  async create(@Payload() message: CreateCategorieClientDto): Promise<any> {
    console.log('create payload:', message);
    return await this.categorieClientsService.create(message);
  }

  @MessagePattern({ cmd: 'all_categorie_clients' })
  async findAll() {
    console.log('findAll called');
    return await this.categorieClientsService.findAll();
  }

  @MessagePattern({ cmd: 'getOne_categorie_client' })
  async findOne(@Payload() data: { id: number }) {
    console.log('findOne payload:', data);
    return await this.categorieClientsService.findOne(data.id);
  }

  @MessagePattern({ cmd: 'update_categorie_client' })
  async update(@Payload() data: { id: number, updateCategorieClientDto: UpdateCategorieClientDto }) {
    console.log('update payload:', data);
    return await this.categorieClientsService.update(data.id, data.updateCategorieClientDto);
  }

  @MessagePattern({ cmd: 'delete_categorie_client' })
  async remove(@Payload() data: { id: number }) {
    console.log('remove payload:', data);
    return await this.categorieClientsService.remove(data.id);
  }
}
