/*
  Warnings:

  - You are about to drop the `BonRetour_Line` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "BonRetour_Line" DROP CONSTRAINT "BonRetour_Line_articleId_fkey";

-- DropTable
DROP TABLE "BonRetour_Line";
