-- DropForeignKey
ALTER TABLE "sales_channels" DROP CONSTRAINT "sales_channels_id_stock_fkey";

-- AlterTable
ALTER TABLE "sales_channels" ALTER COLUMN "id_stock" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "sales_channels" ADD CONSTRAINT "sales_channels_id_stock_fkey" FOREIGN KEY ("id_stock") REFERENCES "Stock"("id") ON DELETE SET NULL ON UPDATE CASCADE;
