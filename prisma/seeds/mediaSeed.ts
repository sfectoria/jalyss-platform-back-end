import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function mediaSeed() {
  // Vérifier si des médias existent déjà dans la base de données
  const existingMedia = await prisma.media.findMany();

  if (existingMedia.length) {
    console.log('Le semis des médias a été arrêté car des médias existent déjà dans la base de données.');
    return;
  }

  // Créer le média avec l'URL fournie
  const mediaData = {
    path: 'https://dzinejs.lv/wp-content/plugins/lightbox/images/No-image-found.jpg',
    type: 'image/jpeg', // Type MIME de l'image
    alt: 'Image par défaut', // Texte alternatif
    extension: 'jpg', // Extension de l'image
    description: 'Cette image est utilisée lorsqu\'aucune image spécifique n\'est fournie.', // Description
  };

  // Insérer le média dans la base de données
  const media = await prisma.media.create({
    data: mediaData,
  });

  console.log('Média créé avec succès:', media);
}

// Exécutez le seed
mediaSeed()
  .then(() => {
    console.log('Seed des médias terminé.');
  })
  .catch(e => {
    console.error('Échec du semis des médias:', e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
