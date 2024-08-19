import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExitNoteService } from './exit-note.service';
import { CreateExitNoteDto } from './dto/create-stock.dto';
import { UpdateExitNoteDto } from './dto/update-stock.dto';
import { ApiTags } from '@nestjs/swagger';
import { Payload } from '@nestjs/microservices';

@Controller('exitNote')
@ApiTags('exitNote')
export class ExitNoteController {
  constructor(private readonly exitNoteService: ExitNoteService) {}

  @Post('create_exitNote')
  create(@Payload() createExitNoteDto: CreateExitNoteDto) {
    return this.exitNoteService.create(createExitNoteDto);
  }

  @Get('all_en')
  findAll() {
    return this.exitNoteService.findAll();
  }

  @Get(':id')
  findOne(@Payload() id: number) {
    return this.exitNoteService.findOne(+id);
  }

  @Patch(':id')
  update(@Payload() data : {id: number, updateExitNoteDto: UpdateExitNoteDto}) {
    return this.exitNoteService.update(data.id, data.updateExitNoteDto);
  }

  @Delete(':id')
  remove(@Payload() id: number) {
    return this.exitNoteService.remove(+id);
  }
}
