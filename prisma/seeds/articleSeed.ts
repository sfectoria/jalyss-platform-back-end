import { PrismaClient } from '@prisma/client';
import { create } from 'domain';

const prisma = new PrismaClient();

async function createMedia() {
  const existingMedia = await prisma.media.findMany();

  if (existingMedia.length) {
    console.log('Le semis des médias a été arrêté car des médias existent déjà dans la base de données.');
    return existingMedia; 
  }

  const mediaDataList = [
    { path: 'https://img-cdn.heureka.group/v1/5d91a2fd-7cf9-419c-958a-5a37196c72af.jpg?width=350&height=350', type: 'image/jpeg', alt: 'Image 1', extension: 'jpg', description: 'Description de l\'image 1.' },
    { path: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPSeHEyeOChBqCp4mqHROrKtMzIcy1GDOBgg&s', type: 'image/jpeg', alt: 'Image 2', extension: 'jpg', description: 'Description de l\'image 2.' },
    { path: 'https://cultivatewhatmatters.com/cdn/shop/articles/atomic-habits.jpg?v=1624827508', type: 'image/jpeg', alt: 'Image 3', extension: 'jpg', description: 'Description de l\'image 3.' },
    { path: 'https://images.epagine.fr/570/9780141033570_1_75.jpg', type: 'image/jpeg', alt: 'Image 4', extension: 'jpg', description: 'Description de l\'image 4.' },
    { path: 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781982137137/the-7-habits-of-highly-effective-people-9781982137137_hr.jpg', type: 'image/jpeg', alt: 'Image 5', extension: 'jpg', description: 'Description de l\'image 5.' },
    { path: 'https://images.epagine.fr/249/9781847946249_1_75.jpg', type: 'image/jpeg', alt: 'Image 6', extension: 'jpg', description: 'Description de l\'image 6.' },
    { path: 'https://i0.wp.com/www.charellegriffith.com/wp-content/uploads/2017/05/Start_With_Why_Charelle_Griffith_Book_Blog.jpg?fit=3024%2C3024&ssl=1', type: 'image/jpeg', alt: 'Image 7', extension: 'jpg', description: 'Description de l\'image 7.' },
    { path: 'https://gentscafe.co/wp-content/uploads/2024/07/Gents-Cafe-Christopher-Crossley-Four-Agreements-Book-Review.jpg', type: 'image/jpeg', alt: 'Image 8', extension: 'jpg', description: 'Description de l\'image 8.' },
    { path: 'https://m.media-amazon.com/images/I/712Uo++xK2L._AC_UF1000,1000_QL80_.jpg', type: 'image/jpeg', alt: 'Image 9', extension: 'jpg', description: 'Description de l\'image 9.' },
    { path: 'https://i.ebayimg.com/images/g/pwcAAOSwgqFmUaaB/s-l500.webp', type: 'image/jpeg', alt: 'Image 10', extension: 'jpg', description: 'Description de l\'image 10.' },
    { path: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYKWAiMQoSn6Y_xUOV5isN-wsSFrFhTcLaAw&s', type: 'image/jpeg', alt: 'Image 11', extension: 'jpg', description: 'Description de l\'image 11.' },
    { path: 'https://m.media-amazon.com/images/I/41hdKHmffkL._SL500_.jpg', type: 'image/jpeg', alt: 'Image 12', extension: 'jpg', description: 'Description de l\'image 12.' },
    { path: 'https://m.media-amazon.com/images/I/51zGCdRQXOL._AC_UF1000,1000_QL80_.jpg', type: 'image/jpeg', alt: 'Image 13', extension: 'jpg', description: 'Description de l\'image 13.' },
    { path: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1630683326i/10534.jpg', type: 'image/jpeg', alt: 'Image 14', extension: 'jpg', description: 'Description de l\'image 14.' },
    { path: 'https://m.media-amazon.com/images/I/71QKQ9mwV7L._AC_UF1000,1000_QL80_.jpg', type: 'image/jpeg', alt: 'Image 15', extension: 'jpg', description: 'Description de l\'image 15.' },
    { path: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS8YYdDdIdTOItZjGX8i4JzSIBuPaqcAInZw&s', type: 'image/jpeg', alt: 'Image 16', extension: 'jpg', description: 'Description de l\'image 16.' },
    { path: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9LbNVyZgiBgJVVjwDG4eptlCWIyNMGOwG3Q&s', type: 'image/jpeg', alt: 'Image 17', extension: 'jpg', description: 'Description de l\'image 17.' },
    { path: 'https://www.alkirtas.com/83236-large_default/the-alchemist-paulo-coelho.jpg', type: 'image/jpeg', alt: 'Image 18', extension: 'jpg', description: 'Description de l\'image 18.' },
    { path: 'https://images.epagine.fr/351/9780091906351_1_75.jpg', type: 'image/jpeg', alt: 'Image 19', extension: 'jpg', description: 'Description de l\'image 19.' },
    { path: 'https://m.media-amazon.com/images/I/819Pl1nP0ZL._AC_UF894,1000_QL80_.jpg', type: 'image/jpeg', alt: 'Image 20', extension: 'jpg', description: 'Description de l\'image 20.' }
  ];

  await prisma.media.createMany({ data: mediaDataList });
  const allMedia = await prisma.media.findMany();
  console.log('Médias créés avec succès:', allMedia);
  return allMedia; // Return all created media
}

