import { Inject, Injectable } from '@nestjs/common';
import { CreateReturnNoteDto } from './dto/create-stock.dto';
import { UpdateReturnNoteDto } from './dto/update-stock.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class ReturnNoteService {
  constructor(
    @Inject('STOCKS_MICROSERVICE') private readonly stocksClient: ClientProxy
  ) {}
  create(createReturnNoteDto: CreateReturnNoteDto) {
    return this.stocksClient.send(
      { cmd :'create_returnNote'}, 
       createReturnNoteDto
    ); 
  }

  findAll() {
    return this.stocksClient.send(
      { cmd :'all_returnNotes'}, 
      {}
    );
  }

  findOne(id: number) {
    return this.stocksClient.send(
      { cmd :'getOne_returnNote'}, 
      {id}  
    )
  }

  update(id: number, updateReturnNoteDto: UpdateReturnNoteDto) {
    return this.stocksClient.send(
      { cmd :'update_returnNote'}, 
      {id, updateReturnNoteDto}
    )
  }

  remove(id: number) {
    return this .stocksClient.send(
      { cmd :'delete_returnNote'}, 
      {id}
    )
  }
}
