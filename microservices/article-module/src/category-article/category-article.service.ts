import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreateCategoryArticleDto } from './dto/create-category-article.dto';
import { UpdateCategoryArticleDto } from './dto/update-category-article.dto';

@Injectable()
export class CategoryArticlesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCategoryArticleDto: CreateCategoryArticleDto) {
    return await this.prisma.categoryArticle.create({
      data: createCategoryArticleDto,
    });
  }

  async findAll() {
    return await this.prisma.categoryArticle.findMany();
  }

  async findOne(id: number) {
    const categoryArticle = await this.prisma.categoryArticle.findUnique({
      where: { id },
    });
    if (!categoryArticle) {
      throw new NotFoundException(`Categorie Article with ID ${id} not found`);
    }

    return categoryArticle;
  }

  async update(
    id: number,
    updateCategoryArticleDto: UpdateCategoryArticleDto,
  ) {
    const categoryArticle = await this.prisma.categoryArticle.findUnique({
      where: { id },
    });
    if (!categoryArticle) {
      throw new NotFoundException(`Categorie Article with ID ${id} not found`);
    }
    return await this.prisma.categoryArticle.update({
      where: { id },
      data: updateCategoryArticleDto,
    });
  }
  

  async remove(id: number) {
    const categoryArticle = await this.prisma.categoryArticle.findUnique({
      where: { id },
    });
    if (!categoryArticle) {
      throw new NotFoundException(`Categorie Article with ID ${id} not found`);
    }
    return await this.prisma.categoryArticle.delete({ where: { id } });
  }
}
