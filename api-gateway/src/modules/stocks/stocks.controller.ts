import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StocksService } from './stocks.service';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
import { ApiTags } from '@nestjs/swagger';
import { Payload } from '@nestjs/microservices';

@Controller('stocks')
@ApiTags('stocks')
export class StocksController {
  constructor(private readonly stocksService: StocksService) {}

  @Post('createStock')
  create(@Payload() createStockDto: CreateStockDto) {
    return this.stocksService.create(createStockDto);
  }

  @Get('getAll')
  findAll() {
    return this.stocksService.findAll();
  }

  @Get(':id')
  findOne(@Payload() id: number) {
    return this.stocksService.findOne(+id);
  }

  @Patch(':id')
  update(@Payload() data: {id: number, updateStockDto: UpdateStockDto}) {
    return this.stocksService.update(data.id, data.updateStockDto);
  }

  @Delete(':id')
  remove(@Payload() id: number) {
    return this.stocksService.remove(+id);
  }
}
