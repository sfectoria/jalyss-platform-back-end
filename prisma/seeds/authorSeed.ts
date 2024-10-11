import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const realAuthors = [
  'Robert T. Kiyosaki', // Rich Dad Poor Dad
  'Eric Ries', // The Lean Startup
  'James Clear', // Atomic Habits
  'Daniel Kahneman', // Thinking, Fast and Slow
  'Stephen R. Covey', // The 7 Habits of Highly Effective People
  'Charles Duhigg', // The Power of Habit
  'Simon Sinek', // Start with Why
  'Don Miguel Ruiz', // The Four Agreements
  'Yuval Noah Harari', // Sapiens: A Brief History of Humankind
  'Cal Newport', // Deep Work
  'Angela Duckworth', // Grit: The Power of Passion and Perseverance
  'Brené Brown', // Dare to Lead
  'Peter Thiel', // Zero to One
  'Sun Tzu', // The Art of War
  'Mark Manson', // The Subtle Art of Not Giving a F*ck
  'Tara Westover', // Educated
  'Michelle Obama', // Becoming
  'Paulo Coelho', // The Alchemist
  'Dale Carnegie', // How to Win Friends and Influence People
  'Viktor E. Frankl' // Man's Search for Meaning
];

const arabicNames = [
  'روبرت كيوساكي',
  'إريك ريس',
  'جيمس كلير',
  'دانييل كانيمان',
  'ستيفن كوفي',
  'تشارلز دوهيج',
  'سيمون سينك',
  'دون ميغيل رويز',
  'يوفال نوح هراري',
  'كال نيوبورت',
  'أنجيلا داكورث',
  'بريني براون',
  'بيتر ثيل',
  'سون تزو',
  'مارك مانسون',
  'تارا ويستوفر',
  'ميشيل أوباما',
  'باولو كويلو',
  'دايل كارنيجي',
  'فيكتور فرانكل'
];

const biographiesEn = [
  'Robert T. Kiyosaki is an American businessman and author of the popular personal finance book "Rich Dad Poor Dad."',
  'Eric Ries is an American entrepreneur and author, best known for his work in the Lean Startup methodology.',
  'James Clear is a speaker and author focused on habits, decision-making, and continuous improvement.',
  'Daniel Kahneman is a psychologist and Nobel laureate known for his work on the psychology of judgment and decision-making.',
  'Stephen R. Covey was an American educator, author, and businessman best known for his book "The 7 Habits of Highly Effective People."',
  'Charles Duhigg is a journalist and author of "The Power of Habit," exploring the science behind habit formation.',
  'Simon Sinek is a motivational speaker and author known for his concept of "Start with Why."',
  'Don Miguel Ruiz is a spiritual teacher and author of "The Four Agreements," based on ancient Toltec wisdom.',
  'Yuval Noah Harari is a historian and author of "Sapiens: A Brief History of Humankind," focusing on human evolution.',
  'Cal Newport is a computer science professor and author known for his book "Deep Work," about focused success.',
  'Angela Duckworth is a psychologist and author who studies grit and perseverance in achieving long-term goals.',
  'Brené Brown is a researcher and author known for her work on vulnerability, courage, and leadership.',
  'Peter Thiel is an entrepreneur and venture capitalist, co-author of "Zero to One," focusing on startups and innovation.',
  'Sun Tzu was a Chinese military strategist and philosopher, best known for his work "The Art of War."',
  'Mark Manson is a self-help author and blogger, best known for his book "The Subtle Art of Not Giving a F*ck."',
  'Tara Westover is a memoirist known for her book "Educated," detailing her journey from rural isolation to academia.',
  'Michelle Obama is a lawyer, former First Lady of the United States, and author of the memoir "Becoming."',
  'Paulo Coelho is a Brazilian author best known for his novel "The Alchemist," a philosophical tale about pursuing dreams.',
  'Dale Carnegie was an American writer and lecturer known for his work on self-improvement and interpersonal skills.',
  'Viktor E. Frankl was a neurologist, psychiatrist, and Holocaust survivor, best known for his book "Man\'s Search for Meaning."'
];

const biographiesAr = [
  'روبرت كيوساكي هو رجل أعمال أمريكي ومؤلف كتاب "الأب الغني والأب الفقير".',
  'إريك ريس هو رائد أعمال أمريكي ومؤلف، يعرف بأعماله في منهجية "البدء الرشيق".',
  'جيمس كلير هو متحدث ومؤلف يركز على العادات واتخاذ القرارات والتحسين المستمر.',
  'دانييل كانيمان هو عالم نفس وحائز على جائزة نوبل، معروف بأعماله في علم نفس الحكم واتخاذ القرار.',
  'ستيفن كوفي كان معلمًا أمريكيًا ومؤلفًا ورجل أعمال، يعرف بكتابه "العادات السبع للأشخاص الأكثر فعالية".',
  'تشارلز دوهيج هو صحفي ومؤلف كتاب "قوة العادة"، الذي يستكشف علم تشكيل العادات.',
  'سيمون سينك هو متحدث تحفيزي ومؤلف، معروف بمفهومه "ابدأ بالسبب".',
  'دون ميغيل رويز هو معلم روحي ومؤلف "الاتفاقيات الأربعة"، المبني على حكمة توتلك القديمة.',
  'يوفال نوح هراري هو مؤرخ ومؤلف "إنسان: تاريخ مختصر للإنسانية"، يركز على تطور الإنسان.',
  'كال نيوبورت هو أستاذ علوم الكمبيوتر ومؤلف يعرف بكتابه "العمل العميق"، حول النجاح الموجه.',
  'أنجيلا داكورث هي عالمة نفس ومؤلفة تدرس الصمود والمثابرة في تحقيق الأهداف طويلة الأمد.',
  'بريني براون هي باحثة ومؤلفة معروفة بأعمالها حول الضعف والشجاعة والقيادة.',
  'بيتر ثيل هو رائد أعمال ومستثمر مغامر، وهو مؤلف مشارك لكتاب "من صفر إلى واحد"، الذي يركز على الشركات الناشئة والابتكار.',
  'سون تزو كان استراتيجي عسكري صيني وفيلسوف، معروف بعمله "فن الحرب".',
  'مارك مانسون هو مؤلف في مجال التنمية الذاتية ومدون، معروف بكتابه "فن اللامبالاة".',
  'تارا ويستوفر هي كاتبة مذكرات معروفة بكتابها "مُتعلمة"، الذي يوضح رحلتها من العزلة الريفية إلى الأكاديمية.',
  'ميشيل أوباما هي محامية وسيدة أولى سابقة للولايات المتحدة، ومؤلفة مذكرات "أن أكون".',
  'باولو كويلو هو مؤلف برازيلي يعرف بروايته "الخيميائي"، وهي قصة فلسفية حول السعي وراء الأحلام.',
  'دايل كارنيجي كان كاتبًا ومحاضرًا أمريكيًا معروفًا بأعماله في التنمية الذاتية ومهارات التواصل.',
  'فيكتور فرانكل كان طبيب أعصاب وطبيب نفساني وناجي من المحرقة، يعرف بكتابه "البحث عن المعنى".'
];

async function createAuthors() {
  for (let i = 0; i < realAuthors.length; i++) {
    const nameEn = realAuthors[i];
    const nameAr = arabicNames[i];
    const biographyEn = biographiesEn[i];
    const biographyAr = biographiesAr[i];

    await prisma.author.create({
      data: {
        nameEn: nameEn,
        nameAr: nameAr,
        biographyEn: biographyEn,
        biographyAr: biographyAr,
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
