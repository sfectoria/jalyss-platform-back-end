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
    let where = {};
    return await this.prisma.salesChannels.findMany({
      where,
      include: { Employee: true },
      orderBy: {
        id: 'desc',
      },
    });
  }

  async findOne(id: number) {
    return await this.prisma.salesChannels.findUnique({
      where: { id },
      include: { stock: true ,Employee: true},
    });
  }

  async update(id: number, updateSalesChannelDto: UpdateSalesChannelDto) {
    console.log(updateSalesChannelDto);
    return await this.prisma.salesChannels.update({
      where: { id },
      data: updateSalesChannelDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.salesChannels.delete({ where: { id } });
  }
}
