import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BonReceptionsService } from './bon-receptions.service';
import { CreateBonReceptionDto } from '../stocks/dto/create-stock.dto';
import { UpdateBonReceptionDto } from '../stocks/dto/update-stock.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('bonReceptions')
@ApiTags('bonReceptions')
export class BonReceptionsController {
  constructor(private readonly bonReceptionsService: BonReceptionsService) {}

  @Post('create_brt')
  create(@Body() createBonReceptionDto: CreateBonReceptionDto) {
    return this.bonReceptionsService.create(createBonReceptionDto);
  }

  @Get('all_brt')
  findAll() {
    return this.bonReceptionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bonReceptionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBonReceptionDto: UpdateBonReceptionDto) {
    return this.bonReceptionsService.update(+id, updateBonReceptionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bonReceptionsService.remove(+id);
  }
}
