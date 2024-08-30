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
    const { priceByChannel, ...articleData } = createArticleDto;
  
    const article = await this.prisma.article.create({
      data: {
        ...articleData,
        priceByChannel: {
          create: priceByChannel.map((priceData) => ({
            price: priceData.price,
            salesChannel: {
              connect: { id: priceData.idSalesChannel }, //nous ne créons pas un nouveau canal de vente mais que nous connectons 
                                                         //le priceByChannel a un canal de vente existant
            },
          })),
        },
      },
      include: {
        priceByChannel: true,
      },
    });
  
    return article;
  }
  

  async findAll(filters: Filters) {
    let { take, skip, publishingHousesIds, authorsIds, text } = filters;
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
    return await this.prisma.article.findMany({
      where,
      take,
      skip,
      include:{
        articleByAuthor:{include:{author:true}},
        articleByPublishingHouse:{include:{publishingHouse:true}},
        priceByChannel:{include:{salesChannel:true}},
      }
    });
  }

  async findOne(id: number) {
    return await this.prisma.article.findUnique({ where: { id }, include:{priceByChannel:{include:{salesChannel:true,}}} });
  }

  async update(id: number, updateArticleDto: UpdateArticleDto) {
    const { priceByChannel, ...articleData } = updateArticleDto;
  
    const article = await this.prisma.article.update({
      where: { id },
      data: {
        ...articleData,
        // Si des prix sont fournis, mettez à jour les entrées PriceByChannel associées
        priceByChannel: priceByChannel
          ? {
              deleteMany: {}, // Supprime les anciennes entrées PriceByChannel
              create: priceByChannel.map((priceData) => ({
                price: priceData.price,
                salesChannel: {
                  connect: { id: priceData.idSalesChannel },
                },
              })),
            }
          : undefined,
      },
      include: {
        priceByChannel: true,
      },
    });
  
    return article;
  }
  

  async remove(id: number) {
    return await this.prisma.article.delete({ where: { id } });
  }
}
