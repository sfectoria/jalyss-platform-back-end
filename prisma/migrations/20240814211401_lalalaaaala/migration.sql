/*
  Warnings:

  - Made the column `id_publishing_houses` on table `Article` required. This step will fail if there are existing NULL values in that column.
  - Made the column `id_category_article` on table `Article` required. This step will fail if there are existing NULL values in that column.
  - Made the column `id_stock` on table `sales_channels` required. This step will fail if there are existing NULL values in that column.
  - Made the column `date` on table `venteFacture` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Article" DROP CONSTRAINT "Article_id_category_article_fkey";

-- DropForeignKey
ALTER TABLE "Article" DROP CONSTRAINT "Article_id_publishing_houses_fkey";

-- DropForeignKey
ALTER TABLE "sales_channels" DROP CONSTRAINT "sales_channels_id_stock_fkey";

-- AlterTable
ALTER TABLE "Article" ALTER COLUMN "id_publishing_houses" SET NOT NULL,
ALTER COLUMN "id_category_article" SET NOT NULL;

-- AlterTable
ALTER TABLE "sales_channels" ALTER COLUMN "id_stock" SET NOT NULL;

-- AlterTable
ALTER TABLE "venteFacture" ALTER COLUMN "date" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "sales_channels" ADD CONSTRAINT "sales_channels_id_stock_fkey" FOREIGN KEY ("id_stock") REFERENCES "Stock"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Article" ADD CONSTRAINT "Article_id_category_article_fkey" FOREIGN KEY ("id_category_article") REFERENCES "category_Article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Article" ADD CONSTRAINT "Article_id_publishing_houses_fkey" FOREIGN KEY ("id_publishing_houses") REFERENCES "PublishingHouses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
