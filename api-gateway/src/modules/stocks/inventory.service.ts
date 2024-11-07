import { Inject, Injectable } from '@nestjs/common';
import { CreateInventoryDto, InventoryLineDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto, UpdateInventoryLineDto } from './dto/update-inventory.dto';
import { ClientProxy } from '@nestjs/microservices';
import { InventoryFilters } from './entities/inventory.entity';

@Injectable()
export class InventoryService {
  constructor(
    @Inject('STOCKS_MICROSERVICE') private readonly inventoryClient: ClientProxy
  ) {}
  create(createInventoryDto: CreateInventoryDto) {
    return this.inventoryClient.send(
      { cmd: 'create_inventory' }, 
      createInventoryDto 
    );
  }
  createLine(createInventoryLineDto:InventoryLineDto){
    return this.inventoryClient.send(
      {cmd:'create_inventoryLine'},
      createInventoryLineDto
    )
  }
  findAll(filters?:InventoryFilters) {
    return this.inventoryClient.send(
      { cmd: 'all_inventories' },
      filters)
  }

  findOne(id: string,filters?:InventoryFilters) {
    return this.inventoryClient.send(
      { cmd: 'getOne_inventory' },
      {id,filters}) 
  }

  update(id: string, updateInventoryDto: UpdateInventoryDto) {
    return this.inventoryClient.send(
      { cmd: 'update_inventory' },
      {id,updateInventoryDto}) 
  }

  updateLine(id: number, updateInventoryLineDto: UpdateInventoryLineDto) {
    return this.inventoryClient.send(
      { cmd: 'update_inventoryLine' },
      {id,updateInventoryLineDto}) 
  }

  remove(id: string) {
    return this.inventoryClient.send(
      { cmd: 'delete_inventory' },
      {id}) 
  }
}
