/*
  Warnings:

  - You are about to drop the column `day` on the `TimeSelect` table. All the data in the column will be lost.
  - You are about to drop the column `day` on the `WeekDay` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "TimeSelect" DROP COLUMN "day";

-- AlterTable
ALTER TABLE "WeekDay" DROP COLUMN "day";

-- DropEnum
DROP TYPE "DayEnum";
