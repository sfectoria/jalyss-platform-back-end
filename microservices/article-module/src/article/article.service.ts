import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { PrismaService } from 'nestjs-prisma';
import { Filters } from './entities/article.entity';

@Injectable()
export class ArticlesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createArticleDto: CreateArticleDto) {
    const { priceByChannel, mediaData, articleByAuthor, articleByPublishingHouse, ...articleData } = createArticleDto;

    const createdAuthors = articleByAuthor
      ? await Promise.all(
          articleByAuthor.map(async (authorName) => {
            let author = await this.prisma.author.findFirst({
              where: {
                OR: [
                  { nameAr: authorName.nameAr },
                  { nameEn: authorName.nameEn },
                ],
              },
            });

            if (!author) {
              author = await this.prisma.author.create({
                data: {
                  nameAr: authorName.nameAr,
                  nameEn: authorName.nameEn,
                },
              });
            }

            return {
              author: {
                connect: { id: author.id },
              },
            };
          })
        )
      : [];

    const createdPublishers = articleByPublishingHouse
      ? await Promise.all(
          articleByPublishingHouse.map(async (publishingHouseName) => {
            let publishingHouse = await this.prisma.publishingHouse.findFirst({
              where: {
                OR: [
                  { nameAr: publishingHouseName.nameAr },
                  { nameEn: publishingHouseName.nameEn },
                ],
              },
            });

            if (!publishingHouse) {
              publishingHouse = await this.prisma.publishingHouse.create({
                data: {
                  nameAr: publishingHouseName.nameAr,
                  nameEn: publishingHouseName.nameEn,
                },
              });
            }

            return {
              publishingHouse: {
                connect: { id: publishingHouse.id },
              },
            };
          })
        )
      : [];

    const article = await this.prisma.article.create({
      data: {
        ...articleData,
        articleByAuthor: {
          create: createdAuthors,
        },
        articleByPublishingHouse: {
          create: createdPublishers,
        },
        priceByChannel: {
          create: priceByChannel?.map((priceData) => ({
            price: priceData.price,
            salesChannel: {
              connect: { id: priceData.idSalesChannel },
            },
          })),
        },
      },
      include: {
        priceByChannel: true,
        articleByAuthor: { include: { author: true } },
        articleByPublishingHouse: { include: { publishingHouse: true } },
      },
    });

    return article;
  }

  async findAll(filters: Filters) {
    let { take, skip, publishingHousesIds, authorsIds, text } = filters;
    console.log('THIS',take,skip);
    take = !take ? 20 : +take;
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

    const data = await this.prisma.article.findMany({
      where,
      take,
      skip,
      include: {
        articleByAuthor: { include: { author: true } },
        articleByPublishingHouse: { include: { publishingHouse: true } },
        priceByChannel: { include: { salesChannel: true } },
        cover: true,
        stockArticle: true,
      },
    });

    const count = await this.prisma.article.count({ where });

    return { data, count };
  }

  async findOne(id: number) {
    return await this.prisma.article.findUnique({
      where: { id },
      include: {
        articleByAuthor: { include: { author: true } },
        articleByPublishingHouse: { include: { publishingHouse: true } },
        priceByChannel: { include: { salesChannel: true } },
        cover: true,
        stockArticle: { include: { stock: true } },
      },
    });
  }

  async findBarCode(code: string) {
    const article = await this.prisma.article.findUnique({
      where: { code },
      include: {
        articleByAuthor: { include: { author: true } },
        articleByPublishingHouse: { include: { publishingHouse: true } },
        priceByChannel: { include: { salesChannel: true } },
        cover: true,
        stockArticle: { include: { stock: true } },
      },
    });
    return article || "Article doesn't exist";
  }

  async update(id: number, updateArticleDto: UpdateArticleDto) {
    const { priceByChannel, articleByAuthor, articleByPublishingHouse, ...articleData } = updateArticleDto;
  
    if (articleByAuthor) {
      // Supprimer les relations existantes
      await this.prisma.articleByAuthor.deleteMany({
        where: { articleId: id },
      });
  
      await Promise.all(
        articleByAuthor.map(async (authorData) => {
          let author = await this.prisma.author.findFirst({
            where: {
              OR: [
                { nameAr: authorData.nameAr },
                { nameEn: authorData.nameEn },
              ],
            },
          });
  
          if (!author) {
            author = await this.prisma.author.create({
              data: {
                nameAr: authorData.nameAr,
                nameEn: authorData.nameEn,
              },
            });
          }
  
          await this.prisma.articleByAuthor.create({
            data: {
              articleId: id,
              authorId: author.id,
            },
          });
        })
      );
    }
  
    if (articleByPublishingHouse) {
      await this.prisma.articleByPublishingHouse.deleteMany({
        where: { articleId: id },
      });
  
      await Promise.all(
        articleByPublishingHouse.map(async (publishingHouseData) => {
          let publishingHouse = await this.prisma.publishingHouse.findFirst({
            where: {
              OR: [
                { nameAr: publishingHouseData.nameAr },
                { nameEn: publishingHouseData.nameEn },
              ],
            },
          });
  
          if (!publishingHouse) {
            publishingHouse = await this.prisma.publishingHouse.create({
              data: {
                nameAr: publishingHouseData.nameAr,
                nameEn: publishingHouseData.nameEn,
              },
            });
          }
  
          await this.prisma.articleByPublishingHouse.create({
            data: {
              articleId: id,
              publishingHouseId: publishingHouse.id,
            },
          });
        })
      );
    }
  
    if (priceByChannel) {
      await this.prisma.priceByChannel.deleteMany({
        where: { idArticle: id },
      });
  
      await Promise.all(
        priceByChannel.map(async (priceData) => {
          await this.prisma.priceByChannel.create({
            data: {
              idArticle: id,
              price: priceData.price,
              idSalesChannel: priceData.idSalesChannel,
            },
          });
        })
      );
    }
  
    const article = await this.prisma.article.update({
      where: { id },
      data: {
        ...articleData,
      },
      include: {
        articleByAuthor: { include: { author: true } },
        articleByPublishingHouse: { include: { publishingHouse: true } },
        priceByChannel: true,
      },
    });
  
    return article;
  }
  

  async remove(id: number) {
    return await this.prisma.article.delete({ where: { id } });
  }
}
