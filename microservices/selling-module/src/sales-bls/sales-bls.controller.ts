import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SalesBlsService } from './sales-bls.service';
import { CreateSalesBlDto } from './dto/create-sales-bl.dto';
import { UpdateSalesBlDto } from './dto/update-sales-bl.dto';
import { MessagePattern } from '@nestjs/microservices';

@Controller('sales-bls')
export class SalesBlsController {
  constructor(private readonly salesBlsService: SalesBlsService) {}

  @MessagePattern({ cmd: 'create_salesbls' })
  async create(@Body() createSalesBlDto: CreateSalesBlDto) {
    return await this.salesBlsService.create(createSalesBlDto);
  }

  @MessagePattern({ cmd: 'all_salesbls' })
  async findAll() {
    return await this.salesBlsService.findAll();
  }

  @MessagePattern({ cmd: 'gteOne_salesbls' })
  async findOne(@Param('id') id: string) {
    return await this.salesBlsService.findOne(+id);
  }

  @MessagePattern({ cmd: 'update_salesbls' })
  async update(@Param('id') id: string, @Body() updateSalesBlDto: UpdateSalesBlDto) {
    return await this.salesBlsService.update(+id, updateSalesBlDto);
  }

  @MessagePattern({ cmd: 'delete_salesbls' })
  async remove(@Param('id') id: string) {
    return await this.salesBlsService.remove(+id);
  }
}
