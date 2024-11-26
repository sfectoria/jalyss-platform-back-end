/*
  Warnings:

  - Made the column `nameAr` on table `PublishingHouse` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "PublishingHouse" ALTER COLUMN "nameAr" SET NOT NULL,
ALTER COLUMN "nameEn" DROP NOT NULL;
