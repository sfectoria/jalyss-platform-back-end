/*
  Warnings:

  - You are about to drop the column `clientId` on the `SalesDeliveryInvoice` table. All the data in the column will be lost.
  - Added the required column `idClient` to the `SalesDeliveryInvoice` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "SalesDeliveryInvoice" DROP CONSTRAINT "SalesDeliveryInvoice_clientId_fkey";

-- AlterTable
ALTER TABLE "Article" ADD COLUMN     "archived" BOOLEAN DEFAULT false;

-- AlterTable
ALTER TABLE "Author" ADD COLUMN     "archived" BOOLEAN DEFAULT false;

-- AlterTable
ALTER TABLE "Client" ADD COLUMN     "archived" BOOLEAN DEFAULT false;

-- AlterTable
ALTER TABLE "Employee" ADD COLUMN     "archived" BOOLEAN DEFAULT false;

-- AlterTable
ALTER TABLE "Inventory" ADD COLUMN     "archived" BOOLEAN DEFAULT false;

-- AlterTable
ALTER TABLE "Provider" ADD COLUMN     "archived" BOOLEAN DEFAULT false;

-- AlterTable
ALTER TABLE "PublishingHouse" ADD COLUMN     "archived" BOOLEAN DEFAULT false;

-- AlterTable
ALTER TABLE "SalesChannels" ADD COLUMN     "archived" BOOLEAN DEFAULT false;

-- AlterTable
ALTER TABLE "SalesDeliveryInvoice" DROP COLUMN "clientId",
ADD COLUMN     "idClient" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "SalesDeliveryInvoice" ADD CONSTRAINT "SalesDeliveryInvoice_idClient_fkey" FOREIGN KEY ("idClient") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
