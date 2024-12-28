/*
  Warnings:

  - You are about to drop the column `startData` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `assignedUSerId` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `startData` on the `Task` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_assignedUSerId_fkey";

-- AlterTable
ALTER TABLE "Attachment" ALTER COLUMN "fileName" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "startData",
ADD COLUMN     "startDate" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Task" DROP COLUMN "assignedUSerId",
DROP COLUMN "startData",
ADD COLUMN     "assignedUserId" INTEGER,
ADD COLUMN     "startDate" TIMESTAMP(3);

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_assignedUserId_fkey" FOREIGN KEY ("assignedUserId") REFERENCES "User"("userId") ON DELETE SET NULL ON UPDATE CASCADE;
