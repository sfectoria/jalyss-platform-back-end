import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BonComndsService } from './bon-comnds.service';
import { CreateBonComndDto } from './dto/create-bon-comnd.dto';
import { UpdateBonComndDto } from './dto/update-bon-comnd.dto';
import { MessagePattern } from '@nestjs/microservices';

@Controller('bon-comnds')
export class BonComndsController {
  constructor(private readonly bonComndsService: BonComndsService) {}

  @MessagePattern({ cmd: 'create_bonComnd' })
  async create(@Body() createBonComndDto: CreateBonComndDto) {
    return await this.bonComndsService.create(createBonComndDto);
  }

  @MessagePattern({ cmd: 'all_bonComnds' })
  async findAll() {
    return await this.bonComndsService.findAll();
  }

  @MessagePattern({ cmd: 'getOne_bonComnd' })
  async findOne(@Param('id') id: string) {
    return await this.bonComndsService.findOne(+id);
  }

  @MessagePattern({ cmd: 'update_bonComnd' })
  async update(@Param('id') id: string, @Body() updateBonComndDto: UpdateBonComndDto) {
    return await this.bonComndsService.update(+id, updateBonComndDto);
  }

  @MessagePattern({ cmd: 'delete_bonComnd' })
  async remove(@Param('id') id: string) {
    return await this.bonComndsService.remove(+id);
  }
}
