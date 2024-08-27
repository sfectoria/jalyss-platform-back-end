-- CreateTable
CREATE TABLE "PriceByChannel" (
    "id" SERIAL NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "idArticle" INTEGER NOT NULL,
    "idSalesChannel" INTEGER NOT NULL,

    CONSTRAINT "PriceByChannel_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PriceByChannel_idArticle_idSalesChannel_key" ON "PriceByChannel"("idArticle", "idSalesChannel");

-- AddForeignKey
ALTER TABLE "PriceByChannel" ADD CONSTRAINT "PriceByChannel_idArticle_fkey" FOREIGN KEY ("idArticle") REFERENCES "Article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PriceByChannel" ADD CONSTRAINT "PriceByChannel_idSalesChannel_fkey" FOREIGN KEY ("idSalesChannel") REFERENCES "SalesChannels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
