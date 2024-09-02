import { Controller, Get, Post, Body, Patch, Delete } from '@nestjs/common';
import { PurchaseDeliveryNoteService } from './purchase-delivery-note.service';
import { CreatePurchaseDeliveryNoteDto } from './dto/create-purchase-delivery-note.dto';
import { UpdatePurchaseDeliveryNoteDto } from './dto/update-purchase-delivery-note.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { Filters } from './entities/purchase-delivery-note.entity';

@Controller('purchase-delivery-note')
export class PurchaseDeliveryNoteController {
  constructor(private readonly purchaseDeliveryNoteService: PurchaseDeliveryNoteService) {}

  @MessagePattern({cmd: 'create_purchaseDeliveryNote'})
  async create(@Payload() createPurchaseDeliveryNoteDto: CreatePurchaseDeliveryNoteDto) {
    return await this.purchaseDeliveryNoteService.create(createPurchaseDeliveryNoteDto);
  }

  @MessagePattern({cmd: 'all_purchaseDeliveryNotes'})
  async findAll(@Payload() filters : Filters) {
    return await this.purchaseDeliveryNoteService.findAll(filters);
  }

  @MessagePattern({cmd: 'getOne_purchaseDeliveryNote'})
  async findOne(@Payload('id') id: number) {
    return await this.purchaseDeliveryNoteService.findOne(+id);
  }

  @MessagePattern({cmd: 'update_purchaseDeliveryNote'})
  async update(@Payload() data:{id: number; updatePurchaseDeliveryNoteDto: UpdatePurchaseDeliveryNoteDto}) {
    return await this.purchaseDeliveryNoteService.update(data.id, data.updatePurchaseDeliveryNoteDto);
  }

  @MessagePattern({cmd: 'delete_purchaseDeliveryNote'})
  async remove(@Payload('id') id: number) {
    return await this.purchaseDeliveryNoteService.remove(+id);
  }
}
