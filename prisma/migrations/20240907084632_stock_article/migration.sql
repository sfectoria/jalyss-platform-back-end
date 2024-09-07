-- AlterTable
ALTER TABLE "PurchaseOrder" ALTER COLUMN "status" SET DEFAULT 'Pending';

-- CreateTable
CREATE TABLE "StockArticle" (
    "id" SERIAL NOT NULL,
    "stockId" INTEGER NOT NULL,
    "articleId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "StockArticle_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "StockArticle_stockId_articleId_key" ON "StockArticle"("stockId", "articleId");

-- AddForeignKey
ALTER TABLE "StockArticle" ADD CONSTRAINT "StockArticle_stockId_fkey" FOREIGN KEY ("stockId") REFERENCES "Stock"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StockArticle" ADD CONSTRAINT "StockArticle_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
