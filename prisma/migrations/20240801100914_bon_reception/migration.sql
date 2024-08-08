-- DropForeignKey
ALTER TABLE "BonReception" DROP CONSTRAINT "BonReception_id_bon_retour_fkey";

-- DropForeignKey
ALTER TABLE "BonReception" DROP CONSTRAINT "BonReception_id_fournisseur_fkey";

-- AlterTable
ALTER TABLE "BonReception" ALTER COLUMN "id_fournisseur" DROP NOT NULL,
ALTER COLUMN "id_bon_retour" DROP NOT NULL,
ALTER COLUMN "type_reception" DROP NOT NULL,
ALTER COLUMN "type_reception" SET DEFAULT 'achat';

-- AddForeignKey
ALTER TABLE "BonReception" ADD CONSTRAINT "BonReception_id_fournisseur_fkey" FOREIGN KEY ("id_fournisseur") REFERENCES "Fournisseur"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BonReception" ADD CONSTRAINT "BonReception_id_bon_retour_fkey" FOREIGN KEY ("id_bon_retour") REFERENCES "Bon_retour"("id") ON DELETE SET NULL ON UPDATE CASCADE;