const bookTitles = [
  'Rich Dad Poor Dad', 'The Lean Startup', 'Atomic Habits', 'Thinking, Fast and Slow',
  'The 7 Habits of Highly Effective People', 'The Power of Habit', 'Start with Why',
  'The Four Agreements', 'Sapiens: A Brief History of Humankind', 'Deep Work',
  'Grit: The Power of Passion and Perseverance', 'Dare to Lead', 'Zero to One',
  'The Art of War', 'The Subtle Art of Not Giving a F*ck', 'Educated',
  'Becoming', 'The Alchemist', 'How to Win Friends and Influence People', 'Man\'s Search for Meaning'
];

const shortDescriptionsEn = [
  'A guide to financial independence and wealth-building strategies.',
  'A blueprint for creating and launching successful startups.',
  'A manual for developing good habits and breaking bad ones.',
  'An exploration of the mind’s thinking processes and biases.',
  'A self-improvement book focusing on personal and professional habits.',
  'An investigation into how habits shape our lives and success.',
  'A book that explores the reasons behind successful businesses and leaders.',
  'A guide to personal freedom through ancient Toltec wisdom.',
  'A historical exploration of humankind’s evolution and progress.',
  'A guide to achieving focused success in a distracted world.',
  'A study on the role of passion and perseverance in achieving success.',
  'A book on leadership that emphasizes vulnerability and courage.',
  'A look at how to create innovative companies from the ground up.',
  'An ancient Chinese military treatise on strategy and tactics.',
  'A no-nonsense guide to living a happier, more meaningful life.',
  'A memoir of overcoming adversity and gaining education.',
  'A biography of Michelle Obama’s life and accomplishments.',
  'A philosophical novel about following your dreams.',
  'A timeless guide on social skills and personal influence.',
  'A psychological exploration of finding purpose in suffering.'
];

const shortDescriptionsAr = [
  'دليل لتحقيق الاستقلال المالي واستراتيجيات بناء الثروة.',
  'خطة لإنشاء وإطلاق مشاريع ناشئة ناجحة.',
  'دليل لتطوير العادات الجيدة والتخلص من العادات السيئة.',
  'استكشاف لعمليات التفكير والانحيازات العقلية.',
  'كتاب تطوير الذات يركز على العادات الشخصية والمهنية.',
  'تحقيق في كيفية تشكيل العادات لحياتنا ونجاحنا.',
  'كتاب يستكشف الأسباب وراء نجاح الشركات والقادة.',
  'دليل للحرية الشخصية من خلال حكمة تولتكية قديمة.',
  'استكشاف تاريخي لتطور البشرية وتقدمها.',
  'دليل لتحقيق النجاح من خلال التركيز في عالم مليء بالمشتتات.',
  'دراسة عن دور الشغف والمثابرة في تحقيق النجاح.',
  'كتاب عن القيادة يؤكد على الجرأة والتعرض للضعف.',
  'نظرة على كيفية إنشاء شركات مبتكرة من الصفر.',
  'معاهدة صينية قديمة عن الإستراتيجية والتكتيكات.',
  'دليل مباشر للعيش بسعادة وذات معنى.',
  'مذكرات عن التغلب على المحن واكتساب التعليم.',
  'سيرة ذاتية لحياة وإنجازات ميشيل أوباما.',
  'رواية فلسفية حول اتباع أحلامك.',
  'دليل دائم حول المهارات الاجتماعية والتأثير الشخصي.',
  'استكشاف نفسي للعثور على الهدف في المعاناة.'
];

export async function articleSeed() {
  const mediaList = await createMedia();
  const publishingHouses = await prisma.publishingHouse.findMany();
  const authors = await prisma.author.findMany();

  if (authors.length === 0) {
    console.error('Aucun auteur trouvé. Assurez-vous que des auteurs existent dans la base de données.');
    return;
  }

  const categories = ['Finance', 'Startup', 'Self-Help', 'Psychology', 'Leadership'];
  const createdCategories = await Promise.all(
    categories.map(async (category) => {
      return prisma.categoryArticle.create({ data: { name: category } });
    })
  );

  const articlesData = bookTitles.map((title, index) => ({
    title,
    code: `BOOK-${index + 1}`,
    coverId: mediaList[index].id, // Assign unique cover for each article
    shortDescriptionEn: shortDescriptionsEn[index],
    longDescriptionEn: `Detailed analysis and insights of the book ${title}.`,
    shortDescriptionAr: shortDescriptionsAr[index],
    longDescriptionAr: `تحليل مفصل ورؤى حول الكتاب ${title}.`,
    pageNumber: 200 + index,
    weight: 0.5 + index * 0.1,
  }));

  await prisma.article.createMany({ data: articlesData });
  const allArticles = await prisma.article.findMany();

  const articlesByAuthorsData = allArticles.map((article, index) => ({
    articleId: article.id,
    authorId: authors[index % authors.length].id,
  }));

  await prisma.articleByAuthor.createMany({ data: articlesByAuthorsData });

  const articlesByPublishingHouse = allArticles.map((article, index) => ({
    articleId: article.id,
    publishingHouseId: publishingHouses[index % publishingHouses.length].id,
  }));

  await prisma.articleByPublishingHouse.createMany({ data: articlesByPublishingHouse });

  const articlesByCategoriesData = allArticles.map((article, index) => ({
    articleId: article.id,
    categoryarticleId: createdCategories[index % createdCategories.length].id,
  }));

  await prisma.articleByCategory.createMany({ data: articlesByCategoriesData });

  console.log('Articles seeded successfully with descriptions, categories, and unique media covers.');
}

// Execute the seed
articleSeed()
  .then(() => {
    console.log('Le semis des articles est terminé.');
  })
  .catch(e => {
    console.error('Le semis des articles a échoué:', e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
