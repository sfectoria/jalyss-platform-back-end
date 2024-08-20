import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PurchaseInvoiceService } from './purchase-invoice.service';
import { CreatePurchaseInvoiceDto } from './dto/create-purchase-invoice.dto';
import { UpdatePurchaseInvoiceDto } from './dto/update-purchase-invoice.dto';
import { Payload } from '@nestjs/microservices';

@Controller('purchase-invoice')
export class PurchaseInvoiceController {
  constructor(private readonly purchaseInvoiceService: PurchaseInvoiceService) {}

  @Post()
  create(@Payload() createPurchaseInvoiceDto: CreatePurchaseInvoiceDto) {
    return this.purchaseInvoiceService.create(createPurchaseInvoiceDto);
  }

  @Get()
  findAll() {
    return this.purchaseInvoiceService.findAll();
  }

  @Get(':id')
  findOne(@Payload('id') id: string) {
    return this.purchaseInvoiceService.findOne(+id);
  }

  @Patch(':id')
  update(@Payload('id') id: string, @Body() updatePurchaseInvoiceDto: UpdatePurchaseInvoiceDto) {
    return this.purchaseInvoiceService.update(+id, updatePurchaseInvoiceDto);
  }

  @Delete(':id')
  remove(@Payload('id') id: string) {
    return this.purchaseInvoiceService.remove(+id);
  }
}
