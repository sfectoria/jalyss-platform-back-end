import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SalesInvoicesService } from './sales-invoices.service';
import { CreateSalesInvoiceDto } from './dto/create-selling.dto';
import { UpdateSalesInvoiceDto } from './dto/update-selling.dto';
import { ApiTags } from '@nestjs/swagger';
import { Payload } from '@nestjs/microservices';

@Controller('sales-invoices')
@ApiTags('sales-invoices')
export class SalesInvoicesController {
  constructor(private readonly salesInvoicesService: SalesInvoicesService) {}

  @Post('create')
  create(@Body() createSalesInvoiceDto: CreateSalesInvoiceDto) {
    return this.salesInvoicesService.create(createSalesInvoiceDto);
  }

  @Get('getAll')
  findAll() {
    return this.salesInvoicesService.findAll();
  }

  @Get(':id')
  findOne(@Payload() id: number) {
    return this.salesInvoicesService.findOne(+id);
  }

  @Patch(':id')
  update(@Payload() data : {id: number, updateSalesInvoiceDto: UpdateSalesInvoiceDto}) {
    return this.salesInvoicesService.update(data.id, data.updateSalesInvoiceDto);
  }

  @Delete(':id')
  remove(@Payload() id: number) {
    return this.salesInvoicesService.remove(+id);
  }
}
