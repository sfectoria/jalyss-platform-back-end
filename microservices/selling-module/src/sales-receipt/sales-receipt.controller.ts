import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SalesReceiptService } from './sales-receipt.service';
import { CreateSalesReceiptDto } from './dto/create-sales-receipt.dto';
import { UpdateSalesReceiptDto } from './dto/update-sales-receipt.dto';

@Controller('sales-receipt')
export class SalesReceiptController {
  constructor(private readonly salesReceiptService: SalesReceiptService) {}

  @Post()
  create(@Body() createSalesReceiptDto: CreateSalesReceiptDto) {
    return this.salesReceiptService.create(createSalesReceiptDto);
  }

  @Get()
  findAll() {
    return this.salesReceiptService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.salesReceiptService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSalesReceiptDto: UpdateSalesReceiptDto) {
    return this.salesReceiptService.update(+id, updateSalesReceiptDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.salesReceiptService.remove(+id);
  }
}
