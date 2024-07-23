import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BonSortiesService } from './bon-sorties.service';
import { CreateBonSortyDto } from './dto/create-bon-sorty.dto';
import { UpdateBonSortyDto } from './dto/update-bon-sorty.dto';

@Controller('bon-sorties')
export class BonSortiesController {
  constructor(private readonly bonSortiesService: BonSortiesService) {}

  @Post()
  create(@Body() createBonSortyDto: CreateBonSortyDto) {
    return this.bonSortiesService.create(createBonSortyDto);
  }

  @Get()
  findAll() {
    return this.bonSortiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bonSortiesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBonSortyDto: UpdateBonSortyDto) {
    return this.bonSortiesService.update(+id, updateBonSortyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bonSortiesService.remove(+id);
  }
}
