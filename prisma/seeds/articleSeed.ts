import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function articleSeed() {
  const categoryArticle1 = await prisma.categoryArticle.create({
    data: { name: 'simple' },
  });
  const publishingHouse1 = await prisma.publishingHouse.create({
    data: {
      nameAr: 'ABC Publishing',
      nameEn: 'ABC Publishing',
      address: '789 Maple St',
    },
  });
  const publishingHouse2 = await prisma.publishingHouse.create({
    data: {
      nameAr: 'دار السلام',
      nameEn: 'dar e salam',
      address: 'Bizerte/Tunisia',
    },
  });
  const publishingHouse3 = await prisma.publishingHouse.create({
    data: {
      nameAr: 'دار المعرفة',
      nameEn: 'dar el maarfa',
      address: 'Tunis/Tunisia',
    },
  });

  const author1 = await prisma.author.create({
    data: {
      nameAr: ' نجيب محفوظ',
      nameEn: 'Naguib Mahfouz',
    },
  });
  const author2 = await prisma.author.create({
    data: {
      nameAr: 'جبران خليل جبران',
      nameEn: 'Gibran Khalil Gibran',
    },
  });
  const author3 = await prisma.author.create({
    data: {
      nameAr: 'طه حسين',
      nameEn: 'Taha Hussein',
    },
  });
  const article1 = await prisma.article.create({
    data: {
      title: 'الرجل الغني و الرجل الفقير',
      code: '111111',
    },
  });
  const article2 = await prisma.article.create({
    data: {
      title: 'فن اللامبالات',
      code: '111114',
    },
  });
  const article3 = await prisma.article.create({
    data: {
      title: 'كن انت',
      code: '111112',
    },
  });
  const article4 = await prisma.article.create({
    data: {
      title: 'خلق الكون في القران الكريم',
      code: '111113',
    },
  });
  const article5 = await prisma.article.create({
    data: {
      title: 'من أجل النجاح',
      code: '111117',
    },
  });
  const article6 = await prisma.article.create({
    data: {
      title: 'اولاد حارتنا',
      code: '111118',
    },
  });

  const publishingHousesInArticles =
    await prisma.articleByPublishingHouse.createMany({
      data: [
        {
          articleId: article1.id,
          publishingHouseId: publishingHouse1.id,
        },
        {
          articleId: article2.id,
          publishingHouseId: publishingHouse2.id,
        },
        {
          articleId: article3.id,
          publishingHouseId: publishingHouse3.id,
        },
        {
          articleId: article4.id,
          publishingHouseId: publishingHouse2.id,
        },
        {
          articleId: article5.id,
          publishingHouseId: publishingHouse2.id,
        },
        {
          articleId: article6.id,
          publishingHouseId: publishingHouse1.id,
        },
      ],
    });

  const articlesByAuthors = await prisma.articleByAuthor.createMany({
    data: [
      {
        articleId: article1.id,
        authorId: author1.id,
      },
      {
        articleId: article2.id,
        authorId: author1.id,
      },
      {
        articleId: article3.id,
        authorId: author3.id,
      },
      {
        articleId: article4.id,
        authorId: author2.id,
      },
      {
        articleId: article5.id,
        authorId: author1.id,
      },
    ],
  });

  const categoryInArticle = await prisma.articleByCategory.createMany({
    data:[
      {
        articleId:article1.id,
        categoryarticleId:categoryArticle1.id
      },
      {
        articleId:article2.id,
        categoryarticleId:categoryArticle1.id
      },
      {
        articleId:article3.id,
        categoryarticleId:categoryArticle1.id
      },
      {
        articleId:article4.id,
        categoryarticleId:categoryArticle1.id
      },
      {
        articleId:article5.id,
        categoryarticleId:categoryArticle1.id
      },
      {
        articleId:article6.id,
        categoryarticleId:categoryArticle1.id
      },
    ]
  })
}
