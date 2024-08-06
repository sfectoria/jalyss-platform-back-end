/*
  Warnings:

  - You are about to drop the column `id_categorie_article` on the `Article` table. All the data in the column will be lost.
  - You are about to drop the column `id_canaux_de_vent` on the `BonCommande` table. All the data in the column will be lost.
  - You are about to drop the column `id_vente_facture` on the `BonSortie` table. All the data in the column will be lost.
  - You are about to drop the column `canauxDeVentId` on the `VenteBLFacture` table. All the data in the column will be lost.
  - You are about to drop the `AchatFactureLine` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BLFLine` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BLLine` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BRLine` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BonRetour` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CanauxDeVent` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CategorieArticle` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CategorieClient` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CommandeLine` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FactureLine` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `VenteBL` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `VenteFacture` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "AchatFactureLine" DROP CONSTRAINT "AchatFactureLine_id_achat_facture_fkey";

-- DropForeignKey
ALTER TABLE "AchatFactureLine" DROP CONSTRAINT "AchatFactureLine_id_article_fkey";

-- DropForeignKey
ALTER TABLE "Article" DROP CONSTRAINT "Article_id_categorie_article_fkey";

-- DropForeignKey
ALTER TABLE "ArticleRetour" DROP CONSTRAINT "ArticleRetour_id_bon_retour_fkey";

-- DropForeignKey
ALTER TABLE "BLFLine" DROP CONSTRAINT "BLFLine_id_article_fkey";

-- DropForeignKey
ALTER TABLE "BLFLine" DROP CONSTRAINT "BLFLine_id_bl_facture_fkey";

-- DropForeignKey
ALTER TABLE "BLLine" DROP CONSTRAINT "BLLine_id_article_fkey";

-- DropForeignKey
ALTER TABLE "BLLine" DROP CONSTRAINT "BLLine_id_bon_livraison_fkey";

-- DropForeignKey
ALTER TABLE "BRLine" DROP CONSTRAINT "BRLine_id_article_fkey";

-- DropForeignKey
ALTER TABLE "BRLine" DROP CONSTRAINT "BRLine_id_bon_reception_fkey";

-- DropForeignKey
ALTER TABLE "BonCommande" DROP CONSTRAINT "BonCommande_id_canaux_de_vent_fkey";

-- DropForeignKey
ALTER TABLE "BonReception" DROP CONSTRAINT "BonReception_id_bon_retour_fkey";

-- DropForeignKey
ALTER TABLE "BonRetour" DROP CONSTRAINT "BonRetour_id_client_fkey";

-- DropForeignKey
ALTER TABLE "CanauxDeVent" DROP CONSTRAINT "CanauxDeVent_id_stock_fkey";

-- DropForeignKey
ALTER TABLE "Client" DROP CONSTRAINT "Client_id_categorie_client_fkey";

-- DropForeignKey
ALTER TABLE "CommandeLine" DROP CONSTRAINT "CommandeLine_id_article_fkey";

-- DropForeignKey
ALTER TABLE "CommandeLine" DROP CONSTRAINT "CommandeLine_id_bon_commande_fkey";

-- DropForeignKey
ALTER TABLE "FactureLine" DROP CONSTRAINT "FactureLine_id_article_fkey";

-- DropForeignKey
ALTER TABLE "FactureLine" DROP CONSTRAINT "FactureLine_id_facture_fkey";

-- DropForeignKey
ALTER TABLE "VenteBL" DROP CONSTRAINT "VenteBL_bonSortieId_fkey";

-- DropForeignKey
ALTER TABLE "VenteBL" DROP CONSTRAINT "VenteBL_canauxDeVentId_fkey";

-- DropForeignKey
ALTER TABLE "VenteBL" DROP CONSTRAINT "VenteBL_clientId_fkey";

-- DropForeignKey
ALTER TABLE "VenteBLFacture" DROP CONSTRAINT "VenteBLFacture_canauxDeVentId_fkey";

-- DropForeignKey
ALTER TABLE "VenteFacture" DROP CONSTRAINT "VenteFacture_bonSortieId_fkey";

-- DropForeignKey
ALTER TABLE "VenteFacture" DROP CONSTRAINT "VenteFacture_id_bon_commande_fkey";

-- DropForeignKey
ALTER TABLE "VenteFacture" DROP CONSTRAINT "VenteFacture_id_client_fkey";

-- AlterTable
ALTER TABLE "Article" DROP COLUMN "id_categorie_article",
ADD COLUMN     "id_category_article" INTEGER;

-- AlterTable
ALTER TABLE "BonCommande" DROP COLUMN "id_canaux_de_vent",
ADD COLUMN     "sales_channels" INTEGER;

-- AlterTable
ALTER TABLE "BonSortie" DROP COLUMN "id_vente_facture",
ADD COLUMN     "id_venteFacture" INTEGER;

-- AlterTable
ALTER TABLE "Devis" ADD COLUMN     "venteFacture_lineId" INTEGER;

-- AlterTable
ALTER TABLE "VenteBLFacture" DROP COLUMN "canauxDeVentId",
ADD COLUMN     "sales_channelsId" INTEGER;

-- DropTable
DROP TABLE "AchatFactureLine";

-- DropTable
DROP TABLE "BLFLine";

-- DropTable
DROP TABLE "BLLine";

-- DropTable
DROP TABLE "BRLine";

-- DropTable
DROP TABLE "BonRetour";

-- DropTable
DROP TABLE "CanauxDeVent";

-- DropTable
DROP TABLE "CategorieArticle";

-- DropTable
DROP TABLE "CategorieClient";

-- DropTable
DROP TABLE "CommandeLine";

-- DropTable
DROP TABLE "FactureLine";

-- DropTable
DROP TABLE "VenteBL";

-- DropTable
DROP TABLE "VenteFacture";

-- CreateTable
CREATE TABLE "Category_Client" (
    "id" SERIAL NOT NULL,
    "name" TEXT,

    CONSTRAINT "Category_Client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sales_channels" (
    "id" SERIAL NOT NULL,
    "nom" TEXT,
    "type" TEXT,
    "region" TEXT,
    "id_stock" INTEGER,

    CONSTRAINT "sales_channels_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "category_Article" (
    "id" SERIAL NOT NULL,
    "name" TEXT,

    CONSTRAINT "category_Article_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BonReception_Line" (
    "id" SERIAL NOT NULL,
    "id_bon_reception" INTEGER,
    "id_article" INTEGER,

    CONSTRAINT "BonReception_Line_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AchatBonLivraison_Line" (
    "id" SERIAL NOT NULL,
    "id_bon_livraison" INTEGER,
    "id_article" INTEGER,

    CONSTRAINT "AchatBonLivraison_Line_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AchatBLFacture_Line" (
    "id" SERIAL NOT NULL,
    "id_bl_facture" INTEGER,
    "id_article" INTEGER,

    CONSTRAINT "AchatBLFacture_Line_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AchatFacture_Line" (
    "id" SERIAL NOT NULL,
    "id_achat_facture" INTEGER,
    "id_article" INTEGER,

    CONSTRAINT "AchatFacture_Line_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "venteFacture" (
    "id" SERIAL NOT NULL,
    "id_client" INTEGER,
    "id_bon_commande" INTEGER,
    "bonSortieId" INTEGER,
    "date" TIMESTAMP(3),

    CONSTRAINT "venteFacture_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "venteFacture_line" (
    "id" SERIAL NOT NULL,
    "articleId" INTEGER,
    "venteFactureId" INTEGER,

    CONSTRAINT "venteFacture_line_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VenteBonLivraison" (
    "id" SERIAL NOT NULL,
    "delivery_date" TIMESTAMP(3),
    "sales_channelsId" INTEGER,
    "bonSortieId" INTEGER,
    "clientId" INTEGER,

    CONSTRAINT "VenteBonLivraison_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VenteBonLivraison_Line" (
    "id" SERIAL NOT NULL,
    "venteBonLivraisonId" INTEGER,
    "articleId" INTEGER,

    CONSTRAINT "VenteBonLivraison_Line_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VenteBLFacture_Line" (
    "id" SERIAL NOT NULL,
    "venteBLFactureId" INTEGER,
    "articleId" INTEGER,

    CONSTRAINT "VenteBLFacture_Line_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BonCommandeLine" (
    "id" SERIAL NOT NULL,
    "id_article" INTEGER,
    "id_bon_commande" INTEGER,

    CONSTRAINT "BonCommandeLine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bon_retour" (
    "id" SERIAL NOT NULL,
    "id_client" INTEGER,
    "return_date" TIMESTAMP(3),

    CONSTRAINT "Bon_retour_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BonRetour_Line" (
    "id" SERIAL NOT NULL,
    "bon_retourId" INTEGER,
    "articleId" INTEGER,

    CONSTRAINT "BonRetour_Line_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BonTransfer_Line" (
    "id" SERIAL NOT NULL,
    "id_article" INTEGER,
    "bonTransferId" INTEGER,

    CONSTRAINT "BonTransfer_Line_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Client" ADD CONSTRAINT "Client_id_categorie_client_fkey" FOREIGN KEY ("id_categorie_client") REFERENCES "Category_Client"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sales_channels" ADD CONSTRAINT "sales_channels_id_stock_fkey" FOREIGN KEY ("id_stock") REFERENCES "Stock"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Article" ADD CONSTRAINT "Article_id_category_article_fkey" FOREIGN KEY ("id_category_article") REFERENCES "category_Article"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BonReception" ADD CONSTRAINT "BonReception_id_bon_retour_fkey" FOREIGN KEY ("id_bon_retour") REFERENCES "Bon_retour"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BonReception_Line" ADD CONSTRAINT "BonReception_Line_id_bon_reception_fkey" FOREIGN KEY ("id_bon_reception") REFERENCES "BonReception"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BonReception_Line" ADD CONSTRAINT "BonReception_Line_id_article_fkey" FOREIGN KEY ("id_article") REFERENCES "Article"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AchatBonLivraison_Line" ADD CONSTRAINT "AchatBonLivraison_Line_id_bon_livraison_fkey" FOREIGN KEY ("id_bon_livraison") REFERENCES "AchatBonLivraison"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AchatBonLivraison_Line" ADD CONSTRAINT "AchatBonLivraison_Line_id_article_fkey" FOREIGN KEY ("id_article") REFERENCES "Article"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AchatBLFacture_Line" ADD CONSTRAINT "AchatBLFacture_Line_id_bl_facture_fkey" FOREIGN KEY ("id_bl_facture") REFERENCES "AchatBLFacture"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AchatBLFacture_Line" ADD CONSTRAINT "AchatBLFacture_Line_id_article_fkey" FOREIGN KEY ("id_article") REFERENCES "Article"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AchatFacture_Line" ADD CONSTRAINT "AchatFacture_Line_id_achat_facture_fkey" FOREIGN KEY ("id_achat_facture") REFERENCES "AchatFacture"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AchatFacture_Line" ADD CONSTRAINT "AchatFacture_Line_id_article_fkey" FOREIGN KEY ("id_article") REFERENCES "Article"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "venteFacture" ADD CONSTRAINT "venteFacture_id_client_fkey" FOREIGN KEY ("id_client") REFERENCES "Client"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "venteFacture" ADD CONSTRAINT "venteFacture_id_bon_commande_fkey" FOREIGN KEY ("id_bon_commande") REFERENCES "BonCommande"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "venteFacture" ADD CONSTRAINT "venteFacture_bonSortieId_fkey" FOREIGN KEY ("bonSortieId") REFERENCES "BonSortie"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "venteFacture_line" ADD CONSTRAINT "venteFacture_line_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Article"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "venteFacture_line" ADD CONSTRAINT "venteFacture_line_venteFactureId_fkey" FOREIGN KEY ("venteFactureId") REFERENCES "venteFacture"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VenteBonLivraison" ADD CONSTRAINT "VenteBonLivraison_sales_channelsId_fkey" FOREIGN KEY ("sales_channelsId") REFERENCES "sales_channels"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VenteBonLivraison" ADD CONSTRAINT "VenteBonLivraison_bonSortieId_fkey" FOREIGN KEY ("bonSortieId") REFERENCES "BonSortie"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VenteBonLivraison" ADD CONSTRAINT "VenteBonLivraison_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VenteBonLivraison_Line" ADD CONSTRAINT "VenteBonLivraison_Line_venteBonLivraisonId_fkey" FOREIGN KEY ("venteBonLivraisonId") REFERENCES "VenteBonLivraison"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VenteBonLivraison_Line" ADD CONSTRAINT "VenteBonLivraison_Line_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Article"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VenteBLFacture" ADD CONSTRAINT "VenteBLFacture_sales_channelsId_fkey" FOREIGN KEY ("sales_channelsId") REFERENCES "sales_channels"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VenteBLFacture_Line" ADD CONSTRAINT "VenteBLFacture_Line_venteBLFactureId_fkey" FOREIGN KEY ("venteBLFactureId") REFERENCES "VenteBLFacture"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VenteBLFacture_Line" ADD CONSTRAINT "VenteBLFacture_Line_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Article"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BonCommande" ADD CONSTRAINT "BonCommande_sales_channels_fkey" FOREIGN KEY ("sales_channels") REFERENCES "sales_channels"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BonCommandeLine" ADD CONSTRAINT "BonCommandeLine_id_article_fkey" FOREIGN KEY ("id_article") REFERENCES "Article"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BonCommandeLine" ADD CONSTRAINT "BonCommandeLine_id_bon_commande_fkey" FOREIGN KEY ("id_bon_commande") REFERENCES "BonCommande"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bon_retour" ADD CONSTRAINT "Bon_retour_id_client_fkey" FOREIGN KEY ("id_client") REFERENCES "Client"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BonRetour_Line" ADD CONSTRAINT "BonRetour_Line_bon_retourId_fkey" FOREIGN KEY ("bon_retourId") REFERENCES "Bon_retour"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BonRetour_Line" ADD CONSTRAINT "BonRetour_Line_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Article"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Devis" ADD CONSTRAINT "Devis_venteFacture_lineId_fkey" FOREIGN KEY ("venteFacture_lineId") REFERENCES "venteFacture_line"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BonTransfer_Line" ADD CONSTRAINT "BonTransfer_Line_id_article_fkey" FOREIGN KEY ("id_article") REFERENCES "Article"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BonTransfer_Line" ADD CONSTRAINT "BonTransfer_Line_bonTransferId_fkey" FOREIGN KEY ("bonTransferId") REFERENCES "BonTransfer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArticleRetour" ADD CONSTRAINT "ArticleRetour_id_bon_retour_fkey" FOREIGN KEY ("id_bon_retour") REFERENCES "Bon_retour"("id") ON DELETE SET NULL ON UPDATE CASCADE;
