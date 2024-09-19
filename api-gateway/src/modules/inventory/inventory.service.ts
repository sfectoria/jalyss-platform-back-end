import { Inject, Injectable } from '@nestjs/common';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';
import { ClientProxy } from '@nestjs/microservices';
import { InventoryFilters } from './entities/inventory.entity';

@Injectable()
export class InventoryService {
  constructor(
    @Inject('INVENTORY_MICROSERVICE') private readonly inventoryClient: ClientProxy
  ) {}
  create(createInventoryDto: CreateInventoryDto) {
    return this.inventoryClient.send(
      { cmd: 'create_inventory' }, 
      createInventoryDto 
    );
  }

  findAll(filters?:InventoryFilters) {
    console.log('test here');
    
    return this.inventoryClient.send(
      { cmd: 'all_inventories' },
      filters)
  }

  findOne(id: string) {
    return this.inventoryClient.send(
      { cmd: 'getOne_inventory' },
      {id}) 
  }

  update(id: string, updateInventoryDto: UpdateInventoryDto) {
    return this.inventoryClient.send(
      { cmd: 'update_inventory' },
      {id,updateInventoryDto}) 
  }

  remove(id: string) {
    return this.inventoryClient.send(
      { cmd: 'delete_inventory' },
      {id}) 
  }
}
