import { Injectable } from '@nestjs/common';
// import { CreateCategorieClientDto } from './dto/create-categorie-client.dto';
// import { UpdateCategorieClientDto } from './dto/update-categorie-client.dto';
import { PrismaService } from 'nestjs-prisma';
import { CreateCategorieClientDto } from './dto/create-categorie_client.dto';
import { UpdateCategorieClientDto } from './dto/update-categorie_client.dto';
// import { CreateCategorieClientDto } from './dto/create-client.dto';
// import { UpdateCategorieClientDto } from './dto/update-client.dto';

@Injectable()
export class CategorieClientsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCategorieClientDto: CreateCategorieClientDto) {
    return await this.prisma.categorieClient.create({
      data: createCategorieClientDto,
    });
  }

  async findAll() {
    return await this.prisma.categorieClient.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.categorieClient.findUnique({ where: { id } });
  }

  async update(id: number, updateCategorieClientDto: UpdateCategorieClientDto) {
    return await this.prisma.categorieClient.update({
      where: { id },
      data: updateCategorieClientDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.categorieClient.delete({ where: { id } });
  }
}
