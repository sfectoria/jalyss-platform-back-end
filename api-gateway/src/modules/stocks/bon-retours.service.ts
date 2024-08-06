import { Inject, Injectable } from '@nestjs/common';
import { CreateBonRetourDto } from './dto/create-stock.dto';
import { UpdateBonRetourDto } from './dto/update-stock.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class BonRetoursService {
  constructor(
    @Inject('STOCKS_MICROSERVICE') private readonly stocksClient: ClientProxy
  ) {}
  create(createBonRetourDto: CreateBonRetourDto) {
    return this.stocksClient.send(
      { cmd :'create_bonRetour'}, 
       createBonRetourDto
    ); 
  }

  findAll() {
    return this.stocksClient.send(
      { cmd :'all_bonRetours'}, 
      {}
    );
  }

  findOne(id: number) {
    return this.stocksClient.send(
      { cmd :'one_bonRetour'}, 
      {id}  
    )
  }

  update(id: number, updateBonRetourDto: UpdateBonRetourDto) {
    return this.stocksClient.send(
      { cmd :'update_bonRetour'}, 
      {id, updateBonRetourDto}
    )
  }

  remove(id: number) {
    return this .stocksClient.send(
      { cmd :'remove_bonRetour'}, 
      {id}
    )
  }
}
