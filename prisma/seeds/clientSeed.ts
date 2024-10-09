import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const categories = ['Regular', 'Premium', 'VIP', 'Wholesale', 'Newcomer'];
const arabicNames = ['Khalil', 'Sami', 'Rania', 'Noura', 'Zain', 'Layla', 'Omar', 'Fatima', 'Hassan', 'Amina', 'Yousef', 'Sara', 'Ali', 'Dina', 'Karim', 'Aya', 'Nabil', 'Hiba', 'Adnan', 'Mona'];
const phoneNumbers = ['91234567', '22345678', '53456789', '94561234', '25678901', '56789012', '92345671', '23456782', '53456793', '94561235', 
                     '25678904', '56789025', '92345676', '23456787', '53456798', '94561239', '25678906', '56789027', '92345678', '23456789'];
const addresses = ['1 Rue de Carthage, Tunis, Tunisie', '2 Avenue Habib Bourguiba, Sfax, Tunisie', '3 Rue de la Liberté, Sousse, Tunisie',
                   '4 Rue de la République, Monastir, Tunisie', '5 Rue Ibn Khaldoun, Bizerte, Tunisie', '6 Avenue de France, Gabès, Tunisie',
                   '7 Rue de la Kasbah, Nabeul, Tunisie', '8 Rue de la Médina, Kairouan, Tunisie', '9 Rue de Sidi Bou Saïd, Mahdia, Tunisie',
                   '10 Rue de la Mosquée, Ariana, Tunisie', '11 Rue de la Mer, Tunis, Tunisie', '12 Avenue des Palmiers, Sfax, Tunisie',
                   '13 Rue des Fleurs, Sousse, Tunisie', '14 Rue de la Colline, Monastir, Tunisie', '15 Rue des Jardins, Bizerte, Tunisie',
                   '16 Avenue de la Culture, Gabès, Tunisie', '17 Rue du Port, Nabeul, Tunisie', '18 Rue des Oliviers, Kairouan, Tunisie',
                   '19 Rue de l\'Artisanat, Mahdia, Tunisie', '20 Rue de la Ville, Ariana, Tunisie'];
const emails = ['khalil1@example.com', 'sami2@example.com', 'rania3@example.com', 'noura4@example.com', 'zain5@example.com', 'layla6@example.com',
                'omar7@example.com', 'fatima8@example.com', 'hassan9@example.com', 'amina10@example.com', 'yousef11@example.com', 'sara12@example.com',
                'ali13@example.com', 'dina14@example.com', 'karim15@example.com', 'aya16@example.com', 'nabil17@example.com', 'hiba18@example.com',
                'adnan19@example.com', 'mona20@example.com'];

async function createCategories() {
  const categoryPromises = categories.map(category =>
    prisma.categoryClient.create({
      data: { name: category },
    })
  );
  return await Promise.all(categoryPromises);
}

async function createClients(categories) {
  for (let i = 0; i < arabicNames.length; i++) {
    const name = arabicNames[i];
    const phoneNumber = phoneNumbers[i];
    const address = addresses[i];
    const email = emails[i];
    const categoryIndex = i % categories.length; // Alternates between categories

    await prisma.client.create({
      data: {
        fullName: name,
        phoneNumber: phoneNumber,
        address: address,
        email: email,
        registrationDate: new Date(),
        idCategoryClient: categories[categoryIndex].id,
      },
    });

  }
}

export async function clientSeed() {
  const categories = await createCategories();
  await createClients(categories);
}

// Run the seeding
clientSeed()
  .then(() => {
    console.log('Seeding complete.');
  })
  .catch(e => {
    console.error('Seeding failed:', e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
