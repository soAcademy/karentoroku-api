-- DropForeignKey
ALTER TABLE "EventType" DROP CONSTRAINT "EventType_weekdayId_fkey";

-- AlterTable
ALTER TABLE "EventType" ALTER COLUMN "weekdayId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "EventType" ADD CONSTRAINT "EventType_weekdayId_fkey" FOREIGN KEY ("weekdayId") REFERENCES "WeekDay"("id") ON DELETE SET NULL ON UPDATE CASCADE;
