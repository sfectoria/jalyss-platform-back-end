import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const stocksData = [
  {
    name: 'Stock Sfax',
    location: 'Warehouse 1',
    capacity: 500,
    idEmployee:1,
  },
  {
    name: 'Stock Tunis',
    location: 'Warehouse 2',
    capacity: 300,
    idEmployee:2,
  },
  {
    name: 'Stock Sousse',
    location: 'Warehouse 3',
    capacity: 700,
    idEmployee:3,

  },
];

const salesChannelsData = [
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

export async function stockSeed() {
  const createdStocks = [];
  
  for (const stock of stocksData) {
    const createdStock = await prisma.stock.create({
      data: stock,
    });
    createdStocks.push(createdStock);
    console.log(`Stock ${createdStock.name} créé.`);
  }

  for (const stock of createdStocks) {
    for (const channel of salesChannelsData) {
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

  return createdStocks; // Retourne tous les stocks créés
}
