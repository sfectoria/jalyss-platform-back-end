import { Inject, Injectable } from '@nestjs/common';
import { CreateEstimateDto } from './dto/create-estimate.dto';
import { UpdateEstimateDto } from './dto/update-estimate.dto';
import { ClientProxy } from '@nestjs/microservices';
import { EstimateFilters } from './entities/estimate.entity';

@Injectable()
export class EstimateService {
  constructor(
    @Inject ('ESTIMATE_MICROSERVICE') private readonly estimateClient: ClientProxy
  ) {}
  async create(createEstimateDto: CreateEstimateDto) {
    return this.estimateClient.send(
      {cmd:'create_estimate'},
      createEstimateDto
    )
  }
  async findAll(filters:EstimateFilters) {
    return this.estimateClient.send(
      {cmd : 'all_estimates'},
      filters
    )
  }

  async findOne(id: number) {
    return this.estimateClient.send(
      {cmd : 'getOne_estimate'},
      {id}
    )
  }

  async update(id: number, updateEstimateDto: UpdateEstimateDto) {
    return this.estimateClient.send(
      {cmd : 'update_estimate'},
      {id,updateEstimateDto}
    )
  }

  async remove(id: number) {
    return this.estimateClient.send(
      {cmd : 'delete_estimate'},
      {id}
    )
  }
}
