import { Injectable } from '@nestjs/common';
import { CreateEstimateDto } from './dto/create-estimate.dto';
import { UpdateEstimateDto } from './dto/update-estimate.dto';
import { PrismaService } from 'nestjs-prisma';
import { EstimateFilters } from './entities/estimate.entity';

@Injectable()
export class EstimateService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createEstimateDto: CreateEstimateDto) {
    let {estimateLine,...rest}=createEstimateDto
    return await this.prisma.estimate.create({
      data: {
          ...rest,
          estimateLine: {
            createMany: { data: estimateLine },
          }
      }
  })
  }

  async findAll(filters?:EstimateFilters) {
    let {take,skip,clientsIds,salesChannelsIds}=filters
    take = !take ? 10 : +take;
    skip = !skip ? 0 : +skip;
    let where = {}
    if (clientsIds) {
      where['idClient'] = { in: clientsIds.map((e) => +e) };
    }
    if (salesChannelsIds) {
      where['salesChannelId'] = { in: salesChannelsIds.map((e) => +e) };
    }

    let data= await this.prisma.estimate.findMany({where,take,skip})
    let count = await this.prisma.estimate.count({where})
    return {data,count}
  }

  async findOne(id: number) {
    return await this.prisma.estimate.findUnique({where:{id}});
  }

  async update(id: number, updateEstimateDto: UpdateEstimateDto) {
    return `This action updates a #${id} estimate`;
  }

  async remove(id: number) {
    return `This action removes a #${id} estimate`;
  }
}
