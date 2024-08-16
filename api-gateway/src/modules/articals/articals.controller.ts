import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ArticalsService } from './articals.service';
import { CreateArticalDto } from './dto/create-artical.dto';
import { UpdateArticalDto } from './dto/update-artical.dto';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { Payload } from '@nestjs/microservices';
@ApiTags('articals')
@ApiSecurity('apiKey')

@Controller('articals')
export class ArticalsController {
  constructor(private readonly articalsService: ArticalsService) {}

  @Post('create')
  create(@Payload() createArticalDto: CreateArticalDto) {
    return this.articalsService.create(createArticalDto);
  }

  @Get('all')
  findAll() {
    return this.articalsService.findAll();
  }

  @Get(':id')
  findOne(@Payload() id: number) {
    return this.articalsService.findOne(+id);
  }

  @Patch(':id')
  update(@Payload() data : {id: number, updateArticalDto: UpdateArticalDto}) {
    return this.articalsService.update(data.id, data.updateArticalDto);
  }

  @Delete(':id')
  remove(@Payload() id: number) {
    return this.articalsService.remove(+id);
  }
}
