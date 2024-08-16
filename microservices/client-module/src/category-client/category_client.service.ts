import { Injectable } from '@nestjs/common';
// import { CreateCategorieClientDto } from './dto/create-categorie-client.dto';
// import { UpdateCategorieClientDto } from './dto/update-categorie-client.dto';
import { PrismaService } from 'nestjs-prisma';
import { CreateCategoryClientDto } from './dto/create-category_client.dto';
import { UpdateCategoryClientDto } from './dto/update-category_client.dto';
// import { CreateCategorieClientDto } from './dto/create-client.dto';
// import { UpdateCategorieClientDto } from './dto/update-client.dto';

@Injectable()
export class CategoryClientsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCategoryClientDto: CreateCategoryClientDto) {
    return await this.prisma.categoryClient.create({
      data:createCategoryClientDto,
    });
  }

  async findAll() {
    return await this.prisma.categoryClient.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.categoryClient.findUnique({ where: { id } });
  }

  async update(id: number, updateCategoryClientDto: UpdateCategoryClientDto) {
    return await this.prisma.categoryClient.update({
      where: { id },
      data: updateCategoryClientDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.categoryClient.delete({ where: { id } });
  }
}
