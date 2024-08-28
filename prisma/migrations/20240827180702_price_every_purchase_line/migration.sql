/*
  Warnings:

  - You are about to drop the column `idReturnNote` on the `ReceiptNote` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ExitNote" ADD COLUMN     "totalAmount" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "PurchaseDeliveryInvoice" ADD COLUMN     "totalAmount" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "PurchaseDeliveryInvoiceLine" ADD COLUMN     "price" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "PurchaseDeliveryNote" ADD COLUMN     "totalAmount" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "PurchaseDeliveryNoteLine" ADD COLUMN     "price" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "PurchaseInvoice" ADD COLUMN     "totalAmount" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "PurchaseInvoiceLine" ADD COLUMN     "price" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "PurchaseOrder" ADD COLUMN     "totalAmount" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "ReceiptNote" DROP COLUMN "idReturnNote",
ADD COLUMN     "totalAmount" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "ReceiptNoteLine" ADD COLUMN     "price" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "SalesDeliveryInvoice" ADD COLUMN     "totalAmount" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "SalesDeliveryNote" ADD COLUMN     "totalAmount" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "SalesInvoice" ADD COLUMN     "totalAmount" DOUBLE PRECISION;
