import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReceiptNoteService } from './receipt-note.service';
import { CreateReceiptNoteDto } from './dto/create-receipt-note.dto';
import { UpdateReceiptNoteDto } from './dto/update-receipt-note.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('receipt-note')
export class ReceiptNoteController {
  constructor(private readonly receiptNoteService: ReceiptNoteService) {}

  @MessagePattern({ cmd: 'create_receiptNote' })
  async create(@Payload() createReceiptNoteDto: CreateReceiptNoteDto) {
    return await this.receiptNoteService.create(createReceiptNoteDto);
  }

  @MessagePattern({ cmd : 'all_receiptNotes' })
  async findAll() {
    return await this.receiptNoteService.findAll();
  }

  @MessagePattern({ cmd : 'getOne_ReceiptNote' })
  async findOne(@Payload() id: number) {
    return await this.receiptNoteService.findOne(+id);
  }

  @MessagePattern({ cmd : 'update_ReceiptNote' })
  async update(@Payload()  data :{id: number, updateReceiptNoteDto: UpdateReceiptNoteDto}) {
    return await this.receiptNoteService.update(data.id, data.updateReceiptNoteDto);
  }

  @MessagePattern({ cmd : 'delete_ReceiptNote' })
  async remove(@Payload() id: number) {
    return await this.receiptNoteService.remove(+id);
  }
}
