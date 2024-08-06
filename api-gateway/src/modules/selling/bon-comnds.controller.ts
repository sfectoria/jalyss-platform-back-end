import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BonComndsService } from './bon-comnds.service';
import { CreateBonComndDto } from './dto/create-selling.dto';
import { UpdateBonComndDto } from './dto/update-selling.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('bonComnds')
@ApiTags('bonComnds')
export class BonComndsController {
  constructor(private readonly bonComndsService: BonComndsService) {}

  @Post('create')
  create(@Body() createBonComndDto: CreateBonComndDto) {
    return this.bonComndsService.create(createBonComndDto);
  }

  @Get('getAll')
  findAll() {
    return this.bonComndsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bonComndsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBonComndDto: UpdateBonComndDto) {
    return this.bonComndsService.update(+id, updateBonComndDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bonComndsService.remove(+id);
  }
}
