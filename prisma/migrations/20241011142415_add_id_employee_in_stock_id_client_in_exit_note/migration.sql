/*
  Warnings:

  - Added the required column `idEmployee` to the `Stock` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ExitNote" ADD COLUMN     "idClient" INTEGER;

-- AlterTable
ALTER TABLE "Stock" ADD COLUMN     "idEmployee" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Stock" ADD CONSTRAINT "Stock_idEmployee_fkey" FOREIGN KEY ("idEmployee") REFERENCES "Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExitNote" ADD CONSTRAINT "ExitNote_idClient_fkey" FOREIGN KEY ("idClient") REFERENCES "Client"("id") ON DELETE SET NULL ON UPDATE CASCADE;
