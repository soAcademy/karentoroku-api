/*
  Warnings:

  - You are about to drop the `AvailabilitySchedule` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Billing` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CalendarSelect` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Customer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `EventSelect` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `EventType` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `EventTypeOnLocation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `GroupMeeting` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Location` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TimeSelect` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserOnGroupMeeting` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WeekDay` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "AvailabilitySchedule" DROP CONSTRAINT "AvailabilitySchedule_eventTypeId_fkey";

-- DropForeignKey
ALTER TABLE "Billing" DROP CONSTRAINT "Billing_userId_fkey";

-- DropForeignKey
ALTER TABLE "EventSelect" DROP CONSTRAINT "EventSelect_customerId_fkey";

-- DropForeignKey
ALTER TABLE "EventSelect" DROP CONSTRAINT "EventSelect_eventTypeId_fkey";

-- DropForeignKey
ALTER TABLE "EventType" DROP CONSTRAINT "EventType_calendarSelectId_fkey";

-- DropForeignKey
ALTER TABLE "EventType" DROP CONSTRAINT "EventType_customerId_fkey";

-- DropForeignKey
ALTER TABLE "EventType" DROP CONSTRAINT "EventType_userId_fkey";

-- DropForeignKey
ALTER TABLE "EventTypeOnLocation" DROP CONSTRAINT "EventTypeOnLocation_eventTypeId_fkey";

-- DropForeignKey
ALTER TABLE "EventTypeOnLocation" DROP CONSTRAINT "EventTypeOnLocation_locationId_fkey";

-- DropForeignKey
ALTER TABLE "GroupMeeting" DROP CONSTRAINT "GroupMeeting_customerId_fkey";

-- DropForeignKey
ALTER TABLE "GroupMeeting" DROP CONSTRAINT "GroupMeeting_eventTypeId_fkey";

-- DropForeignKey
ALTER TABLE "GroupMeeting" DROP CONSTRAINT "GroupMeeting_locationId_fkey";

-- DropForeignKey
ALTER TABLE "UserOnGroupMeeting" DROP CONSTRAINT "UserOnGroupMeeting_groupMeetingId_fkey";

-- DropForeignKey
ALTER TABLE "UserOnGroupMeeting" DROP CONSTRAINT "UserOnGroupMeeting_userId_fkey";

-- DropForeignKey
ALTER TABLE "WeekDay" DROP CONSTRAINT "WeekDay_availabilityScheduleId_fkey";

-- DropForeignKey
ALTER TABLE "WeekDay" DROP CONSTRAINT "WeekDay_eventTypeId_fkey";

-- DropForeignKey
ALTER TABLE "WeekDay" DROP CONSTRAINT "WeekDay_timeSelectId_fkey";

-- DropTable
DROP TABLE "AvailabilitySchedule";

-- DropTable
DROP TABLE "Billing";

-- DropTable
DROP TABLE "CalendarSelect";

-- DropTable
DROP TABLE "Customer";

-- DropTable
DROP TABLE "EventSelect";

-- DropTable
DROP TABLE "EventType";

-- DropTable
DROP TABLE "EventTypeOnLocation";

-- DropTable
DROP TABLE "GroupMeeting";

-- DropTable
DROP TABLE "Location";

-- DropTable
DROP TABLE "TimeSelect";

-- DropTable
DROP TABLE "User";

-- DropTable
DROP TABLE "UserOnGroupMeeting";

-- DropTable
DROP TABLE "WeekDay";
