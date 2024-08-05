/*
  Warnings:

  - You are about to drop the column `bon_retourId` on the `BonRetour_Line` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "BonRetour_Line" DROP CONSTRAINT "BonRetour_Line_bon_retourId_fkey";

-- AlterTable
ALTER TABLE "BonRetour_Line" DROP COLUMN "bon_retourId";
