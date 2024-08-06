import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SalesblfsService } from './salesblfs.service';
import { CreateSalesblfDto } from './dto/create-selling.dto';
import { UpdateSalesblfDto } from './dto/update-selling.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('salesblfs')
@ApiTags('salesblfs')
export class SalesblfsController {
  constructor(private readonly salesblfsService: SalesblfsService) {}

  @Post('create') 
  create(@Body() createSalesblfDto: CreateSalesblfDto) {
    return this.salesblfsService.create(createSalesblfDto);
  }

  @Get('getAll')
  findAll() {
    return this.salesblfsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.salesblfsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSalesblfDto: UpdateSalesblfDto) {
    return this.salesblfsService.update(+id, updateSalesblfDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.salesblfsService.remove(+id);
  }
}
