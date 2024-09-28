import { Inject, Injectable } from '@nestjs/common';
import { CreateSalesReceiptDto } from './dto/create-selling.dto';
import { UpdateSalesReceiptDto } from './dto/update-selling.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class SalesReceiptService {
  constructor(
    @Inject('SELLING_MICROSERVICE') private readonly sellingClient: ClientProxy,
  ) {}
  create(createSalesReceiptDto: CreateSalesReceiptDto) {
    return this.sellingClient.send(
      { cmd: 'create_salesReceipt' },
      createSalesReceiptDto,
    );
  }

  findAll() {   
    console.log('test'); 
    return this.sellingClient.send({ cmd: 'all_salesReceipt' }, {});
  }

  findOne(id: number) {
    return this.sellingClient.send({ cmd: 'one_salesReceipt' }, { id });
  }

  update(id: number, updateSalesReceiptDto: UpdateSalesReceiptDto) {
    return this.sellingClient.send(
      { cmd: 'update_salesReceipt' },
      { id, updateSalesReceiptDto },
    );
  }

  remove(id: number) {
    return this.sellingClient.send({ cmd: 'delete_salesReceipt' }, { id });
  }
}
