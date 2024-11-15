-- AlterTable
ALTER TABLE "Provider" ADD COLUMN     "mediaId" TEXT;

-- AddForeignKey
ALTER TABLE "Provider" ADD CONSTRAINT "Provider_mediaId_fkey" FOREIGN KEY ("mediaId") REFERENCES "Media"("id") ON DELETE SET NULL ON UPDATE CASCADE;
