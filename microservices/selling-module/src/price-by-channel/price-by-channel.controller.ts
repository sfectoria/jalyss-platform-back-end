// src/price-by-channel/price-by-channel.controller.ts
import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { PriceByChannelService } from './price-by-channel.service';
import { CreatePriceByChannelDto } from './dto/create-price-by-channel.dto';
import { UpdatePriceByChannelDto } from './dto/update-price-by-channel.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('price-by-channel')
export class PriceByChannelController {
  constructor(private readonly priceByChannelService: PriceByChannelService) {}

  @MessagePattern({ cmd: 'create_priceByChannel' })
  async create(@Payload() createPriceByChannelDto: CreatePriceByChannelDto) {
    return await this.priceByChannelService.create(createPriceByChannelDto);
  }

  @MessagePattern({ cmd: 'all_priceByChannels' })
  async findAll() {
    return await  this.priceByChannelService.findAll();
  }

  @MessagePattern({ cmd: 'getOne_priceByChannel' })
  async findOne(@Payload('id') id: number) {
    return await this.priceByChannelService.findOne(id);
  }

  @MessagePattern({ cmd: 'update_priceByChannel' })
  async update(@Payload() data: {id: number, updatePriceByChannelDto: UpdatePriceByChannelDto}) {
    return await  this.priceByChannelService.update(data.id, data.updatePriceByChannelDto);
  }

  @MessagePattern({ cmd: 'delete_priceByChannel' })
  async remove(@Payload('id') id: number) {
    return await this.priceByChannelService.remove(id);
  }
}
