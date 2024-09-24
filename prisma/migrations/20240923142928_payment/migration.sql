/*
  Warnings:

  - You are about to drop the column `paimentStatus` on the `ExitNote` table. All the data in the column will be lost.
  - You are about to drop the column `paimentType` on the `ExitNote` table. All the data in the column will be lost.
  - You are about to drop the column `reelQuatity` on the `InventoryLine` table. All the data in the column will be lost.
  - You are about to drop the column `paimentStatus` on the `PurchaseDeliveryInvoice` table. All the data in the column will be lost.
  - You are about to drop the column `paimentType` on the `PurchaseDeliveryInvoice` table. All the data in the column will be lost.
  - You are about to drop the column `paimentStatus` on the `PurchaseDeliveryNote` table. All the data in the column will be lost.
  - You are about to drop the column `paimentType` on the `PurchaseDeliveryNote` table. All the data in the column will be lost.
  - You are about to drop the column `paimentStatus` on the `PurchaseInvoice` table. All the data in the column will be lost.
  - You are about to drop the column `paimentType` on the `PurchaseInvoice` table. All the data in the column will be lost.
  - You are about to drop the column `paimentStatus` on the `ReceiptNote` table. All the data in the column will be lost.
  - You are about to drop the column `paimentType` on the `ReceiptNote` table. All the data in the column will be lost.
  - You are about to drop the column `paimentStatus` on the `SalesDeliveryInvoice` table. All the data in the column will be lost.
  - You are about to drop the column `paimentType` on the `SalesDeliveryInvoice` table. All the data in the column will be lost.
  - You are about to drop the column `paimentStatus` on the `SalesDeliveryNote` table. All the data in the column will be lost.
  - You are about to drop the column `paimentType` on the `SalesDeliveryNote` table. All the data in the column will be lost.
  - You are about to drop the column `paimentStatus` on the `SalesInvoice` table. All the data in the column will be lost.
  - You are about to drop the column `paimentType` on the `SalesInvoice` table. All the data in the column will be lost.
  - Added the required column `reelQuantity` to the `InventoryLine` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "PaymentType" AS ENUM ('Cash', 'Checks', 'CreditCard', 'BankTransfers');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('Payed', 'NotPayed', 'PartiallyPayed');

-- AlterTable
ALTER TABLE "ExitNote" DROP COLUMN "paimentStatus",
DROP COLUMN "paimentType",
ADD COLUMN     "paymentStatus" "PaymentStatus",
ADD COLUMN     "paymentType" "PaymentType";

-- AlterTable
ALTER TABLE "InventoryLine" DROP COLUMN "reelQuatity",
ADD COLUMN     "reelQuantity" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "PurchaseDeliveryInvoice" DROP COLUMN "paimentStatus",
DROP COLUMN "paimentType",
ADD COLUMN     "paymentStatus" "PaymentStatus",
ADD COLUMN     "paymentType" "PaymentType";

-- AlterTable
ALTER TABLE "PurchaseDeliveryNote" DROP COLUMN "paimentStatus",
DROP COLUMN "paimentType",
ADD COLUMN     "paymentStatus" "PaymentStatus",
ADD COLUMN     "paymentType" "PaymentType";

-- AlterTable
ALTER TABLE "PurchaseInvoice" DROP COLUMN "paimentStatus",
DROP COLUMN "paimentType",
ADD COLUMN     "paymentStatus" "PaymentStatus",
ADD COLUMN     "paymentType" "PaymentType";

-- AlterTable
ALTER TABLE "ReceiptNote" DROP COLUMN "paimentStatus",
DROP COLUMN "paimentType",
ADD COLUMN     "paymentStatus" "PaymentStatus",
ADD COLUMN     "paymentType" "PaymentType";

-- AlterTable
ALTER TABLE "SalesDeliveryInvoice" DROP COLUMN "paimentStatus",
DROP COLUMN "paimentType",
ADD COLUMN     "paymentStatus" "PaymentStatus",
ADD COLUMN     "paymentType" "PaymentType";

-- AlterTable
ALTER TABLE "SalesDeliveryNote" DROP COLUMN "paimentStatus",
DROP COLUMN "paimentType",
ADD COLUMN     "paymentStatus" "PaymentStatus",
ADD COLUMN     "paymentType" "PaymentType";

-- AlterTable
ALTER TABLE "SalesInvoice" DROP COLUMN "paimentStatus",
DROP COLUMN "paimentType",
ADD COLUMN     "paymentStatus" "PaymentStatus",
ADD COLUMN     "paymentType" "PaymentType";

-- DropEnum
DROP TYPE "PaimentStatus";

-- DropEnum
DROP TYPE "PaimentType";
