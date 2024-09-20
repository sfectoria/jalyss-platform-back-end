import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { CreateInventoryDto, InventoryLineDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto, UpdateInventoryLineDto } from './dto/update-inventory.dto';
import { ApiTags } from '@nestjs/swagger';
import { InventoryFilters } from './entities/inventory.entity';

@ApiTags('inventory')
@Controller('inventory')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  @Post('create')
  create(@Body() createInventoryDto: CreateInventoryDto) {
    return this.inventoryService.create(createInventoryDto);
  }
  
  @Post('createLine')
  createLine(@Body() createInventoryLineDto: InventoryLineDto) {
    return this.inventoryService.createLine(createInventoryLineDto);
  }


  @Get('all')
  findAll(@Query() filters:InventoryFilters) {
    return this.inventoryService.findAll(filters);
  }

  @Get(':id')
  findOne(@Param('id') id: string ,@Query() filters:InventoryFilters) {
    return this.inventoryService.findOne(id,filters);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInventoryDto: UpdateInventoryDto) {
    return this.inventoryService.update(id, updateInventoryDto);
  }

  @Patch('/line/:idLine')
  updateLine(@Param('idLine') idLine: number, @Body() updateInventoryLineDto: UpdateInventoryLineDto) {
    return this.inventoryService.updateLine(idLine, updateInventoryLineDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.inventoryService.remove(id);
  }
}
