/*
  Warnings:

  - You are about to drop the column `idArtical` on the `EstimateLine` table. All the data in the column will be lost.
  - You are about to drop the column `articalId` on the `ExitNoteLine` table. All the data in the column will be lost.
  - You are about to drop the column `idArtical` on the `PurchaseDeliveryInvoiceLine` table. All the data in the column will be lost.
  - You are about to drop the column `idArtical` on the `PurchaseDeliveryNoteLine` table. All the data in the column will be lost.
  - You are about to drop the column `idArtical` on the `PurchaseInvoiceLine` table. All the data in the column will be lost.
  - You are about to drop the column `idArtical` on the `PurchaseOrderLine` table. All the data in the column will be lost.
  - You are about to drop the column `idArtical` on the `ReceiptNoteLine` table. All the data in the column will be lost.
  - You are about to drop the column `idArtical` on the `ReturnNoteLine` table. All the data in the column will be lost.
  - You are about to drop the column `articalId` on the `SalesDeliveryInvoiceLine` table. All the data in the column will be lost.
  - You are about to drop the column `articalId` on the `SalesDeliveryNoteLine` table. All the data in the column will be lost.
  - You are about to drop the column `articalId` on the `SalesInvoiceLine` table. All the data in the column will be lost.
  - You are about to drop the column `idArtical` on the `TransferNoteLine` table. All the data in the column will be lost.
  - You are about to drop the `Artical` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ArticalByAuthor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ArticalByCategory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ArticalByPublishingHouse` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CategoryArtical` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `idArticle` to the `EstimateLine` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idArticle` to the `PurchaseDeliveryInvoiceLine` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idArticle` to the `PurchaseDeliveryNoteLine` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idArticle` to the `PurchaseInvoiceLine` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idArticle` to the `PurchaseOrderLine` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idArticle` to the `ReceiptNoteLine` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idArticle` to the `ReturnNoteLine` table without a default value. This is not possible if the table is not empty.
  - Added the required column `articleId` to the `SalesDeliveryInvoiceLine` table without a default value. This is not possible if the table is not empty.
  - Added the required column `articleId` to the `SalesDeliveryNoteLine` table without a default value. This is not possible if the table is not empty.
  - Added the required column `articleId` to the `SalesInvoiceLine` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idArticle` to the `TransferNoteLine` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Artical" DROP CONSTRAINT "Artical_coverId_fkey";

-- DropForeignKey
ALTER TABLE "ArticalByAuthor" DROP CONSTRAINT "ArticalByAuthor_articalId_fkey";

-- DropForeignKey
ALTER TABLE "ArticalByAuthor" DROP CONSTRAINT "ArticalByAuthor_authorId_fkey";

-- DropForeignKey
ALTER TABLE "ArticalByCategory" DROP CONSTRAINT "ArticalByCategory_articalId_fkey";

-- DropForeignKey
ALTER TABLE "ArticalByCategory" DROP CONSTRAINT "ArticalByCategory_categoryarticalId_fkey";

-- DropForeignKey
ALTER TABLE "ArticalByPublishingHouse" DROP CONSTRAINT "ArticalByPublishingHouse_articalId_fkey";

-- DropForeignKey
ALTER TABLE "ArticalByPublishingHouse" DROP CONSTRAINT "ArticalByPublishingHouse_publishingHouseId_fkey";

-- DropForeignKey
ALTER TABLE "EstimateLine" DROP CONSTRAINT "EstimateLine_idArtical_fkey";

-- DropForeignKey
ALTER TABLE "ExitNoteLine" DROP CONSTRAINT "ExitNoteLine_articalId_fkey";

-- DropForeignKey
ALTER TABLE "PurchaseDeliveryInvoiceLine" DROP CONSTRAINT "PurchaseDeliveryInvoiceLine_idArtical_fkey";

-- DropForeignKey
ALTER TABLE "PurchaseDeliveryNoteLine" DROP CONSTRAINT "PurchaseDeliveryNoteLine_idArtical_fkey";

-- DropForeignKey
ALTER TABLE "PurchaseInvoiceLine" DROP CONSTRAINT "PurchaseInvoiceLine_idArtical_fkey";

-- DropForeignKey
ALTER TABLE "PurchaseOrderLine" DROP CONSTRAINT "PurchaseOrderLine_idArtical_fkey";

-- DropForeignKey
ALTER TABLE "ReceiptNoteLine" DROP CONSTRAINT "ReceiptNoteLine_idArtical_fkey";

-- DropForeignKey
ALTER TABLE "ReturnNoteLine" DROP CONSTRAINT "ReturnNoteLine_idArtical_fkey";

-- DropForeignKey
ALTER TABLE "SalesDeliveryInvoiceLine" DROP CONSTRAINT "SalesDeliveryInvoiceLine_articalId_fkey";

-- DropForeignKey
ALTER TABLE "SalesDeliveryNoteLine" DROP CONSTRAINT "SalesDeliveryNoteLine_articalId_fkey";

-- DropForeignKey
ALTER TABLE "SalesInvoiceLine" DROP CONSTRAINT "SalesInvoiceLine_articalId_fkey";

-- DropForeignKey
ALTER TABLE "TransferNoteLine" DROP CONSTRAINT "TransferNoteLine_idArtical_fkey";

-- AlterTable
ALTER TABLE "EstimateLine" DROP COLUMN "idArtical",
ADD COLUMN     "idArticle" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "ExitNoteLine" DROP COLUMN "articalId",
ADD COLUMN     "articleId" INTEGER;

-- AlterTable
ALTER TABLE "PurchaseDeliveryInvoiceLine" DROP COLUMN "idArtical",
ADD COLUMN     "idArticle" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "PurchaseDeliveryNoteLine" DROP COLUMN "idArtical",
ADD COLUMN     "idArticle" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "PurchaseInvoiceLine" DROP COLUMN "idArtical",
ADD COLUMN     "idArticle" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "PurchaseOrderLine" DROP COLUMN "idArtical",
ADD COLUMN     "idArticle" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "ReceiptNoteLine" DROP COLUMN "idArtical",
ADD COLUMN     "idArticle" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "ReturnNoteLine" DROP COLUMN "idArtical",
ADD COLUMN     "idArticle" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "SalesDeliveryInvoiceLine" DROP COLUMN "articalId",
ADD COLUMN     "articleId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "SalesDeliveryNoteLine" DROP COLUMN "articalId",
ADD COLUMN     "articleId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "SalesInvoiceLine" DROP COLUMN "articalId",
ADD COLUMN     "articleId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "TransferNoteLine" DROP COLUMN "idArtical",
ADD COLUMN     "idArticle" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Artical";

-- DropTable
DROP TABLE "ArticalByAuthor";

-- DropTable
DROP TABLE "ArticalByCategory";

-- DropTable
DROP TABLE "ArticalByPublishingHouse";

-- DropTable
DROP TABLE "CategoryArtical";

-- CreateTable
CREATE TABLE "Article" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "pageNumber" INTEGER,
    "weight" DOUBLE PRECISION,
    "coverId" TEXT,
    "shortDescriptionEn" TEXT,
    "longDescriptionEn" TEXT,
    "shortDescriptionAr" TEXT,
    "longDescriptionAr" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Article_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ArticleByPublishingHouse" (
    "publishingHouseId" INTEGER NOT NULL,
    "articleId" INTEGER NOT NULL
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
    "categoryarticleId" INTEGER NOT NULL,
    "articleId" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Article_code_key" ON "Article"("code");

-- CreateIndex
CREATE UNIQUE INDEX "ArticleByPublishingHouse_articleId_publishingHouseId_key" ON "ArticleByPublishingHouse"("articleId", "publishingHouseId");

-- CreateIndex
CREATE UNIQUE INDEX "ArticleByAuthor_authorId_articleId_key" ON "ArticleByAuthor"("authorId", "articleId");

-- CreateIndex
CREATE UNIQUE INDEX "ArticleByCategory_articleId_categoryarticleId_key" ON "ArticleByCategory"("articleId", "categoryarticleId");

-- AddForeignKey
ALTER TABLE "Article" ADD CONSTRAINT "Article_coverId_fkey" FOREIGN KEY ("coverId") REFERENCES "Media"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArticleByPublishingHouse" ADD CONSTRAINT "ArticleByPublishingHouse_publishingHouseId_fkey" FOREIGN KEY ("publishingHouseId") REFERENCES "PublishingHouse"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArticleByPublishingHouse" ADD CONSTRAINT "ArticleByPublishingHouse_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArticleByAuthor" ADD CONSTRAINT "ArticleByAuthor_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Article"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArticleByAuthor" ADD CONSTRAINT "ArticleByAuthor_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Author"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArticleByCategory" ADD CONSTRAINT "ArticleByCategory_categoryarticleId_fkey" FOREIGN KEY ("categoryarticleId") REFERENCES "CategoryArticle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArticleByCategory" ADD CONSTRAINT "ArticleByCategory_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReceiptNoteLine" ADD CONSTRAINT "ReceiptNoteLine_idArticle_fkey" FOREIGN KEY ("idArticle") REFERENCES "Article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchaseDeliveryNoteLine" ADD CONSTRAINT "PurchaseDeliveryNoteLine_idArticle_fkey" FOREIGN KEY ("idArticle") REFERENCES "Article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchaseDeliveryInvoiceLine" ADD CONSTRAINT "PurchaseDeliveryInvoiceLine_idArticle_fkey" FOREIGN KEY ("idArticle") REFERENCES "Article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchaseInvoiceLine" ADD CONSTRAINT "PurchaseInvoiceLine_idArticle_fkey" FOREIGN KEY ("idArticle") REFERENCES "Article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SalesInvoiceLine" ADD CONSTRAINT "SalesInvoiceLine_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SalesDeliveryNoteLine" ADD CONSTRAINT "SalesDeliveryNoteLine_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SalesDeliveryInvoiceLine" ADD CONSTRAINT "SalesDeliveryInvoiceLine_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchaseOrderLine" ADD CONSTRAINT "PurchaseOrderLine_idArticle_fkey" FOREIGN KEY ("idArticle") REFERENCES "Article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReturnNoteLine" ADD CONSTRAINT "ReturnNoteLine_idArticle_fkey" FOREIGN KEY ("idArticle") REFERENCES "Article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EstimateLine" ADD CONSTRAINT "EstimateLine_idArticle_fkey" FOREIGN KEY ("idArticle") REFERENCES "Article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TransferNoteLine" ADD CONSTRAINT "TransferNoteLine_idArticle_fkey" FOREIGN KEY ("idArticle") REFERENCES "Article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExitNoteLine" ADD CONSTRAINT "ExitNoteLine_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Article"("id") ON DELETE SET NULL ON UPDATE CASCADE;
