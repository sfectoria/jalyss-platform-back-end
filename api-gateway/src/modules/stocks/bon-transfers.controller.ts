import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BonTransfersService } from './bon-transfers.service';
import { CreateBonTransferDto } from './dto/create-stock.dto';
import { UpdateBonTransferDto } from './dto/update-stock.dto';
import { ApiTags } from '@nestjs/swagger';
import { Payload } from '@nestjs/microservices';

@Controller('bon-transfers')
@ApiTags('bonTransfers')
export class BonTransfersController {
  constructor(private readonly bonTransfersService: BonTransfersService) {}

  @Post('createBT')
  create(@Payload() createBonTransferDto: CreateBonTransferDto) {
    return this.bonTransfersService.create(createBonTransferDto);
  }

  @Get('getAll')
  findAll() {
    return this.bonTransfersService.findAll();
  }

  @Get(':id')
  findOne(@Payload() id: number) {
    return this.bonTransfersService.findOne(+id);
  }

  @Patch(':id')
  update(@Payload() data :{id: number, updateBonTransferDto: UpdateBonTransferDto}) {
    return this.bonTransfersService.update(data.id, data.updateBonTransferDto);
  }

  @Delete(':id')
  remove(@Payload() id: number) {
    return this.bonTransfersService.remove(+id);
  }
}
