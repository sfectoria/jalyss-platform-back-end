import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SalesInviocesService } from './sales-invioces.service';
import { CreateSalesInvoiceDto } from './dto/create-selling.dto';
import { UpdateSalesInvioceDto } from './dto/update-selling.dto';
import { ApiTags } from '@nestjs/swagger';
import { Payload } from '@nestjs/microservices';

@Controller('sales-invioces')
@ApiTags('sales-invioces')
export class SalesInviocesController {
  constructor(private readonly salesInviocesService: SalesInviocesService) {}

  @Post('create')
  create(@Body() createSalesInvioceDto: CreateSalesInvoiceDto) {
    console.log('createSalesInvioceDto:', createSalesInvioceDto);
    return this.salesInviocesService.create(createSalesInvioceDto);
  }

  @Get('getAll')
  findAll() {
    return this.salesInviocesService.findAll();
  }

  @Get(':id')
  findOne(@Payload() id: number) {
    return this.salesInviocesService.findOne(+id);
  }

  @Patch(':id')
  update(@Payload() data : {id: number, updateSalesInvioceDto: UpdateSalesInvioceDto}) {
    return this.salesInviocesService.update(data.id, data.updateSalesInvioceDto);
  }

  @Delete(':id')
  remove(@Payload() id: number) {
    return this.salesInviocesService.remove(+id);
  }
}
