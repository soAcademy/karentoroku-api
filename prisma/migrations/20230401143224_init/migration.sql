/*
  Warnings:

  - Added the required column `day` to the `TimeSelect` table without a default value. This is not possible if the table is not empty.
  - Added the required column `day` to the `WeekDay` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "DayEnum" AS ENUM ('MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY');

-- AlterTable
ALTER TABLE "TimeSelect" ADD COLUMN     "day" "DayEnum" NOT NULL;

-- AlterTable
ALTER TABLE "WeekDay" ADD COLUMN     "day" "DayEnum" NOT NULL;
