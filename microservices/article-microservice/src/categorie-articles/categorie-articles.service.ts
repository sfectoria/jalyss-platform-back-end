import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreateCategorieArticleDto } from './dto/create-categorie-article.dto';
import { UpdateCategorieArticleDto } from './dto/update-categorie-article.dto';

@Injectable()
export class CategorieArticlesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCategorieArticleDto: CreateCategorieArticleDto) {
    return await this.prisma.category_Article.create({
      data: createCategorieArticleDto,
    });
  }

  async findAll() {
    return await this.prisma.category_Article.findMany();
  }

  async findOne(id: number) {
    const categorieArticle = await this.prisma.category_Article.findUnique({
      where: { id },
    });
    if (!categorieArticle) {
      throw new NotFoundException(`Categorie Article with ID ${id} not found`);
    }

    return categorieArticle;
  }

  async update(
    id: number,
    updateCategorieArticleDto: UpdateCategorieArticleDto,
  ) {
    const categorieArticle = await this.prisma.category_Article.findUnique({
      where: { id },
    });
    if (!categorieArticle) {
      throw new NotFoundException(`Categorie Article with ID ${id} not found`);
    }
    return await this.prisma.category_Article.update({
      where: { id },
      data: updateCategorieArticleDto,
    });
  }

  async remove(id: number) {
    const categorieArticle = await this.prisma.category_Article.findUnique({
      where: { id },
    });
    if (!categorieArticle) {
      throw new NotFoundException(`Categorie Article with ID ${id} not found`);
    }
    return await this.prisma.category_Article.delete({ where: { id } });
  }
}