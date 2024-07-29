import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SalesInvoicesService } from './sales-invoices.service';
import { CreateSalesInvoiceDto } from './dto/create-sales-invoice.dto';
import { UpdateSalesInvoiceDto } from './dto/update-sales-invoice.dto';

@Controller('sales-invoices')
export class SalesInvoicesController {
  constructor(private readonly salesInvoicesService: SalesInvoicesService) {}

  @Post()
  create(@Body() createSalesInvoiceDto: CreateSalesInvoiceDto) {
    return this.salesInvoicesService.create(createSalesInvoiceDto);
  }

  @Get()
  findAll() {
    return this.salesInvoicesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.salesInvoicesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSalesInvoiceDto: UpdateSalesInvoiceDto) {
    return this.salesInvoicesService.update(+id, updateSalesInvoiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.salesInvoicesService.remove(+id);
  }
}
