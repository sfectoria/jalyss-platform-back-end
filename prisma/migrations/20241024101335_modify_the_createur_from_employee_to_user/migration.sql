-- DropForeignKey
ALTER TABLE "Inventory" DROP CONSTRAINT "Inventory_createurId_fkey";

-- AddForeignKey
ALTER TABLE "Inventory" ADD CONSTRAINT "Inventory_createurId_fkey" FOREIGN KEY ("createurId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
