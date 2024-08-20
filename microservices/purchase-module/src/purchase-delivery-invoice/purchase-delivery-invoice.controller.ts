import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PurchaseDeliveryInvoiceService } from './purchase-delivery-invoice.service';
import { CreatePurchaseDeliveryInvoiceDto } from './dto/create-purchase-delivery-invoice.dto';
import { UpdatePurchaseDeliveryInvoiceDto } from './dto/update-purchase-delivery-invoice.dto';

@Controller('purchase-delivery-invoice')
export class PurchaseDeliveryInvoiceController {
  constructor(private readonly purchaseDeliveryInvoiceService: PurchaseDeliveryInvoiceService) {}

  @Post()
  create(@Body() createPurchaseDeliveryInvoiceDto: CreatePurchaseDeliveryInvoiceDto) {
    return this.purchaseDeliveryInvoiceService.create(createPurchaseDeliveryInvoiceDto);
  }

  @Get()
  findAll() {
    return this.purchaseDeliveryInvoiceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.purchaseDeliveryInvoiceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePurchaseDeliveryInvoiceDto: UpdatePurchaseDeliveryInvoiceDto) {
    return this.purchaseDeliveryInvoiceService.update(+id, updatePurchaseDeliveryInvoiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.purchaseDeliveryInvoiceService.remove(+id);
  }
}
