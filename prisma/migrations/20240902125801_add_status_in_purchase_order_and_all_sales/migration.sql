/*
  Warnings:

  - Added the required column `status` to the `PurchaseOrder` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TypePurchaseOrder" AS ENUM ('Confirmed', 'Pending', 'Cancelled');

-- DropForeignKey
ALTER TABLE "PurchaseOrder" DROP CONSTRAINT "PurchaseOrder_exitNoteId_fkey";

-- AlterTable
ALTER TABLE "PurchaseOrder" ADD COLUMN     "status" "TypePurchaseOrder" NOT NULL;

-- AlterTable
ALTER TABLE "SalesDeliveryInvoice" ADD COLUMN     "status" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "SalesDeliveryNote" ADD COLUMN     "status" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "SalesInvoice" ADD COLUMN     "status" BOOLEAN NOT NULL DEFAULT false;
