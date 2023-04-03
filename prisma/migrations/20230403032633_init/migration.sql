/*
  Warnings:

  - You are about to drop the column `status` on the `DateSlot` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "DateSlot" DROP COLUMN "status";

-- AlterTable
ALTER TABLE "DateSlotOnTimeSelect" ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'available';
