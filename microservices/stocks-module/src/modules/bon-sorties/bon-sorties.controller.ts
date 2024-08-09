import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BonSortiesService } from './bon-sorties.service';
import { CreateBonSortyDto } from './dto/create-bon-sorty.dto';
import { UpdateBonSortyDto } from './dto/update-bon-sorty.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('bon-sorties')
export class BonSortiesController {
  constructor(private readonly bonSortiesService: BonSortiesService) {}

  @MessagePattern({ cmd: 'create_bonSorty' })
  async create(@Payload() createBonSortyDto: CreateBonSortyDto) {
    return await this.bonSortiesService.create(createBonSortyDto);
  }

  @MessagePattern({ cmd: 'all_bonSorty' }) 
  async findAll() {
    return await this.bonSortiesService.findAll();
  }

  @MessagePattern({ cmd: 'one_bonSorty' })
  async findOne(@Payload() id: number) {
    return await this.bonSortiesService.findOne(+id);
  }

  @MessagePattern({ cmd: 'update_bonSorty' })
  async update(@Payload() data :{id: number,updateBonSortyDto: UpdateBonSortyDto}) {
    return await this.bonSortiesService.update(data.id, data.updateBonSortyDto);
  }

  @MessagePattern({ cmd: 'remove_bonSorty' })
  async remove(@Payload() id: number) {
    return await this.bonSortiesService.remove(+id);
  }
}
