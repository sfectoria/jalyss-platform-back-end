-- CreateEnum
CREATE TYPE "PaimentType" AS ENUM ('Cash', 'Checks', 'CreditCard', 'BankTransfers');

-- CreateEnum
CREATE TYPE "PaimentStatus" AS ENUM ('Payed', 'NotPayed', 'PartiallyPayed');

-- AlterTable
ALTER TABLE "ExitNote" ADD COLUMN     "paimentStatus" "PaimentStatus",
ADD COLUMN     "paimentType" "PaimentType",
ADD COLUMN     "payedAmount" DOUBLE PRECISION,
ADD COLUMN     "restedAmount" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "PurchaseDeliveryInvoice" ADD COLUMN     "paimentStatus" "PaimentStatus",
ADD COLUMN     "paimentType" "PaimentType",
ADD COLUMN     "payedAmount" DOUBLE PRECISION,
ADD COLUMN     "restedAmount" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "PurchaseDeliveryNote" ADD COLUMN     "paimentStatus" "PaimentStatus",
ADD COLUMN     "paimentType" "PaimentType",
ADD COLUMN     "payedAmount" DOUBLE PRECISION,
ADD COLUMN     "restedAmount" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "PurchaseInvoice" ADD COLUMN     "paimentStatus" "PaimentStatus",
ADD COLUMN     "paimentType" "PaimentType",
ADD COLUMN     "payedAmount" DOUBLE PRECISION,
ADD COLUMN     "restedAmount" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "ReceiptNote" ADD COLUMN     "paimentStatus" "PaimentStatus",
ADD COLUMN     "paimentType" "PaimentType",
ADD COLUMN     "payedAmount" DOUBLE PRECISION,
ADD COLUMN     "restedAmount" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "SalesDeliveryInvoice" ADD COLUMN     "paimentStatus" "PaimentStatus",
ADD COLUMN     "paimentType" "PaimentType",
ADD COLUMN     "payedAmount" DOUBLE PRECISION,
ADD COLUMN     "restedAmount" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "SalesDeliveryNote" ADD COLUMN     "paimentStatus" "PaimentStatus",
ADD COLUMN     "paimentType" "PaimentType",
ADD COLUMN     "payedAmount" DOUBLE PRECISION,
ADD COLUMN     "restedAmount" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "SalesInvoice" ADD COLUMN     "paimentStatus" "PaimentStatus",
ADD COLUMN     "paimentType" "PaimentType",
ADD COLUMN     "payedAmount" DOUBLE PRECISION,
ADD COLUMN     "restedAmount" DOUBLE PRECISION;
