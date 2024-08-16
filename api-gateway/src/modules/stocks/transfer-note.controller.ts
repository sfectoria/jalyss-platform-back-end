import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TransferNoteService } from './transfer-note.service';
import { CreateTransferNoteDto } from './dto/create-stock.dto';
import { UpdateTransferNoteDto } from './dto/update-stock.dto';
import { ApiTags } from '@nestjs/swagger';
import { Payload } from '@nestjs/microservices';

@Controller('transfer-note')
@ApiTags('transferNote')
export class TransferNoteController {
  constructor(private readonly transferNoteService: TransferNoteService) {}

  @Post('createTN')
  create(@Payload() createTransferNoteDto: CreateTransferNoteDto) {
    return this.transferNoteService.create(createTransferNoteDto);
  }

  @Get('getAll')
  findAll() {
    return this.transferNoteService.findAll();
  }

  @Get(':id')
  findOne(@Payload() id: number) {
    return this.transferNoteService.findOne(+id);
  }

  @Patch(':id')
  update(@Payload() data :{id: number, updateTransferNoteDto: UpdateTransferNoteDto}) {
    return this.transferNoteService.update(data.id, data.updateTransferNoteDto);
  }

  @Delete(':id')
  remove(@Payload() id: number) {
    return this.transferNoteService.remove(+id);
  }
}
