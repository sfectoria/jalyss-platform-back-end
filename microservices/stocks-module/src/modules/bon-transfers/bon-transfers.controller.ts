import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BonTransfersService } from './bon-transfers.service';
import { CreateBonTransferDto } from './dto/create-bon-transfer.dto';
import { UpdateBonTransferDto } from './dto/update-bon-transfer.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('bon-transfers')
export class BonTransfersController {
  constructor(private readonly bonTransfersService: BonTransfersService) {}

  @MessagePattern({ cmd: 'create_bonTransfer' })
  async create(@Payload() createBonTransferDto: CreateBonTransferDto) {
    return await this.bonTransfersService.create(createBonTransferDto);
  }

  @MessagePattern({ cmd: 'all_bonTransfers' })
  async findAll() {
    return await this.bonTransfersService.findAll();
  }

  @MessagePattern({ cmd: 'one_bonTransfer' }) 
  async findOne(@Payload() id: number) {
    return await this.bonTransfersService.findOne(+id);
  }

  @MessagePattern({ cmd: 'update_bonTransfer' })
  async update(@Payload() data: {id: number, updateBonTransferDto: UpdateBonTransferDto}) {
    return await this.bonTransfersService.update(data.id, data.updateBonTransferDto);
  }

  @MessagePattern({ cmd: 'remove_bonTransfer' })
  async remove(@Payload() id: number) {
    return await this.bonTransfersService.remove(+id);
  }
}
