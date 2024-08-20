import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PurchaseDeliveryNoteService } from './purchase-delivery-note.service';
import { CreatePurchaseDeliveryNoteDto } from './dto/create-purchase.dto';
import { UpdatePurchaseDeliveryNoteDto } from './dto/update-purchase.dto';

@Controller('purchase-delivery-note')
export class PurchaseDeliveryNoteController {
  constructor(private readonly purchaseDeliveryNoteService: PurchaseDeliveryNoteService) {}

  @Post()
  create(@Body() createPurchaseDeliveryNoteDto: CreatePurchaseDeliveryNoteDto) {
    return this.purchaseDeliveryNoteService.create(createPurchaseDeliveryNoteDto);
  }

  @Get()
  findAll() {
    return this.purchaseDeliveryNoteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.purchaseDeliveryNoteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePurchaseDeliveryNoteDto: UpdatePurchaseDeliveryNoteDto) {
    return this.purchaseDeliveryNoteService.update(+id, updatePurchaseDeliveryNoteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.purchaseDeliveryNoteService.remove(+id);
  }
}
