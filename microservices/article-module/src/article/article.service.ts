import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { PrismaService } from 'nestjs-prisma';
import { Filters } from './entities/article.entity';
import { title } from 'process';

@Injectable()
export class ArticlesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createArticleDto: CreateArticleDto) {
    return await this.prisma.article.create({
      data: createArticleDto,
    });
  }

  async findAll(filters: Filters) {
    let { take, skip, publishingHousesIds, authorsIds, text } = filters;
    console.log('THIS',take,skip);
    take = !take ? 10 : +take;
    skip = !skip ? 0 : +skip;
    let where = {};
    if (publishingHousesIds) {
      where['articleByPublishingHouse'] = {
        some: {
          publishingHouseId: { in: publishingHousesIds.map((elem) => +elem) },
        },
      };
    }
    if (authorsIds) {
      where['articleByAuthor'] = {
        some: { authorId: { in: authorsIds.map((elem) => +elem) } },
      };
    }
    if (text) {
      where['OR'] = [
        { title: { contains: text } },
        {
          articleByAuthor: {
            some: {
              author: {
                OR: [
                  { nameAr: { contains: text } },
                  { nameEn: { contains: text } },
                ],
              },
            },
          },
        },
        {
          articleByPublishingHouse: {
            some: {
              publishingHouse: {
                OR: [
                  { nameAr: { contains: text } },
                  { nameEn: { contains: text } },
                ],
              },
            },
          },
        },
      ];
    }

    console.log(require('util').inspect(where, { depth: null }));
    let data= await this.prisma.article.findMany({
      where,
      take,
      skip,
      include:{
        articleByAuthor:{include:{author:true}},
        articleByPublishingHouse:{include:{publishingHouse:true}}
      }
    });

    let count =await this.prisma.article.count()

    return {data,count}
  }

  async findOne(id: number) {
    return await this.prisma.article.findUnique({ where: { id } });
  }

  async update(id: number, updateArticleDto: UpdateArticleDto) {
    return await this.prisma.article.update({
      where: { id },
      data: updateArticleDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.article.delete({ where: { id } });
  }
}
