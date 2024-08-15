-- CreateEnum
CREATE TYPE "type_reception" AS ENUM ('achat', 'retour');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "mediaId" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Employee" (
    "id" SERIAL NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "mediaId" TEXT,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Client" (
    "id" SERIAL NOT NULL,
    "fullName" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "registration_date" TIMESTAMP(3) NOT NULL,
    "id_categorie_client" INTEGER NOT NULL,
    "mediaId" TEXT,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CategoryClient" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "CategoryClient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Article" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "coverId" TEXT,
    "weight" DOUBLE PRECISION,
    "pageNumber" INTEGER,
    "code" TEXT NOT NULL,
    "shortDescriptionEn" TEXT,
    "longDescriptionEn" TEXT,
    "shortDescriptionAr" TEXT,
    "longDescriptionAr" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Article_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PublishingHouse" (
    "id" TEXT NOT NULL,
    "nameAr" TEXT NOT NULL,
    "nameEn" TEXT,
    "address" TEXT,
    "logoId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "PublishingHouse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ArticleByPublishingHouse" (
    "publishingHouseId" TEXT NOT NULL,
    "articleId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Author" (
    "id" TEXT NOT NULL,
    "nameAr" TEXT NOT NULL,
    "nameEn" TEXT,
    "biographyAr" TEXT,
    "biographyEn" TEXT,

    CONSTRAINT "Author_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ArticleByAuthor" (
    "articleId" INTEGER NOT NULL,
    "authorId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "CategoryArticle" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "CategoryArticle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ArticleByCategory" (
    "categoryArticleId" INTEGER NOT NULL,
    "articleId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "SalesChannels" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "id_stock" INTEGER NOT NULL,

    CONSTRAINT "SalesChannels_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BonReception" (
    "id" SERIAL NOT NULL,
    "id_fournisseur" INTEGER,
    "id_stock" INTEGER NOT NULL,
    "id_bon_retour" INTEGER,
    "type_reception" "type_reception" NOT NULL DEFAULT 'achat',
    "reception_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BonReception_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BonReception_Line" (
    "id" SERIAL NOT NULL,
    "id_bon_reception" INTEGER NOT NULL,
    "id_article" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "BonReception_Line_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AchatBonLivraison" (
    "id" SERIAL NOT NULL,
    "id_bon_reception" INTEGER NOT NULL,
    "delivery_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AchatBonLivraison_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AchatBonLivraison_Line" (
    "id" SERIAL NOT NULL,
    "id_bon_livraison" INTEGER NOT NULL,
    "id_article" INTEGER NOT NULL,

    CONSTRAINT "AchatBonLivraison_Line_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AchatBLFacture" (
    "id" SERIAL NOT NULL,
    "id_bon_reception" INTEGER NOT NULL,
    "delivery_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AchatBLFacture_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AchatBLFacture_Line" (
    "id" SERIAL NOT NULL,
    "id_bl_facture" INTEGER NOT NULL,
    "id_article" INTEGER NOT NULL,

    CONSTRAINT "AchatBLFacture_Line_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AchatFacture" (
    "id" SERIAL NOT NULL,
    "id_bon_reception" INTEGER NOT NULL,
    "delivery_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AchatFacture_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AchatFacture_Line" (
    "id" SERIAL NOT NULL,
    "id_achat_facture" INTEGER NOT NULL,
    "id_article" INTEGER NOT NULL,

    CONSTRAINT "AchatFacture_Line_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "venteFacture" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "id_client" INTEGER NOT NULL,
    "id_bon_commande" INTEGER,
    "saleChannelId" INTEGER NOT NULL,
    "bonSortieId" INTEGER NOT NULL,

    CONSTRAINT "venteFacture_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "venteFacture_line" (
    "id" SERIAL NOT NULL,
    "articleId" INTEGER NOT NULL,
    "venteFactureId" INTEGER NOT NULL,

    CONSTRAINT "venteFacture_line_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VenteBonLivraison" (
    "id" SERIAL NOT NULL,
    "id_client" INTEGER NOT NULL,
    "bonSortieId" INTEGER NOT NULL,
    "delivery_date" TIMESTAMP(3) NOT NULL,
    "saleChannelId" INTEGER NOT NULL,
    "id_bon_commande" INTEGER,

    CONSTRAINT "VenteBonLivraison_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VenteBonLivraison_Line" (
    "id" SERIAL NOT NULL,
    "venteBonLivraisonId" INTEGER NOT NULL,
    "articleId" INTEGER NOT NULL,

    CONSTRAINT "VenteBonLivraison_Line_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VenteBLFacture" (
    "id" SERIAL NOT NULL,
    "clientId" INTEGER NOT NULL,
    "bonSortieId" INTEGER NOT NULL,
    "deliveryDate" TIMESTAMP(3) NOT NULL,
    "bonCommandeId" INTEGER,
    "sales_channelsId" INTEGER NOT NULL,

    CONSTRAINT "VenteBLFacture_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VenteBLFacture_Line" (
    "id" SERIAL NOT NULL,
    "venteBLFactureId" INTEGER NOT NULL,
    "articleId" INTEGER NOT NULL,

    CONSTRAINT "VenteBLFacture_Line_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BonCommande" (
    "id" SERIAL NOT NULL,
    "id_client" INTEGER NOT NULL,
    "sales_channels" INTEGER NOT NULL,
    "bonSortieId" INTEGER NOT NULL,
    "order_date" TIMESTAMP(3) NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BonCommande_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BonCommandeLine" (
    "id" SERIAL NOT NULL,
    "id_article" INTEGER NOT NULL,
    "id_bon_commande" INTEGER NOT NULL,

    CONSTRAINT "BonCommandeLine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bon_retour" (
    "id" SERIAL NOT NULL,
    "id_client" INTEGER NOT NULL,
    "return_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Bon_retour_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Devis" (
    "id" SERIAL NOT NULL,
    "id_facture" INTEGER NOT NULL,
    "id_client" INTEGER NOT NULL,
    "total_amount" DOUBLE PRECISION NOT NULL,
    "creation_date" TIMESTAMP(3) NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Devis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DevisLine" (
    "id" SERIAL NOT NULL,
    "id_devis" INTEGER NOT NULL,
    "id_article" INTEGER NOT NULL,

    CONSTRAINT "DevisLine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BonTransfer" (
    "id" SERIAL NOT NULL,
    "from" INTEGER NOT NULL,
    "to" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "id_bon_reception" INTEGER NOT NULL,
    "id_bondesorti" INTEGER NOT NULL,

    CONSTRAINT "BonTransfer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BonTransfer_Line" (
    "id" SERIAL NOT NULL,
    "id_article" INTEGER NOT NULL,
    "bonTransferId" INTEGER NOT NULL,

    CONSTRAINT "BonTransfer_Line_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Stock" (
    "id" SERIAL NOT NULL,
    "location" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL,

    CONSTRAINT "Stock_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BonSortie" (
    "id" SERIAL NOT NULL,
    "num_bonSortie" INTEGER NOT NULL,
    "sortie_date" TIMESTAMP(3) NOT NULL,
    "stockId" INTEGER NOT NULL,

    CONSTRAINT "BonSortie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BonSortie_line" (
    "id" SERIAL NOT NULL,
    "bonSortieId" INTEGER,
    "articleId" INTEGER,

    CONSTRAINT "BonSortie_line_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ArticleRetour" (
    "id" SERIAL NOT NULL,
    "id_article" INTEGER NOT NULL,
    "id_bon_retour" INTEGER NOT NULL,

    CONSTRAINT "ArticleRetour_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Fournisseur" (
    "id" SERIAL NOT NULL,
    "nom_fournisseur" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "adresse" TEXT NOT NULL,
    "registrationNumber" TEXT NOT NULL,

    CONSTRAINT "Fournisseur_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Media" (
    "id" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "alt" TEXT,
    "extension" TEXT,
    "description" TEXT,

    CONSTRAINT "Media_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Article_code_key" ON "Article"("code");

-- CreateIndex
CREATE UNIQUE INDEX "ArticleByPublishingHouse_articleId_publishingHouseId_key" ON "ArticleByPublishingHouse"("articleId", "publishingHouseId");

-- CreateIndex
CREATE UNIQUE INDEX "ArticleByAuthor_authorId_articleId_key" ON "ArticleByAuthor"("authorId", "articleId");

-- CreateIndex
CREATE UNIQUE INDEX "ArticleByCategory_articleId_categoryArticleId_key" ON "ArticleByCategory"("articleId", "categoryArticleId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_mediaId_fkey" FOREIGN KEY ("mediaId") REFERENCES "Media"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_mediaId_fkey" FOREIGN KEY ("mediaId") REFERENCES "Media"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Client" ADD CONSTRAINT "Client_id_categorie_client_fkey" FOREIGN KEY ("id_categorie_client") REFERENCES "CategoryClient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Client" ADD CONSTRAINT "Client_mediaId_fkey" FOREIGN KEY ("mediaId") REFERENCES "Media"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Article" ADD CONSTRAINT "Article_coverId_fkey" FOREIGN KEY ("coverId") REFERENCES "Media"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PublishingHouse" ADD CONSTRAINT "PublishingHouse_logoId_fkey" FOREIGN KEY ("logoId") REFERENCES "Media"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArticleByPublishingHouse" ADD CONSTRAINT "ArticleByPublishingHouse_publishingHouseId_fkey" FOREIGN KEY ("publishingHouseId") REFERENCES "PublishingHouse"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArticleByPublishingHouse" ADD CONSTRAINT "ArticleByPublishingHouse_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArticleByAuthor" ADD CONSTRAINT "ArticleByAuthor_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Article"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArticleByAuthor" ADD CONSTRAINT "ArticleByAuthor_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Author"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArticleByCategory" ADD CONSTRAINT "ArticleByCategory_categoryArticleId_fkey" FOREIGN KEY ("categoryArticleId") REFERENCES "CategoryArticle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArticleByCategory" ADD CONSTRAINT "ArticleByCategory_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SalesChannels" ADD CONSTRAINT "SalesChannels_id_stock_fkey" FOREIGN KEY ("id_stock") REFERENCES "Stock"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BonReception" ADD CONSTRAINT "BonReception_id_fournisseur_fkey" FOREIGN KEY ("id_fournisseur") REFERENCES "Fournisseur"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BonReception" ADD CONSTRAINT "BonReception_id_stock_fkey" FOREIGN KEY ("id_stock") REFERENCES "Stock"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BonReception" ADD CONSTRAINT "BonReception_id_bon_retour_fkey" FOREIGN KEY ("id_bon_retour") REFERENCES "Bon_retour"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BonReception_Line" ADD CONSTRAINT "BonReception_Line_id_bon_reception_fkey" FOREIGN KEY ("id_bon_reception") REFERENCES "BonReception"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BonReception_Line" ADD CONSTRAINT "BonReception_Line_id_article_fkey" FOREIGN KEY ("id_article") REFERENCES "Article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AchatBonLivraison" ADD CONSTRAINT "AchatBonLivraison_id_bon_reception_fkey" FOREIGN KEY ("id_bon_reception") REFERENCES "BonReception"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AchatBonLivraison_Line" ADD CONSTRAINT "AchatBonLivraison_Line_id_bon_livraison_fkey" FOREIGN KEY ("id_bon_livraison") REFERENCES "AchatBonLivraison"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AchatBonLivraison_Line" ADD CONSTRAINT "AchatBonLivraison_Line_id_article_fkey" FOREIGN KEY ("id_article") REFERENCES "Article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AchatBLFacture" ADD CONSTRAINT "AchatBLFacture_id_bon_reception_fkey" FOREIGN KEY ("id_bon_reception") REFERENCES "BonReception"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AchatBLFacture_Line" ADD CONSTRAINT "AchatBLFacture_Line_id_bl_facture_fkey" FOREIGN KEY ("id_bl_facture") REFERENCES "AchatBLFacture"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AchatBLFacture_Line" ADD CONSTRAINT "AchatBLFacture_Line_id_article_fkey" FOREIGN KEY ("id_article") REFERENCES "Article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AchatFacture" ADD CONSTRAINT "AchatFacture_id_bon_reception_fkey" FOREIGN KEY ("id_bon_reception") REFERENCES "BonReception"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AchatFacture_Line" ADD CONSTRAINT "AchatFacture_Line_id_achat_facture_fkey" FOREIGN KEY ("id_achat_facture") REFERENCES "AchatFacture"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AchatFacture_Line" ADD CONSTRAINT "AchatFacture_Line_id_article_fkey" FOREIGN KEY ("id_article") REFERENCES "Article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "venteFacture" ADD CONSTRAINT "venteFacture_id_client_fkey" FOREIGN KEY ("id_client") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "venteFacture" ADD CONSTRAINT "venteFacture_id_bon_commande_fkey" FOREIGN KEY ("id_bon_commande") REFERENCES "BonCommande"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "venteFacture" ADD CONSTRAINT "venteFacture_saleChannelId_fkey" FOREIGN KEY ("saleChannelId") REFERENCES "SalesChannels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "venteFacture" ADD CONSTRAINT "venteFacture_bonSortieId_fkey" FOREIGN KEY ("bonSortieId") REFERENCES "BonSortie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "venteFacture_line" ADD CONSTRAINT "venteFacture_line_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "venteFacture_line" ADD CONSTRAINT "venteFacture_line_venteFactureId_fkey" FOREIGN KEY ("venteFactureId") REFERENCES "venteFacture"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VenteBonLivraison" ADD CONSTRAINT "VenteBonLivraison_id_client_fkey" FOREIGN KEY ("id_client") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VenteBonLivraison" ADD CONSTRAINT "VenteBonLivraison_bonSortieId_fkey" FOREIGN KEY ("bonSortieId") REFERENCES "BonSortie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VenteBonLivraison" ADD CONSTRAINT "VenteBonLivraison_saleChannelId_fkey" FOREIGN KEY ("saleChannelId") REFERENCES "SalesChannels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VenteBonLivraison" ADD CONSTRAINT "VenteBonLivraison_id_bon_commande_fkey" FOREIGN KEY ("id_bon_commande") REFERENCES "BonCommande"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VenteBonLivraison_Line" ADD CONSTRAINT "VenteBonLivraison_Line_venteBonLivraisonId_fkey" FOREIGN KEY ("venteBonLivraisonId") REFERENCES "VenteBonLivraison"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VenteBonLivraison_Line" ADD CONSTRAINT "VenteBonLivraison_Line_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VenteBLFacture" ADD CONSTRAINT "VenteBLFacture_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VenteBLFacture" ADD CONSTRAINT "VenteBLFacture_bonSortieId_fkey" FOREIGN KEY ("bonSortieId") REFERENCES "BonSortie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VenteBLFacture" ADD CONSTRAINT "VenteBLFacture_bonCommandeId_fkey" FOREIGN KEY ("bonCommandeId") REFERENCES "BonCommande"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VenteBLFacture" ADD CONSTRAINT "VenteBLFacture_sales_channelsId_fkey" FOREIGN KEY ("sales_channelsId") REFERENCES "SalesChannels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VenteBLFacture_Line" ADD CONSTRAINT "VenteBLFacture_Line_venteBLFactureId_fkey" FOREIGN KEY ("venteBLFactureId") REFERENCES "VenteBLFacture"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VenteBLFacture_Line" ADD CONSTRAINT "VenteBLFacture_Line_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BonCommande" ADD CONSTRAINT "BonCommande_id_client_fkey" FOREIGN KEY ("id_client") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BonCommande" ADD CONSTRAINT "BonCommande_bonSortieId_fkey" FOREIGN KEY ("bonSortieId") REFERENCES "BonSortie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BonCommande" ADD CONSTRAINT "BonCommande_sales_channels_fkey" FOREIGN KEY ("sales_channels") REFERENCES "SalesChannels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BonCommandeLine" ADD CONSTRAINT "BonCommandeLine_id_article_fkey" FOREIGN KEY ("id_article") REFERENCES "Article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BonCommandeLine" ADD CONSTRAINT "BonCommandeLine_id_bon_commande_fkey" FOREIGN KEY ("id_bon_commande") REFERENCES "BonCommande"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bon_retour" ADD CONSTRAINT "Bon_retour_id_client_fkey" FOREIGN KEY ("id_client") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Devis" ADD CONSTRAINT "Devis_id_client_fkey" FOREIGN KEY ("id_client") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DevisLine" ADD CONSTRAINT "DevisLine_id_devis_fkey" FOREIGN KEY ("id_devis") REFERENCES "Devis"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DevisLine" ADD CONSTRAINT "DevisLine_id_article_fkey" FOREIGN KEY ("id_article") REFERENCES "Article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BonTransfer" ADD CONSTRAINT "BonTransfer_from_fkey" FOREIGN KEY ("from") REFERENCES "Stock"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BonTransfer" ADD CONSTRAINT "BonTransfer_to_fkey" FOREIGN KEY ("to") REFERENCES "Stock"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BonTransfer" ADD CONSTRAINT "BonTransfer_id_bon_reception_fkey" FOREIGN KEY ("id_bon_reception") REFERENCES "BonReception"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BonTransfer" ADD CONSTRAINT "BonTransfer_id_bondesorti_fkey" FOREIGN KEY ("id_bondesorti") REFERENCES "BonSortie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BonTransfer_Line" ADD CONSTRAINT "BonTransfer_Line_id_article_fkey" FOREIGN KEY ("id_article") REFERENCES "Article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BonTransfer_Line" ADD CONSTRAINT "BonTransfer_Line_bonTransferId_fkey" FOREIGN KEY ("bonTransferId") REFERENCES "BonTransfer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BonSortie" ADD CONSTRAINT "BonSortie_stockId_fkey" FOREIGN KEY ("stockId") REFERENCES "Stock"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BonSortie_line" ADD CONSTRAINT "BonSortie_line_bonSortieId_fkey" FOREIGN KEY ("bonSortieId") REFERENCES "BonSortie"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BonSortie_line" ADD CONSTRAINT "BonSortie_line_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Article"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArticleRetour" ADD CONSTRAINT "ArticleRetour_id_article_fkey" FOREIGN KEY ("id_article") REFERENCES "Article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArticleRetour" ADD CONSTRAINT "ArticleRetour_id_bon_retour_fkey" FOREIGN KEY ("id_bon_retour") REFERENCES "Bon_retour"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
