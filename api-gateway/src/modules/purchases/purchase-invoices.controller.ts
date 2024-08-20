import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PurchaseInvoicesService } from './purchase-invoices.service';
import { CreatePurchaseInvoiceDto } from './dto/create-purchase.dto';
import { UpdatePurchaseInvoiceDto } from './dto/update-purchase.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('purchase-invoices')
@ApiTags('purchase Invoices')
export class PurchaseInvoicesController {
  constructor(private readonly purchaseInvoicesService: PurchaseInvoicesService) {}

  @Post('create') 
  create(@Body() createPurchaseInvoiceDto: CreatePurchaseInvoiceDto) {
    return this.purchaseInvoicesService.create(createPurchaseInvoiceDto);
  }

  @Get('getAll')
  findAll() {
    return this.purchaseInvoicesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.purchaseInvoicesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updatePurchaseInvoiceDto: UpdatePurchaseInvoiceDto) {
    return this.purchaseInvoicesService.update(+id, updatePurchaseInvoiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.purchaseInvoicesService.remove(+id);
  }
}
