-- AlterTable
ALTER TABLE "PurchaseDeliveryInvoice" ADD COLUMN     "idProvider" INTEGER;

-- AlterTable
ALTER TABLE "PurchaseDeliveryNote" ADD COLUMN     "idProvider" INTEGER;

-- AlterTable
ALTER TABLE "PurchaseInvoice" ADD COLUMN     "idProvider" INTEGER;

-- AddForeignKey
ALTER TABLE "PurchaseDeliveryNote" ADD CONSTRAINT "PurchaseDeliveryNote_idProvider_fkey" FOREIGN KEY ("idProvider") REFERENCES "Provider"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchaseDeliveryInvoice" ADD CONSTRAINT "PurchaseDeliveryInvoice_idProvider_fkey" FOREIGN KEY ("idProvider") REFERENCES "Provider"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchaseInvoice" ADD CONSTRAINT "PurchaseInvoice_idProvider_fkey" FOREIGN KEY ("idProvider") REFERENCES "Provider"("id") ON DELETE SET NULL ON UPDATE CASCADE;
