import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreateCategoryArticalDto } from './dto/create-category-artical.dto';
import { UpdateCategoryArticalDto } from './dto/update-category-artical.dto';

@Injectable()
export class CategoryArticalsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCategoryArticalDto: CreateCategoryArticalDto) {
    return await this.prisma.categoryArtical.create({
      data: createCategoryArticalDto,
    });
  }

  async findAll() {
    return await this.prisma.categoryArtical.findMany();
  }

  async findOne(id: number) {
    const categoryArtical = await this.prisma.categoryArtical.findUnique({
      where: { id },
    });
    if (!categoryArtical) {
      throw new NotFoundException(`Categorie Article with ID ${id} not found`);
    }

    return categoryArtical;
  }

  async update(
    id: number,
    updateCategoryArticalDto: UpdateCategoryArticalDto,
  ) {
    const categoryArtical = await this.prisma.categoryArtical.findUnique({
      where: { id },
    });
    if (!categoryArtical) {
      throw new NotFoundException(`Categorie Article with ID ${id} not found`);
    }
    return await this.prisma.categoryArtical.update({
      where: { id },
      data: updateCategoryArticalDto,
    });
  }
  

  async remove(id: number) {
    const categoryArtical = await this.prisma.categoryArtical.findUnique({
      where: { id },
    });
    if (!categoryArtical) {
      throw new NotFoundException(`Categorie Article with ID ${id} not found`);
    }
    return await this.prisma.categoryArtical.delete({ where: { id } });
  }
}
