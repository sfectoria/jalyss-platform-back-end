import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PurchaseOrderService } from './purchase-order.service';
import { CreatePurchaseOrderDto } from './dto/create-selling.dto';
import { UpdatePurchaseOrderDto } from './dto/update-selling.dto';
import { ApiTags } from '@nestjs/swagger';
import { Filters } from './entities/selling.entity';

@Controller('purchaseOrder')
@ApiTags('purchaseOrder')
export class PurchaseOrderController {
  constructor(private readonly purchaseOrderService: PurchaseOrderService) {}

  @Post('create')
  create(@Body() createPurchaseOrderDto: CreatePurchaseOrderDto) {
    return this.purchaseOrderService.create(createPurchaseOrderDto);
  }

  @Get('getAll')
  findAll(@Query() filters: Filters) {
    return this.purchaseOrderService.findAll(filters);
  }
  

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.purchaseOrderService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updatePurchaseOrderDto: UpdatePurchaseOrderDto) {
    return this.purchaseOrderService.update(+id, updatePurchaseOrderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.purchaseOrderService.remove(+id);
  }
}
