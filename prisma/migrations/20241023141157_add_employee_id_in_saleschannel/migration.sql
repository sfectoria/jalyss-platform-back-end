-- AlterTable
ALTER TABLE "SalesChannels" ADD COLUMN     "employeeId" INTEGER;

-- AddForeignKey
ALTER TABLE "SalesChannels" ADD CONSTRAINT "SalesChannels_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("id") ON DELETE SET NULL ON UPDATE CASCADE;
