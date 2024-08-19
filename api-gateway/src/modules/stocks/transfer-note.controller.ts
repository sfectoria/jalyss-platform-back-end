import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TransferNoteService } from './transfer-note.service';
import { CreateTransferNoteDto } from './dto/create-stock.dto';
import { UpdateTransferNoteDto } from './dto/update-stock.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('transfer-note')
@ApiTags('transferNote')
export class TransferNoteController {
  constructor(private readonly transferNoteService: TransferNoteService) {}

  @Post('createTN')
  create(@Body() createTransferNoteDto: CreateTransferNoteDto) {
    return this.transferNoteService.create(createTransferNoteDto);
  }

  @Get('getAll')
  findAll() {
    return this.transferNoteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.transferNoteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateTransferNoteDto: UpdateTransferNoteDto) {
    return this.transferNoteService.update(id,updateTransferNoteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.transferNoteService.remove(+id);
  }
}
