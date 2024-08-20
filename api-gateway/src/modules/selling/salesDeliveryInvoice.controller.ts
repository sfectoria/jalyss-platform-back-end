import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SalesDeliveryInvoiceService } from './salesDeliveryInvoice.service';
import { CreateSalesDeliveryInvoiceDto } from './dto/create-selling.dto';
import { UpdateSalesDeliveryInvoiceDto } from './dto/update-selling.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('salesDeliveryInvoice')
@ApiTags('salesDeliveryInvoice')
export class SalesDeliveryInvoiceController {
  constructor(private readonly salesDeliveryInvoiceService: SalesDeliveryInvoiceService) {}

  @Post('create') 
  create(@Body() createSalesDeliveryInvoiceDto: CreateSalesDeliveryInvoiceDto) {
    return this.salesDeliveryInvoiceService.create(createSalesDeliveryInvoiceDto);
  }

  @Get('getAll')
  findAll() {
    return this.salesDeliveryInvoiceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.salesDeliveryInvoiceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateSalesDeliveryInvoiceDto: UpdateSalesDeliveryInvoiceDto) {
    return this.salesDeliveryInvoiceService.update(+id, updateSalesDeliveryInvoiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.salesDeliveryInvoiceService.remove(+id);
  }
}
