import { Controller, Get, Post, Body, Patch, Param, Delete,Query } from '@nestjs/common';
import { StocksService } from './stocks.service';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
import { ApiTags } from '@nestjs/swagger';
import { FiltersStock } from './entities/stock.entity';

@Controller('stocks')
@ApiTags('stocks')
export class StocksController {
  constructor(private readonly stocksService: StocksService) {}

  @Post('createStock')
  create(@Body() createStockDto: CreateStockDto) {
    return this.stocksService.create(createStockDto);
  }

  @Get('getAll')
  findAll(@Query() filters:FiltersStock) {
    return this.stocksService.findAll(filters);
  }

  @Get(':id')
  findOne(@Param('id') id: number,@Query() filters:FiltersStock) {
    return this.stocksService.findOne(+id,filters);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateStockDto: UpdateStockDto) {
    return this.stocksService.update(+id, updateStockDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.stocksService.remove(+id);
  }
}
