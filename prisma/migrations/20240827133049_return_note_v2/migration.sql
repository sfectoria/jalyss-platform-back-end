/*
  Warnings:

  - Added the required column `receiptNoteId` to the `ReturnNote` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ReceiptNote" DROP CONSTRAINT "ReceiptNote_idReturnNote_fkey";

-- AlterTable
ALTER TABLE "ReturnNote" ADD COLUMN     "receiptNoteId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "ReturnNote" ADD CONSTRAINT "ReturnNote_receiptNoteId_fkey" FOREIGN KEY ("receiptNoteId") REFERENCES "ReceiptNote"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
