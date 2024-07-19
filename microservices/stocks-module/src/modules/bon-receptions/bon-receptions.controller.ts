import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BonReceptionsService } from './bon-receptions.service';
import { CreateBonReceptionDto } from './dto/create-bon-reception.dto';
import { UpdateBonReceptionDto } from './dto/update-bon-reception.dto';

@Controller('bon-receptions')
export class BonReceptionsController {
  constructor(private readonly bonReceptionsService: BonReceptionsService) {}

  @Post()
  create(@Body() createBonReceptionDto: CreateBonReceptionDto) {
    return this.bonReceptionsService.create(createBonReceptionDto);
  }

  @Get()
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
