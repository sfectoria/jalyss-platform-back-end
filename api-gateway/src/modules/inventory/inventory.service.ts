import { Inject, Injectable } from '@nestjs/common';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class InventoryService {
  constructor(
    @Inject('INVENTORY_MICROSERVICE') private readonly inventoryClient: ClientProxy
  ) {}
  create(createInventoryDto: CreateInventoryDto) {
    return this.inventoryClient.send(
      { cmd: 'create_stock' }, 
      createInventoryDto 
    );
  }

  findAll() {
    console.log('test here');
    
    return this.inventoryClient.send(
      { cmd: 'all_inventories' },
      {})
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
