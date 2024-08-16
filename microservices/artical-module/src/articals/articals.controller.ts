import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ArticalsService } from './articals.service';
import { CreateArticalDto } from './dto/create-artical.dto';
import { UpdateArticalDto } from './dto/update-artical.dto';

@Controller('articals')
export class ArticalsController {
  constructor(private readonly articalsService: ArticalsService) {}

  @MessagePattern({ cmd: 'create_artical' })
  async create(@Payload() message: CreateArticalDto): Promise<any> {
    console.log('create payload:', message);
    return await this.articalsService.create(message);
  }

  @MessagePattern({ cmd: 'all_articals' })
  async findAll() {
    console.log('findAll called');
    return await this.articalsService.findAll();
  }

  @MessagePattern({ cmd: 'getOne_artical' })
  async findOne(@Payload() data: { id: number }) {
    console.log('findOne payload:', data);
    return await this.articalsService.findOne(data.id);
  }

  @MessagePattern({ cmd: 'update_artical' })
  async update(@Payload() data: { id: number, updateArticalDto: UpdateArticalDto }) {
    console.log('update payload:', data);
    return await this.articalsService.update(data.id, data.updateArticalDto);
  }

  @MessagePattern({ cmd: 'delete_artical' })
  async remove(@Payload() data: { id: number }) {
    console.log('remove payload:', data);
    return await this.articalsService.remove(data.id);
  }
}
