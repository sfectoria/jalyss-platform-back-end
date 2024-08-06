/*
  Warnings:

  - Added the required column `num_bonSortie` to the `BonSortie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stockId` to the `BonSortie` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BonSortie" ADD COLUMN     "num_bonSortie" INTEGER NOT NULL,
ADD COLUMN     "stockId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "BonSortie" ADD CONSTRAINT "BonSortie_stockId_fkey" FOREIGN KEY ("stockId") REFERENCES "Stock"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
