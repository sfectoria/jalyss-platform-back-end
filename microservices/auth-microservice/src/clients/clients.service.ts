import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class ClientsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createClientDto: CreateClientDto) {
    return await this.prisma.client.create({
      data: createClientDto,
    });
  }

  async findAll() {
    return await this.prisma.client.findMany({include:{media:true}});
  }

  async findOne(id: number) {
    return await this.prisma.client.findUnique({ where: { id }, include:{categoryClient:true,media:true} });
  }

  async update(id: number, updateClientDto: UpdateClientDto) {
    return await this.prisma.client.update({
      where: { id },
      data: updateClientDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.client.delete({ where: { id } });
  }
}
