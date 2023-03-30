-- AlterTable
ALTER TABLE "WeekDay" ALTER COLUMN "day" DROP NOT NULL,
ALTER COLUMN "status" SET DEFAULT 'available';
