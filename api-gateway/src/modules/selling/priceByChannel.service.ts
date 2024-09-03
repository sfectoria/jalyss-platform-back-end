import { Inject, Injectable } from '@nestjs/common';
import { CreatePriceByChannelDto} from './dto/create-selling.dto';
import { UpdatePriceByChannelDto } from './dto/update-selling.dto';
import { ClientProxy } from '@nestjs/microservices';
import { Price } from './entities/selling.entity';

@Injectable()
export class PriceByChannelService {
  constructor(
    @Inject ('SELLING_MICROSERVICE') private readonly sellingClient: ClientProxy
  ) {}
  create(createPriceByChannelDto: CreatePriceByChannelDto) {
    return this.sellingClient.send(
      {cmd :'create_priceByChannel'},
       createPriceByChannelDto)
  }

  findAll(filters:Price) {
    return this.sellingClient.send(
      {cmd :'all_priceByChannels'},
      filters
    )
  }

  findOne(id: number) {
    return this.sellingClient.send(
      {cmd :'getOne_priceByChannel'},
      {id}
    )
  }

  update(id: number, updatePriceByChannelDto: UpdatePriceByChannelDto) {
    return this.sellingClient.send(
      {cmd :'update_priceByChannel'},
      {id, updatePriceByChannelDto}
    )
  }

  remove(id: number) {
    return this.sellingClient.send(
      {cmd :'delete_priceByChannel'},
      {id}
    )
  }
}
