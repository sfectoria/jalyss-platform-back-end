import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const providers = [
  {
    nameProvider: 'Khaled Supplies',
    phoneNumber: '92567890',
    email: 'contact@khaledsupplies.com',
    adresse: '10 Rue des Fournisseurs, Tunis, Tunisie',
    registrationNumber: 'REG123456',
  },
  {
    nameProvider: 'Sami Trading',
    phoneNumber: '25234876',
    email: 'info@samitading.com',
    adresse: '25 Avenue du Commerce, Sousse, Tunisie',
    registrationNumber: 'REG234567',
  },
  {
    nameProvider: 'Rania Distribution',
    phoneNumber: '51476283',
    email: 'support@raniadistribution.com',
    adresse: '37 Rue de la Logistique, Sfax, Tunisie',
    registrationNumber: 'REG345678',
  },
  {
    nameProvider: 'Ali Imports',
    phoneNumber: '98654321',
    email: 'sales@aliimports.com',
    adresse: '45 Boulevard des Importations, Nabeul, Tunisie',
    registrationNumber: 'REG456789',
  },
  {
    nameProvider: 'Layla Ventures',
    phoneNumber: '50987654',
    email: 'contact@laylaventures.com',
    adresse: '80 Avenue des Startups, Monastir, Tunisie',
    registrationNumber: 'REG567890',
  },
  {
    nameProvider: 'Fatima Goods',
    phoneNumber: '98345678',
    email: 'info@fatimagoods.com',
    adresse: '12 Rue des Bienfaits, Kairouan, Tunisie',
    registrationNumber: 'REG678901',
  },
  {
    nameProvider: 'Mohamed Trading Co.',
    phoneNumber: '75234861',
    email: 'info@mohamedtrading.com',
    adresse: '98 Rue des Marchands, Gabes, Tunisie',
    registrationNumber: 'REG789012',
  },
  {
    nameProvider: 'Salma Retail',
    phoneNumber: '25678943',
    email: 'support@salmaretail.com',
    adresse: '54 Boulevard des Ventes, Gafsa, Tunisie',
    registrationNumber: 'REG890123',
  },
  {
    nameProvider: 'Zuhair Supplies',
    phoneNumber: '98123456',
    email: 'info@zuhairsupplies.com',
    adresse: '32 Avenue des Fournitures, Bizerte, Tunisie',
    registrationNumber: 'REG901234',
  },
  {
    nameProvider: 'Hassan Logistics',
    phoneNumber: '29456789',
    email: 'contact@hassanlogistics.com',
    adresse: '76 Rue des Transports, Sidi Bouzid, Tunisie',
    registrationNumber: 'REG012345',
  },
];

async function createProviders() {
  for (const provider of providers) {
    await prisma.provider.create({
      data: provider,
    });
  }
}

export async function providerSeed() {
  await createProviders();
}

// Run the seeding
providerSeed()
  .then(() => {
    console.log('Provider seeding complete.');
  })
  .catch(e => {
    console.error('Provider seeding failed:', e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
