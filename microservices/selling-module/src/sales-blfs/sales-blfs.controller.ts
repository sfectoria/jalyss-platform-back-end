import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SalesBlfsService } from './sales-blfs.service';
import { CreateSalesBlfDto } from './dto/create-sales-blf.dto';
import { UpdateSalesBlfDto } from './dto/update-sales-blf.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('sales-blfs')
export class SalesBlfsController {
  constructor(private readonly salesBlfsService: SalesBlfsService) {}

  @MessagePattern({cmd : 'create_salesblf'})
  async create(@Payload() createSalesBlfDto: CreateSalesBlfDto) {
    return await this.salesBlfsService.create(createSalesBlfDto);
  }

  @MessagePattern({cmd :'all_salesblfs'})
  async findAll() {
    return await this.salesBlfsService.findAll();
  }

  @MessagePattern({cmd :'getOne_salesblf'})
  async findOne(@Payload() data :{id : number}) {
    return await this.salesBlfsService.findOne(data.id);
  }

  @MessagePattern({cmd : 'update_salesblf'})
  async update(@Payload() data :{ id: number, updateSalesBlfDto: UpdateSalesBlfDto}) {
    return await this.salesBlfsService.update(data.id, data.updateSalesBlfDto);
  }

  @MessagePattern({cmd :'delete_salesblf'})
  async remove(@Payload() data : { id: number}) {
    return await this.salesBlfsService.remove(data.id);
  }
}
