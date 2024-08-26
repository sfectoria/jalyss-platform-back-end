import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ArticlesService } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @MessagePattern({ cmd: 'create_article' })
  async create(@Payload() message: CreateArticleDto): Promise<any> {
    console.log('create payload:', message);
    return await this.articlesService.create(message);
  }

  @MessagePattern({ cmd: 'all_articles' })
  async findAll() {
    console.log('findAll called');
    return await this.articlesService.findAll();
  }

  @MessagePattern({ cmd: 'getOne_article' })
  async findOne(@Payload('id')  id: number ) {
    // console.log('findOne payload:', data);
    return await this.articlesService.findOne(id);
  }

  @MessagePattern({ cmd: 'update_article' })
  async update(@Payload() data: { id: number, updateArticleDto: UpdateArticleDto }) {
    console.log('update payload:', data);
    return await this.articlesService.update(data.id, data.updateArticleDto);
  }

  @MessagePattern({ cmd: 'delete_article' })
  async remove(@Payload() data: { id: number }) {
    console.log('remove payload:', data);
    return await this.articlesService.remove(data.id);
  }
}
