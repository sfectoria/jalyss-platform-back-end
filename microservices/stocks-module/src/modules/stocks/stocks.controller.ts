import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StocksService } from './stocks.service';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('stocks')
export class StocksController {
  constructor(private readonly stocksService: StocksService) {}
  @MessagePattern({ cmd: 'create_stock' })
  async create(@Payload() message: CreateStockDto) : Promise<any> {
    return await this.stocksService.create(message);
  }

  @MessagePattern({ cmd: 'all_stocks' })
  async findAll() {
    return await this.stocksService.findAll();
  }

@MessagePattern({ cmd: ':id' })
  async findOne(@Param('id') id: string) {
    return await this.stocksService.findOne(+id);
  }

  @MessagePattern({ cmd: ':id' })
  async update(@Param('id') id: string, @Body() updateStockDto: UpdateStockDto) {
    return await this.stocksService.update(+id, updateStockDto);
  }

  @MessagePattern({ cmd: ':id' })
  async remove(@Param('id') id: string) {
    return await this.stocksService.remove(+id);
  }
}
