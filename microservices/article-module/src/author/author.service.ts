import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { PrismaService } from 'nestjs-prisma';


@Injectable()
export class AuthorService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createAuthorDto: CreateAuthorDto) {
    return await this.prisma.author.create({
      data: createAuthorDto,
    });
  }

  async findAll() {
    return await this.prisma.author.findMany({include:{Media:true ,ArticleByAuthor:{include:{article:{include:{cover:true}}}}}});
  }

  async findOne(id: string) {
    const author = await this.prisma.author.findUnique({ where: { id },include:{Media:true,ArticleByAuthor:{include:{article:{include:{cover:true}}}}}});
    if (!author) {
      throw new NotFoundException(`Author with ID ${id} not found`);
    }
    return author;
  }

  async update(id: string, updateAuthorDto: UpdateAuthorDto) {
    const author = await this.prisma.author.findUnique({ where: { id } });
    if (!author) {
      throw new NotFoundException(`Author with ID ${id} not found`);
    }
    return await this.prisma.author.update({
      where: { id },
      data: updateAuthorDto,
    });
  }

  async remove(id: string) {
    const author = await this.prisma.author.findUnique({ where: { id } });
    if (!author) {
      throw new NotFoundException(`Publishing house with ID ${id} not found`);
    }
    return await this.prisma.author.delete({ where: { id } });
  }
}
