import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { SalesDeliveryNoteService } from './salesDeliveryNote.service';
import { CreateSalesDeliveryNoteDto } from './dto/create-selling.dto';
import { UpdateSalesDeliveryNoteDto } from './dto/update-selling.dto';
import { ApiTags } from '@nestjs/swagger';
import { Filters } from './entities/selling.entity';

@Controller('salesDeliveryNote')
@ApiTags('salesDeliveryNote')
export class SalesDeliveryNoteController {
  constructor(private readonly salesDeliveryNoteService: SalesDeliveryNoteService) {}

  @Post('create')
  create(@Body() createSalesDeliveryNoteDto: CreateSalesDeliveryNoteDto) {
    return this.salesDeliveryNoteService.create(createSalesDeliveryNoteDto);
  }

  @Get('getAll')
  findAll(@Query() filters: Filters) {
    return this.salesDeliveryNoteService.findAll(filters);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.salesDeliveryNoteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateSalesDeliveryNoteDto: UpdateSalesDeliveryNoteDto) {
    return this.salesDeliveryNoteService.update(+id, updateSalesDeliveryNoteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.salesDeliveryNoteService.remove(+id);
  }
}
