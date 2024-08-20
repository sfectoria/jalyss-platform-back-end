import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReturnNoteService } from './return-note.service';
import { CreateReturnNoteDto } from './dto/create-return-note.dto';
import { UpdateReturnNoteDto } from './dto/update-return-note.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('return-note')
export class ReturnNoteController {
  constructor(private readonly returnNoteService: ReturnNoteService) {}

  @MessagePattern({ cmd:'create_returnNote'})
  async create(@Payload() createReturnNoteDto: CreateReturnNoteDto) {
    return await this.returnNoteService.create(createReturnNoteDto);
  }

  @MessagePattern({cmd:'all_returnNotes'})
  async findAll() {
    return await this.returnNoteService.findAll();
  }

  @MessagePattern({ cmd:'getOne_returnNote'})
  async findOne(@Payload() data:{id: number}) {
    return await this.returnNoteService.findOne(data.id);
  }

  @MessagePattern({ cmd:'update_returnNote'})
  async update(@Payload() data: {id: number, updateReturnNoteDto: UpdateReturnNoteDto}) {
    return await this.returnNoteService.update(data.id, data.updateReturnNoteDto);
  }

  @MessagePattern({ cmd:'delete_returnNote'})
  async remove(@Payload() id: number) {
    return await this.returnNoteService.remove(+id);
  }
}
