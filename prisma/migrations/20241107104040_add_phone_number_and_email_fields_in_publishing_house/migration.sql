/*
  Warnings:

  - Made the column `nameEn` on table `PublishingHouse` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "PublishingHouse" ADD COLUMN     "email" TEXT,
ADD COLUMN     "phone_number" INTEGER,
ALTER COLUMN "nameAr" DROP NOT NULL,
ALTER COLUMN "nameEn" SET NOT NULL;
