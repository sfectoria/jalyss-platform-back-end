import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SalesChannelsService } from './sales-channels.service';
import { CreateSalesChannelDto } from './dto/create-sales-channel.dto';
import { UpdateSalesChannelDto } from './dto/update-sales-channel.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { FiltersChannels } from './entities/sales-channel.entity';

@Controller('sales-channels')
export class SalesChannelsController {
  constructor(private readonly salesChannelsService: SalesChannelsService) {}

  @MessagePattern({ cmd: 'create_salesChannel' })
  async create(@Payload() createSalesChannelDto: CreateSalesChannelDto) {
    return await this.salesChannelsService.create(createSalesChannelDto);
  }

  @MessagePattern({ cmd: 'all_salesChannels' })
  async findAll(@Payload() filters:FiltersChannels) {
    return await this.salesChannelsService.findAll();
  }

  @MessagePattern({ cmd: 'getOne_salesChannel' })
  async findOne(@Payload() id: number) {
    return await this.salesChannelsService.findOne(+id);
  }

  @MessagePattern({ cmd: 'update_salesChannel' })
  async update(@Payload() data : {id: number ,updateSalesChannelDto: UpdateSalesChannelDto}) {
    return await this.salesChannelsService.update(data.id, data.updateSalesChannelDto);
  }

  @MessagePattern({ cmd: 'delete_salesChannel' })
  async remove(@Payload() id: number) {
    return await this.salesChannelsService.remove(+id);
  }
}
