import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReceiptNoteService } from './receipt-note.service';
import { CreateReceiptNoteDto } from './dto/create-receipt-note.dto';
import { UpdateReceiptNoteDto } from './dto/update-receipt-note.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { FiltersReceipt } from './entities/receipt-note.entity';

@Controller('receipt-note')
export class ReceiptNoteController {
  constructor(private readonly receiptNoteService: ReceiptNoteService) {}

  @MessagePattern({ cmd: 'create_receiptNote' })
  async create(@Payload() createReceiptNoteDto: CreateReceiptNoteDto) {
    return await this.receiptNoteService.create(createReceiptNoteDto);
  }

  @MessagePattern({ cmd : 'all_receiptNotes' })
  async findAll(@Payload() filters?:FiltersReceipt) {
    return await this.receiptNoteService.findAll(filters);
  }

  @MessagePattern({ cmd : 'getOne_receiptNote' })
  async findOne(@Payload()  data: { id: number }) {
    console.log('hello',data);
    
    return await this.receiptNoteService.findOne(data.id);
  }

  @MessagePattern({ cmd : 'update_receiptNote' })
  async update(@Payload()  data :{id: number, updateReceiptNoteDto: UpdateReceiptNoteDto}) {
    return await this.receiptNoteService.update(data.id, data.updateReceiptNoteDto);
  }

  @MessagePattern({ cmd : 'delete_receiptNote' })
  async remove(@Payload() data:{id: number}) {  
    return await this.receiptNoteService.remove(data.id);
  }
}
