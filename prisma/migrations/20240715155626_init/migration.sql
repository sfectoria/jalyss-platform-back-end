-- CreateTable
CREATE TABLE "Employee" (
    "id" SERIAL NOT NULL,
    "first_name" TEXT,
    "last_name" TEXT,
    "email" TEXT,
    "phone_number" TEXT,
    "address" TEXT,
    "position" TEXT,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Client" (
    "id" SERIAL NOT NULL,
    "fullName" TEXT,
    "phone_number" TEXT,
    "address" TEXT,
    "email" TEXT,
    "registration_date" TIMESTAMP(3),
    "id_categorie_client" INTEGER,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Article" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "price" DOUBLE PRECISION,
    "quantity" INTEGER,
    "id_categorie_article" INTEGER,
    "id_publishing_houses" INTEGER,

    CONSTRAINT "Article_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PublishingHouses" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "address" TEXT,
    "phone_number" TEXT,
    "email" TEXT,

    CONSTRAINT "PublishingHouses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CategorieArticle" (
    "id" SERIAL NOT NULL,
    "name" TEXT,

    CONSTRAINT "CategorieArticle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CategorieClient" (
    "id" SERIAL NOT NULL,
    "name" TEXT,

    CONSTRAINT "CategorieClient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AchatBonLivraison" (
    "id" SERIAL NOT NULL,
    "id_bon_reception" INTEGER,
    "delivery_date" TIMESTAMP(3),

    CONSTRAINT "AchatBonLivraison_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BonCommande" (
    "id" SERIAL NOT NULL,
    "id_client" INTEGER,
    "id_bondesorti" INTEGER,
    "id_canaux_de_vent" INTEGER,
    "order_date" TIMESTAMP(3),
    "date" TIMESTAMP(3),
    "bonSortieId" INTEGER,

    CONSTRAINT "BonCommande_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CanauxDeVent" (
    "id" SERIAL NOT NULL,
    "nom" TEXT,
    "type" TEXT,
    "region" TEXT,
    "id_stock" INTEGER,

    CONSTRAINT "CanauxDeVent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VenteFacture" (
    "id" SERIAL NOT NULL,
    "id_client" INTEGER,
    "id_bon_commande" INTEGER,
    "id_bondesorti" INTEGER,
    "date" TIMESTAMP(3),
    "bonSortieId" INTEGER,

    CONSTRAINT "VenteFacture_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BonRetour" (
    "id" SERIAL NOT NULL,
    "id_client" INTEGER,
    "return_date" TIMESTAMP(3),

    CONSTRAINT "BonRetour_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Devis" (
    "id" SERIAL NOT NULL,
    "id_facture" INTEGER,
    "id_client" INTEGER,
    "total_amount" DOUBLE PRECISION,
    "creation_date" TIMESTAMP(3),
    "date" TIMESTAMP(3),

    CONSTRAINT "Devis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BonReception" (
    "id" SERIAL NOT NULL,
    "id_fournisseur" INTEGER,
    "id_stock" INTEGER,
    "id_bon_retour" INTEGER,
    "type_reception" TEXT NOT NULL DEFAULT 'retour',
    "reception_date" TIMESTAMP(3),

    CONSTRAINT "BonReception_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CommandeLine" (
    "id" SERIAL NOT NULL,
    "id_article" INTEGER,
    "id_bon_commande" INTEGER,

    CONSTRAINT "CommandeLine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ArticleRetour" (
    "id" SERIAL NOT NULL,
    "id_article" INTEGER,
    "id_bon_retour" INTEGER,

    CONSTRAINT "ArticleRetour_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Fournisseur" (
    "id" SERIAL NOT NULL,
    "nom_fournisseur" TEXT NOT NULL,
    "phone_number" TEXT,
    "email" TEXT,
    "adresse" TEXT,
    "registrationNumber" TEXT,

    CONSTRAINT "Fournisseur_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BonTransfer" (
    "id" SERIAL NOT NULL,
    "from" INTEGER,
    "to" INTEGER,
    "date" TIMESTAMP(3),
    "id_bon_reception" INTEGER,
    "id_bondesorti" INTEGER,

    CONSTRAINT "BonTransfer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AchatBLFacture" (
    "id" SERIAL NOT NULL,
    "id_bon_reception" INTEGER,
    "delivery_date" TIMESTAMP(3),

    CONSTRAINT "AchatBLFacture_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Stock" (
    "id" SERIAL NOT NULL,
    "location" TEXT,
    "capacity" INTEGER,

    CONSTRAINT "Stock_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AchatFacture" (
    "id" SERIAL NOT NULL,
    "id_bon_reception" INTEGER,
    "delivery_date" TIMESTAMP(3),
    "date" TIMESTAMP(3),

    CONSTRAINT "AchatFacture_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BRLine" (
    "id" SERIAL NOT NULL,
    "id_bon_reception" INTEGER,
    "id_article" INTEGER,

    CONSTRAINT "BRLine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BLLine" (
    "id" SERIAL NOT NULL,
    "id_bon_livraison" INTEGER,
    "id_article" INTEGER,

    CONSTRAINT "BLLine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BLFLine" (
    "id" SERIAL NOT NULL,
    "id_bl_facture" INTEGER,
    "id_article" INTEGER,

    CONSTRAINT "BLFLine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AchatFactureLine" (
    "id" SERIAL NOT NULL,
    "id_achat_facture" INTEGER,
    "id_article" INTEGER,

    CONSTRAINT "AchatFactureLine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DevisLine" (
    "id" SERIAL NOT NULL,
    "id_devis" INTEGER,
    "id_article" INTEGER,

    CONSTRAINT "DevisLine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FactureLine" (
    "id" SERIAL NOT NULL,
    "id_facture" INTEGER,
    "id_article" INTEGER,

    CONSTRAINT "FactureLine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BonSortie" (
    "id" SERIAL NOT NULL,
    "id_bon_commande" INTEGER,
    "id_client" INTEGER,
    "id_vente_facture" INTEGER,
    "id_devis" INTEGER,
    "type_reception" TEXT NOT NULL DEFAULT 'retour',
    "sortie_date" TIMESTAMP(3),

    CONSTRAINT "BonSortie_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Client" ADD CONSTRAINT "Client_id_categorie_client_fkey" FOREIGN KEY ("id_categorie_client") REFERENCES "CategorieClient"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Article" ADD CONSTRAINT "Article_id_categorie_article_fkey" FOREIGN KEY ("id_categorie_article") REFERENCES "CategorieArticle"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Article" ADD CONSTRAINT "Article_id_publishing_houses_fkey" FOREIGN KEY ("id_publishing_houses") REFERENCES "PublishingHouses"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AchatBonLivraison" ADD CONSTRAINT "AchatBonLivraison_id_bon_reception_fkey" FOREIGN KEY ("id_bon_reception") REFERENCES "BonReception"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BonCommande" ADD CONSTRAINT "BonCommande_id_client_fkey" FOREIGN KEY ("id_client") REFERENCES "Client"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BonCommande" ADD CONSTRAINT "BonCommande_bonSortieId_fkey" FOREIGN KEY ("bonSortieId") REFERENCES "BonSortie"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BonCommande" ADD CONSTRAINT "BonCommande_id_canaux_de_vent_fkey" FOREIGN KEY ("id_canaux_de_vent") REFERENCES "CanauxDeVent"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CanauxDeVent" ADD CONSTRAINT "CanauxDeVent_id_stock_fkey" FOREIGN KEY ("id_stock") REFERENCES "Stock"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VenteFacture" ADD CONSTRAINT "VenteFacture_id_client_fkey" FOREIGN KEY ("id_client") REFERENCES "Client"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VenteFacture" ADD CONSTRAINT "VenteFacture_id_bon_commande_fkey" FOREIGN KEY ("id_bon_commande") REFERENCES "BonCommande"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VenteFacture" ADD CONSTRAINT "VenteFacture_bonSortieId_fkey" FOREIGN KEY ("bonSortieId") REFERENCES "BonSortie"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BonRetour" ADD CONSTRAINT "BonRetour_id_client_fkey" FOREIGN KEY ("id_client") REFERENCES "Client"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Devis" ADD CONSTRAINT "Devis_id_client_fkey" FOREIGN KEY ("id_client") REFERENCES "Client"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BonReception" ADD CONSTRAINT "BonReception_id_fournisseur_fkey" FOREIGN KEY ("id_fournisseur") REFERENCES "Fournisseur"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BonReception" ADD CONSTRAINT "BonReception_id_stock_fkey" FOREIGN KEY ("id_stock") REFERENCES "Stock"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BonReception" ADD CONSTRAINT "BonReception_id_bon_retour_fkey" FOREIGN KEY ("id_bon_retour") REFERENCES "BonRetour"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommandeLine" ADD CONSTRAINT "CommandeLine_id_article_fkey" FOREIGN KEY ("id_article") REFERENCES "Article"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommandeLine" ADD CONSTRAINT "CommandeLine_id_bon_commande_fkey" FOREIGN KEY ("id_bon_commande") REFERENCES "BonCommande"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArticleRetour" ADD CONSTRAINT "ArticleRetour_id_article_fkey" FOREIGN KEY ("id_article") REFERENCES "Article"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArticleRetour" ADD CONSTRAINT "ArticleRetour_id_bon_retour_fkey" FOREIGN KEY ("id_bon_retour") REFERENCES "BonRetour"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BonTransfer" ADD CONSTRAINT "BonTransfer_from_fkey" FOREIGN KEY ("from") REFERENCES "Stock"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BonTransfer" ADD CONSTRAINT "BonTransfer_to_fkey" FOREIGN KEY ("to") REFERENCES "Stock"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BonTransfer" ADD CONSTRAINT "BonTransfer_id_bon_reception_fkey" FOREIGN KEY ("id_bon_reception") REFERENCES "BonReception"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BonTransfer" ADD CONSTRAINT "BonTransfer_id_bondesorti_fkey" FOREIGN KEY ("id_bondesorti") REFERENCES "BonSortie"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AchatBLFacture" ADD CONSTRAINT "AchatBLFacture_id_bon_reception_fkey" FOREIGN KEY ("id_bon_reception") REFERENCES "BonReception"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AchatFacture" ADD CONSTRAINT "AchatFacture_id_bon_reception_fkey" FOREIGN KEY ("id_bon_reception") REFERENCES "BonReception"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BRLine" ADD CONSTRAINT "BRLine_id_bon_reception_fkey" FOREIGN KEY ("id_bon_reception") REFERENCES "BonReception"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BRLine" ADD CONSTRAINT "BRLine_id_article_fkey" FOREIGN KEY ("id_article") REFERENCES "Article"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BLLine" ADD CONSTRAINT "BLLine_id_bon_livraison_fkey" FOREIGN KEY ("id_bon_livraison") REFERENCES "AchatBonLivraison"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BLLine" ADD CONSTRAINT "BLLine_id_article_fkey" FOREIGN KEY ("id_article") REFERENCES "Article"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BLFLine" ADD CONSTRAINT "BLFLine_id_bl_facture_fkey" FOREIGN KEY ("id_bl_facture") REFERENCES "AchatBLFacture"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BLFLine" ADD CONSTRAINT "BLFLine_id_article_fkey" FOREIGN KEY ("id_article") REFERENCES "Article"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AchatFactureLine" ADD CONSTRAINT "AchatFactureLine_id_achat_facture_fkey" FOREIGN KEY ("id_achat_facture") REFERENCES "AchatFacture"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AchatFactureLine" ADD CONSTRAINT "AchatFactureLine_id_article_fkey" FOREIGN KEY ("id_article") REFERENCES "Article"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DevisLine" ADD CONSTRAINT "DevisLine_id_devis_fkey" FOREIGN KEY ("id_devis") REFERENCES "Devis"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DevisLine" ADD CONSTRAINT "DevisLine_id_article_fkey" FOREIGN KEY ("id_article") REFERENCES "Article"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FactureLine" ADD CONSTRAINT "FactureLine_id_facture_fkey" FOREIGN KEY ("id_facture") REFERENCES "AchatFacture"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FactureLine" ADD CONSTRAINT "FactureLine_id_article_fkey" FOREIGN KEY ("id_article") REFERENCES "Article"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BonSortie" ADD CONSTRAINT "BonSortie_id_client_fkey" FOREIGN KEY ("id_client") REFERENCES "Client"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BonSortie" ADD CONSTRAINT "BonSortie_id_devis_fkey" FOREIGN KEY ("id_devis") REFERENCES "Devis"("id") ON DELETE SET NULL ON UPDATE CASCADE;
