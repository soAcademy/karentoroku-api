/*
  Warnings:

  - You are about to drop the column `timeSelectId` on the `WeekDay` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "WeekDay" DROP CONSTRAINT "WeekDay_timeSelectId_fkey";

-- AlterTable
ALTER TABLE "WeekDay" DROP COLUMN "timeSelectId";
