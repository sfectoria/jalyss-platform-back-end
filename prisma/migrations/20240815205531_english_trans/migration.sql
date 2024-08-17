-- CreateEnum
CREATE TYPE "TypeReceipt" AS ENUM ('achat', 'retour', 'transfer');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "mediaId" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Employee" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "mediaId" TEXT,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Client" (
    "id" SERIAL NOT NULL,
    "fullName" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "registrationDate" TIMESTAMP(3) NOT NULL,
    "idCategoryClient" INTEGER NOT NULL,
    "mediaId" TEXT,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CategoryClient" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "CategoryClient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Artical" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "coverId" TEXT,
    "weight" DOUBLE PRECISION,
    "pageNumber" INTEGER,
    "code" TEXT NOT NULL,
    "shortDescriptionEn" TEXT,
    "longDescriptionEn" TEXT,
    "shortDescriptionAr" TEXT,
    "longDescriptionAr" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Artical_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PublishingHouse" (
    "id" SERIAL NOT NULL,
    "nameAr" TEXT NOT NULL,
    "nameEn" TEXT,
    "address" TEXT,
    "logoId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "PublishingHouse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ArticalByPublishingHouse" (
    "publishingHouseId" INTEGER NOT NULL,
    "articalId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Author" (
    "id" TEXT NOT NULL,
    "nameAr" TEXT NOT NULL,
    "nameEn" TEXT,
    "biographyAr" TEXT,
    "biographyEn" TEXT,
    "mediaId" TEXT,

    CONSTRAINT "Author_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ArticalByAuthor" (
    "articalId" INTEGER NOT NULL,
    "authorId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "CategoryArtical" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "CategoryArtical_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ArticalByCategory" (
    "categoryarticalId" INTEGER NOT NULL,
    "articalId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "SalesChannels" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "idStock" INTEGER NOT NULL,

    CONSTRAINT "SalesChannels_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReceiptNote" (
    "id" SERIAL NOT NULL,
    "receiptDate" TIMESTAMP(3) NOT NULL,
    "numReceiptNote" INTEGER NOT NULL,
    "typeReceipt" "TypeReceipt" NOT NULL DEFAULT 'achat',
    "idProvider" INTEGER,
    "idStock" INTEGER NOT NULL,
    "idReturnNote" INTEGER,

    CONSTRAINT "ReceiptNote_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReceiptNoteLine" (
    "id" SERIAL NOT NULL,
    "idReceiptNote" INTEGER NOT NULL,
    "idArtical" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "ReceiptNoteLine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PurchaseDeliveryNote" (
    "id" SERIAL NOT NULL,
    "idReceiptNote" INTEGER NOT NULL,
    "deliveryDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PurchaseDeliveryNote_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PurchaseDeliveryNoteLine" (
    "id" SERIAL NOT NULL,
    "idDeliveryNote" INTEGER NOT NULL,
    "idArtical" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "PurchaseDeliveryNoteLine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PurchaseDeliveryInvoice" (
    "id" SERIAL NOT NULL,
    "idReceiptNote" INTEGER NOT NULL,
    "deliveryDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PurchaseDeliveryInvoice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PurchaseDeliveryInvoiceLine" (
    "id" SERIAL NOT NULL,
    "idDeliveryInvoice" INTEGER NOT NULL,
    "idArtical" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "PurchaseDeliveryInvoiceLine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PurchaseInvoice" (
    "id" SERIAL NOT NULL,
    "deliveryDate" TIMESTAMP(3) NOT NULL,
    "idReceiptNote" INTEGER NOT NULL,

    CONSTRAINT "PurchaseInvoice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PurchaseInvoiceLine" (
    "id" SERIAL NOT NULL,
    "idPurchaseInvoice" INTEGER NOT NULL,
    "idArtical" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "PurchaseInvoiceLine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SalesInvoice" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "idClient" INTEGER NOT NULL,
    "idPurchaseOrder" INTEGER,
    "saleChannelId" INTEGER NOT NULL,
    "exitNoteId" INTEGER NOT NULL,

    CONSTRAINT "SalesInvoice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SalesInvoiceLine" (
    "id" SERIAL NOT NULL,
    "articalId" INTEGER NOT NULL,
    "salesInvoiceId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "SalesInvoiceLine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SalesDeliveryNote" (
    "id" SERIAL NOT NULL,
    "idClient" INTEGER NOT NULL,
    "exitNoteId" INTEGER NOT NULL,
    "deliveryDate" TIMESTAMP(3) NOT NULL,
    "saleChannelId" INTEGER NOT NULL,
    "idPurchaseOrder" INTEGER,

    CONSTRAINT "SalesDeliveryNote_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SalesDeliveryNoteLine" (
    "id" SERIAL NOT NULL,
    "salesDeliveryNoteId" INTEGER NOT NULL,
    "articalId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "SalesDeliveryNoteLine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SalesDeliveryInvoice" (
    "id" SERIAL NOT NULL,
    "clientId" INTEGER NOT NULL,
    "exitNoteId" INTEGER NOT NULL,
    "deliveryDate" TIMESTAMP(3) NOT NULL,
    "purchaseOrderId" INTEGER,
    "salesChannelsId" INTEGER NOT NULL,

    CONSTRAINT "SalesDeliveryInvoice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SalesDeliveryInvoiceLine" (
    "id" SERIAL NOT NULL,
    "salesDeliveryInvoiceId" INTEGER NOT NULL,
    "articalId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "SalesDeliveryInvoiceLine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PurchaseOrder" (
    "id" SERIAL NOT NULL,
    "idClient" INTEGER NOT NULL,
    "salesChannelsId" INTEGER NOT NULL,
    "exitNoteId" INTEGER NOT NULL,
    "orderDate" TIMESTAMP(3) NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PurchaseOrder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PurchaseOrderLine" (
    "id" SERIAL NOT NULL,
    "idArtical" INTEGER NOT NULL,
    "idPurchaseOrder" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "PurchaseOrderLine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReturnNote" (
    "id" SERIAL NOT NULL,
    "idClient" INTEGER NOT NULL,
    "returnDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ReturnNote_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReturnNoteLine" (
    "id" SERIAL NOT NULL,
    "idArtical" INTEGER NOT NULL,
    "idReturnNote" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "ReturnNoteLine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Estimate" (
    "id" SERIAL NOT NULL,
    "idClient" INTEGER NOT NULL,
    "totalAmount" DOUBLE PRECISION NOT NULL,
    "creationDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Estimate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EstimateLine" (
    "id" SERIAL NOT NULL,
    "idEstimate" INTEGER NOT NULL,
    "idArtical" INTEGER NOT NULL,

    CONSTRAINT "EstimateLine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TransferNote" (
    "id" SERIAL NOT NULL,
    "from" INTEGER NOT NULL,
    "to" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "idReceiptNote" INTEGER NOT NULL,
    "idExitNote" INTEGER NOT NULL,

    CONSTRAINT "TransferNote_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TransferNoteLine" (
    "id" SERIAL NOT NULL,
    "idArtical" INTEGER NOT NULL,
    "transferNoteId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "TransferNoteLine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Stock" (
    "id" SERIAL NOT NULL,
    "location" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL,

    CONSTRAINT "Stock_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExitNote" (
    "id" SERIAL NOT NULL,
    "numExitNote" INTEGER NOT NULL,
    "exitDate" TIMESTAMP(3) NOT NULL,
    "stockId" INTEGER NOT NULL,

    CONSTRAINT "ExitNote_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExitNoteLine" (
    "id" SERIAL NOT NULL,
    "exitNoteId" INTEGER,
    "articalId" INTEGER,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "ExitNoteLine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Provider" (
    "id" SERIAL NOT NULL,
    "nameProvider" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "adresse" TEXT NOT NULL,
    "registrationNumber" TEXT NOT NULL,

    CONSTRAINT "Provider_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Media" (
    "id" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "alt" TEXT,
    "extension" TEXT,
    "description" TEXT,

    CONSTRAINT "Media_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Artical_code_key" ON "Artical"("code");

-- CreateIndex
CREATE UNIQUE INDEX "ArticalByPublishingHouse_articalId_publishingHouseId_key" ON "ArticalByPublishingHouse"("articalId", "publishingHouseId");

-- CreateIndex
CREATE UNIQUE INDEX "ArticalByAuthor_authorId_articalId_key" ON "ArticalByAuthor"("authorId", "articalId");

-- CreateIndex
CREATE UNIQUE INDEX "ArticalByCategory_articalId_categoryarticalId_key" ON "ArticalByCategory"("articalId", "categoryarticalId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_mediaId_fkey" FOREIGN KEY ("mediaId") REFERENCES "Media"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_mediaId_fkey" FOREIGN KEY ("mediaId") REFERENCES "Media"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Client" ADD CONSTRAINT "Client_idCategoryClient_fkey" FOREIGN KEY ("idCategoryClient") REFERENCES "CategoryClient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Client" ADD CONSTRAINT "Client_mediaId_fkey" FOREIGN KEY ("mediaId") REFERENCES "Media"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Artical" ADD CONSTRAINT "Artical_coverId_fkey" FOREIGN KEY ("coverId") REFERENCES "Media"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PublishingHouse" ADD CONSTRAINT "PublishingHouse_logoId_fkey" FOREIGN KEY ("logoId") REFERENCES "Media"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArticalByPublishingHouse" ADD CONSTRAINT "ArticalByPublishingHouse_publishingHouseId_fkey" FOREIGN KEY ("publishingHouseId") REFERENCES "PublishingHouse"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArticalByPublishingHouse" ADD CONSTRAINT "ArticalByPublishingHouse_articalId_fkey" FOREIGN KEY ("articalId") REFERENCES "Artical"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Author" ADD CONSTRAINT "Author_mediaId_fkey" FOREIGN KEY ("mediaId") REFERENCES "Media"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArticalByAuthor" ADD CONSTRAINT "ArticalByAuthor_articalId_fkey" FOREIGN KEY ("articalId") REFERENCES "Artical"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArticalByAuthor" ADD CONSTRAINT "ArticalByAuthor_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Author"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArticalByCategory" ADD CONSTRAINT "ArticalByCategory_categoryarticalId_fkey" FOREIGN KEY ("categoryarticalId") REFERENCES "CategoryArtical"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArticalByCategory" ADD CONSTRAINT "ArticalByCategory_articalId_fkey" FOREIGN KEY ("articalId") REFERENCES "Artical"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SalesChannels" ADD CONSTRAINT "SalesChannels_idStock_fkey" FOREIGN KEY ("idStock") REFERENCES "Stock"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReceiptNote" ADD CONSTRAINT "ReceiptNote_idProvider_fkey" FOREIGN KEY ("idProvider") REFERENCES "Provider"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReceiptNote" ADD CONSTRAINT "ReceiptNote_idStock_fkey" FOREIGN KEY ("idStock") REFERENCES "Stock"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReceiptNote" ADD CONSTRAINT "ReceiptNote_idReturnNote_fkey" FOREIGN KEY ("idReturnNote") REFERENCES "ReturnNote"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReceiptNoteLine" ADD CONSTRAINT "ReceiptNoteLine_idReceiptNote_fkey" FOREIGN KEY ("idReceiptNote") REFERENCES "ReceiptNote"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReceiptNoteLine" ADD CONSTRAINT "ReceiptNoteLine_idArtical_fkey" FOREIGN KEY ("idArtical") REFERENCES "Artical"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchaseDeliveryNote" ADD CONSTRAINT "PurchaseDeliveryNote_idReceiptNote_fkey" FOREIGN KEY ("idReceiptNote") REFERENCES "ReceiptNote"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchaseDeliveryNoteLine" ADD CONSTRAINT "PurchaseDeliveryNoteLine_idDeliveryNote_fkey" FOREIGN KEY ("idDeliveryNote") REFERENCES "PurchaseDeliveryNote"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchaseDeliveryNoteLine" ADD CONSTRAINT "PurchaseDeliveryNoteLine_idArtical_fkey" FOREIGN KEY ("idArtical") REFERENCES "Artical"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchaseDeliveryInvoice" ADD CONSTRAINT "PurchaseDeliveryInvoice_idReceiptNote_fkey" FOREIGN KEY ("idReceiptNote") REFERENCES "ReceiptNote"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchaseDeliveryInvoiceLine" ADD CONSTRAINT "PurchaseDeliveryInvoiceLine_idDeliveryInvoice_fkey" FOREIGN KEY ("idDeliveryInvoice") REFERENCES "PurchaseDeliveryInvoice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchaseDeliveryInvoiceLine" ADD CONSTRAINT "PurchaseDeliveryInvoiceLine_idArtical_fkey" FOREIGN KEY ("idArtical") REFERENCES "Artical"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchaseInvoice" ADD CONSTRAINT "PurchaseInvoice_idReceiptNote_fkey" FOREIGN KEY ("idReceiptNote") REFERENCES "ReceiptNote"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchaseInvoiceLine" ADD CONSTRAINT "PurchaseInvoiceLine_idPurchaseInvoice_fkey" FOREIGN KEY ("idPurchaseInvoice") REFERENCES "PurchaseInvoice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchaseInvoiceLine" ADD CONSTRAINT "PurchaseInvoiceLine_idArtical_fkey" FOREIGN KEY ("idArtical") REFERENCES "Artical"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SalesInvoice" ADD CONSTRAINT "SalesInvoice_idClient_fkey" FOREIGN KEY ("idClient") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SalesInvoice" ADD CONSTRAINT "SalesInvoice_idPurchaseOrder_fkey" FOREIGN KEY ("idPurchaseOrder") REFERENCES "PurchaseOrder"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SalesInvoice" ADD CONSTRAINT "SalesInvoice_saleChannelId_fkey" FOREIGN KEY ("saleChannelId") REFERENCES "SalesChannels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SalesInvoice" ADD CONSTRAINT "SalesInvoice_exitNoteId_fkey" FOREIGN KEY ("exitNoteId") REFERENCES "ExitNote"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SalesInvoiceLine" ADD CONSTRAINT "SalesInvoiceLine_articalId_fkey" FOREIGN KEY ("articalId") REFERENCES "Artical"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SalesInvoiceLine" ADD CONSTRAINT "SalesInvoiceLine_salesInvoiceId_fkey" FOREIGN KEY ("salesInvoiceId") REFERENCES "SalesInvoice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SalesDeliveryNote" ADD CONSTRAINT "SalesDeliveryNote_idClient_fkey" FOREIGN KEY ("idClient") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SalesDeliveryNote" ADD CONSTRAINT "SalesDeliveryNote_exitNoteId_fkey" FOREIGN KEY ("exitNoteId") REFERENCES "ExitNote"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SalesDeliveryNote" ADD CONSTRAINT "SalesDeliveryNote_saleChannelId_fkey" FOREIGN KEY ("saleChannelId") REFERENCES "SalesChannels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SalesDeliveryNote" ADD CONSTRAINT "SalesDeliveryNote_idPurchaseOrder_fkey" FOREIGN KEY ("idPurchaseOrder") REFERENCES "PurchaseOrder"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SalesDeliveryNoteLine" ADD CONSTRAINT "SalesDeliveryNoteLine_salesDeliveryNoteId_fkey" FOREIGN KEY ("salesDeliveryNoteId") REFERENCES "SalesDeliveryNote"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SalesDeliveryNoteLine" ADD CONSTRAINT "SalesDeliveryNoteLine_articalId_fkey" FOREIGN KEY ("articalId") REFERENCES "Artical"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SalesDeliveryInvoice" ADD CONSTRAINT "SalesDeliveryInvoice_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SalesDeliveryInvoice" ADD CONSTRAINT "SalesDeliveryInvoice_exitNoteId_fkey" FOREIGN KEY ("exitNoteId") REFERENCES "ExitNote"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SalesDeliveryInvoice" ADD CONSTRAINT "SalesDeliveryInvoice_purchaseOrderId_fkey" FOREIGN KEY ("purchaseOrderId") REFERENCES "PurchaseOrder"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SalesDeliveryInvoice" ADD CONSTRAINT "SalesDeliveryInvoice_salesChannelsId_fkey" FOREIGN KEY ("salesChannelsId") REFERENCES "SalesChannels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SalesDeliveryInvoiceLine" ADD CONSTRAINT "SalesDeliveryInvoiceLine_salesDeliveryInvoiceId_fkey" FOREIGN KEY ("salesDeliveryInvoiceId") REFERENCES "SalesDeliveryInvoice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SalesDeliveryInvoiceLine" ADD CONSTRAINT "SalesDeliveryInvoiceLine_articalId_fkey" FOREIGN KEY ("articalId") REFERENCES "Artical"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchaseOrder" ADD CONSTRAINT "PurchaseOrder_idClient_fkey" FOREIGN KEY ("idClient") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchaseOrder" ADD CONSTRAINT "PurchaseOrder_exitNoteId_fkey" FOREIGN KEY ("exitNoteId") REFERENCES "ExitNote"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchaseOrder" ADD CONSTRAINT "PurchaseOrder_salesChannelsId_fkey" FOREIGN KEY ("salesChannelsId") REFERENCES "SalesChannels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchaseOrderLine" ADD CONSTRAINT "PurchaseOrderLine_idArtical_fkey" FOREIGN KEY ("idArtical") REFERENCES "Artical"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchaseOrderLine" ADD CONSTRAINT "PurchaseOrderLine_idPurchaseOrder_fkey" FOREIGN KEY ("idPurchaseOrder") REFERENCES "PurchaseOrder"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReturnNote" ADD CONSTRAINT "ReturnNote_idClient_fkey" FOREIGN KEY ("idClient") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReturnNoteLine" ADD CONSTRAINT "ReturnNoteLine_idArtical_fkey" FOREIGN KEY ("idArtical") REFERENCES "Artical"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReturnNoteLine" ADD CONSTRAINT "ReturnNoteLine_idReturnNote_fkey" FOREIGN KEY ("idReturnNote") REFERENCES "ReturnNote"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Estimate" ADD CONSTRAINT "Estimate_idClient_fkey" FOREIGN KEY ("idClient") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EstimateLine" ADD CONSTRAINT "EstimateLine_idEstimate_fkey" FOREIGN KEY ("idEstimate") REFERENCES "Estimate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EstimateLine" ADD CONSTRAINT "EstimateLine_idArtical_fkey" FOREIGN KEY ("idArtical") REFERENCES "Artical"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TransferNote" ADD CONSTRAINT "TransferNote_from_fkey" FOREIGN KEY ("from") REFERENCES "Stock"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TransferNote" ADD CONSTRAINT "TransferNote_to_fkey" FOREIGN KEY ("to") REFERENCES "Stock"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TransferNote" ADD CONSTRAINT "TransferNote_idReceiptNote_fkey" FOREIGN KEY ("idReceiptNote") REFERENCES "ReceiptNote"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TransferNote" ADD CONSTRAINT "TransferNote_idExitNote_fkey" FOREIGN KEY ("idExitNote") REFERENCES "ExitNote"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TransferNoteLine" ADD CONSTRAINT "TransferNoteLine_idArtical_fkey" FOREIGN KEY ("idArtical") REFERENCES "Artical"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TransferNoteLine" ADD CONSTRAINT "TransferNoteLine_transferNoteId_fkey" FOREIGN KEY ("transferNoteId") REFERENCES "TransferNote"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExitNote" ADD CONSTRAINT "ExitNote_stockId_fkey" FOREIGN KEY ("stockId") REFERENCES "Stock"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExitNoteLine" ADD CONSTRAINT "ExitNoteLine_exitNoteId_fkey" FOREIGN KEY ("exitNoteId") REFERENCES "ExitNote"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExitNoteLine" ADD CONSTRAINT "ExitNoteLine_articalId_fkey" FOREIGN KEY ("articalId") REFERENCES "Artical"("id") ON DELETE SET NULL ON UPDATE CASCADE;
