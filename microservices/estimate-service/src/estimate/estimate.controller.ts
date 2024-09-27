import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EstimateService } from './estimate.service';
import { CreateEstimateDto } from './dto/create-estimate.dto';
import { UpdateEstimateDto } from './dto/update-estimate.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { EstimateFilters } from './entities/estimate.entity';

@Controller('estimate')
export class EstimateController {
  constructor(private readonly estimateService: EstimateService) {}

  @MessagePattern({ cmd: 'create_estimate' })
  create(@Payload() createEstimateDto: CreateEstimateDto) {
    return this.estimateService.create(createEstimateDto);
  }

  @MessagePattern({ cmd: 'all_estimates' })
  async findAll(@Payload() filters:EstimateFilters) {
    return this.estimateService.findAll(filters);
  }

  @MessagePattern({ cmd: 'getOne_estimate' })
  async findOne(@Payload() data:{id: number}) {
    return this.estimateService.findOne(data.id);
  }

  @MessagePattern({ cmd: 'update_estimate' })
  async update(@Payload() data:{id: number, updateEstimateDto: UpdateEstimateDto}) {
    return this.estimateService.update(data.id, data.updateEstimateDto);
  }

  @MessagePattern({ cmd: 'delete_estimate' })
  async remove(@Param('id') id: string) {
    return this.estimateService.remove(+id);
  }
}
