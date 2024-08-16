import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SalesDeliveryNoteService } from './salesDeliveryNote.service';
import { CreateSalesDeliveryNoteDto } from './dto/create-selling.dto';
import { UpdateSalesDeliveryNoteDto } from './dto/update-selling.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('salesDeliveryNotes')
@ApiTags('salesDeliveryNotes')
export class SalesDeliveryNoteController {
  constructor(private readonly salesDeliveryNoteService: SalesDeliveryNoteService) {}

  @Post('create')
  create(@Body() createSalesDeliveryNoteDto: CreateSalesDeliveryNoteDto) {
    return this.salesDeliveryNoteService.create(createSalesDeliveryNoteDto);
  }

  @Get('getAll')
  findAll() {
    return this.salesDeliveryNoteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.salesDeliveryNoteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSalesDeliveryNoteDto: UpdateSalesDeliveryNoteDto) {
    return this.salesDeliveryNoteService.update(+id, updateSalesDeliveryNoteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.salesDeliveryNoteService.remove(+id);
  }
}
