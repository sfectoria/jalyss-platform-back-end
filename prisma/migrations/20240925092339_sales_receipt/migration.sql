/*
  Warnings:

  - You are about to drop the `PurchaseReceipt` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PurchaseReceiptLine` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PurchaseReceipt" DROP CONSTRAINT "PurchaseReceipt_idReceiptNote_fkey";

-- DropForeignKey
ALTER TABLE "PurchaseReceiptLine" DROP CONSTRAINT "PurchaseReceiptLine_idArticle_fkey";

-- DropForeignKey
ALTER TABLE "PurchaseReceiptLine" DROP CONSTRAINT "PurchaseReceiptLine_idPurchaseReceipt_fkey";

-- AlterTable
ALTER TABLE "Estimate" ADD COLUMN     "salesChannelId" INTEGER;

-- DropTable
DROP TABLE "PurchaseReceipt";

-- DropTable
DROP TABLE "PurchaseReceiptLine";

-- CreateTable
CREATE TABLE "SalesReceipt" (
    "id" SERIAL NOT NULL,
    "deliveryDate" TIMESTAMP(3) NOT NULL,
    "subTotalAmount" DOUBLE PRECISION,
    "totalAmount" DOUBLE PRECISION,
    "discount" DOUBLE PRECISION,
    "tax" DOUBLE PRECISION,
    "payedAmount" DOUBLE PRECISION,
    "restedAmount" DOUBLE PRECISION,
    "paymentType" "PaymentType",
    "paymentStatus" "PaymentStatus",
    "idReceiptNote" INTEGER NOT NULL,

    CONSTRAINT "SalesReceipt_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SalesReceiptLine" (
    "id" SERIAL NOT NULL,
    "idPurchaseReceipt" INTEGER NOT NULL,
    "idArticle" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" DOUBLE PRECISION,
    "discount" DOUBLE PRECISION,

    CONSTRAINT "SalesReceiptLine_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SalesReceipt" ADD CONSTRAINT "SalesReceipt_idReceiptNote_fkey" FOREIGN KEY ("idReceiptNote") REFERENCES "ExitNote"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SalesReceiptLine" ADD CONSTRAINT "SalesReceiptLine_idPurchaseReceipt_fkey" FOREIGN KEY ("idPurchaseReceipt") REFERENCES "SalesReceipt"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SalesReceiptLine" ADD CONSTRAINT "SalesReceiptLine_idArticle_fkey" FOREIGN KEY ("idArticle") REFERENCES "Article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Estimate" ADD CONSTRAINT "Estimate_salesChannelId_fkey" FOREIGN KEY ("salesChannelId") REFERENCES "SalesChannels"("id") ON DELETE SET NULL ON UPDATE CASCADE;
