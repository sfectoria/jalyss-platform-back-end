import { Inject, Injectable } from '@nestjs/common';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class StocksService {
  constructor(
    @Inject('STOCKS_MICROSERVICE') private readonly stocksClient: ClientProxy
  ) {}
  create(createStockDto: CreateStockDto) {
    return this.stocksClient.send(
      { cmd: 'create_stock' }, 
      createStockDto
    );
  }

  findAll() {
    return this.stocksClient.send(
      { cmd: 'get_stocks' },
      {}
    );
  }

  findOne(id: number) {
    return this.stocksClient.send(
      { cmd: 'getOne_stock' },
      {id}
    );
  }

  update(id: number, updateStockDto: UpdateStockDto) {
    return this.stocksClient.send(
      { cmd: 'update_stock' },
      {id, updateStockDto}
    )
  }

  remove(id: number) {
    return this.stocksClient.send(
      { cmd: 'delete_stock' },
      {id}
    )
  }
}
