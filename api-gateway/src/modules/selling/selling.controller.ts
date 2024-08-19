import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SellingService } from './selling.service';
import { CreateSellingDto } from './dto/create-selling.dto';
import { UpdateSellingDto } from './dto/update-selling.dto';
import { ApiTags } from '@nestjs/swagger';
import { Payload } from '@nestjs/microservices';

@Controller('selling')
@ApiTags('salesChannels')
export class SellingController {
  constructor(private readonly sellingService: SellingService) {}

  @Post('create')
  create(@Payload() createSellingDto: CreateSellingDto) {
    return this.sellingService.create(createSellingDto);
  }

  @Get('getAll')
  findAll() {
    return this.sellingService.findAll();
  }

  @Get(':id')
  findOne(@Payload() id: number) {
    return this.sellingService.findOne(+id);
  }

  @Patch(':id')
  update(@Payload() data : {id: number,updateSellingDto: UpdateSellingDto}) {
    return this.sellingService.update(data.id, data.updateSellingDto);
  }

  @Delete(':id')
  remove(@Payload() id: number) {
    return this.sellingService.remove(+id);
  }
}
