-- DropForeignKey
ALTER TABLE "venteFacture" DROP CONSTRAINT "venteFacture_id_client_fkey";

-- AlterTable
ALTER TABLE "venteFacture" ALTER COLUMN "id_client" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "venteFacture" ADD CONSTRAINT "venteFacture_id_client_fkey" FOREIGN KEY ("id_client") REFERENCES "Client"("id") ON DELETE SET NULL ON UPDATE CASCADE;
