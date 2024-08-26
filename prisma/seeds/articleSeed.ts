import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function articleSeed (){
    const article = await prisma.article.create({
        data: {
          articleByCategory: {
            create: { categoryArticle: { create: { name: 'khalil' } } },
          },
          articleByPublishingHouse: {
            create: {
              publishingHouse: {
                create: {
                  nameAr: 'String',
                  nameEn: 'String',
                  address: 'String',
                },
              },
            },
          },
    
          title: 'khalil',
          code: 'khalil',
        },
      });

      const publishingHouse1 = await prisma.publishingHouse.create({
        data: {
          nameAr: 'ABC Publishing',
          address: '789 Maple St',
        },
      });
}