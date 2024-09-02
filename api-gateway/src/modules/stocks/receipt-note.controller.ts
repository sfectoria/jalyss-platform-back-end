import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReceiptNoteService } from './receipt-note.service';
import { CreateReceiptNoteDto } from '../stocks/dto/create-stock.dto';
import { UpdateReceiptNoteDto } from '../stocks/dto/update-stock.dto';
import { ApiTags } from '@nestjs/swagger';
import { Payload } from '@nestjs/microservices';

@ApiTags('receiptNote')

@Controller('receiptNote')
export class ReceiptNoteController {
  constructor(private readonly receiptNoteService: ReceiptNoteService) {}

  @Post('create_rn')
  create(@Body() createReceiptNoteDto: CreateReceiptNoteDto) {
    return this.receiptNoteService.create(createReceiptNoteDto);
  }

  @Get('all_rn')
  findAll() {
    return this.receiptNoteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    console.log('hi',id);
    
    return this.receiptNoteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number,@Body() updateReceiptNoteDto: UpdateReceiptNoteDto) {
    return this.receiptNoteService.update(id, updateReceiptNoteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    console.log('give me the id ',id);
    
    return this.receiptNoteService.remove(+id);
  }
}
