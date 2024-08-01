/*
  Warnings:

  - The `type_reception` column on the `BonReception` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `id_bon_commande` on the `BonSortie` table. All the data in the column will be lost.
  - You are about to drop the column `id_client` on the `BonSortie` table. All the data in the column will be lost.
  - You are about to drop the column `id_devis` on the `BonSortie` table. All the data in the column will be lost.
  - You are about to drop the column `id_venteFacture` on the `BonSortie` table. All the data in the column will be lost.
  - You are about to drop the column `type_reception` on the `BonSortie` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "type_reception" AS ENUM ('achat', 'retour');

-- DropForeignKey
ALTER TABLE "BonSortie" DROP CONSTRAINT "BonSortie_id_client_fkey";

-- DropForeignKey
ALTER TABLE "BonSortie" DROP CONSTRAINT "BonSortie_id_devis_fkey";

-- AlterTable
ALTER TABLE "BonReception" DROP COLUMN "type_reception",
ADD COLUMN     "type_reception" "type_reception" NOT NULL DEFAULT 'achat';

-- AlterTable
ALTER TABLE "BonSortie" DROP COLUMN "id_bon_commande",
DROP COLUMN "id_client",
DROP COLUMN "id_devis",
DROP COLUMN "id_venteFacture",
DROP COLUMN "type_reception";

-- CreateTable
CREATE TABLE "BonSortie_line" (
    "id" SERIAL NOT NULL,
    "bonSortieId" INTEGER,
    "articleId" INTEGER,

    CONSTRAINT "BonSortie_line_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "BonSortie_line" ADD CONSTRAINT "BonSortie_line_bonSortieId_fkey" FOREIGN KEY ("bonSortieId") REFERENCES "BonSortie"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BonSortie_line" ADD CONSTRAINT "BonSortie_line_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Article"("id") ON DELETE SET NULL ON UPDATE CASCADE;
