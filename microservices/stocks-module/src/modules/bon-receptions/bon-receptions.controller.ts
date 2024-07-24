import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BonReceptionsService } from './bon-receptions.service';
import { CreateBonReceptionDto } from './dto/create-bon-reception.dto';
import { UpdateBonReceptionDto } from './dto/update-bon-reception.dto';
import { MessagePattern } from '@nestjs/microservices';

@Controller('bon-receptions')
export class BonReceptionsController {
  constructor(private readonly bonReceptionsService: BonReceptionsService) {}

  @MessagePattern({ cmd: 'create_bonReception' })
  async create(@Body() createBonReceptionDto: CreateBonReceptionDto) {
    return await this.bonReceptionsService.create(createBonReceptionDto);
  }

  @MessagePattern({ cmd : 'all_bonReceptions' })
  async findAll() {
    return await this.bonReceptionsService.findAll();
  }

  @MessagePattern({ cmd : 'getOne_bonReception' })
  async findOne(@Param('id') id: string) {
    return await this.bonReceptionsService.findOne(+id);
  }

  @MessagePattern({ cmd : 'update_bonReception' })
  async update(@Param('id') id: string, @Body() updateBonReceptionDto: UpdateBonReceptionDto) {
    return await this.bonReceptionsService.update(+id, updateBonReceptionDto);
  }

  @MessagePattern({ cmd : 'delete_bonReception' })
  async remove(@Param('id') id: string) {
    return await this.bonReceptionsService.remove(+id);
  }
}
