import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {

  // Seed User
  const user = await prisma.user.create({
    data: {
      email: 'userrr@example.com',
      password: 'securepassword',
    },
  });

  // Seed Employee
  const employee = await prisma.employee.create({
    data: {
      first_name: 'John',
      last_name: 'Doe',
      email: 'john.doe@example.com',
      phone_number: '1234567890',
      address: '123 Main St',
      position: 'Manager',
    },
  });

  // Seed CategorieClient
  const categorieClient = await prisma.categorieClient.create({
    data: {
      name: 'Regular',
    },
  });

  // Seed Client
  const client = await prisma.client.create({
    data: {
      fullName: 'Jane Smith',
      phone_number: '0987654321',
      address: '456 Elm St',
      email: 'jane.smith@example.com',
      registration_date: new Date(),
      id_categorie_client: categorieClient.id,
    },
  });

  // Seed CategorieArticle
  const categorieArticle = await prisma.categorieArticle.create({
    data: {
      name: 'Electronics',
    },
  });

  // Seed PublishingHouses
  const publishingHouse = await prisma.publishingHouses.create({
    data: {
      name: 'TechBooks Publishing',
      address: '789 Maple Ave',
      phone_number: '5555555555',
      email: 'contact@techbooks.com',
    },
  });

  // Seed Article
  const article = await prisma.article.create({
    data: {
      title: 'Smartphone',
      price: 699.99,
      quantity: 50,
      id_categorie_article: categorieArticle.id,
      id_publishing_houses: publishingHouse.id,
    },
  });

  // Seed BonCommande
  const bonCommande = await prisma.bonCommande.create({
    data: {
      id_client: client.id,
      order_date: new Date(),
      date: new Date(),
    },
  });

  // Seed CanauxDeVent
  const canauxDeVent = await prisma.canauxDeVent.create({
    data: {
      nom: 'Online Store',
      type: 'Retail',
      region: 'North America',
    },
  });

  // Seed VenteFacture
  const venteFacture = await prisma.venteFacture.create({
    data: {
      id_client: client.id,
      id_bon_commande: bonCommande.id,
      date: new Date(),
    },
  });

  // Seed BonRetour
  const bonRetour = await prisma.bonRetour.create({
    data: {
      id_client: client.id,
      return_date: new Date(),
    },
  });

  // Seed Devis
  const devis = await prisma.devis.create({
    data: {
      id_client: client.id,
      total_amount: 1500,
      creation_date: new Date(),
      date: new Date(),
    },
  });

  

   

  // Seed CommandeLine
  const commandeLine = await prisma.commandeLine.create({
    data: {
      id_article: article.id,
      id_bon_commande: bonCommande.id,
    },
  });

  // Seed ArticleRetour
  const articleRetour = await prisma.articleRetour.create({
    data: {
      id_article: article.id,
      id_bon_retour: bonRetour.id,
    },
  });

  // Seed Fournisseur
  const fournisseur = await prisma.fournisseur.create({
    data: {
      nom_fournisseur: 'Supplier',
      phone_number: '123456',
      email: 'supplier@example.com',
      adresse: '123 street of sfect',
      registrationNumber: 'SUP123456',
    },
  });


  // Seed BonReception
  const bonReception = await prisma.bonReception.create({
    data: {
      id_fournisseur: 1, 
      type_reception: 'achat',
      reception_date: new Date(),
    },
  });

  // Seed BonSortie
  const bonSortie = await prisma.bonSortie.create({
    data: {
      id_bon_commande: bonCommande.id,
      id_client: client.id,
      id_vente_facture: venteFacture.id,
      id_devis: devis.id,
      type_reception: 'achat',
      sortie_date: new Date(),
    },
  });

  // Seed BonTransfer
  const bonTransfer = await prisma.bonTransfer.create({
    data: {
      from: null, 
      to: null, 
      date: new Date(),
      id_bon_reception: bonReception.id,
      id_bondesorti:bonSortie.id,
    },
  });


  // Seed AchatBonLivraison data
  const achatBonLivraison1 = await prisma.achatBonLivraison.create({
    data: {
      id_bon_reception: 1, 
      delivery_date: new Date(),
    },
  });

  

  // Seed AchatBLFacture
  const achatBLFacture = await prisma.achatBLFacture.create({
    data: {
      id_bon_reception: bonReception.id,
      delivery_date: new Date(),
    },
  });

  // Seed Stock
  const stock = await prisma.stock.create({
    data: {
      location: 'Warehouse 1',
      capacity: 1000,
    },
  });

  // Seed AchatFacture
  const achatFacture = await prisma.achatFacture.create({
    data: {
      id_bon_reception: bonReception.id,
      delivery_date: new Date(),
      date: new Date(),
    },
  });

  // Seed BRLine
  const brLine = await prisma.bRLine.create({
    data: {
      id_bon_reception: bonReception.id,
      id_article: article.id,
    },
  });

  // Seed BLLine
  const blLine = await prisma.bLLine.create({
    data: {
      id_bon_livraison: 1, 
      id_article: article.id,
    },
  });

  // Seed BLFLine
  const blfLine = await prisma.bLFLine.create({
    data: {
      id_bl_facture: achatBLFacture.id,
      id_article: article.id,
    },
  });

  // Seed AchatFactureLine
  const achatFactureLine = await prisma.achatFactureLine.create({
    data: {
      id_achat_facture: achatFacture.id,
      id_article: article.id,
    },
  });

  // Seed DevisLine
  const devisLine = await prisma.devisLine.create({
    data: {
      id_devis: devis.id,
      id_article: article.id,
    },
  });

  // Seed FactureLine
  const factureLine = await prisma.factureLine.create({
    data: {
      id_facture: achatFacture.id,
      id_article: article.id,
    },
  });

  

  // Seed VenteBLFacture
  const venteBLFacture = await prisma.venteBLFacture.create({
    data: {
      delivery_date: new Date(),
      canauxDeVentId: canauxDeVent.id,
      bonSortieId: bonSortie.id,
      clientId: client.id,
    },
  });

  // Seed VenteBL
  const venteBL = await prisma.venteBL.create({
    data: {
      delivery_date: new Date(),
      canauxDeVentId: canauxDeVent.id,
      bonSortieId: bonSortie.id,
      clientId: client.id,
    },
  });

  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
