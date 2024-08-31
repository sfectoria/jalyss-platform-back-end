import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StocksService } from './stocks.service';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { FiltersStock } from './entities/stock.entity';

@Controller('stocks')
export class StocksController {
  constructor(private readonly stocksService: StocksService) {}

  @MessagePattern({ cmd: 'create_stock' })
  async create(@Payload() message: CreateStockDto) : Promise<any> {
    return await this.stocksService.create(message);
  }

  @MessagePattern({ cmd: 'all_stocks' })
  async findAll(@Payload() filters:FiltersStock) {
    return await this.stocksService.findAll(filters);
  }

@MessagePattern({ cmd: 'getOne_stock' })
  async findOne(@Payload() data: { id: number }) {
    console.log('findOne payload:', data);
    return await this.stocksService.findOne(data.id);
  }

  @MessagePattern({ cmd: 'update_stock' })
  async update(@Payload() data: { id: number, updateStockDto: UpdateStockDto }) {
    return await this.stocksService.update(data.id, data.updateStockDto);
  }

  @MessagePattern({ cmd: 'delete_stock' })
    async remove(@Payload() data: { id: number }) {
      console.log('remove payload:', data);
      return await this.stocksService.remove(data.id);
  }
}
