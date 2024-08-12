import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BonSortiesService } from './bon-sorties.service';
import { CreateBonSortieDto } from './dto/create-stock.dto';
import { UpdateBonSortieDto } from './dto/update-stock.dto';
import { ApiTags } from '@nestjs/swagger';
import { Payload } from '@nestjs/microservices';

@Controller('bonSorties')
@ApiTags('bonSorties')
export class BonSortiesController {
  constructor(private readonly bonSortiesService: BonSortiesService) {}

  @Post('create_bs')
  create(@Payload() createBonSortieDto: CreateBonSortieDto) {
    return this.bonSortiesService.create(createBonSortieDto);
  }

  @Get('all_bs')
  findAll() {
    return this.bonSortiesService.findAll();
  }

  @Get(':id')
  findOne(@Payload() id: number) {
    return this.bonSortiesService.findOne(+id);
  }

  @Patch(':id')
  update(@Payload() data : {id: number, updateBonSortieDto: UpdateBonSortieDto}) {
    return this.bonSortiesService.update(data.id, data.updateBonSortieDto);
  }

  @Delete(':id')
  remove(@Payload() id: number) {
    return this.bonSortiesService.remove(+id);
  }
}
