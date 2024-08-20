import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateSalesInvoiceDto } from './dto/create-selling.dto';
import { ApiTags } from '@nestjs/swagger';
import { UpdateSalesDeliveryInvoiceDto, UpdateSalesInvioceDto } from './dto/update-selling.dto';
import { SalesInvoicesService } from './sales-invioces.service';
@Controller('sales-invoices')
@ApiTags('sales-invoices')
export class SalesInvoicesController {
  constructor(private readonly salesInvoicesService: SalesInvoicesService
  ) {}

  @Post('create')
  create(@Body() createSalesInvoiceDto: CreateSalesInvoiceDto) {
    return this.salesInvoicesService.create(createSalesInvoiceDto);
  }

  @Get('getAll')
  findAll() {
    return this.salesInvoicesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.salesInvoicesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateSalesInvoiceDto: UpdateSalesInvioceDto) {
    return this.salesInvoicesService.update(+id, updateSalesInvoiceDto);
  }

  
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.salesInvoicesService.remove(+id);
  }
}
