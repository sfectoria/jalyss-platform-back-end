import { Injectable } from '@nestjs/common';
import { CreateSalesChannelDto } from './dto/create-sales-channel.dto';
import { UpdateSalesChannelDto } from './dto/update-sales-channel.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class SalesChannelsService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createSalesChannelDto: CreateSalesChannelDto) {
    return await this.prisma.sales_channels.create({
      data: createSalesChannelDto,
    });
  }

  async findAll() {
    return await this.prisma.sales_channels.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.sales_channels.findUnique({ where: { id } });
  }

  async update(id: number, updateSalesChannelDto: UpdateSalesChannelDto) {
    return await this.prisma.sales_channels.update({
      where: { id },
      data: updateSalesChannelDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.sales_channels.delete({ where: { id } });
  }
}
