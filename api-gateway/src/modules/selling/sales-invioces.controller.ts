import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SalesInviocesService } from './sales-invioces.service';
import { CreateSalesInvioceDto } from './dto/create-selling.dto';
import { UpdateSalesInvioceDto } from './dto/update-selling.dto';

@Controller('sales-invioces')
export class SalesInviocesController {
  constructor(private readonly salesInviocesService: SalesInviocesService) {}

  @Post('create')
  create(@Body() createSalesInvioceDto: CreateSalesInvioceDto) {
    return this.salesInviocesService.create(createSalesInvioceDto);
  }

  @Get('getAll')
  findAll() {
    return this.salesInviocesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.salesInviocesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSalesInvioceDto: UpdateSalesInvioceDto) {
    return this.salesInviocesService.update(+id, updateSalesInvioceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.salesInviocesService.remove(+id);
  }
}
