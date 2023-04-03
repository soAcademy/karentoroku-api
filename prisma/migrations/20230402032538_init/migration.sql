/*
  Warnings:

  - You are about to drop the `WeekDay` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WeekDayOnTimeSelect` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "WeekDay" DROP CONSTRAINT "WeekDay_availabilityScheduleId_fkey";

-- DropForeignKey
ALTER TABLE "WeekDay" DROP CONSTRAINT "WeekDay_custormerId_fkey";

-- DropForeignKey
ALTER TABLE "WeekDay" DROP CONSTRAINT "WeekDay_eventTypeId_fkey";

-- DropForeignKey
ALTER TABLE "WeekDayOnTimeSelect" DROP CONSTRAINT "WeekDayOnTimeSelect_timeSelectId_fkey";

-- DropForeignKey
ALTER TABLE "WeekDayOnTimeSelect" DROP CONSTRAINT "WeekDayOnTimeSelect_weekdayId_fkey";

-- DropTable
DROP TABLE "WeekDay";

-- DropTable
DROP TABLE "WeekDayOnTimeSelect";

-- CreateTable
CREATE TABLE "DaySlot" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DaySlot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DaySlotOnDateSlot" (
    "id" SERIAL NOT NULL,
    "daySlotId" INTEGER NOT NULL,
    "dateSlotId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DaySlotOnDateSlot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventTypeOnDaySlot" (
    "id" SERIAL NOT NULL,
    "eventTypeId" INTEGER NOT NULL,
    "daySlotId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EventTypeOnDaySlot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DateSlot" (
    "id" SERIAL NOT NULL,
    "availabilityScheduleId" INTEGER,
    "status" TEXT NOT NULL DEFAULT 'available',
    "date" TIMESTAMP(3) NOT NULL,
    "custormerId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DateSlot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DateSlotOnTimeSelect" (
    "id" SERIAL NOT NULL,
    "dateSlotId" INTEGER NOT NULL,
    "timeSelectId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DateSlotOnTimeSelect_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DaySlot_name_key" ON "DaySlot"("name");

-- AddForeignKey
ALTER TABLE "DaySlotOnDateSlot" ADD CONSTRAINT "DaySlotOnDateSlot_daySlotId_fkey" FOREIGN KEY ("daySlotId") REFERENCES "DaySlot"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DaySlotOnDateSlot" ADD CONSTRAINT "DaySlotOnDateSlot_dateSlotId_fkey" FOREIGN KEY ("dateSlotId") REFERENCES "DateSlot"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventTypeOnDaySlot" ADD CONSTRAINT "EventTypeOnDaySlot_eventTypeId_fkey" FOREIGN KEY ("eventTypeId") REFERENCES "EventType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventTypeOnDaySlot" ADD CONSTRAINT "EventTypeOnDaySlot_daySlotId_fkey" FOREIGN KEY ("daySlotId") REFERENCES "DaySlot"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DateSlot" ADD CONSTRAINT "DateSlot_availabilityScheduleId_fkey" FOREIGN KEY ("availabilityScheduleId") REFERENCES "AvailabilitySchedule"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DateSlot" ADD CONSTRAINT "DateSlot_custormerId_fkey" FOREIGN KEY ("custormerId") REFERENCES "Customer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DateSlotOnTimeSelect" ADD CONSTRAINT "DateSlotOnTimeSelect_dateSlotId_fkey" FOREIGN KEY ("dateSlotId") REFERENCES "DateSlot"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DateSlotOnTimeSelect" ADD CONSTRAINT "DateSlotOnTimeSelect_timeSelectId_fkey" FOREIGN KEY ("timeSelectId") REFERENCES "TimeSelect"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
