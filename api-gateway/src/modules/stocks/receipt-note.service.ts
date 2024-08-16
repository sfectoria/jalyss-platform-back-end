import { Inject, Injectable } from '@nestjs/common';
import { CreateReceiptNoteDto } from './dto/create-stock.dto';
import { UpdateReceiptNoteDto } from './dto/update-stock.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class ReceiptNoteService {
  constructor(@Inject ('STOCKS_MICROSERVICE') private readonly stocksClient: ClientProxy
) {}
  create(createReceiptNoteDto: CreateReceiptNoteDto) {
    return this.stocksClient.send(
      { cmd: 'create_receiptNote' }, 
      createReceiptNoteDto
    );
  }

  findAll() {
    return this.stocksClient.send(
      { cmd: 'all_receiptNotes' },
      {}
    )
  }

  findOne(id: number) {
    return this.stocksClient.send(
      { cmd: 'getOne_receiptNote' },
      {id}
    )
  }

  update(id: number, updateReceiptNoteDto: UpdateReceiptNoteDto) {
    return this.stocksClient.send(
      { cmd: 'update_receiptNote' },
      {id, updateReceiptNoteDto}
    )
  }

  remove(id: number) {
    return this.stocksClient.send(
      { cmd: 'delete_receiptNote' },
      {id}
    )
  }
}
