import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { CreateSalesReceiptDto } from './dto/create-selling.dto';
import { UpdateSalesReceiptDto } from './dto/update-selling.dto';
import { ApiTags } from '@nestjs/swagger';
import { SalesReceiptService } from './salesReceipt.service';
import { Filters } from './entities/selling.entity';

@Controller('sales-receipt')
@ApiTags('sales-receipt')
export class SalesReceiptController {
  constructor(private readonly salesReceiptService: SalesReceiptService) {}

  @Post('create')
  create(@Body() createSalesReceiptDto: CreateSalesReceiptDto) {
    return this.salesReceiptService.create(createSalesReceiptDto);
  }

  @Get('getAll')
  findAll(filters:Filters) {
    return this.salesReceiptService.findAll(filters);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.salesReceiptService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body()updateSalesReceiptDto:UpdateSalesReceiptDto) {
    return this.salesReceiptService.update(+id,updateSalesReceiptDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.salesReceiptService.remove(+id);
  }
}
