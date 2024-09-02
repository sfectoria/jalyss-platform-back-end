// src/price-by-channel/price-by-channel.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreatePriceByChannelDto } from './dto/create-price-by-channel.dto';
import { UpdatePriceByChannelDto } from './dto/update-price-by-channel.dto';

@Injectable()
export class PriceByChannelService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPriceByChannelDto: CreatePriceByChannelDto) {
    return await this.prisma.priceByChannel.create({
      data: createPriceByChannelDto,
    });
  }

  async findAll() {
    return await this.prisma.priceByChannel.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.priceByChannel.findUnique({ where: { id } });
  }

  async update(id: number, updatePriceByChannelDto: UpdatePriceByChannelDto) {
    return await this.prisma.priceByChannel.update({
      where: { id },
      data: updatePriceByChannelDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.priceByChannel.delete({ where: { id } });
  }
}
