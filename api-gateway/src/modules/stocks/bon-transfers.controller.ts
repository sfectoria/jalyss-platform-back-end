import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BonTransfersService } from './bon-transfers.service';
import { CreateBonTransferDto } from './dto/create-stock.dto';
import { UpdateBonTransferDto } from './dto/update-stock.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('bon-transfers')
@ApiTags('bon-transfers')
export class BonTransfersController {
  constructor(private readonly bonTransfersService: BonTransfersService) {}

  @Post('createBT')
  create(@Body() createBonTransferDto: CreateBonTransferDto) {
    return this.bonTransfersService.create(createBonTransferDto);
  }

  @Get('getAll')
  findAll() {
    return this.bonTransfersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bonTransfersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBonTransferDto: UpdateBonTransferDto) {
    return this.bonTransfersService.update(+id, updateBonTransferDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bonTransfersService.remove(+id);
  }
}
