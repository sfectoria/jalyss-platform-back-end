import { Injectable } from '@nestjs/common';
import { CreateSalesChannelDto } from './dto/create-sales-channel.dto';
import { UpdateSalesChannelDto } from './dto/update-sales-channel.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class SalesChannelsService {
  constructor(private readonly prisma : PrismaService) {}
  async create(createSalesChannelDto: CreateSalesChannelDto) {
    return await this.prisma.canauxDeVent.create({
      data : createSalesChannelDto
    })
  }

  async findAll() {
    return await this.prisma.canauxDeVent.findMany(); 
  }

  async findOne(id: number) {
    return await this.prisma.canauxDeVent.findUnique({where: {id}});
  }

  async update(id: number, updateSalesChannelDto: UpdateSalesChannelDto) {
    return await this.prisma.canauxDeVent.update({
      where: {id},
      data : updateSalesChannelDto
    })
  }

  async remove(id: number) {
    return await this.prisma.canauxDeVent.delete({where: {id}})
  }
}
