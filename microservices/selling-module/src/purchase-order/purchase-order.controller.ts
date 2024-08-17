import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PurchaseOrderService } from './purchase-order.service';
import { CreatePurchaseOrderDto } from './dto/create-purchase-order.dto';
import {  UpdatePurchaseOrderDto } from './dto/update-purchase-order.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('purchase-order')
export class PurchaseOrderController {
  constructor(private readonly purchaseOredrService: PurchaseOrderService) {}

  @MessagePattern({ cmd: 'create_purchaseOrder' })
  async create(@Payload() createPurchaseOrderDto: CreatePurchaseOrderDto) {
    return await this.purchaseOredrService.create(createPurchaseOrderDto);
  }

  @MessagePattern({ cmd: 'all_purchaseOredr' })
  async findAll() {
    return await this.purchaseOredrService.findAll();
  }

  @MessagePattern({ cmd: 'getOne_purchaseOrder' })
  async findOne(@Payload() id: number) {
    return await this.purchaseOredrService.findOne(+id);
  }

  @MessagePattern({ cmd: 'update_purchaseOrder' })
  async update(@Payload() data : {id: number, updatePurchaseOrderDto: UpdatePurchaseOrderDto}) {
    return await this.purchaseOredrService.update(data.id, data.updatePurchaseOrderDto);
  }

  @MessagePattern({ cmd: 'delete_purchaseOrder' })
  async remove(@Payload() id: number) {
    return await this.purchaseOredrService.remove(+id);
  }
}
