import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PurchaseDeliveryInvoicesService } from './purchase-delivery-invoices.service';
import { CreatePurchaseDeliveryInvoiceDto } from './dto/create-purchase.dto';
import { UpdatePurchaseDeliveryInvoiceDto } from './dto/update-purchase.dto';
import { ApiTags } from '@nestjs/swagger';
import { Filters } from './entities/purchase.entity';

@Controller('purchase-delivery-invoices')
@ApiTags('Purchase Delivery Invoices')
export class PurchaseDeliveryInvoicesController {
  constructor(private readonly purchaseDeliveryInvoicesService: PurchaseDeliveryInvoicesService) {}

  @Post('create')
  create(@Body() createPurchaseDeliveryInvoiceDto: CreatePurchaseDeliveryInvoiceDto) {
    return this.purchaseDeliveryInvoicesService.create(createPurchaseDeliveryInvoiceDto);
  }

  @Get('getAll')
  findAll(@Query () filters : Filters) {
    return this.purchaseDeliveryInvoicesService.findAll(filters);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.purchaseDeliveryInvoicesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updatePurchaseDeliveryInvoiceDto: UpdatePurchaseDeliveryInvoiceDto) {
    return this.purchaseDeliveryInvoicesService.update(+id, updatePurchaseDeliveryInvoiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.purchaseDeliveryInvoicesService.remove(+id);
  }
}
