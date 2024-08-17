import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReceiptNoteService } from './receipt-note.service';
import { CreateReceiptNoteDto } from '../stocks/dto/create-stock.dto';
import { UpdateReceiptNoteDto } from '../stocks/dto/update-stock.dto';
import { ApiTags } from '@nestjs/swagger';
import { Payload } from '@nestjs/microservices';

@Controller('receiptNote')
@ApiTags('receiptNote')
export class ReceiptNoteController {
  constructor(private readonly receiptNoteService: ReceiptNoteService) {}

  @Post('create_rn')
  create(@Payload() createReceiptNoteDto: CreateReceiptNoteDto) {
    return this.receiptNoteService.create(createReceiptNoteDto);
  }

  @Get('all_rn')
  findAll() {
    return this.receiptNoteService.findAll();
  }

  @Get(':id')
  findOne(@Payload() id: number) {
    return this.receiptNoteService.findOne(+id);
  }

  @Patch(':id')
  update(@Payload() data : {id: number,  updateReceiptNoteDto: UpdateReceiptNoteDto}) {
    return this.receiptNoteService.update(data.id, data.updateReceiptNoteDto);
  }

  @Delete(':id')
  remove(@Payload() id: number) {
    return this.receiptNoteService.remove(+id);
  }
}
