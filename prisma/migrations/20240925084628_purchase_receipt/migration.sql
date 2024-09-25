/*
  Warnings:

  - You are about to drop the column `creationDate` on the `Estimate` table. All the data in the column will be lost.
  - Added the required column `date` to the `Estimate` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `EstimateLine` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Estimate" DROP COLUMN "creationDate",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "subTotalAmount" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "EstimateLine" ADD COLUMN     "discount" DOUBLE PRECISION,
ADD COLUMN     "price" DOUBLE PRECISION,
ADD COLUMN     "quantity" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "ExitNote" ADD COLUMN     "subTotalAmount" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "PurchaseDeliveryInvoice" ADD COLUMN     "subTotalAmount" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "PurchaseDeliveryNote" ADD COLUMN     "subTotalAmount" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "PurchaseInvoice" ADD COLUMN     "subTotalAmount" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "PurchaseOrder" ADD COLUMN     "subTotalAmount" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "ReceiptNote" ADD COLUMN     "subTotalAmount" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "SalesDeliveryInvoice" ADD COLUMN     "subTotalAmount" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "SalesDeliveryNote" ADD COLUMN     "subTotalAmount" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "SalesInvoice" ADD COLUMN     "subTotalAmount" DOUBLE PRECISION;

-- CreateTable
CREATE TABLE "PurchaseReceipt" (
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

    CONSTRAINT "PurchaseReceipt_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PurchaseReceiptLine" (
    "id" SERIAL NOT NULL,
    "idPurchaseReceipt" INTEGER NOT NULL,
    "idArticle" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" DOUBLE PRECISION,
    "discount" DOUBLE PRECISION,

    CONSTRAINT "PurchaseReceiptLine_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PurchaseReceipt" ADD CONSTRAINT "PurchaseReceipt_idReceiptNote_fkey" FOREIGN KEY ("idReceiptNote") REFERENCES "ReceiptNote"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchaseReceiptLine" ADD CONSTRAINT "PurchaseReceiptLine_idPurchaseReceipt_fkey" FOREIGN KEY ("idPurchaseReceipt") REFERENCES "PurchaseReceipt"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchaseReceiptLine" ADD CONSTRAINT "PurchaseReceiptLine_idArticle_fkey" FOREIGN KEY ("idArticle") REFERENCES "Article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
