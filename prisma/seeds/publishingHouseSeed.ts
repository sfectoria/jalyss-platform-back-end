import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const publishingHouses = [
  {
    nameAr: 'دار النشر الأولى',
    nameEn: 'First Publishing House',
    address: '123 شارع النشر, تونس, تونس',
    phone_number: '71234567',
    email: 'info@firstpublishing.tn',
    logoId: null,
  },
  {
    nameAr: 'مكتبة الثقافة',
    nameEn: 'Culture Library',
    address: '456 شارع الثقافة, سوسة, تونس',
    phone_number: '71345678',
    email: 'contact@culturelibrary.tn',
    logoId: null,
  },
  {
    nameAr: 'الدار العربية',
    nameEn: 'Arab House',
    address: '789 شارع العرب, نابل, تونس',
    phone_number: '71456789',
    email: 'info@arabhouse.tn',
    logoId: null,
  },
  {
    nameAr: 'مكتبة العلوم',
    nameEn: 'Science Library',
    address: '101 شارع العلوم, صفاقس, تونس',
    phone_number: '71567890',
    email: 'contact@sciencelibrary.tn',
    logoId: null,
  },
  {
    nameAr: 'دار الفنون',
    nameEn: 'House of Arts',
    address: '202 شارع الفنون, قيروان, تونس',
    phone_number: '71678901',
    email: 'info@houseofarts.tn',
    logoId: null,
  },
  {
    nameAr: 'دار الفكر',
    nameEn: 'House of Thought',
    address: '303 شارع الفكر, المنستير, تونس',
    phone_number: '71789012',
    email: 'contact@houseofthought.tn',
    logoId: null,
  },
  {
    nameAr: 'مكتبة المبدعين',
    nameEn: 'Library of Creators',
    address: '404 شارع المبدعين, جندوبة, تونس',
    phone_number: '71890123',
    email: 'info@libraryofcreators.tn',
    logoId: null,
  },
  {
    nameAr: 'دار الكتاب',
    nameEn: 'Book House',
    address: '505 شارع الكتاب, المهدية, تونس',
    phone_number: '71901234',
    email: 'contact@bookhouse.tn',
    logoId: null,
  },
  {
    nameAr: 'الدار التونسية',
    nameEn: 'Tunisian House',
    address: '606 شارع تونس, بنزرت, تونس',
    phone_number: '72012345',
    email: 'info@tunisianhouse.tn',
    logoId: null,
  },
  {
    nameAr: 'مكتبة الآداب',
    nameEn: 'Library of Literature',
    address: '707 شارع الآداب, القصرين, تونس',
    phone_number: '72123456',
    email: 'contact@libraryofliterature.tn',
    logoId: null,
  },
  {
    nameAr: 'دار الصحافة',
    nameEn: 'Press House',
    address: '808 شارع الصحافة, سيدي بوزيد, تونس',
    phone_number: '72234567',
    email: 'info@presshouse.tn',
    logoId: null,
  },
  {
    nameAr: 'مكتبة التاريخ',
    nameEn: 'History Library',
    address: '909 شارع التاريخ, قابس, تونس',
    phone_number: '72345678',
    email: 'contact@historylibrary.tn',
    logoId: null,
  },
  {
    nameAr: 'دار التعليم',
    nameEn: 'Education House',
    address: '100 شارع التعليم, مدنين, تونس',
    phone_number: '72456789',
    email: 'info@educationhouse.tn',
    logoId: null,
  },
  {
    nameAr: 'مكتبة الشباب',
    nameEn: 'Youth Library',
    address: '111 شارع الشباب, توزر, تونس',
    phone_number: '72567890',
    email: 'contact@youthlibrary.tn',
    logoId: null,
  },
  {
    nameAr: 'دار المعرفة',
    nameEn: 'House of Knowledge',
    address: '222 شارع المعرفة, الكاف, تونس',
    phone_number: '72678901',
    email: 'info@houseofknowledge.tn',
    logoId: null,
  },
  {
    nameAr: 'مكتبة الأمل',
    nameEn: 'Library of Hope',
    address: '333 شارع الأمل, زغوان, تونس',
    phone_number: '72789012',
    email: 'contact@libraryofhope.tn',
    logoId: null,
  },
  {
    nameAr: 'دار السلام',
    nameEn: 'Peace House',
    address: '444 شارع السلام, المنيهلة, تونس',
    phone_number: '72890123',
    email: 'info@peacehouse.tn',
    logoId: null,
  },
  {
    nameAr: 'مكتبة المستقبل',
    nameEn: 'Future Library',
    address: '555 شارع المستقبل, قفصة, تونس',
    phone_number: '72901234',
    email: 'contact@futurelibrary.tn',
    logoId: null,
  },
  {
    nameAr: 'دار الإبداع',
    nameEn: 'House of Creativity',
    address: '666 شارع الإبداع, معتمدية, تونس',
    phone_number: '73012345',
    email: 'info@houseofcreativity.tn',
    logoId: null,
  },
  {
    nameAr: 'مكتبة الهدى',
    nameEn: 'Library of Guidance',
    address: '777 شارع الهدى, قصر هلال, تونس',
    phone_number: '73123456',
    email: 'contact@libraryofguidance.tn',
    logoId: null,
  },
  {
    nameAr: 'دار الأدب',
    nameEn: 'House of Literature',
    address: '888 شارع الأدب, تونس, تونس',
    phone_number: '73234567',
    email: 'info@houseofliterature.tn',
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
