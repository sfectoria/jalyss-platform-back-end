// src/price-by-channel/price-by-channel.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreatePriceByChannelDto } from './dto/create-price-by-channel.dto';
import { UpdatePriceByChannelDto } from './dto/update-price-by-channel.dto';
import { Price } from './entities/price-by-channel.entity';

@Injectable()
export class PriceByChannelService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPriceByChannelDto: CreatePriceByChannelDto) {
    return await this.prisma.priceByChannel.create({
      data: createPriceByChannelDto,
    });
  }

  async findAll(filters: Price) {
    let { take, skip, articleIds, salesChannelIds } = filters;
    console.log('THIS', take, skip);

    // take = !take ? 10 : +take;
    // skip = !skip ? 0 : +skip;

    let where = {};

    if (articleIds) {
      where['idArticle'] = { //nom dans le DTO
        in: articleIds.map((elem) => +elem),
      };
    }

    if (salesChannelIds) {
      where['idSalesChannel'] = {
        in: salesChannelIds.map((elem) => +elem),
      };
    }

    return await this.prisma.priceByChannel.findMany({
      where,
      take,
      skip,
      include: {
        article: true,
        salesChannel: true,
      },
    });
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
