import { Inject, Injectable } from '@nestjs/common';
import { CreateBonSortieDto } from './dto/create-stock.dto';
import { UpdateBonSortieDto } from './dto/update-stock.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class BonSortiesService {
  constructor(@Inject ('STOCKS_MICROSERVICE') private readonly stocksClient: ClientProxy
) {}
  create(createBonsortieDto: CreateBonSortieDto ) {
    return this.stocksClient.send(
      { cmd: 'create_bonSorty' }, 
      createBonsortieDto
    );
  }

  findAll() {
    return this.stocksClient.send(
      { cmd: 'all_bonSorty' },
      {}
    )
  }

  findOne(id: number) {
    return this.stocksClient.send(
      { cmd: 'one_bonSorty' },
      {id}
    )
  }

  update(id: number, UpdateBonSortieDto: UpdateBonSortieDto) {
    return this.stocksClient.send(
      { cmd: 'update_bonSorty' },
      {id, UpdateBonSortieDto}
    )
  }

  remove(id: number) {
    return this.stocksClient.send(
      { cmd: 'remove_bonSorty' },
      {id}
    )
  }
}
