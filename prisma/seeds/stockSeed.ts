import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Données pour les stocks
const stocksData = [
  {
    name: 'Stock Sfax',
    location: 'Warehouse 1',
    capacity: 500,
  },
  {
    name: 'Stock Tunis',
    location: 'Warehouse 2',
    capacity: 300,
  },
  {
    name: 'Stock Sousse',
    location: 'Warehouse 3',
    capacity: 700,
  },
];

// Données pour les canaux de vente
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
  
  // Créer les stocks
  for (const stock of stocksData) {
    const createdStock = await prisma.stock.create({
      data: stock,
    });
    createdStocks.push(createdStock);
    console.log(`Stock ${createdStock.name} créé.`);
  }

  // Créer les canaux de vente pour chaque stock
  for (const stock of createdStocks) {
    for (const channel of salesChannelsData) {
      const salesChannel = await prisma.salesChannels.create({
        data: {
          name: channel.name,
          type: channel.type,
          region: channel.region,
          idStock: stock.id, // Lier le canal de vente au stock correspondant
        },
      });
      console.log(`Canal de vente ${salesChannel.name} créé pour Stock ID: ${stock.id}.`);
    }
  }

  return createdStocks; // Retourne tous les stocks créés
}
