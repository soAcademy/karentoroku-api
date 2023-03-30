-- DropForeignKey
ALTER TABLE "EventType" DROP CONSTRAINT "EventType_availabilityScheduleId_fkey";

-- DropForeignKey
ALTER TABLE "WeekDay" DROP CONSTRAINT "WeekDay_custormerId_fkey";

-- AlterTable
ALTER TABLE "EventType" ALTER COLUMN "availabilityScheduleId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "WeekDay" ALTER COLUMN "custormerId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "EventType" ADD CONSTRAINT "EventType_availabilityScheduleId_fkey" FOREIGN KEY ("availabilityScheduleId") REFERENCES "AvailabilitySchedule"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WeekDay" ADD CONSTRAINT "WeekDay_custormerId_fkey" FOREIGN KEY ("custormerId") REFERENCES "Customer"("id") ON DELETE SET NULL ON UPDATE CASCADE;
