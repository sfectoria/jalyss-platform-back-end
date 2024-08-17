import { Inject, Injectable } from '@nestjs/common';
import { CreatePurchaseOrderDto} from './dto/create-selling.dto';
import { UpdatePurchaseOrderDto } from './dto/update-selling.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class PurchaseOrderService {
  constructor(
    @Inject ('SELLING_MICROSERVICE') private readonly sellingClient: ClientProxy
  ) {}
  create(createPurchaseOrderDto: CreatePurchaseOrderDto) {
    return this.sellingClient.send(
      {cmd :'create_purchaseOrder'},
       createPurchaseOrderDto)
  }

  findAll() {
    return this.sellingClient.send(
      {cmd :'all_purchaseOrders'},
      {}
    )
  }

  findOne(id: number) {
    return this.sellingClient.send(
      {cmd :'getOne_purchaseOrder'},
      {id}
    )
  }

  update(id: number, updatepurchaseOrderDto: UpdatePurchaseOrderDto) {
    return this.sellingClient.send(
      {cmd :'update_purchaseOrder'},
      {id, updatepurchaseOrderDto}
    )
  }

  remove(id: number) {
    return this.sellingClient.send(
      {cmd :'delete_purchaseOrder'},
      {id}
    )
  }
}
