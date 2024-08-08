import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BonRetoursService } from './bon-retours.service';
import { CreateBonRetourDto } from './dto/create-bon-retour.dto';
import { UpdateBonRetourDto } from './dto/update-bon-retour.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('bon-retours')
export class BonRetoursController {
  constructor(private readonly bonRetoursService: BonRetoursService) {}

  @MessagePattern({ cmd:'create_bon_retour'})
  async create(@Payload() createBonRetourDto: CreateBonRetourDto) {
    return await this.bonRetoursService.create(createBonRetourDto);
  }

  @MessagePattern({cmd:'get_all_bon_retours'})
  async findAll() {
    return await this.bonRetoursService.findAll();
  }

  @MessagePattern({ cmd:'get_one_bon_retour'})
  async findOne(@Payload() id: number) {
    return await this.bonRetoursService.findOne(+id);
  }

  @MessagePattern({ cmd:'update_bon_retour'})
  async update(@Payload() data: {id: number, updateBonRetourDto: UpdateBonRetourDto}) {
    return await this.bonRetoursService.update(data.id, data.updateBonRetourDto);
  }

  @MessagePattern({ cmd:'delete_bon_retour'})
  async remove(@Payload() id: number) {
    return await this.bonRetoursService.remove(+id);
  }
}
