import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const authorNamesAr = [
  'خالد بن سليمان', 'سامي الحداد', 'رانيا الكافي', 'يوسف درويش', 'نادية بلحاج',
  'علي النجار', 'ليلى المسعودي', 'أحمد الزياتي', 'فاطمة العبيدي', 'محمد السالمي',
  'سلمى بن جدو', 'زهير التونسي', 'ريم الناصر', 'عادل الحمروني', 'سناء الزواري',
  'نبيل بن عيسى', 'دينا القاسمي', 'حسن الشاذلي', 'هدى المنصوري', 'مروان الزغبي'
];

const authorNamesEn = [
  'Khaled Ben Slimane', 'Sami Al Haddad', 'Rania Al Kafi', 'Youssef Darwish', 'Nadia Belhaj',
  'Ali Al Najjar', 'Layla Al Masoudi', 'Ahmed Al Zayyati', 'Fatima Al Abidi', 'Mohamed Al Salmi',
  'Salma Ben Jeddo', 'Zuhair Al Tunisi', 'Reem Al Nasser', 'Adel Al Hamrouni', 'Sana Al Zouwari',
  'Nabil Ben Issa', 'Dina Al Qasimi', 'Hassan Al Shadhili', 'Huda Al Mansouri', 'Marwan Al Zoghbi'
];

const biographiesAr = [
  'خالد هو كاتب تونسي معروف بمجموعة واسعة من المقالات الأدبية.', 'سامي هو مؤلف وباحث يهتم بالتاريخ والثقافة الإسلامية.',
  'رانيا تكتب في مجال الفن والثقافة وتحظى بشعبية كبيرة في الشرق الأوسط.', 'يوسف هو شاعر ومؤلف تونسي حاصل على عدة جوائز أدبية.',
  'نادية هي كاتبة متخصصة في أدب الأطفال وتساهم في العديد من المجلات.', 'علي متخصص في الأدب العربي المعاصر.',
  'ليلى تهتم بقصص النساء في المجتمع العربي.', 'أحمد يكتب في مجال الشعر الحديث والنقد الأدبي.',
  'فاطمة تعمل ككاتبة في مجال التعليم والتنمية البشرية.', 'محمد يركز على الفلسفة والأفكار النقدية.',
  'سلمى تكتب في مجال السينما والمسرح.', 'زهير متخصص في الأدب الكلاسيكي.', 'ريم تكتب عن التغيرات الاجتماعية والثقافية.',
  'عادل هو مؤلف في مجال الخيال العلمي.', 'سناء تهتم بقضايا البيئة والتغير المناخي.',
  'نبيل يكتب في مجال السياسة والعلاقات الدولية.', 'دينا تكتب قصص قصيرة للأطفال.', 'حسن هو ناقد أدبي شهير.',
  'هدى تهتم بحقوق المرأة والمساواة بين الجنسين.', 'مروان هو روائي متخصص في الأدب التاريخي.'
];

const biographiesEn = [
  'Khaled is a renowned Tunisian writer known for his wide range of literary articles.', 'Sami is an author and researcher focusing on Islamic history and culture.',
  'Rania writes about art and culture and is very popular in the Middle East.', 'Youssef is a Tunisian poet and author who has won several literary awards.',
  'Nadia is a writer specializing in children’s literature and contributes to various magazines.', 'Ali specializes in contemporary Arabic literature.',
  'Layla focuses on stories of women in Arab society.', 'Ahmed writes about modern poetry and literary criticism.',
  'Fatima works as a writer in education and human development.', 'Mohamed focuses on philosophy and critical thinking.',
  'Salma writes about cinema and theater.', 'Zuhair specializes in classical literature.', 'Reem writes about social and cultural changes.',
  'Adel is an author in the field of science fiction.', 'Sana focuses on environmental issues and climate change.',
  'Nabil writes about politics and international relations.', 'Dina writes short stories for children.', 'Hassan is a famous literary critic.',
  'Huda focuses on women’s rights and gender equality.', 'Marwan is a novelist specializing in historical literature.'
];

async function createAuthors() {
  for (let i = 0; i < authorNamesAr.length; i++) {
    const nameAr = authorNamesAr[i];
    const nameEn = authorNamesEn[i];
    const biographyAr = biographiesAr[i];
    const biographyEn = biographiesEn[i];

    await prisma.author.create({
      data: {
        nameAr: nameAr,
        nameEn: nameEn,
        biographyAr: biographyAr,
        biographyEn: biographyEn,
        mediaId: null, // Assuming no media associated at the moment
      },
    });

  }
}

export async function authorSeed() {
  await createAuthors();
}

// Run the seeding
authorSeed()
  .then(() => {
    console.log('Author seeding complete.');
  })
  .catch(e => {
    console.error('Author seeding failed:', e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
