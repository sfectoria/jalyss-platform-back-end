import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExitNoteService } from './exit-note.service';
import { CreateExitNoteDto } from './dto/create-exit-note.dto';
import { UpdateExitNoteDto } from './dto/update-exit-note.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { FiltersExit } from './entities/exit-note.entity';

@Controller('exit-note')
export class ExitNoteController {
  constructor(private readonly exitNoteService: ExitNoteService) {}

  @MessagePattern({ cmd: 'create_exitNote' })
  async create(@Payload() createExitNoteDto: CreateExitNoteDto) {
    return await this.exitNoteService.create(createExitNoteDto);
  }

  @MessagePattern({ cmd: 'all_exitNote' }) 
  async findAll(@Payload() filters?:FiltersExit) {
    return await this.exitNoteService.findAll(filters);
  }

  @MessagePattern({ cmd: 'one_exitNote' })
  async findOne(@Payload() data:{id: number}) {
    return await this.exitNoteService.findOne(data.id);
  }

  @MessagePattern({ cmd: 'update_exitNote' })
  async update(@Payload() data :{id: number,updateExitNoteDto: UpdateExitNoteDto}) {
    return await this.exitNoteService.update(data.id, data.updateExitNoteDto);
  }

  @MessagePattern({ cmd: 'remove_exitNote' })
  async remove(@Payload() id: number) {
    return await this.exitNoteService.remove(+id);
  }
}
