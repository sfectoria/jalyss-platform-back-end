import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BonRetoursService } from './bon-retours.service';
import { CreateBonRetourDto } from './dto/create-stock.dto';
import { UpdateBonRetourDto } from './dto/update-stock.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('bon-retours')
@ApiTags('bon-retours')
export class BonRetoursController {
  constructor(private readonly bonRetoursService: BonRetoursService) {}

  @Post('createBR') 
  create(@Body() createBonRetourDto: CreateBonRetourDto) {
    return this.bonRetoursService.create(createBonRetourDto);
  }

  @Get('getAll')
  findAll() {
    return this.bonRetoursService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bonRetoursService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBonRetourDto: UpdateBonRetourDto) {
    return this.bonRetoursService.update(+id, updateBonRetourDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bonRetoursService.remove(+id);
  }
}
