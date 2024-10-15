/*
  Warnings:

  - You are about to drop the column `purchaseOrderId` on the `SalesDeliveryInvoice` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "SalesDeliveryInvoice" DROP CONSTRAINT "SalesDeliveryInvoice_purchaseOrderId_fkey";

-- AlterTable
ALTER TABLE "SalesDeliveryInvoice" DROP COLUMN "purchaseOrderId",
ADD COLUMN     "idPurchaseOrder" INTEGER;

-- AlterTable
ALTER TABLE "SalesReceipt" ADD COLUMN     "idPurchaseOrder" INTEGER;

-- AddForeignKey
ALTER TABLE "SalesReceipt" ADD CONSTRAINT "SalesReceipt_idPurchaseOrder_fkey" FOREIGN KEY ("idPurchaseOrder") REFERENCES "PurchaseOrder"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SalesDeliveryInvoice" ADD CONSTRAINT "SalesDeliveryInvoice_idPurchaseOrder_fkey" FOREIGN KEY ("idPurchaseOrder") REFERENCES "PurchaseOrder"("id") ON DELETE SET NULL ON UPDATE CASCADE;
