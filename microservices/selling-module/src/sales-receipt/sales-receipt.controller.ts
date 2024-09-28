import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SalesReceiptService } from './sales-receipt.service';
import { CreateSalesReceiptDto } from './dto/create-sales-receipt.dto';
import { UpdateSalesReceiptDto } from './dto/update-sales-receipt.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('sales-receipt')
export class SalesReceiptController {
  constructor(private readonly salesReceiptService: SalesReceiptService) {}

  @MessagePattern({cmd:'create_salesReceipt'})
  async create(@Payload() createSalesReceiptDto: CreateSalesReceiptDto) {
    return await this.salesReceiptService.create(createSalesReceiptDto);
  }

  @MessagePattern({cmd:'all_salesReceipt'})
  async findAll() {
    console.log('test');
    return await this.salesReceiptService.findAll();
  }

  @MessagePattern({cmd:'one_salesReceipt'})
  async findOne(@Payload() data:{id: number}) {
    return await  this.salesReceiptService.findOne(data.id);
  }

  @MessagePattern({cmd:'update_salesReceipt'})
  async update(@Param('id') id: string, @Body() updateSalesReceiptDto: UpdateSalesReceiptDto) {
    return await this.salesReceiptService.update(+id, updateSalesReceiptDto);
  }

  @MessagePattern({cmd:'delete_salesReceipt'})
  async remove(@Param('id') id: string) {
    return await this.salesReceiptService.remove(+id);
  }
}
