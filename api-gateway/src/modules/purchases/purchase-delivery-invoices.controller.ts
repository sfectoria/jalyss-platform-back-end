import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PurchaseDeliveryInvoicesService } from './purchase-delivery-invoices.service';
import { CreatePurchaseDeliveryInvoiceDto } from './dto/create-purchase.dto';
import { UpdatePurchaseDeliveryInvoiceDto } from './dto/update-purchase.dto';

@Controller('purchase-delivery-invoices')
export class PurchaseDeliveryInvoicesController {
  constructor(private readonly purchaseDeliveryInvoicesService: PurchaseDeliveryInvoicesService) {}

  @Post()
  create(@Body() createPurchaseDeliveryInvoiceDto: CreatePurchaseDeliveryInvoiceDto) {
    return this.purchaseDeliveryInvoicesService.create(createPurchaseDeliveryInvoiceDto);
  }

  @Get()
  findAll() {
    return this.purchaseDeliveryInvoicesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.purchaseDeliveryInvoicesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePurchaseDeliveryInvoiceDto: UpdatePurchaseDeliveryInvoiceDto) {
    return this.purchaseDeliveryInvoicesService.update(+id, updatePurchaseDeliveryInvoiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.purchaseDeliveryInvoicesService.remove(+id);
  }
}
