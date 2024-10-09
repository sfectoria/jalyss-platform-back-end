import { PrismaClient } from '@prisma/client';
import { userSeed } from './seeds/userSeed';
import { articleSeed } from './seeds/articleSeed';
import { stockSeed } from './seeds/stockSeed';
import { employeeSeed } from './seeds/employeeSeed';
import { authorSeed } from './seeds/authorSeed';
import { publishingHouseSeed } from './seeds/publishingHouseSeed';
import { providerSeed } from './seeds/providerSeed';
import { clientSeed } from './seeds/clientSeed';

const prisma = new PrismaClient();

async function main() {
  // Vérifier si des utilisateurs existent déjà dans la base de données
  const users = await prisma.user.findMany();

  if (users.length) {
    console.log(
      'Le semis a été arrêté car des utilisateurs existent déjà dans la base de données.',
    );
    return;
  }

  try {
    // Exécuter le seed pour chaque entité
    await userSeed();
    await stockSeed(); 
    await articleSeed();
    await employeeSeed();
    await clientSeed();
    await authorSeed();
    await publishingHouseSeed();
    await providerSeed();

    // Créer les stocks et les canaux de vente

    console.log('Les données de semis ont été créées avec succès.');
  } catch (error) {
    console.error("Erreur lors de l'exécution du semis :", error);
  }
}

main()
  .catch((e) => {
    console.error("Erreur lors de l'exécution principale :", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
