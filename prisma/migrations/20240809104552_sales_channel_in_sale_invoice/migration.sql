/*
  Warnings:

  - You are about to drop the column `venteFacture_lineId` on the `Devis` table. All the data in the column will be lost.
  - Added the required column `saleChannelId` to the `venteFacture` table without a default value. This is not possible if the table is not empty.
  - Made the column `id_client` on table `venteFacture` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Devis" DROP CONSTRAINT "Devis_venteFacture_lineId_fkey";

-- DropForeignKey
ALTER TABLE "venteFacture" DROP CONSTRAINT "venteFacture_id_bon_commande_fkey";

-- DropForeignKey
ALTER TABLE "venteFacture" DROP CONSTRAINT "venteFacture_id_client_fkey";

-- AlterTable
ALTER TABLE "Devis" DROP COLUMN "venteFacture_lineId";

-- AlterTable
ALTER TABLE "venteFacture" ADD COLUMN     "saleChannelId" INTEGER NOT NULL,
ALTER COLUMN "id_client" SET NOT NULL,
ALTER COLUMN "id_bon_commande" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "venteFacture" ADD CONSTRAINT "venteFacture_saleChannelId_fkey" FOREIGN KEY ("saleChannelId") REFERENCES "sales_channels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "venteFacture" ADD CONSTRAINT "venteFacture_id_client_fkey" FOREIGN KEY ("id_client") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "venteFacture" ADD CONSTRAINT "venteFacture_id_bon_commande_fkey" FOREIGN KEY ("id_bon_commande") REFERENCES "BonCommande"("id") ON DELETE SET NULL ON UPDATE CASCADE;
