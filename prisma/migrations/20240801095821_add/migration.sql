/*
  Warnings:

  - You are about to drop the column `date` on the `AchatFacture` table. All the data in the column will be lost.
  - Made the column `id_bon_reception` on table `AchatBLFacture` required. This step will fail if there are existing NULL values in that column.
  - Made the column `delivery_date` on table `AchatBLFacture` required. This step will fail if there are existing NULL values in that column.
  - Made the column `id_bl_facture` on table `AchatBLFacture_Line` required. This step will fail if there are existing NULL values in that column.
  - Made the column `id_article` on table `AchatBLFacture_Line` required. This step will fail if there are existing NULL values in that column.
  - Made the column `id_bon_reception` on table `AchatBonLivraison` required. This step will fail if there are existing NULL values in that column.
  - Made the column `delivery_date` on table `AchatBonLivraison` required. This step will fail if there are existing NULL values in that column.
  - Made the column `id_bon_livraison` on table `AchatBonLivraison_Line` required. This step will fail if there are existing NULL values in that column.
  - Made the column `id_article` on table `AchatBonLivraison_Line` required. This step will fail if there are existing NULL values in that column.
  - Made the column `id_bon_reception` on table `AchatFacture` required. This step will fail if there are existing NULL values in that column.
  - Made the column `delivery_date` on table `AchatFacture` required. This step will fail if there are existing NULL values in that column.
  - Made the column `id_achat_facture` on table `AchatFacture_Line` required. This step will fail if there are existing NULL values in that column.
  - Made the column `id_article` on table `AchatFacture_Line` required. This step will fail if there are existing NULL values in that column.
  - Made the column `title` on table `Article` required. This step will fail if there are existing NULL values in that column.
  - Made the column `price` on table `Article` required. This step will fail if there are existing NULL values in that column.
  - Made the column `quantity` on table `Article` required. This step will fail if there are existing NULL values in that column.
  - Made the column `id_publishing_houses` on table `Article` required. This step will fail if there are existing NULL values in that column.
  - Made the column `id_category_article` on table `Article` required. This step will fail if there are existing NULL values in that column.
  - Made the column `id_article` on table `ArticleRetour` required. This step will fail if there are existing NULL values in that column.
  - Made the column `id_bon_retour` on table `ArticleRetour` required. This step will fail if there are existing NULL values in that column.
  - Made the column `id_client` on table `BonCommande` required. This step will fail if there are existing NULL values in that column.
  - Made the column `bonSortieId` on table `BonCommande` required. This step will fail if there are existing NULL values in that column.
  - Made the column `order_date` on table `BonCommande` required. This step will fail if there are existing NULL values in that column.
  - Made the column `date` on table `BonCommande` required. This step will fail if there are existing NULL values in that column.
  - Made the column `sales_channels` on table `BonCommande` required. This step will fail if there are existing NULL values in that column.
  - Made the column `id_article` on table `BonCommandeLine` required. This step will fail if there are existing NULL values in that column.
  - Made the column `id_bon_commande` on table `BonCommandeLine` required. This step will fail if there are existing NULL values in that column.
  - Made the column `id_fournisseur` on table `BonReception` required. This step will fail if there are existing NULL values in that column.
  - Made the column `id_stock` on table `BonReception` required. This step will fail if there are existing NULL values in that column.
  - Made the column `id_bon_retour` on table `BonReception` required. This step will fail if there are existing NULL values in that column.
  - Made the column `reception_date` on table `BonReception` required. This step will fail if there are existing NULL values in that column.
  - Made the column `id_bon_reception` on table `BonReception_Line` required. This step will fail if there are existing NULL values in that column.
  - Made the column `id_article` on table `BonReception_Line` required. This step will fail if there are existing NULL values in that column.
  - Made the column `bon_retourId` on table `BonRetour_Line` required. This step will fail if there are existing NULL values in that column.
  - Made the column `articleId` on table `BonRetour_Line` required. This step will fail if there are existing NULL values in that column.
  - Made the column `id_bon_commande` on table `BonSortie` required. This step will fail if there are existing NULL values in that column.
  - Made the column `id_client` on table `BonSortie` required. This step will fail if there are existing NULL values in that column.
  - Made the column `id_devis` on table `BonSortie` required. This step will fail if there are existing NULL values in that column.
  - Made the column `sortie_date` on table `BonSortie` required. This step will fail if there are existing NULL values in that column.
  - Made the column `id_venteFacture` on table `BonSortie` required. This step will fail if there are existing NULL values in that column.
  - Made the column `from` on table `BonTransfer` required. This step will fail if there are existing NULL values in that column.
  - Made the column `to` on table `BonTransfer` required. This step will fail if there are existing NULL values in that column.
  - Made the column `date` on table `BonTransfer` required. This step will fail if there are existing NULL values in that column.
  - Made the column `id_bon_reception` on table `BonTransfer` required. This step will fail if there are existing NULL values in that column.
  - Made the column `id_bondesorti` on table `BonTransfer` required. This step will fail if there are existing NULL values in that column.
  - Made the column `id_article` on table `BonTransfer_Line` required. This step will fail if there are existing NULL values in that column.
  - Made the column `bonTransferId` on table `BonTransfer_Line` required. This step will fail if there are existing NULL values in that column.
  - Made the column `id_client` on table `Bon_retour` required. This step will fail if there are existing NULL values in that column.
  - Made the column `return_date` on table `Bon_retour` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `Category_Client` required. This step will fail if there are existing NULL values in that column.
  - Made the column `fullName` on table `Client` required. This step will fail if there are existing NULL values in that column.
  - Made the column `phone_number` on table `Client` required. This step will fail if there are existing NULL values in that column.
  - Made the column `address` on table `Client` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `Client` required. This step will fail if there are existing NULL values in that column.
  - Made the column `registration_date` on table `Client` required. This step will fail if there are existing NULL values in that column.
  - Made the column `id_categorie_client` on table `Client` required. This step will fail if there are existing NULL values in that column.
  - Made the column `id_facture` on table `Devis` required. This step will fail if there are existing NULL values in that column.
  - Made the column `id_client` on table `Devis` required. This step will fail if there are existing NULL values in that column.
  - Made the column `total_amount` on table `Devis` required. This step will fail if there are existing NULL values in that column.
  - Made the column `creation_date` on table `Devis` required. This step will fail if there are existing NULL values in that column.
  - Made the column `date` on table `Devis` required. This step will fail if there are existing NULL values in that column.
  - Made the column `venteFacture_lineId` on table `Devis` required. This step will fail if there are existing NULL values in that column.
  - Made the column `id_devis` on table `DevisLine` required. This step will fail if there are existing NULL values in that column.
  - Made the column `id_article` on table `DevisLine` required. This step will fail if there are existing NULL values in that column.
  - Made the column `first_name` on table `Employee` required. This step will fail if there are existing NULL values in that column.
  - Made the column `last_name` on table `Employee` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `Employee` required. This step will fail if there are existing NULL values in that column.
  - Made the column `phone_number` on table `Employee` required. This step will fail if there are existing NULL values in that column.
  - Made the column `address` on table `Employee` required. This step will fail if there are existing NULL values in that column.
  - Made the column `position` on table `Employee` required. This step will fail if there are existing NULL values in that column.
  - Made the column `phone_number` on table `Fournisseur` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `Fournisseur` required. This step will fail if there are existing NULL values in that column.
  - Made the column `adresse` on table `Fournisseur` required. This step will fail if there are existing NULL values in that column.
  - Made the column `registrationNumber` on table `Fournisseur` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `PublishingHouses` required. This step will fail if there are existing NULL values in that column.
  - Made the column `address` on table `PublishingHouses` required. This step will fail if there are existing NULL values in that column.
  - Made the column `phone_number` on table `PublishingHouses` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `PublishingHouses` required. This step will fail if there are existing NULL values in that column.
  - Made the column `location` on table `Stock` required. This step will fail if there are existing NULL values in that column.
  - Made the column `capacity` on table `Stock` required. This step will fail if there are existing NULL values in that column.
  - Made the column `delivery_date` on table `VenteBLFacture` required. This step will fail if there are existing NULL values in that column.
  - Made the column `bonSortieId` on table `VenteBLFacture` required. This step will fail if there are existing NULL values in that column.
  - Made the column `clientId` on table `VenteBLFacture` required. This step will fail if there are existing NULL values in that column.
  - Made the column `sales_channelsId` on table `VenteBLFacture` required. This step will fail if there are existing NULL values in that column.
  - Made the column `venteBLFactureId` on table `VenteBLFacture_Line` required. This step will fail if there are existing NULL values in that column.
  - Made the column `articleId` on table `VenteBLFacture_Line` required. This step will fail if there are existing NULL values in that column.
  - Made the column `delivery_date` on table `VenteBonLivraison` required. This step will fail if there are existing NULL values in that column.
  - Made the column `sales_channelsId` on table `VenteBonLivraison` required. This step will fail if there are existing NULL values in that column.
  - Made the column `bonSortieId` on table `VenteBonLivraison` required. This step will fail if there are existing NULL values in that column.
  - Made the column `clientId` on table `VenteBonLivraison` required. This step will fail if there are existing NULL values in that column.
  - Made the column `venteBonLivraisonId` on table `VenteBonLivraison_Line` required. This step will fail if there are existing NULL values in that column.
  - Made the column `articleId` on table `VenteBonLivraison_Line` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `category_Article` required. This step will fail if there are existing NULL values in that column.
  - Made the column `nom` on table `sales_channels` required. This step will fail if there are existing NULL values in that column.
  - Made the column `type` on table `sales_channels` required. This step will fail if there are existing NULL values in that column.
  - Made the column `region` on table `sales_channels` required. This step will fail if there are existing NULL values in that column.
  - Made the column `id_stock` on table `sales_channels` required. This step will fail if there are existing NULL values in that column.
  - Made the column `id_client` on table `venteFacture` required. This step will fail if there are existing NULL values in that column.
  - Made the column `id_bon_commande` on table `venteFacture` required. This step will fail if there are existing NULL values in that column.
  - Made the column `bonSortieId` on table `venteFacture` required. This step will fail if there are existing NULL values in that column.
  - Made the column `date` on table `venteFacture` required. This step will fail if there are existing NULL values in that column.
  - Made the column `articleId` on table `venteFacture_line` required. This step will fail if there are existing NULL values in that column.
  - Made the column `venteFactureId` on table `venteFacture_line` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "AchatBLFacture" DROP CONSTRAINT "AchatBLFacture_id_bon_reception_fkey";

-- DropForeignKey
ALTER TABLE "AchatBLFacture_Line" DROP CONSTRAINT "AchatBLFacture_Line_id_article_fkey";

-- DropForeignKey
ALTER TABLE "AchatBLFacture_Line" DROP CONSTRAINT "AchatBLFacture_Line_id_bl_facture_fkey";

-- DropForeignKey
ALTER TABLE "AchatBonLivraison" DROP CONSTRAINT "AchatBonLivraison_id_bon_reception_fkey";

-- DropForeignKey
ALTER TABLE "AchatBonLivraison_Line" DROP CONSTRAINT "AchatBonLivraison_Line_id_article_fkey";

-- DropForeignKey
ALTER TABLE "AchatBonLivraison_Line" DROP CONSTRAINT "AchatBonLivraison_Line_id_bon_livraison_fkey";

-- DropForeignKey
ALTER TABLE "AchatFacture" DROP CONSTRAINT "AchatFacture_id_bon_reception_fkey";

-- DropForeignKey
ALTER TABLE "AchatFacture_Line" DROP CONSTRAINT "AchatFacture_Line_id_achat_facture_fkey";

-- DropForeignKey
ALTER TABLE "AchatFacture_Line" DROP CONSTRAINT "AchatFacture_Line_id_article_fkey";

-- DropForeignKey
ALTER TABLE "Article" DROP CONSTRAINT "Article_id_category_article_fkey";

-- DropForeignKey
ALTER TABLE "Article" DROP CONSTRAINT "Article_id_publishing_houses_fkey";

-- DropForeignKey
ALTER TABLE "ArticleRetour" DROP CONSTRAINT "ArticleRetour_id_article_fkey";

-- DropForeignKey
ALTER TABLE "ArticleRetour" DROP CONSTRAINT "ArticleRetour_id_bon_retour_fkey";

-- DropForeignKey
ALTER TABLE "BonCommande" DROP CONSTRAINT "BonCommande_bonSortieId_fkey";

-- DropForeignKey
ALTER TABLE "BonCommande" DROP CONSTRAINT "BonCommande_id_client_fkey";

-- DropForeignKey
ALTER TABLE "BonCommande" DROP CONSTRAINT "BonCommande_sales_channels_fkey";

-- DropForeignKey
ALTER TABLE "BonCommandeLine" DROP CONSTRAINT "BonCommandeLine_id_article_fkey";

-- DropForeignKey
ALTER TABLE "BonCommandeLine" DROP CONSTRAINT "BonCommandeLine_id_bon_commande_fkey";

-- DropForeignKey
ALTER TABLE "BonReception" DROP CONSTRAINT "BonReception_id_bon_retour_fkey";

-- DropForeignKey
ALTER TABLE "BonReception" DROP CONSTRAINT "BonReception_id_fournisseur_fkey";

-- DropForeignKey
ALTER TABLE "BonReception" DROP CONSTRAINT "BonReception_id_stock_fkey";

-- DropForeignKey
ALTER TABLE "BonReception_Line" DROP CONSTRAINT "BonReception_Line_id_article_fkey";

-- DropForeignKey
ALTER TABLE "BonReception_Line" DROP CONSTRAINT "BonReception_Line_id_bon_reception_fkey";

-- DropForeignKey
ALTER TABLE "BonRetour_Line" DROP CONSTRAINT "BonRetour_Line_articleId_fkey";

-- DropForeignKey
ALTER TABLE "BonRetour_Line" DROP CONSTRAINT "BonRetour_Line_bon_retourId_fkey";

-- DropForeignKey
ALTER TABLE "BonSortie" DROP CONSTRAINT "BonSortie_id_client_fkey";

-- DropForeignKey
ALTER TABLE "BonSortie" DROP CONSTRAINT "BonSortie_id_devis_fkey";

-- DropForeignKey
ALTER TABLE "BonTransfer" DROP CONSTRAINT "BonTransfer_from_fkey";

-- DropForeignKey
ALTER TABLE "BonTransfer" DROP CONSTRAINT "BonTransfer_id_bon_reception_fkey";

-- DropForeignKey
ALTER TABLE "BonTransfer" DROP CONSTRAINT "BonTransfer_id_bondesorti_fkey";

-- DropForeignKey
ALTER TABLE "BonTransfer" DROP CONSTRAINT "BonTransfer_to_fkey";

-- DropForeignKey
ALTER TABLE "BonTransfer_Line" DROP CONSTRAINT "BonTransfer_Line_bonTransferId_fkey";

-- DropForeignKey
ALTER TABLE "BonTransfer_Line" DROP CONSTRAINT "BonTransfer_Line_id_article_fkey";

-- DropForeignKey
ALTER TABLE "Bon_retour" DROP CONSTRAINT "Bon_retour_id_client_fkey";

-- DropForeignKey
ALTER TABLE "Client" DROP CONSTRAINT "Client_id_categorie_client_fkey";

-- DropForeignKey
ALTER TABLE "Devis" DROP CONSTRAINT "Devis_id_client_fkey";

-- DropForeignKey
ALTER TABLE "Devis" DROP CONSTRAINT "Devis_venteFacture_lineId_fkey";

-- DropForeignKey
ALTER TABLE "DevisLine" DROP CONSTRAINT "DevisLine_id_article_fkey";

-- DropForeignKey
ALTER TABLE "DevisLine" DROP CONSTRAINT "DevisLine_id_devis_fkey";

-- DropForeignKey
ALTER TABLE "VenteBLFacture" DROP CONSTRAINT "VenteBLFacture_bonSortieId_fkey";

-- DropForeignKey
ALTER TABLE "VenteBLFacture" DROP CONSTRAINT "VenteBLFacture_clientId_fkey";

-- DropForeignKey
ALTER TABLE "VenteBLFacture" DROP CONSTRAINT "VenteBLFacture_sales_channelsId_fkey";

-- DropForeignKey
ALTER TABLE "VenteBLFacture_Line" DROP CONSTRAINT "VenteBLFacture_Line_articleId_fkey";

-- DropForeignKey
ALTER TABLE "VenteBLFacture_Line" DROP CONSTRAINT "VenteBLFacture_Line_venteBLFactureId_fkey";

-- DropForeignKey
ALTER TABLE "VenteBonLivraison" DROP CONSTRAINT "VenteBonLivraison_bonSortieId_fkey";

-- DropForeignKey
ALTER TABLE "VenteBonLivraison" DROP CONSTRAINT "VenteBonLivraison_clientId_fkey";

-- DropForeignKey
ALTER TABLE "VenteBonLivraison" DROP CONSTRAINT "VenteBonLivraison_sales_channelsId_fkey";

-- DropForeignKey
ALTER TABLE "VenteBonLivraison_Line" DROP CONSTRAINT "VenteBonLivraison_Line_articleId_fkey";

-- DropForeignKey
ALTER TABLE "VenteBonLivraison_Line" DROP CONSTRAINT "VenteBonLivraison_Line_venteBonLivraisonId_fkey";

-- DropForeignKey
ALTER TABLE "sales_channels" DROP CONSTRAINT "sales_channels_id_stock_fkey";

-- DropForeignKey
ALTER TABLE "venteFacture" DROP CONSTRAINT "venteFacture_bonSortieId_fkey";

-- DropForeignKey
ALTER TABLE "venteFacture" DROP CONSTRAINT "venteFacture_id_bon_commande_fkey";

-- DropForeignKey
ALTER TABLE "venteFacture" DROP CONSTRAINT "venteFacture_id_client_fkey";

-- DropForeignKey
ALTER TABLE "venteFacture_line" DROP CONSTRAINT "venteFacture_line_articleId_fkey";

-- DropForeignKey
ALTER TABLE "venteFacture_line" DROP CONSTRAINT "venteFacture_line_venteFactureId_fkey";

-- AlterTable
ALTER TABLE "AchatBLFacture" ALTER COLUMN "id_bon_reception" SET NOT NULL,
ALTER COLUMN "delivery_date" SET NOT NULL;

-- AlterTable
ALTER TABLE "AchatBLFacture_Line" ALTER COLUMN "id_bl_facture" SET NOT NULL,
ALTER COLUMN "id_article" SET NOT NULL;

-- AlterTable
ALTER TABLE "AchatBonLivraison" ALTER COLUMN "id_bon_reception" SET NOT NULL,
ALTER COLUMN "delivery_date" SET NOT NULL;

-- AlterTable
ALTER TABLE "AchatBonLivraison_Line" ALTER COLUMN "id_bon_livraison" SET NOT NULL,
ALTER COLUMN "id_article" SET NOT NULL;

-- AlterTable
ALTER TABLE "AchatFacture" DROP COLUMN "date",
ALTER COLUMN "id_bon_reception" SET NOT NULL,
ALTER COLUMN "delivery_date" SET NOT NULL;

-- AlterTable
ALTER TABLE "AchatFacture_Line" ALTER COLUMN "id_achat_facture" SET NOT NULL,
ALTER COLUMN "id_article" SET NOT NULL;

-- AlterTable
ALTER TABLE "Article" ALTER COLUMN "title" SET NOT NULL,
ALTER COLUMN "price" SET NOT NULL,
ALTER COLUMN "quantity" SET NOT NULL,
ALTER COLUMN "id_publishing_houses" SET NOT NULL,
ALTER COLUMN "id_category_article" SET NOT NULL;

-- AlterTable
ALTER TABLE "ArticleRetour" ALTER COLUMN "id_article" SET NOT NULL,
ALTER COLUMN "id_bon_retour" SET NOT NULL;

-- AlterTable
ALTER TABLE "BonCommande" ALTER COLUMN "id_client" SET NOT NULL,
ALTER COLUMN "bonSortieId" SET NOT NULL,
ALTER COLUMN "order_date" SET NOT NULL,
ALTER COLUMN "date" SET NOT NULL,
ALTER COLUMN "sales_channels" SET NOT NULL;

-- AlterTable
ALTER TABLE "BonCommandeLine" ALTER COLUMN "id_article" SET NOT NULL,
ALTER COLUMN "id_bon_commande" SET NOT NULL;

-- AlterTable
ALTER TABLE "BonReception" ALTER COLUMN "id_fournisseur" SET NOT NULL,
ALTER COLUMN "id_stock" SET NOT NULL,
ALTER COLUMN "id_bon_retour" SET NOT NULL,
ALTER COLUMN "reception_date" SET NOT NULL;

-- AlterTable
ALTER TABLE "BonReception_Line" ALTER COLUMN "id_bon_reception" SET NOT NULL,
ALTER COLUMN "id_article" SET NOT NULL;

-- AlterTable
ALTER TABLE "BonRetour_Line" ALTER COLUMN "bon_retourId" SET NOT NULL,
ALTER COLUMN "articleId" SET NOT NULL;

-- AlterTable
ALTER TABLE "BonSortie" ALTER COLUMN "id_bon_commande" SET NOT NULL,
ALTER COLUMN "id_client" SET NOT NULL,
ALTER COLUMN "id_devis" SET NOT NULL,
ALTER COLUMN "sortie_date" SET NOT NULL,
ALTER COLUMN "id_venteFacture" SET NOT NULL;

-- AlterTable
ALTER TABLE "BonTransfer" ALTER COLUMN "from" SET NOT NULL,
ALTER COLUMN "to" SET NOT NULL,
ALTER COLUMN "date" SET NOT NULL,
ALTER COLUMN "id_bon_reception" SET NOT NULL,
ALTER COLUMN "id_bondesorti" SET NOT NULL;

-- AlterTable
ALTER TABLE "BonTransfer_Line" ALTER COLUMN "id_article" SET NOT NULL,
ALTER COLUMN "bonTransferId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Bon_retour" ALTER COLUMN "id_client" SET NOT NULL,
ALTER COLUMN "return_date" SET NOT NULL;

-- AlterTable
ALTER TABLE "Category_Client" ALTER COLUMN "name" SET NOT NULL;

-- AlterTable
ALTER TABLE "Client" ALTER COLUMN "fullName" SET NOT NULL,
ALTER COLUMN "phone_number" SET NOT NULL,
ALTER COLUMN "address" SET NOT NULL,
ALTER COLUMN "email" SET NOT NULL,
ALTER COLUMN "registration_date" SET NOT NULL,
ALTER COLUMN "id_categorie_client" SET NOT NULL;

-- AlterTable
ALTER TABLE "Devis" ALTER COLUMN "id_facture" SET NOT NULL,
ALTER COLUMN "id_client" SET NOT NULL,
ALTER COLUMN "total_amount" SET NOT NULL,
ALTER COLUMN "creation_date" SET NOT NULL,
ALTER COLUMN "date" SET NOT NULL,
ALTER COLUMN "venteFacture_lineId" SET NOT NULL;

-- AlterTable
ALTER TABLE "DevisLine" ALTER COLUMN "id_devis" SET NOT NULL,
ALTER COLUMN "id_article" SET NOT NULL;

-- AlterTable
ALTER TABLE "Employee" ALTER COLUMN "first_name" SET NOT NULL,
ALTER COLUMN "last_name" SET NOT NULL,
ALTER COLUMN "email" SET NOT NULL,
ALTER COLUMN "phone_number" SET NOT NULL,
ALTER COLUMN "address" SET NOT NULL,
ALTER COLUMN "position" SET NOT NULL;

-- AlterTable
ALTER TABLE "Fournisseur" ALTER COLUMN "phone_number" SET NOT NULL,
ALTER COLUMN "email" SET NOT NULL,
ALTER COLUMN "adresse" SET NOT NULL,
ALTER COLUMN "registrationNumber" SET NOT NULL;

-- AlterTable
ALTER TABLE "PublishingHouses" ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "address" SET NOT NULL,
ALTER COLUMN "phone_number" SET NOT NULL,
ALTER COLUMN "email" SET NOT NULL;

-- AlterTable
ALTER TABLE "Stock" ALTER COLUMN "location" SET NOT NULL,
ALTER COLUMN "capacity" SET NOT NULL;

-- AlterTable
ALTER TABLE "VenteBLFacture" ALTER COLUMN "delivery_date" SET NOT NULL,
ALTER COLUMN "bonSortieId" SET NOT NULL,
ALTER COLUMN "clientId" SET NOT NULL,
ALTER COLUMN "sales_channelsId" SET NOT NULL;

-- AlterTable
ALTER TABLE "VenteBLFacture_Line" ALTER COLUMN "venteBLFactureId" SET NOT NULL,
ALTER COLUMN "articleId" SET NOT NULL;

-- AlterTable
ALTER TABLE "VenteBonLivraison" ALTER COLUMN "delivery_date" SET NOT NULL,
ALTER COLUMN "sales_channelsId" SET NOT NULL,
ALTER COLUMN "bonSortieId" SET NOT NULL,
ALTER COLUMN "clientId" SET NOT NULL;

-- AlterTable
ALTER TABLE "VenteBonLivraison_Line" ALTER COLUMN "venteBonLivraisonId" SET NOT NULL,
ALTER COLUMN "articleId" SET NOT NULL;

-- AlterTable
ALTER TABLE "category_Article" ALTER COLUMN "name" SET NOT NULL;

-- AlterTable
ALTER TABLE "sales_channels" ALTER COLUMN "nom" SET NOT NULL,
ALTER COLUMN "type" SET NOT NULL,
ALTER COLUMN "region" SET NOT NULL,
ALTER COLUMN "id_stock" SET NOT NULL;

-- AlterTable
ALTER TABLE "venteFacture" ALTER COLUMN "id_client" SET NOT NULL,
ALTER COLUMN "id_bon_commande" SET NOT NULL,
ALTER COLUMN "bonSortieId" SET NOT NULL,
ALTER COLUMN "date" SET NOT NULL;

-- AlterTable
ALTER TABLE "venteFacture_line" ALTER COLUMN "articleId" SET NOT NULL,
ALTER COLUMN "venteFactureId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Client" ADD CONSTRAINT "Client_id_categorie_client_fkey" FOREIGN KEY ("id_categorie_client") REFERENCES "Category_Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sales_channels" ADD CONSTRAINT "sales_channels_id_stock_fkey" FOREIGN KEY ("id_stock") REFERENCES "Stock"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Article" ADD CONSTRAINT "Article_id_category_article_fkey" FOREIGN KEY ("id_category_article") REFERENCES "category_Article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Article" ADD CONSTRAINT "Article_id_publishing_houses_fkey" FOREIGN KEY ("id_publishing_houses") REFERENCES "PublishingHouses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BonReception" ADD CONSTRAINT "BonReception_id_fournisseur_fkey" FOREIGN KEY ("id_fournisseur") REFERENCES "Fournisseur"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BonReception" ADD CONSTRAINT "BonReception_id_stock_fkey" FOREIGN KEY ("id_stock") REFERENCES "Stock"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BonReception" ADD CONSTRAINT "BonReception_id_bon_retour_fkey" FOREIGN KEY ("id_bon_retour") REFERENCES "Bon_retour"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

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
ALTER TABLE "venteFacture" ADD CONSTRAINT "venteFacture_id_bon_commande_fkey" FOREIGN KEY ("id_bon_commande") REFERENCES "BonCommande"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "venteFacture" ADD CONSTRAINT "venteFacture_bonSortieId_fkey" FOREIGN KEY ("bonSortieId") REFERENCES "BonSortie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "venteFacture_line" ADD CONSTRAINT "venteFacture_line_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "venteFacture_line" ADD CONSTRAINT "venteFacture_line_venteFactureId_fkey" FOREIGN KEY ("venteFactureId") REFERENCES "venteFacture"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VenteBonLivraison" ADD CONSTRAINT "VenteBonLivraison_sales_channelsId_fkey" FOREIGN KEY ("sales_channelsId") REFERENCES "sales_channels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VenteBonLivraison" ADD CONSTRAINT "VenteBonLivraison_bonSortieId_fkey" FOREIGN KEY ("bonSortieId") REFERENCES "BonSortie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VenteBonLivraison" ADD CONSTRAINT "VenteBonLivraison_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VenteBonLivraison_Line" ADD CONSTRAINT "VenteBonLivraison_Line_venteBonLivraisonId_fkey" FOREIGN KEY ("venteBonLivraisonId") REFERENCES "VenteBonLivraison"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VenteBonLivraison_Line" ADD CONSTRAINT "VenteBonLivraison_Line_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VenteBLFacture" ADD CONSTRAINT "VenteBLFacture_sales_channelsId_fkey" FOREIGN KEY ("sales_channelsId") REFERENCES "sales_channels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VenteBLFacture" ADD CONSTRAINT "VenteBLFacture_bonSortieId_fkey" FOREIGN KEY ("bonSortieId") REFERENCES "BonSortie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VenteBLFacture" ADD CONSTRAINT "VenteBLFacture_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VenteBLFacture_Line" ADD CONSTRAINT "VenteBLFacture_Line_venteBLFactureId_fkey" FOREIGN KEY ("venteBLFactureId") REFERENCES "VenteBLFacture"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VenteBLFacture_Line" ADD CONSTRAINT "VenteBLFacture_Line_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BonCommande" ADD CONSTRAINT "BonCommande_id_client_fkey" FOREIGN KEY ("id_client") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BonCommande" ADD CONSTRAINT "BonCommande_bonSortieId_fkey" FOREIGN KEY ("bonSortieId") REFERENCES "BonSortie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BonCommande" ADD CONSTRAINT "BonCommande_sales_channels_fkey" FOREIGN KEY ("sales_channels") REFERENCES "sales_channels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BonCommandeLine" ADD CONSTRAINT "BonCommandeLine_id_article_fkey" FOREIGN KEY ("id_article") REFERENCES "Article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BonCommandeLine" ADD CONSTRAINT "BonCommandeLine_id_bon_commande_fkey" FOREIGN KEY ("id_bon_commande") REFERENCES "BonCommande"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bon_retour" ADD CONSTRAINT "Bon_retour_id_client_fkey" FOREIGN KEY ("id_client") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BonRetour_Line" ADD CONSTRAINT "BonRetour_Line_bon_retourId_fkey" FOREIGN KEY ("bon_retourId") REFERENCES "Bon_retour"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BonRetour_Line" ADD CONSTRAINT "BonRetour_Line_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Devis" ADD CONSTRAINT "Devis_id_client_fkey" FOREIGN KEY ("id_client") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Devis" ADD CONSTRAINT "Devis_venteFacture_lineId_fkey" FOREIGN KEY ("venteFacture_lineId") REFERENCES "venteFacture_line"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

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
ALTER TABLE "BonSortie" ADD CONSTRAINT "BonSortie_id_client_fkey" FOREIGN KEY ("id_client") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BonSortie" ADD CONSTRAINT "BonSortie_id_devis_fkey" FOREIGN KEY ("id_devis") REFERENCES "Devis"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArticleRetour" ADD CONSTRAINT "ArticleRetour_id_article_fkey" FOREIGN KEY ("id_article") REFERENCES "Article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArticleRetour" ADD CONSTRAINT "ArticleRetour_id_bon_retour_fkey" FOREIGN KEY ("id_bon_retour") REFERENCES "Bon_retour"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
