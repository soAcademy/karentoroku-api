/*
  Warnings:

  - You are about to drop the column `eventTypeId` on the `AvailabilitySchedule` table. All the data in the column will be lost.
  - You are about to drop the column `calendarSelectId` on the `EventType` table. All the data in the column will be lost.
  - You are about to drop the column `customerId` on the `EventType` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `EventType` table. All the data in the column will be lost.
  - You are about to drop the column `eventTypeId` on the `WeekDay` table. All the data in the column will be lost.
  - You are about to drop the `CalendarSelect` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `EventSelect` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `availabilityScheduleId` to the `EventType` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weekdayId` to the `EventType` table without a default value. This is not possible if the table is not empty.
  - Added the required column `custormerId` to the `WeekDay` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "AvailabilitySchedule" DROP CONSTRAINT "AvailabilitySchedule_eventTypeId_fkey";

-- DropForeignKey
ALTER TABLE "EventSelect" DROP CONSTRAINT "EventSelect_customerId_fkey";

-- DropForeignKey
ALTER TABLE "EventSelect" DROP CONSTRAINT "EventSelect_eventTypeId_fkey";

-- DropForeignKey
ALTER TABLE "EventType" DROP CONSTRAINT "EventType_calendarSelectId_fkey";

-- DropForeignKey
ALTER TABLE "EventType" DROP CONSTRAINT "EventType_customerId_fkey";

-- DropForeignKey
ALTER TABLE "WeekDay" DROP CONSTRAINT "WeekDay_eventTypeId_fkey";

-- AlterTable
ALTER TABLE "AvailabilitySchedule" DROP COLUMN "eventTypeId";

-- AlterTable
ALTER TABLE "EventType" DROP COLUMN "calendarSelectId",
DROP COLUMN "customerId",
DROP COLUMN "status",
ADD COLUMN     "availabilityScheduleId" INTEGER NOT NULL,
ADD COLUMN     "weekdayId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "WeekDay" DROP COLUMN "eventTypeId",
ADD COLUMN     "custormerId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "CalendarSelect";

-- DropTable
DROP TABLE "EventSelect";

-- AddForeignKey
ALTER TABLE "EventType" ADD CONSTRAINT "EventType_availabilityScheduleId_fkey" FOREIGN KEY ("availabilityScheduleId") REFERENCES "AvailabilitySchedule"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventType" ADD CONSTRAINT "EventType_weekdayId_fkey" FOREIGN KEY ("weekdayId") REFERENCES "WeekDay"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WeekDay" ADD CONSTRAINT "WeekDay_custormerId_fkey" FOREIGN KEY ("custormerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
