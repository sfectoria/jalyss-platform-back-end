import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TransferNoteService} from './transfer-note.service';
import { CreateTransferNoteDto} from './dto/create-bon-transfer.dto';
import { UpdateTransferNoteDto } from './dto/update-bon-transfer.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('transfer-note')
export class TransferNoteController {
  constructor(private readonly transferNoteService: TransferNoteService) {}

  @MessagePattern({ cmd: 'create_transferNote' })
  async create(@Payload() createTransferNoteDto: CreateTransferNoteDto) {
    return await this.transferNoteService.create(createTransferNoteDto);
  }

  @MessagePattern({ cmd: 'all_transferNote' })
  async findAll() {
    return await this.transferNoteService.findAll();
  }

  @MessagePattern({ cmd: 'one_transferNote' }) 
  async findOne(@Payload() data:{id: number}) {
    return await this.transferNoteService.findOne(data.id);
  }

  @MessagePattern({ cmd: 'update_transferNote' })
  async update(@Payload() data: {id: number, updateTransferNoteDto: UpdateTransferNoteDto}) {
    return await this.transferNoteService.update(data.id, data.updateTransferNoteDto);
  }

  @MessagePattern({ cmd: 'remove_transferNote' })
  async remove(@Payload() id: number) {
    return await this.transferNoteService.remove(+id);
  }
}
