/*
  Warnings:

  - Added the required column `status` to the `Inventory` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "StatusInventory" AS ENUM ('draft', 'confirmed');

-- AlterTable
ALTER TABLE "Inventory" ADD COLUMN     "status" "StatusInventory" NOT NULL;
