import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BonSortiesService } from './bon-sorties.service';
import { CreateBonSortyDto } from './dto/create-bon-sorty.dto';
import { UpdateBonSortyDto } from './dto/update-bon-sorty.dto';
import { MessagePattern } from '@nestjs/microservices';

@Controller('bon-sorties')
export class BonSortiesController {
  constructor(private readonly bonSortiesService: BonSortiesService) {}

  @MessagePattern({ cmd: 'create_bonSorty' })
  async create(@Body() createBonSortyDto: CreateBonSortyDto) {
    return await this.bonSortiesService.create(createBonSortyDto);
  }

  @MessagePattern({ cmd: 'all_bonSorty' }) 
  async findAll() {
    return await this.bonSortiesService.findAll();
  }

  @MessagePattern({ cmd: 'one_bonSorty' })
  async findOne(@Param('id') id: string) {
    return await this.bonSortiesService.findOne(+id);
  }

  @MessagePattern({ cmd: 'update_bonSorty' })
  async update(@Param('id') id: string, @Body() updateBonSortyDto: UpdateBonSortyDto) {
    return await this.bonSortiesService.update(+id, updateBonSortyDto);
  }

  @MessagePattern({ cmd: 'remove_bonSorty' })
  async remove(@Param('id') id: string) {
    return await this.bonSortiesService.remove(+id);
  }
}
