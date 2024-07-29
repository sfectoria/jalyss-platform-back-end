import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreateCategorieArticleDto } from './dto/create-categorie-article.dto';
import { UpdateCategorieArticleDto } from './dto/update-categorie-article.dto';

@Injectable()
export class CategorieArticlesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCategorieArticleDto: CreateCategorieArticleDto) {
    return await this.prisma.categorieArticle.create({
      data: createCategorieArticleDto,
    });
  }

  async findAll() {
    return await this.prisma.categorieArticle.findMany();
  }

  
  async findOne(id: number) {
    const categorieArticle = await this.prisma.categorieArticle.findUnique({ where: { id } });
    if (!categorieArticle) {
      throw new NotFoundException(`Categorie Article with ID ${id} not found`);
    }
    
    return categorieArticle;
  }

  async update(id: number, updateCategorieArticleDto: UpdateCategorieArticleDto) {
    const categorieArticle = await this.prisma.categorieArticle.findUnique({ where: { id } });
    if (!categorieArticle) {
      throw new NotFoundException(`Categorie Article with ID ${id} not found`);
    }
    return await this.prisma.categorieArticle.update({
      where: { id },
      data: updateCategorieArticleDto,
    });
  }

  async remove(id: number) {
    const categorieArticle = await this.prisma.categorieArticle.findUnique({ where: { id } });
    if (!categorieArticle) {
      throw new NotFoundException(`Categorie Article with ID ${id} not found`);
    }
    return await this.prisma.categorieArticle.delete({ where: { id } });
  }
}
