/*
  Warnings:

  - You are about to drop the column `weekdayId` on the `EventType` table. All the data in the column will be lost.
  - Added the required column `eventTypeId` to the `WeekDay` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "EventType" DROP CONSTRAINT "EventType_weekdayId_fkey";

-- AlterTable
ALTER TABLE "EventType" DROP COLUMN "weekdayId";

-- AlterTable
ALTER TABLE "WeekDay" ADD COLUMN     "eventTypeId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "WeekDayOnTimeSelect" (
    "id" SERIAL NOT NULL,
    "weekdayId" INTEGER NOT NULL,
    "timeSelectId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WeekDayOnTimeSelect_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "WeekDay" ADD CONSTRAINT "WeekDay_eventTypeId_fkey" FOREIGN KEY ("eventTypeId") REFERENCES "EventType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WeekDayOnTimeSelect" ADD CONSTRAINT "WeekDayOnTimeSelect_weekdayId_fkey" FOREIGN KEY ("weekdayId") REFERENCES "WeekDay"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WeekDayOnTimeSelect" ADD CONSTRAINT "WeekDayOnTimeSelect_timeSelectId_fkey" FOREIGN KEY ("timeSelectId") REFERENCES "TimeSelect"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
