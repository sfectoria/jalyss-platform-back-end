import { Inject, Injectable } from '@nestjs/common';
import { CreateReceiptNoteDto } from './dto/create-stock.dto';
import { UpdateReceiptNoteDto } from './dto/update-stock.dto';
import { ClientProxy } from '@nestjs/microservices';
import { FiltersReceipt } from './entities/stock.entity';

@Injectable()
export class MovementsService {
  constructor(@Inject ('STOCKS_MICROSERVICE') private readonly stocksClient: ClientProxy
) {}
 
  findAll(filters) {
    console.log('find All receipt Note');
    return this.stocksClient.send(
      { cmd: 'all_movements' },
      filters
    )
  }

  findAll2(filters) {
    console.log('find All receipt Note');
    return this.stocksClient.send(
      { cmd: 'all_movements2' },
      filters
    )
  }
  findOne(id: number) {
    console.log("hhh",id);
    return this.stocksClient.send(
      { cmd: 'one_movement' },
      {id}
    )
  }

//   update(id: number, updateReceiptNoteDto: UpdateReceiptNoteDto) {
//     return this.stocksClient.send(
//       { cmd: 'update_receiptNote' },
//       {id, updateReceiptNoteDto}
//     )
//   }

//   remove(id: number) {
//     return this.stocksClient.send(
//       { cmd: 'delete_receiptNote' },
//       {id}
//     )
//   }
}
