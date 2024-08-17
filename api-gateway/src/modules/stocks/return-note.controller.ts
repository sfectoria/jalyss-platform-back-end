import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReturnNoteService } from './return-note.service';
import { CreateReturnNoteDto } from './dto/create-stock.dto';
import { UpdateReturnNoteDto } from './dto/update-stock.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('return-note')
@ApiTags('returnNote')
export class ReturnNoteController {
  constructor(private readonly returnNoteService: ReturnNoteService) {}

  @Post('createRN') 
  create(@Body() createReturnNoteDto: CreateReturnNoteDto) {
    return this.returnNoteService.create(createReturnNoteDto);
  }

  @Get('getAll')
  findAll() {
    return this.returnNoteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.returnNoteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReturnNoteDto: UpdateReturnNoteDto) {
    return this.returnNoteService.update(+id, updateReturnNoteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.returnNoteService.remove(+id);
  }
}
