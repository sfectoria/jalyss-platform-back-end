import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SalesblsService } from './salesbls.service';
import { CreateSalesblDto } from './dto/create-selling.dto';
import { UpdateSalesblDto } from './dto/update-selling.dto';

@Controller('salesbls')
export class SalesblsController {
  constructor(private readonly salesblsService: SalesblsService) {}

  @Post('create')
  create(@Body() createSalesblDto: CreateSalesblDto) {
    return this.salesblsService.create(createSalesblDto);
  }

  @Get('getAll')
  findAll() {
    return this.salesblsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.salesblsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSalesblDto: UpdateSalesblDto) {
    return this.salesblsService.update(+id, updateSalesblDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.salesblsService.remove(+id);
  }
}
