/*
  Warnings:

  - You are about to drop the column `idReceiptNote` on the `SalesReceipt` table. All the data in the column will be lost.
  - Added the required column `exitNoteId` to the `SalesReceipt` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "SalesReceipt" DROP CONSTRAINT "SalesReceipt_idReceiptNote_fkey";

-- AlterTable
ALTER TABLE "ExitNote" ADD COLUMN     "modified" BOOLEAN;

-- AlterTable
ALTER TABLE "PurchaseDeliveryInvoice" ADD COLUMN     "modified" BOOLEAN;

-- AlterTable
ALTER TABLE "PurchaseDeliveryNote" ADD COLUMN     "modified" BOOLEAN;

-- AlterTable
ALTER TABLE "PurchaseInvoice" ADD COLUMN     "modified" BOOLEAN;

-- AlterTable
ALTER TABLE "PurchaseOrder" ADD COLUMN     "modified" BOOLEAN;

-- AlterTable
ALTER TABLE "ReceiptNote" ADD COLUMN     "modified" BOOLEAN;

-- AlterTable
ALTER TABLE "SalesDeliveryInvoice" ADD COLUMN     "modified" BOOLEAN;

-- AlterTable
ALTER TABLE "SalesDeliveryNote" ADD COLUMN     "modified" BOOLEAN;

-- AlterTable
ALTER TABLE "SalesInvoice" ADD COLUMN     "modified" BOOLEAN;

-- AlterTable
ALTER TABLE "SalesReceipt" DROP COLUMN "idReceiptNote",
ADD COLUMN     "exitNoteId" INTEGER NOT NULL,
ADD COLUMN     "idClient" INTEGER,
ADD COLUMN     "modified" BOOLEAN,
ADD COLUMN     "salesChannelId" INTEGER;

-- AddForeignKey
ALTER TABLE "SalesReceipt" ADD CONSTRAINT "SalesReceipt_idClient_fkey" FOREIGN KEY ("idClient") REFERENCES "Client"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SalesReceipt" ADD CONSTRAINT "SalesReceipt_salesChannelId_fkey" FOREIGN KEY ("salesChannelId") REFERENCES "SalesChannels"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SalesReceipt" ADD CONSTRAINT "SalesReceipt_exitNoteId_fkey" FOREIGN KEY ("exitNoteId") REFERENCES "ExitNote"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
