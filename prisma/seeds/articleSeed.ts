import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function articleSeed() {
  const categoryArticle1 = await prisma.categoryArticle.create({
    data: { name: 'simple' },
  });

  // const publishingHouses = await prisma.publishingHouse.createMany({
  //   data: [
  //     {
  //       nameAr: 'ABC Publishing',
  //       nameEn: 'ABC Publishing',
  //       address: '789 Maple St',
  //     },
  //     {
  //       nameAr: 'دار السلام',
  //       nameEn: 'dar e salam',
  //       address: 'Bizerte/Tunisia',
  //     },
  //     {
  //       nameAr: 'دار المعرفة',
  //       nameEn: 'dar el maarfa',
  //       address: 'Tunis/Tunisia',
  //     },
  //   ],
  // });

  const [publishingHouse1, publishingHouse2, publishingHouse3] =
    await prisma.publishingHouse.findMany();

  // const authors = await prisma.author.createMany({
  //   data: [
  //     {
  //       nameAr: 'نجيب محفوظ',
  //       nameEn: 'Naguib Mahfouz',
  //     },
  //     {
  //       nameAr: 'جبران خليل جبران',
  //       nameEn: 'Gibran Khalil Gibran',
  //     },
  //     {
  //       nameAr: 'طه حسين',
  //       nameEn: 'Taha Hussein',
  //     },
  //   ],
  // });

  const [author1, author2, author3] = await prisma.author.findMany();

  // Create 500 articles
  const articlesData = Array.from({ length: 1500 }).map((_, i) => ({
    title: `Article ${i + 1}`,
    code: `ART-${i + 10000}`,
  }));

  const articles = await prisma.article.createMany({
    data: articlesData,
  });

  const allArticles = await prisma.article.findMany();

  // Assign publishing houses and authors to articles
  const publishingHousesInArticlesData = allArticles.flatMap((article, index) => [
    {
      articleId: article.id,
      publishingHouseId: [publishingHouse1, publishingHouse2, publishingHouse3][
        index % 3
      ].id,
    },
  ]);

  const articlesByAuthorsData = allArticles.flatMap((article, index) => [
    {
      articleId: article.id,
      authorId: [author1, author2, author3][index % 3].id,
    },
  ]);

  const publishingHousesInArticles = await prisma.articleByPublishingHouse.createMany({
    data: publishingHousesInArticlesData,
  });

  const articlesByAuthors = await prisma.articleByAuthor.createMany({
    data: articlesByAuthorsData,
  });

  // Assign categories to articles
  const categoryInArticleData = allArticles.map((article) => ({
    articleId: article.id,
    categoryarticleId: categoryArticle1.id,
  }));

  const categoryInArticle = await prisma.articleByCategory.createMany({
    data: categoryInArticleData,
  });

}
