import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExitNoteService } from './exit-note.service';
import { CreateExitNoteDto } from './dto/create-stock.dto';
import { UpdateExitNoteDto } from './dto/update-stock.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('exitNote')
@ApiTags('exitNote')
export class ExitNoteController {
  constructor(private readonly exitNoteService: ExitNoteService) {}

  @Post('create_exitNote')
  create(@Body() createExitNoteDto: CreateExitNoteDto) {
    return this.exitNoteService.create(createExitNoteDto);
  }

  @Get('all_en')
  findAll() {
    return this.exitNoteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.exitNoteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateExitNoteDto: UpdateExitNoteDto) {
    return this.exitNoteService.update(+id, updateExitNoteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.exitNoteService.remove(+id);
  }
}
