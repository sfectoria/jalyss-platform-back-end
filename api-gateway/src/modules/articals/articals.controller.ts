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
import { ApiTags } from '@nestjs/swagger';

@Controller('articals')
@ApiTags('articals')
export class ArticalsController {
  constructor(private readonly articalsService: ArticalsService) {}

  @Post('create')
  create(@Body() createArticalDto: CreateArticalDto) {
    return this.articalsService.create(createArticalDto);
  }

  @Get('getAll')
  findAll() {
    return this.articalsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.articalsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param ('id') id: number, @Body() updateArticalDto: UpdateArticalDto) {
    return this.articalsService.update(id, updateArticalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.articalsService.remove(+id);
  }
}
