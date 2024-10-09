import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const publishingHouses = [
  {
    nameAr: 'دار النشر الأولى',
    nameEn: 'First Publishing House',
    address: '123 شارع النشر, تونس, تونس',
    logoId: null, // Assuming no logo associated at the moment
  },
  {
    nameAr: 'مكتبة الثقافة',
    nameEn: 'Culture Library',
    address: '456 شارع الثقافة, سوسة, تونس',
    logoId: null,
  },
  {
    nameAr: 'الدار العربية',
    nameEn: 'Arab House',
    address: '789 شارع العرب, نابل, تونس',
    logoId: null,
  },
  {
    nameAr: 'مكتبة العلوم',
    nameEn: 'Science Library',
    address: '101 شارع العلوم, صفاقس, تونس',
    logoId: null,
  },
  {
    nameAr: 'دار الفنون',
    nameEn: 'House of Arts',
    address: '202 شارع الفنون, قيروان, تونس',
    logoId: null,
  },
  {
    nameAr: 'دار الفكر',
    nameEn: 'House of Thought',
    address: '303 شارع الفكر, المنستير, تونس',
    logoId: null,
  },
  {
    nameAr: 'مكتبة المبدعين',
    nameEn: 'Library of Creators',
    address: '404 شارع المبدعين, جندوبة, تونس',
    logoId: null,
  },
  {
    nameAr: 'دار الكتاب',
    nameEn: 'Book House',
    address: '505 شارع الكتاب, المهدية, تونس',
    logoId: null,
  },
  {
    nameAr: 'الدار التونسية',
    nameEn: 'Tunisian House',
    address: '606 شارع تونس, بنزرت, تونس',
    logoId: null,
  },
  {
    nameAr: 'مكتبة الآداب',
    nameEn: 'Library of Literature',
    address: '707 شارع الآداب, القصرين, تونس',
    logoId: null,
  },
  {
    nameAr: 'دار الصحافة',
    nameEn: 'Press House',
    address: '808 شارع الصحافة, سيدي بوزيد, تونس',
    logoId: null,
  },
  {
    nameAr: 'مكتبة التاريخ',
    nameEn: 'History Library',
    address: '909 شارع التاريخ, قابس, تونس',
    logoId: null,
  },
  {
    nameAr: 'دار التعليم',
    nameEn: 'Education House',
    address: '100 شارع التعليم, مدنين, تونس',
    logoId: null,
  },
  {
    nameAr: 'مكتبة الشباب',
    nameEn: 'Youth Library',
    address: '111 شارع الشباب, توزر, تونس',
    logoId: null,
  },
  {
    nameAr: 'دار المعرفة',
    nameEn: 'House of Knowledge',
    address: '222 شارع المعرفة, الكاف, تونس',
    logoId: null,
  },
  {
    nameAr: 'مكتبة الأمل',
    nameEn: 'Library of Hope',
    address: '333 شارع الأمل, زغوان, تونس',
    logoId: null,
  },
  {
    nameAr: 'دار السلام',
    nameEn: 'Peace House',
    address: '444 شارع السلام, المنيهلة, تونس',
    logoId: null,
  },
  {
    nameAr: 'مكتبة المستقبل',
    nameEn: 'Future Library',
    address: '555 شارع المستقبل, قفصة, تونس',
    logoId: null,
  },
  {
    nameAr: 'دار الإبداع',
    nameEn: 'House of Creativity',
    address: '666 شارع الإبداع, معتمدية, تونس',
    logoId: null,
  },
  {
    nameAr: 'مكتبة الهدى',
    nameEn: 'Library of Guidance',
    address: '777 شارع الهدى, قصر هلال, تونس',
    logoId: null,
  },
  {
    nameAr: 'دار الأدب',
    nameEn: 'House of Literature',
    address: '888 شارع الأدب, تونس, تونس',
    logoId: null,
  },
];

async function createPublishingHouses() {
  for (const house of publishingHouses) {
    await prisma.publishingHouse.create({
      data: house,
    });
    console.log(`Publishing House ${house.nameEn || house.nameAr} created.`);
  }
}

export async function publishingHouseSeed() {
  await createPublishingHouses();
}

// Run the seeding
publishingHouseSeed()
  .then(() => {
    console.log('Publishing house seeding complete.');
  })
  .catch(e => {
    console.error('Publishing house seeding failed:', e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
