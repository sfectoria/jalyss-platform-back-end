/*
  Warnings:

  - You are about to drop the column `idArticle` on the `SalesReceiptLine` table. All the data in the column will be lost.
  - Added the required column `articleId` to the `SalesReceiptLine` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "SalesReceiptLine" DROP CONSTRAINT "SalesReceiptLine_idArticle_fkey";

-- AlterTable
ALTER TABLE "SalesReceiptLine" DROP COLUMN "idArticle",
ADD COLUMN     "articleId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "SalesReceiptLine" ADD CONSTRAINT "SalesReceiptLine_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
