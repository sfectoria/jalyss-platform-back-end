import { Inject, Injectable } from '@nestjs/common';
import { CreateBonComndDto } from './dto/create-selling.dto';
import { UpdateBonComndDto } from './dto/update-selling.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class BonComndsService {
  constructor(
    @Inject ('SELLING_MICROSERVICE') private readonly sellingClient: ClientProxy
  ) {}
  create(createBonComndDto: CreateBonComndDto) {
    return this.sellingClient.send(
      {cmd :'create_bonComnd'},
       createBonComndDto)
  }

  findAll() {
    return this.sellingClient.send(
      {cmd :'all_bonComnds'},
      {}
    )
  }

  findOne(id: number) {
    return this.sellingClient.send(
      {cmd :'getOne_bonComnd'},
      {id}
    )
  }

  update(id: number, updateBonComndDto: UpdateBonComndDto) {
    return this.sellingClient.send(
      {cmd :'update_bonComnd'},
      {id, updateBonComndDto}
    )
  }

  remove(id: number) {
    return this.sellingClient.send(
      {cmd :'delete_bonComnd'},
      {id}
    )
  }
}
