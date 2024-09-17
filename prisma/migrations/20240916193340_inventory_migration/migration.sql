-- AlterTable
ALTER TABLE "Estimate" ADD COLUMN     "discount" DOUBLE PRECISION,
ADD COLUMN     "tax" DOUBLE PRECISION,
ALTER COLUMN "totalAmount" DROP NOT NULL;

-- AlterTable
ALTER TABLE "ExitNote" ADD COLUMN     "discount" DOUBLE PRECISION,
ADD COLUMN     "tax" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "ExitNoteLine" ADD COLUMN     "discount" DOUBLE PRECISION,
ADD COLUMN     "price" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "PurchaseDeliveryInvoice" ADD COLUMN     "discount" DOUBLE PRECISION,
ADD COLUMN     "tax" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "PurchaseDeliveryInvoiceLine" ADD COLUMN     "discount" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "PurchaseDeliveryNote" ADD COLUMN     "discount" DOUBLE PRECISION,
ADD COLUMN     "tax" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "PurchaseDeliveryNoteLine" ADD COLUMN     "discount" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "PurchaseInvoice" ADD COLUMN     "discount" DOUBLE PRECISION,
ADD COLUMN     "tax" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "PurchaseInvoiceLine" ADD COLUMN     "discount" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "PurchaseOrder" ADD COLUMN     "discount" DOUBLE PRECISION,
ADD COLUMN     "tax" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "PurchaseOrderLine" ADD COLUMN     "discount" DOUBLE PRECISION,
ADD COLUMN     "price" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "ReceiptNote" ADD COLUMN     "discount" DOUBLE PRECISION,
ADD COLUMN     "tax" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "ReceiptNoteLine" ADD COLUMN     "discount" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "ReturnNoteLine" ADD COLUMN     "discount" DOUBLE PRECISION,
ADD COLUMN     "price" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "SalesDeliveryInvoice" ADD COLUMN     "discount" DOUBLE PRECISION,
ADD COLUMN     "tax" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "SalesDeliveryInvoiceLine" ADD COLUMN     "discount" DOUBLE PRECISION,
ADD COLUMN     "price" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "SalesDeliveryNote" ADD COLUMN     "discount" DOUBLE PRECISION,
ADD COLUMN     "tax" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "SalesDeliveryNoteLine" ADD COLUMN     "discount" DOUBLE PRECISION,
ADD COLUMN     "price" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "SalesInvoice" ADD COLUMN     "discount" DOUBLE PRECISION,
ADD COLUMN     "tax" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "SalesInvoiceLine" ADD COLUMN     "discount" DOUBLE PRECISION,
ADD COLUMN     "price" DOUBLE PRECISION;

-- CreateTable
CREATE TABLE "Inventory" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "createurId" INTEGER,
    "stockId" INTEGER,

    CONSTRAINT "Inventory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InventoryLine" (
    "id" SERIAL NOT NULL,
    "articleId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "reelQuatity" INTEGER NOT NULL,

    CONSTRAINT "InventoryLine_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Inventory" ADD CONSTRAINT "Inventory_createurId_fkey" FOREIGN KEY ("createurId") REFERENCES "Employee"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inventory" ADD CONSTRAINT "Inventory_stockId_fkey" FOREIGN KEY ("stockId") REFERENCES "Stock"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InventoryLine" ADD CONSTRAINT "InventoryLine_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
