import { Injectable } from '@nestjs/common';
import { CreateBonReceptionDto } from './dto/create-bon-reception.dto';
import { UpdateBonReceptionDto } from './dto/update-bon-reception.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class BonReceptionsService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createBonReceptionDto: CreateBonReceptionDto) {
    return await this.prisma.bonReception.create({ data: createBonReceptionDto });
  }

  async findAll() {
    return await this.prisma.bonReception.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.bonReception.findUnique({ where: { id } });
  }

  async update(id: number, updateBonReceptionDto: UpdateBonReceptionDto) {
    return await this.prisma.bonReception.update({
      where: { id },
      data: updateBonReceptionDto,
    })
  }

  async remove(id: number) {
    return await this.prisma.bonReception.delete({ where: { id } })
  }
}
