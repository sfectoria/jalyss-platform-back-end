import { Injectable } from '@nestjs/common';
import { CreateSalesChannelDto } from './dto/create-sales-channel.dto';
import { UpdateSalesChannelDto } from './dto/update-sales-channel.dto';
import { PrismaService } from 'nestjs-prisma';
import { FiltersChannels } from './entities/sales-channel.entity';

@Injectable()
export class SalesChannelsService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createSalesChannelDto: CreateSalesChannelDto) {
    return await this.prisma.salesChannels.create({
      data: createSalesChannelDto,
    });
  }

  async findAll(filters?: FiltersChannels) {
    let { take, skip, text } = filters;
    take = !take ? 10 : +take;
    skip = !skip ? 0 : +skip;
    let where = {};
    return await this.prisma.salesChannels.findMany({where,take,skip});
  }

  async findOne(id: number) {
    return await this.prisma.salesChannels.findUnique({ where: { id } });
  }

  async update(id: number, updateSalesChannelDto: UpdateSalesChannelDto) {
    return await this.prisma.salesChannels.update({
      where: { id },
      data: updateSalesChannelDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.salesChannels.delete({ where: { id } });
  }
}
