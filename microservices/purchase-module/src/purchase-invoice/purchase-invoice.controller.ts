import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PurchaseInvoiceService } from './purchase-invoice.service';
import { CreatePurchaseInvoiceDto } from './dto/create-purchase-invoice.dto';
import { UpdatePurchaseInvoiceDto } from './dto/update-purchase-invoice.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('purchase-invoice')
export class PurchaseInvoiceController {
  constructor(private readonly purchaseInvoiceService: PurchaseInvoiceService) {}

  @MessagePattern({cmd: 'create_purchaseInvoice'})
  async create(@Payload() createPurchaseInvoiceDto: CreatePurchaseInvoiceDto) {
    return await this.purchaseInvoiceService.create(createPurchaseInvoiceDto);
  }

  @MessagePattern({cmd: 'all_purchaseInvoices'})
  async findAll() {
    return await this.purchaseInvoiceService.findAll();
  }

  @MessagePattern({cmd: 'getOne_purchaseInvoice'})
  async findOne(@Payload('id') id: number) {
    return await this.purchaseInvoiceService.findOne(+id);
  }

  @MessagePattern({cmd: 'update_purchaseInvoice'})
   async update(@Payload('id') data:{id: number; updatePurchaseInvoiceDto: UpdatePurchaseInvoiceDto}) {
    return await this.purchaseInvoiceService.update(+data.id,  data.updatePurchaseInvoiceDto);
  }

  @MessagePattern({cmd: 'delete_purchaseInvoice'})
  async remove(@Payload('id') id: number) {
    return await this.purchaseInvoiceService.remove(+id);
  }
}
