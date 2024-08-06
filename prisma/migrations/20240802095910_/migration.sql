/*
  Warnings:

  - Added the required column `quantity` to the `BonReception_Line` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BonReception_Line" ADD COLUMN     "quantity" INTEGER NOT NULL;
