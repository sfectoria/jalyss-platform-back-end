import { Inject, Injectable } from '@nestjs/common';
import { CreateTransferNoteDto } from './dto/create-stock.dto';
import { UpdateTransferNoteDto } from './dto/update-stock.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class TransferNoteService {
  constructor(
    @Inject('STOCKS_MICROSERVICE') private readonly stocksClient: ClientProxy
  ) {}
  create(createTransferNoteDto: CreateTransferNoteDto) {
    return this.stocksClient.send(
      { cmd: 'create_transferNote' }, 
       createTransferNoteDto
      );
  }

  findAll() {
    return this.stocksClient.send(
      { cmd: 'all_transferNote' }, 
      {}
    );
  }

  findOne(id: number) {
    return this.stocksClient.send(
      { cmd: 'one_transferNote' }, 
      {id}
    )
  }

  update(id: number, updateTransferNoteDto: UpdateTransferNoteDto) {
    return this.stocksClient.send(
      { cmd: 'update_transferNote' }, 
      {id, updateTransferNoteDto}
    )
  }

  remove(id: number) {
    return this.stocksClient.send(
      { cmd: 'remove_transferNote' }, 
      {id}
    )
  }
}
