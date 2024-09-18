import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { filter } from 'rxjs';
import { InventoryFilters } from './entities/inventory.entity';

@Controller('inventory')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  @MessagePattern({ cmd: 'create_inventory' })
  async create(@Payload() createInventoryDto: CreateInventoryDto) {
    return this.inventoryService.create(createInventoryDto);
  }

  @MessagePattern({ cmd: 'all_inventories' })
  async findAll(@Payload() filters:InventoryFilters) {
    return this.inventoryService.findAll(filters);
  }

  @MessagePattern({ cmd: 'getOne_inventory' })
  async findOne(@Payload() data: { id: string }) {
    return this.inventoryService.findOne(data.id);
  }

  @MessagePattern({ cmd: 'update_inventory' })
  async update(
    @Payload() data: { id: string; updateInventoryDto: UpdateInventoryDto },
  ) {
    return this.inventoryService.update(data.id, data.updateInventoryDto);
  }

  @MessagePattern({ cmd: 'delete_inventory' })
  async remove(@Payload() data: { id: string }) {
    return this.inventoryService.remove(data.id);
  }
}
