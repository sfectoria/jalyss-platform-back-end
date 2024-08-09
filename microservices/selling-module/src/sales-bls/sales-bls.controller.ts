import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SalesBlsService } from './sales-bls.service';
import { CreateSalesBlDto } from './dto/create-sales-bl.dto';
import { UpdateSalesBlDto } from './dto/update-sales-bl.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('sales-bls')
export class SalesBlsController {
  constructor(private readonly salesBlsService: SalesBlsService) {}

  @MessagePattern({ cmd: 'create_salesbl' })
  async create(@Payload() createSalesBlDto: CreateSalesBlDto) {
    return await this.salesBlsService.create(createSalesBlDto);
  }

  @MessagePattern({ cmd: 'all_salesbls' })
  async findAll() {
    return await this.salesBlsService.findAll();
  }

  @MessagePattern({ cmd: 'gteOne_salesbl' })
  async findOne(@Payload() id: number) {
    return await this.salesBlsService.findOne(+id);
  }

  @MessagePattern({ cmd: 'update_salesbl' })
  async update(@Payload() data :{id: number, updateSalesBlDto: UpdateSalesBlDto}) {
    return await this.salesBlsService.update(data.id, data.updateSalesBlDto);
  }

  @MessagePattern({ cmd: 'delete_salesbl' })
  async remove(@Payload() id: number) {
    return await this.salesBlsService.remove(+id);
  }
}
