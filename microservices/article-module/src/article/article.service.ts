import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { PrismaService } from 'nestjs-prisma';
import { Filters } from './entities/article.entity';

@Injectable()
export class ArticlesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createArticleDto: CreateArticleDto) {
    const {
      priceByChannel,
      mediaData,
      articleByAuthor,
      articleByPublishingHouse,
      articleByCategory,
      coverId,
      ...articleData
    } = createArticleDto;

    // Création de l'article sans les relations
    const article = await this.prisma.article.create({
      data: {
        ...articleData,
        coverId,
      },
    });

    if (articleByCategory) {
      for (const categoryData of articleByCategory) {
        let category = await this.prisma.categoryArticle.findFirst({
          where: { name: categoryData.name },
        });
        console.log(category, "catégories");

        if (!category) {
          category = await this.prisma.categoryArticle.create({
            data: { name: categoryData.name },
          });
        }

        const existingRelation = await this.prisma.articleByCategory.findFirst({
          where: {
            articleId: article.id,
            categoryarticleId: category.id,
          },
        });

        if (!existingRelation) {
          console.log(`Creating relation for Article ID: ${article.id}, Category ID: ${category.id}`);
          await this.prisma.articleByCategory.create({
            data: {
              articleId: article.id,
              categoryarticleId: category.id,
            },
          });
        } else {
          console.log(`Relation already exists for Article ID: ${article.id}, Category ID: ${category.id}`);
        }
      }
    }

    if (articleByAuthor) {
      for (const authorData of articleByAuthor) {
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
            articleId: article.id,
            authorId: author.id,
          },
        });
      }
    }

    if (articleByPublishingHouse) {
      for (const publishingHouseData of articleByPublishingHouse) {
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
            articleId: article.id,
            publishingHouseId: publishingHouse.id,
          },
        });
      }
    }

    if (priceByChannel) {
      for (const priceData of priceByChannel) {
        await this.prisma.priceByChannel.create({
          data: {
            idArticle: article.id,
            price: priceData.price,
            idSalesChannel: priceData.idSalesChannel,
          },
        });
      }
    }

    const fullArticle = await this.prisma.article.findUnique({
      where: { id: article.id },
      include: {
        priceByChannel: true,
        articleByAuthor: { include: { author: true } },
        articleByPublishingHouse: { include: { publishingHouse: true } },
        articleByCategory: { include: { categoryArticle: true } },
        cover: true,
      },
    });

    return fullArticle;
  }

  async findAll(filters: Filters) {
    let { take, skip, publishingHousesIds, authorsIds, text } = filters;
    console.log('THIS', take, skip);
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
        { code: { contains: text } },
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
        articleByCategory: { include: { categoryArticle: true } },
      },
      orderBy: [{ archived: "asc" }, { createdAt: "desc" }],
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
        articleByCategory:{include:{categoryArticle:true}},
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
    const {
      priceByChannel,
      articleByAuthor,
      articleByPublishingHouse,
      articleByCategory,
      ...articleData
    } = updateArticleDto;

    if (articleByAuthor) {
      await this.prisma.articleByAuthor.deleteMany({
        where: { articleId: id },
      });

      for (const authorData of articleByAuthor) {
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
      }
    }

    if (articleByPublishingHouse) {
      await this.prisma.articleByPublishingHouse.deleteMany({
        where: { articleId: id },
      });

      for (const publishingHouseData of articleByPublishingHouse) {
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
      }
    }

    if (articleByCategory) {
      await this.prisma.articleByCategory.deleteMany({
        where: { articleId: id },
      });

      for (const categoryData of articleByCategory) {
        let category = await this.prisma.categoryArticle.findFirst({
          where: { name: categoryData.name },
        });

        if (!category) {
          category = await this.prisma.categoryArticle.create({
            data: { name: categoryData.name },
          });
        }

        await this.prisma.articleByCategory.create({
          data: {
            articleId: id,
            categoryarticleId: category.id,
          },
        });
      }
    }

    if (priceByChannel) {
      await this.prisma.priceByChannel.deleteMany({
        where: { idArticle: id },
      });

      for (const priceData of priceByChannel) {
        await this.prisma.priceByChannel.create({
          data: {
            idArticle: id,
            price: priceData.price,
            idSalesChannel: priceData.idSalesChannel,
          },
        });
      }
    }

    const updatedArticle = await this.prisma.article.update({
      where: { id },
      data: { ...articleData },
    });

    return updatedArticle;
  }

  async remove(id: number) {
    const article = await this.prisma.article.delete({
      where: { id },
    });
    return article;
  }
}
