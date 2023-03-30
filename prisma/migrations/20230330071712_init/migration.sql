/*
  Warnings:

  - Made the column `timeSelectId` on table `WeekDay` required. This step will fail if there are existing NULL values in that column.
  - Made the column `date` on table `WeekDay` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "WeekDay" DROP CONSTRAINT "WeekDay_timeSelectId_fkey";

-- AlterTable
ALTER TABLE "WeekDay" ALTER COLUMN "timeSelectId" SET NOT NULL,
ALTER COLUMN "date" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "WeekDay" ADD CONSTRAINT "WeekDay_timeSelectId_fkey" FOREIGN KEY ("timeSelectId") REFERENCES "TimeSelect"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
