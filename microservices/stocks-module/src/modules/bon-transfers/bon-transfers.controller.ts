import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BonTransfersService } from './bon-transfers.service';
import { CreateBonTransferDto } from './dto/create-bon-transfer.dto';
import { UpdateBonTransferDto } from './dto/update-bon-transfer.dto';
import { MessagePattern } from '@nestjs/microservices';

@Controller('bon-transfers')
export class BonTransfersController {
  constructor(private readonly bonTransfersService: BonTransfersService) {}

  @MessagePattern({ cmd: 'create_bonTransfer' })
  async create(@Body() createBonTransferDto: CreateBonTransferDto) {
    return await this.bonTransfersService.create(createBonTransferDto);
  }

  @MessagePattern({ cmd: 'all_bonTransfers' })
  async findAll() {
    return await this.bonTransfersService.findAll();
  }

  @MessagePattern({ cmd: 'one_bonTransfer' }) 
  async findOne(@Param('id') id: string) {
    return await this.bonTransfersService.findOne(+id);
  }

  @MessagePattern({ cmd: 'update_bonTransfer' })
  async update(@Param('id') id: string, @Body() updateBonTransferDto: UpdateBonTransferDto) {
    return await this.bonTransfersService.update(+id, updateBonTransferDto);
  }

  @MessagePattern({ cmd: 'remove_bonTransfer' })
  async remove(@Param('id') id: string) {
    return await this.bonTransfersService.remove(+id);
  }
}
