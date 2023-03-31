-- DropForeignKey
ALTER TABLE "WeekDay" DROP CONSTRAINT "WeekDay_timeSelectId_fkey";

-- AlterTable
ALTER TABLE "WeekDay" ALTER COLUMN "timeSelectId" DROP NOT NULL,
ALTER COLUMN "date" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "WeekDay" ADD CONSTRAINT "WeekDay_timeSelectId_fkey" FOREIGN KEY ("timeSelectId") REFERENCES "TimeSelect"("id") ON DELETE SET NULL ON UPDATE CASCADE;
