import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PurchaseDeliveryInvoiceService } from './purchase-delivery-invoice.service';
import { CreatePurchaseDeliveryInvoiceDto } from './dto/create-purchase-delivery-invoice.dto';
import { UpdatePurchaseDeliveryInvoiceDto } from './dto/update-purchase-delivery-invoice.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('purchase-delivery-invoice')
export class PurchaseDeliveryInvoiceController {
  constructor(private readonly purchaseDeliveryInvoiceService: PurchaseDeliveryInvoiceService) {}
  
  @MessagePattern({cmd: 'create_purchaseDeliveryInvoice'})
  async create(@Payload() createPurchaseDeliveryInvoiceDto: CreatePurchaseDeliveryInvoiceDto) {
    return await this.purchaseDeliveryInvoiceService.create(createPurchaseDeliveryInvoiceDto);
  }

  @MessagePattern({cmd: 'all_purchaseDeliveryInvoices'})
  async findAll() {
    return await this.purchaseDeliveryInvoiceService.findAll();
  }

  @MessagePattern({cmd: 'getOne_purchaseDeliveryInvoice'})
  async findOne(@Payload('id') id: number) {
    return await this.purchaseDeliveryInvoiceService.findOne(+id);
  }

  @MessagePattern({cmd: 'update_purchaseDeliveryInvoice'})
  async update(@Payload('id') data:{ id: number;  updatePurchaseDeliveryInvoiceDto: UpdatePurchaseDeliveryInvoiceDto}) {
    return await this.purchaseDeliveryInvoiceService.update(+data.id, data.updatePurchaseDeliveryInvoiceDto);
  }

  @MessagePattern({cmd: 'delete_purchaseDeliveryInvoice'})
  async remove(@Payload('id') id: number) {
    return await this.purchaseDeliveryInvoiceService.remove(+id);
  }
}
