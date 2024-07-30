import { Injectable } from '@nestjs/common';
import { CreateBonRetourDto } from './dto/create-bon-retour.dto';
import { UpdateBonRetourDto } from './dto/update-bon-retour.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class BonRetoursService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createBonRetourDto: CreateBonRetourDto) {
    return await this.prisma.bonRetour.create({ data: createBonRetourDto });
  }

  async findAll() {
    return await this.prisma.bonRetour.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.bonRetour.findUnique({ where: { id } });
  }

  async update(id: number, updateBonRetourDto: UpdateBonRetourDto) {
    return await this.prisma.bonRetour.update({
      where: { id },
      data: updateBonRetourDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.bonRetour.delete({ where: { id } });
  }
}
