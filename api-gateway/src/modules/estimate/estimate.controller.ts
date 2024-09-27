import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { EstimateService } from './estimate.service';
import { CreateEstimateDto } from './dto/create-estimate.dto';
import { UpdateEstimateDto } from './dto/update-estimate.dto';
import { EstimateFilters } from './entities/estimate.entity';
import { ApiTags } from '@nestjs/swagger';

@Controller('estimate')
@ApiTags('estimate')

export class EstimateController {
  constructor(private readonly estimateService: EstimateService) {}

  @Post('create')
  create(@Body() createEstimateDto: CreateEstimateDto) {
    return this.estimateService.create(createEstimateDto);
  }

  @Get('getAll')
  findAll(@Query()filters?:EstimateFilters) {
    return this.estimateService.findAll(filters);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.estimateService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEstimateDto: UpdateEstimateDto) {
    return this.estimateService.update(+id, updateEstimateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.estimateService.remove(+id);
  }
}
