import { Inject, Injectable } from '@nestjs/common';
import { CreateSalesDeliveryNoteDto } from './dto/create-selling.dto';
import { UpdateSalesDeliveryNoteDto } from './dto/update-selling.dto';
import { ClientProxy } from '@nestjs/microservices';
import { Filters } from './entities/selling.entity';

@Injectable()
export class SalesDeliveryNoteService {
  constructor(
    @Inject('SELLING_MICROSERVICE') private readonly sellingClient: ClientProxy,
  ) {}
  create(createSalesDeliveryNoteDto: CreateSalesDeliveryNoteDto) {
    return this.sellingClient.send(
      { cmd: 'create_salesDeliveryNote' },
      createSalesDeliveryNoteDto,
    );
  }

  findAll(filters: Filters) {
    return this.sellingClient.send({ cmd: 'all_salesDeliveryNotes' }, filters);
  }

  findOne(id: number) {
    return this.sellingClient.send({ cmd: 'getOne_salesDeliveryNote' }, { id });
  }

  update(id: number, updateSalesDeliveryNoteDto: UpdateSalesDeliveryNoteDto) {
    return this.sellingClient.send(
      { cmd: 'update_salesDeliveryNote' },
      { id, updateSalesDeliveryNoteDto },
    );
  }

  remove(id: number) {
    return this.sellingClient.send({ cmd: 'delete_salesDeliveryNote' }, { id });
  }
}
