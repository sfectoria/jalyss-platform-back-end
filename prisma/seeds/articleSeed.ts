import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function createMedia() {
  const existingMedia = await prisma.media.findMany();

  if (existingMedia.length) {
    console.log('Le semis des médias a été arrêté car des médias existent déjà dans la base de données.');
    return existingMedia[0].id; // Retourner l'ID du premier média existant
  }

  const mediaData = {
    path: 'https://dzinejs.lv/wp-content/plugins/lightbox/images/No-image-found.jpg',
    type: 'image/jpeg',
    alt: 'Image par défaut',
    extension: 'jpg',
    description: 'Cette image est utilisée lorsqu\'aucune image spécifique n\'est fournie.',
  };

  const media = await prisma.media.create({ data: mediaData });
  console.log('Média créé avec succès:', media);
  return media.id; 
}

export async function articleSeed() {
  const categoryArticle1 = await prisma.categoryArticle.create({ data: { name: 'simple' } });
  
  const coverId = await createMedia(); 

  const publishingHouses = await prisma.publishingHouse.findMany();
  const authors = await prisma.author.findMany();

  if (authors.length === 0) {
    console.error('Aucun auteur trouvé. Assurez-vous que des auteurs existent dans la base de données.');
    return;
  }

  const existingArticles = await prisma.article.findMany({
    select: { code: true },
  });
  const existingCodes = new Set(existingArticles.map(article => article.code));

  const articlesData = Array.from({ length: 1500 }).map((_, i) => {
    let code;
    do {
      code = `ART-${i + 10000}`; 
    } while (existingCodes.has(code)); 

    return {
      title: `Article ${i + 1}`,
      code: code,
      coverId: coverId, 
    };
  });

  await prisma.article.createMany({ data: articlesData });

  const allArticles = await prisma.article.findMany();

  const publishingHousesInArticlesData = allArticles.map((article, index) => ({
    articleId: article.id,
    publishingHouseId: publishingHouses[index % publishingHouses.length].id, // Lier aux maisons d'édition
  }));

  const articlesByAuthorsData = allArticles.map((article, index) => ({
    articleId: article.id,
    authorId: authors[index % authors.length].id.toString(), 
  }));

  await prisma.articleByPublishingHouse.createMany({
    data: publishingHousesInArticlesData,
  });

  await prisma.articleByAuthor.createMany({
    data: articlesByAuthorsData,
  });

  const categoryInArticleData = allArticles.map((article) => ({
    articleId: article.id,
    categoryarticleId: categoryArticle1.id,
  }));

  await prisma.articleByCategory.createMany({
    data: categoryInArticleData,
  });

  console.log('Articles seeded successfully with media.');
}

articleSeed()
  .then(() => {
    console.log('Article seeding complete.');
  })
  .catch(e => {
    console.error('Article seeding failed:', e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
