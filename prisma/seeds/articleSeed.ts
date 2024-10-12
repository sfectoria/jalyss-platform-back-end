import { PrismaClient } from '@prisma/client';
import { create } from 'domain';

const prisma = new PrismaClient();

export async function articleSeed (){
  const articles = [
    {
      title: 'النمو الشخصي',
      code: 'ART001',
      pageNumber: 200,
      weight: 0.5,
      cover:{create:{type:"png",path:"https://www.eib.org/photos/rs/46ef740d-27b9-45fb-aa3d-8e75811d19db/largeprvw/image.jpg"}},
      shortDescriptionEn: 'A great book on personal growth.',
      longDescriptionEn: 'This book helps you understand the key principles of personal growth...',
      shortDescriptionAr: 'كتاب رائع عن النمو الشخصي.',
      longDescriptionAr: 'يساعدك هذا الكتاب على فهم المبادئ الأساسية للنمو الشخصي...',
      articleByCategory: {
        create: { categoryArticle: { create: { name: 'التطوير الذاتي' } } },
      },
      articleByPublishingHouse: {
        create: {
          publishingHouse: {
            create: {
              nameAr: 'دار النشر العربية',
              nameEn: 'Arab Publishing House',
              address: '123 شارع النشر, المدينة, البلد',
            },
          },
        },
      },
    },
    {
      title: 'التحفيز الذاتي',
      code: 'ART002',
      pageNumber: 150,
      weight: 0.4,
      shortDescriptionEn: 'A guide to self-motivation.',
      longDescriptionEn: 'This book provides techniques for self-motivation...',
      cover:{create:{type:"png",path:"https://m.media-amazon.com/images/I/51e4ZxZMnhL._AC_UF1000,1000_QL80_.jpg"}},

      shortDescriptionAr: 'دليل للتحفيز الذاتي.',
      longDescriptionAr: 'يقدم هذا الكتاب تقنيات للتحفيز الذاتي...',
      articleByCategory: {
        create: { categoryArticle: { create: { name: 'التحفيز' } } },
      },
      articleByPublishingHouse: {
        create: {
          publishingHouse: {
            create: {
              nameAr: 'دار الكتب العربية',
              nameEn: 'Arabic Book House',
              address: '456 شارع الكتاب, المدينة, البلد',
            },
          },
        },
      },
    },
    {
      title: 'التفكير الإيجابي',
      code: 'ART003',
      pageNumber: 180,
      weight: 0.55,
      shortDescriptionEn: 'Insights on positive thinking.',
      longDescriptionEn: 'This book explores methods to cultivate a positive mindset...',
      shortDescriptionAr: 'أفكار عن التفكير الإيجابي.',
      longDescriptionAr: 'يستكشف هذا الكتاب طرقاً لزراعة العقلية الإيجابية...',
      cover:{create:{type:"png",path:"https://www.noor-book.com/publice/covers_cache_webp/2/c/5/c/f8a2d7987cc5cbf8a8433f67dfe3c139.jpg.webp"}},

      articleByCategory: {
        create: { categoryArticle: { create: { name: 'التفكير الإيجابي' } } },
      },
      articleByPublishingHouse: {
        create: {
          publishingHouse: {
            create: {
              nameAr: 'دار الفكر الجديد',
              nameEn: 'New Thought Publishing House',
              address: '789 شارع الفكر, المدينة, البلد',
            },
          },
        },
      },
    },
    {
      title: 'إدارة الوقت',
      code: 'ART004',
      pageNumber: 160,
      weight: 0.6,
      shortDescriptionEn: 'Strategies for effective time management.',
      longDescriptionEn: 'Learn how to manage your time effectively with this book...',
      shortDescriptionAr: 'استراتيجيات لإدارة الوقت بفعالية.',
      longDescriptionAr: 'تعلم كيفية إدارة وقتك بفعالية من خلال هذا الكتاب...',
      cover:{create:{type:"png",path:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1537715991i/41974372.jpg"}},

      articleByCategory: {
        create: { categoryArticle: { create: { name: 'إدارة الوقت' } } },
      },
      articleByPublishingHouse: {
        create: {
          publishingHouse: {
            create: {
              nameAr: 'مكتبة النجاح',
              nameEn: 'Success Library',
              address: '101 شارع النجاح, المدينة, البلد',
            },
          },
        },
      },
    },
    {
      title: 'التطوير المهني',
      code: 'ART005',
      pageNumber: 210,
      weight: 0.65,
      shortDescriptionEn: 'Tips for professional development.',
      longDescriptionEn: 'This book provides guidance on advancing your career...',
      shortDescriptionAr: 'نصائح للتطوير المهني.',
      longDescriptionAr: 'يوفر هذا الكتاب إرشادات حول التقدم في حياتك المهنية...',
      cover:{create:{type:"png",path:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1625530714i/58494331.jpg"}},

      articleByCategory: {
        create: { categoryArticle: { create: { name: 'التطوير المهني' } } },
      },
      articleByPublishingHouse: {
        create: {
          publishingHouse: {
            create: {
              nameAr: 'دار التقدم',
              nameEn: 'Progress Publishing House',
              address: '202 شارع التقدم, المدينة, البلد',
            },
          },
        },
      },
    },
    {
      title: 'التواصل الفعال',
      code: 'ART006',
      pageNumber: 190,
      weight: 0.7,
      shortDescriptionEn: 'Effective communication skills.',
      longDescriptionEn: 'Master the art of communication with this comprehensive guide...',
      shortDescriptionAr: 'مهارات التواصل الفعال.',
      longDescriptionAr: 'اتقن فن التواصل من خلال هذا الدليل الشامل...',
      cover:{create:{type:"png",path:"https://www.neelwafurat.com/images/lb/abookstore/covers/normal/214/214451.jpg"}},

      articleByCategory: {
        create: { categoryArticle: { create: { name: 'التواصل' } } },
      },
      articleByPublishingHouse: {
        create: {
          publishingHouse: {
            create: {
              nameAr: 'دار الحوار',
              nameEn: 'Dialogue House',
              address: '303 شارع الحوار, المدينة, البلد',
            },
          },
        },
      },
    },
    {
      title: 'الذكاء العاطفي',
      code: 'ART007',
      pageNumber: 175,
      weight: 0.75,
      shortDescriptionEn: 'Understanding emotional intelligence.',
      longDescriptionEn: 'This book dives into the concept of emotional intelligence and its applications...',
      shortDescriptionAr: 'فهم الذكاء العاطفي.',
      longDescriptionAr: 'يستعرض هذا الكتاب مفهوم الذكاء العاطفي وتطبيقاته...',
      cover:{create:{type:"png",path:"https://www.neelwafurat.com/images/lb/abookstore/covers/normal/214/214451.jpg"}},

      articleByCategory: {
        create: { categoryArticle: { create: { name: 'الذكاء العاطفي' } } },
      },
      articleByPublishingHouse: {
        create: {
          publishingHouse: {
            create: {
              nameAr: 'دار المعرفة',
              nameEn: 'Knowledge House',
              address: '404 شارع المعرفة, المدينة, البلد',
            },
          },
        },
      },
    },
    {
      title: 'القيادة الفعالة',
      code: 'ART008',
      pageNumber: 220,
      weight: 0.8,
      shortDescriptionEn: 'Principles of effective leadership.',
      longDescriptionEn: 'Explore key principles and strategies for effective leadership...',
      shortDescriptionAr: 'مبادئ القيادة الفعالة.',
      longDescriptionAr: 'استكشف المبادئ الرئيسية والاستراتيجيات للقيادة الفعالة...',
      cover:{create:{type:"png",path:"https://www.neelwafurat.com/images/lb/abookstore/covers/normal/214/214451.jpg"}},

      articleByCategory: {
        create: { categoryArticle: { create: { name: 'القيادة' } } },
      },
      articleByPublishingHouse: {
        create: {
          publishingHouse: {
            create: {
              nameAr: 'دار القيادة',
              nameEn: 'Leadership House',
              address: '505 شارع القيادة, المدينة, البلد',
            },
          },
        },
      },
    },
    {
      title: 'إدارة المشاريع',
      code: 'ART009',
      pageNumber: 240,
      weight: 0.85,
      shortDescriptionEn: 'Project management essentials.',
      longDescriptionEn: 'A comprehensive guide to managing projects effectively...',
      shortDescriptionAr: 'أساسيات إدارة المشاريع.',
      longDescriptionAr: 'دليل شامل لإدارة المشاريع بفعالية...',
      cover:{create:{type:"png",path:"https://www.neelwafurat.com/images/lb/abookstore/covers/normal/214/214451.jpg"}},

      articleByCategory: {
        create: { categoryArticle: { create: { name: 'إدارة المشاريع' } } },
        
      },
      articleByPublishingHouse: {
        create: {
          publishingHouse: {
            create: {
              nameAr: 'دار المشاريع',
              nameEn: 'Projects House',
              address: '606 شارع المشاريع, المدينة, البلد',
            },
          },
        },
      },
    },
    {
      title: 'الابتكار والإبداع',
      code: 'ART010',
      pageNumber: 250,
      weight: 0.9,
      shortDescriptionEn: 'Innovation and creativity in the modern world.',
      longDescriptionEn: 'Discover methods and strategies for fostering innovation and creativity...',
      shortDescriptionAr: 'الابتكار والإبداع في العالم الحديث.',
      cover:{create:{type:"png",path:"https://www.neelwafurat.com/images/lb/abookstore/covers/normal/214/214451.jpg"}},

      longDescriptionAr: 'اكتشف الطرق والاستراتيجيات لتعزيز الابتكار والإبداع...',
      articleByCategory: {
        create: { categoryArticle: { create: { name: 'الابتكار' } } },
      },
      articleByPublishingHouse: {
        create: {
          publishingHouse: {
            create: {
              nameAr: 'دار الإبداع',
              nameEn: 'Creativity House',
              address: '707 شارع الإبداع, المدينة, البلد',
            },
          },
        },
      },
    },
    {
      title: 'التفاوض الناجح',
      code: 'ART011',
      pageNumber: 260,
      weight: 0.95,
      shortDescriptionEn: 'Successful negotiation techniques.',
      longDescriptionEn: 'Learn effective negotiation techniques and strategies...',
      shortDescriptionAr: 'تقنيات التفاوض الناجح.',
      longDescriptionAr: 'تعلم تقنيات واستراتيجيات التفاوض الفعالة...',
      cover:{create:{type:"png",path:"https://www.neelwafurat.com/images/lb/abookstore/covers/normal/214/214451.jpg"}},

      articleByCategory: {
        create: { categoryArticle: { create: { name: 'التفاوض' } } },
      },
      articleByPublishingHouse: {
        create: {
          publishingHouse: {
            create: {
              nameAr: 'دار التفاوض',
              nameEn: 'Negotiation House',
              address: '808 شارع التفاوض, المدينة, البلد',
            },
          },
        },
      },
    },
    {
      title: 'الأدوات الشخصية',
      code: 'ART012',
      pageNumber: 270,
      weight: 1.0,
      shortDescriptionEn: 'Personal tools for growth and development.',
      longDescriptionEn: 'Explore tools and techniques for personal development...',
      cover:{create:{type:"png",path:"https://www.neelwafurat.com/images/lb/abookstore/covers/normal/214/214451.jpg"}},

      shortDescriptionAr: 'الأدوات الشخصية للنمو والتطور.',
      longDescriptionAr: 'استكشف الأدوات والتقنيات للتطور الشخصي...',
      articleByCategory: {
        create: { categoryArticle: { create: { name: 'الأدوات الشخصية' } } },
      },
      articleByPublishingHouse: {
        create: {
          publishingHouse: {
            create: {
              nameAr: 'دار الأدوات',
              nameEn: 'Tools House',
              address: '909 شارع الأدوات, المدينة, البلد',
            },
          },
        },
      },
    },
    {
      title: 'إدارة التغيير',
      code: 'ART013',
      pageNumber: 280,
      weight: 1.05,
      shortDescriptionEn: 'Managing change effectively.',
      longDescriptionEn: 'Understand how to manage change in organizations...',
      shortDescriptionAr: 'إدارة التغيير بفعالية.',
      longDescriptionAr: 'فهم كيفية إدارة التغيير في المؤسسات...',
      cover:{create:{type:"png",path:"https://www.neelwafurat.com/images/lb/abookstore/covers/normal/214/214451.jpg"}},

      articleByCategory: {
        create: { categoryArticle: { create: { name: 'إدارة التغيير' } } },
      },
      articleByPublishingHouse: {
        create: {
          publishingHouse: {
            create: {
              nameAr: 'دار التغيير',
              nameEn: 'Change House',
              address: '101 شارع التغيير, المدينة, البلد',
            },
          },
        },
      },
    },
    
  ];

  for (const articleData of articles) {
    await prisma.article.create({
      data: articleData,
    });
  }
  
  
}