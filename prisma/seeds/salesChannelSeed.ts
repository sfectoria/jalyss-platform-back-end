import { PrismaClient, Stock } from '@prisma/client';

const prisma = new PrismaClient();

const salesChannels = [
  {
    name: 'Online Store',
    type: 'Online',
    region: 'North America',
  },
  {
    name: 'Retail Store',
    type: 'Physical',
    region: 'Europe',
  },
  {
    name: 'Wholesale Distributor',
    type: 'Wholesale',
    region: 'Asia',
  },
];

export async function salesChannelSeed(stocks: Stock[]) {
  for (const stock of stocks) {
    for (const channel of salesChannels) {
      const salesChannel = await prisma.salesChannels.create({
        data: {
          name: channel.name,
          type: channel.type,
          region: channel.region,
          idStock: stock.id, 
        },
      });
      console.log(`Canal de vente ${salesChannel.name} créé pour Stock ID: ${stock.id}.`);
    }
  }
}
