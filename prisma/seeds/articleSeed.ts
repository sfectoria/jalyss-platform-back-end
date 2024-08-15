import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function articalSeed (){
    const artical = await prisma.artical.create({
        data: {
          articalByCategory: {
            create: { categoryArtical: { create: { name: 'khalil' } } },
          },
          articalByPublishingHouse: {
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