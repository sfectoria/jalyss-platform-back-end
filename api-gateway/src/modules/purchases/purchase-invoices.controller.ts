import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PurchaseInvoicesService } from './purchase-invoices.service';
import { CreatePurchaseInvoiceDto } from './dto/create-purchase.dto';
import { UpdatePurchaseInvoiceDto } from './dto/update-purchase.dto';

@Controller('purchase-invoices')
export class PurchaseInvoicesController {
  constructor(private readonly purchaseInvoicesService: PurchaseInvoicesService) {}

  @Post()
  create(@Body() createPurchaseInvoiceDto: CreatePurchaseInvoiceDto) {
    return this.purchaseInvoicesService.create(createPurchaseInvoiceDto);
  }

  @Get()
  findAll() {
    return this.purchaseInvoicesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.purchaseInvoicesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePurchaseInvoiceDto: UpdatePurchaseInvoiceDto) {
    return this.purchaseInvoicesService.update(+id, updatePurchaseInvoiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.purchaseInvoicesService.remove(+id);
  }
}
