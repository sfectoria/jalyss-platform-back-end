import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BonSortiesService } from './bon-sorties.service';
import { CreateBonSortieDto } from './dto/create-stock.dto';
import { UpdateBonSortieDto } from './dto/update-stock.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('bonSorties')
@ApiTags('bonSorties')
export class BonSortiesController {
  constructor(private readonly bonSortiesService: BonSortiesService) {}

  @Post('create_bs')
  create(@Body() createBonSortieDto: CreateBonSortieDto) {
    return this.bonSortiesService.create(createBonSortieDto);
  }

  @Get('all_bs')
  findAll() {
    return this.bonSortiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bonSortiesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBonSortieDto: UpdateBonSortieDto) {
    return this.bonSortiesService.update(+id, updateBonSortieDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bonSortiesService.remove(+id);
  }
}
