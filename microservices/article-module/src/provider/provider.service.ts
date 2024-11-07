import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreateProviderDto } from './dto/create-provider.dto';
import { UpdateProviderDto } from './dto/update-provider.dto';

@Injectable()
export class ProviderService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createProviderDto: CreateProviderDto) {
    return await this.prisma.provider.create({
      data: createProviderDto,
    });
  }

  async findAll() {
    return await this.prisma.provider.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.provider.findUnique({ where: { id } });
  }

  async update(id: number, updateProviderDto: UpdateProviderDto) {
    return await this.prisma.provider.update({
      where: { id },
      data: updateProviderDto,
    });
  
  }

  async remove(id: number) {
    return await this.prisma.provider.delete({ where: { id } });
  }
}
