import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BonReceptionsService } from './bon-receptions.service';
import { CreateBonReceptionDto } from '../stocks/dto/create-stock.dto';
import { UpdateBonReceptionDto } from '../stocks/dto/update-stock.dto';
import { ApiTags } from '@nestjs/swagger';
import { Payload } from '@nestjs/microservices';

@Controller('bonReceptions')
@ApiTags('bonReceptions')
export class BonReceptionsController {
  constructor(private readonly bonReceptionsService: BonReceptionsService) {}

  @Post('create_brt')
  create(@Payload() createBonReceptionDto: CreateBonReceptionDto) {
    return this.bonReceptionsService.create(createBonReceptionDto);
  }

  @Get('all_brt')
  findAll() {
    return this.bonReceptionsService.findAll();
  }

  @Get(':id')
  findOne(@Payload() id: number) {
    return this.bonReceptionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Payload() data : {id: number,  updateBonReceptionDto: UpdateBonReceptionDto}) {
    return this.bonReceptionsService.update(data.id, data.updateBonReceptionDto);
  }

  @Delete(':id')
  remove(@Payload() id: number) {
    return this.bonReceptionsService.remove(+id);
  }
}
