import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SalesChannelsService } from './sales-channels.service';
import { CreateSalesChannelDto } from './dto/create-sales-channel.dto';
import { UpdateSalesChannelDto } from './dto/update-sales-channel.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('sales-channels')
export class SalesChannelsController {
  constructor(private readonly salesChannelsService: SalesChannelsService) {}

  @MessagePattern({ cmd: 'create_selling' })
  async create(@Payload() createSalesChannelDto: CreateSalesChannelDto) {
    return await this.salesChannelsService.create(createSalesChannelDto);
  }

  @MessagePattern({ cmd: 'all_selling' })
  async findAll() {
    return await this.salesChannelsService.findAll();
  }

  @MessagePattern({ cmd: 'getOne_selling' })
  async findOne(@Payload() id: number) {
    return await this.salesChannelsService.findOne(+id);
  }

  @MessagePattern({ cmd: 'update_selling' })
  async update(@Payload() data : {id: number ,updateSalesChannelDto: UpdateSalesChannelDto}) {
    return await this.salesChannelsService.update(data.id, data.updateSalesChannelDto);
  }

  @MessagePattern({ cmd: 'delete_selling' })
  async remove(@Payload() id: number) {
    return await this.salesChannelsService.remove(+id);
  }
}
