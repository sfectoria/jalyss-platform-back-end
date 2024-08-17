import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReturnNoteService } from './return-note.service';
import { CreateReturnNoteDto } from './dto/create-return-note.dto';
import { UpdateReturnNoteDto } from './dto/update-return-note.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('return-note')
export class ReturnNoteController {
  constructor(private readonly returnNoteService: ReturnNoteService) {}

  @MessagePattern({ cmd:'create_return-note'})
  async create(@Payload() createReturnNoteDto: CreateReturnNoteDto) {
    return await this.returnNoteService.create(createReturnNoteDto);
  }

  @MessagePattern({cmd:'get_all_return-note'})
  async findAll() {
    return await this.returnNoteService.findAll();
  }

  @MessagePattern({ cmd:'get_one_return-note'})
  async findOne(@Payload() id: number) {
    return await this.returnNoteService.findOne(+id);
  }

  @MessagePattern({ cmd:'update_return-note'})
  async update(@Payload() data: {id: number, updateReturnNoteDto: UpdateReturnNoteDto}) {
    return await this.returnNoteService.update(data.id, data.updateReturnNoteDto);
  }

  @MessagePattern({ cmd:'delete_return-note'})
  async remove(@Payload() id: number) {
    return await this.returnNoteService.remove(+id);
  }
}
