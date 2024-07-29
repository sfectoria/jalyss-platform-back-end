import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SalesBlfsService } from './sales-blfs.service';
import { CreateSalesBlfDto } from './dto/create-sales-blf.dto';
import { UpdateSalesBlfDto } from './dto/update-sales-blf.dto';

@Controller('sales-blfs')
export class SalesBlfsController {
  constructor(private readonly salesBlfsService: SalesBlfsService) {}

  @Post()
  create(@Body() createSalesBlfDto: CreateSalesBlfDto) {
    return this.salesBlfsService.create(createSalesBlfDto);
  }

  @Get()
  findAll() {
    return this.salesBlfsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.salesBlfsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSalesBlfDto: UpdateSalesBlfDto) {
    return this.salesBlfsService.update(+id, updateSalesBlfDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.salesBlfsService.remove(+id);
  }
}
