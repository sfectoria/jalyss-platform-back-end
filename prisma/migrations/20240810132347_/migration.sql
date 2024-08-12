/*
  Warnings:

  - You are about to drop the column `delivery_date` on the `VenteBLFacture` table. All the data in the column will be lost.
  - You are about to drop the column `clientId` on the `VenteBonLivraison` table. All the data in the column will be lost.
  - You are about to drop the column `sales_channelsId` on the `VenteBonLivraison` table. All the data in the column will be lost.
  - Added the required column `deliveryDate` to the `VenteBLFacture` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_client` to the `VenteBonLivraison` table without a default value. This is not possible if the table is not empty.
  - Added the required column `saleChannelId` to the `VenteBonLivraison` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Article" DROP CONSTRAINT "Article_id_category_article_fkey";

-- DropForeignKey
ALTER TABLE "Article" DROP CONSTRAINT "Article_id_publishing_houses_fkey";

-- DropForeignKey
ALTER TABLE "VenteBonLivraison" DROP CONSTRAINT "VenteBonLivraison_clientId_fkey";

-- DropForeignKey
ALTER TABLE "VenteBonLivraison" DROP CONSTRAINT "VenteBonLivraison_sales_channelsId_fkey";

-- AlterTable
ALTER TABLE "Article" ALTER COLUMN "id_publishing_houses" DROP NOT NULL,
ALTER COLUMN "id_category_article" DROP NOT NULL;

-- AlterTable
ALTER TABLE "VenteBLFacture" DROP COLUMN "delivery_date",
ADD COLUMN     "bonCommandeId" INTEGER,
ADD COLUMN     "deliveryDate" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "VenteBonLivraison" DROP COLUMN "clientId",
DROP COLUMN "sales_channelsId",
ADD COLUMN     "id_bon_commande" INTEGER,
ADD COLUMN     "id_client" INTEGER NOT NULL,
ADD COLUMN     "saleChannelId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Article" ADD CONSTRAINT "Article_id_category_article_fkey" FOREIGN KEY ("id_category_article") REFERENCES "category_Article"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Article" ADD CONSTRAINT "Article_id_publishing_houses_fkey" FOREIGN KEY ("id_publishing_houses") REFERENCES "PublishingHouses"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VenteBonLivraison" ADD CONSTRAINT "VenteBonLivraison_id_client_fkey" FOREIGN KEY ("id_client") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VenteBonLivraison" ADD CONSTRAINT "VenteBonLivraison_saleChannelId_fkey" FOREIGN KEY ("saleChannelId") REFERENCES "sales_channels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VenteBonLivraison" ADD CONSTRAINT "VenteBonLivraison_id_bon_commande_fkey" FOREIGN KEY ("id_bon_commande") REFERENCES "BonCommande"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VenteBLFacture" ADD CONSTRAINT "VenteBLFacture_bonCommandeId_fkey" FOREIGN KEY ("bonCommandeId") REFERENCES "BonCommande"("id") ON DELETE SET NULL ON UPDATE CASCADE;
