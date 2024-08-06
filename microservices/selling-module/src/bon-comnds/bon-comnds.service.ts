import { Injectable } from '@nestjs/common';
import { CreateBonComndDto } from './dto/create-bon-comnd.dto';
import { UpdateBonComndDto } from './dto/update-bon-comnd.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class BonComndsService {
  constructor(private readonly prisma : PrismaService) {}
  async create(createBonComndDto: CreateBonComndDto) {
    return await this.prisma.bonCommande.create({ data: createBonComndDto });
  }

  async findAll() {
    return await this.prisma.bonCommande.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.bonCommande.findUnique({ where: { id } });
  }

  async update(id: number, updateBonComndDto: UpdateBonComndDto) {
    return await this.prisma.bonCommande.update({
      where: { id },
      data: updateBonComndDto
    })
  }

  async remove(id: number) {
    return await this.prisma.bonCommande.delete({ where: { id } })
  }
}
