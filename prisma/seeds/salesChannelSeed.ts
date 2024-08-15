import { PrismaClient, Stock } from '@prisma/client';

const prisma = new PrismaClient();

export async function salesChannelSeed (stock:Stock){
  const salesChannel1 = await prisma.salesChannels.create({
    data: {
      nom: 'Online Store',
      type: 'Online',
      region: 'North America',
      id_stock: stock.id,
    },
  });
}