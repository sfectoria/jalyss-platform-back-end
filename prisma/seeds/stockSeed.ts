import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function stockSeed (){
  return await prisma.stock.create({
    data: {
      location: 'Warehouse 1',
      capacity: 500,
    },
  });
}