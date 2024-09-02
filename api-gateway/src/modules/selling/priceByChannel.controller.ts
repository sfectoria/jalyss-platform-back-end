import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreatePriceByChannelDto } from './dto/create-selling.dto';
import { UpdatePriceByChannelDto } from './dto/update-selling.dto';
import { ApiTags } from '@nestjs/swagger';
import { PriceByChannelService } from './priceByChannel.service';

@Controller('price-By-Channel')
@ApiTags('priceByChannel')
export class PriceByChannelController {
  constructor(private readonly priceByChannelService: PriceByChannelService) {}

  @Post('create')
  create(@Body() createPriceByChannelDto: CreatePriceByChannelDto) {
    return this.priceByChannelService.create(createPriceByChannelDto);
  }

  @Get('getAll')
  findAll() {
    return this.priceByChannelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.priceByChannelService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updatePriceByChannelDto: UpdatePriceByChannelDto) {
    return this.priceByChannelService.update(+id, updatePriceByChannelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.priceByChannelService.remove(+id);
  }
}
