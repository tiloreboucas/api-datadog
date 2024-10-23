/*
  Warnings:

  - You are about to drop the column `useAgent` on the `Access` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userAgent]` on the table `Access` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userAgent` to the `Access` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Access_useAgent_key";

-- AlterTable
ALTER TABLE "Access" DROP COLUMN "useAgent",
ADD COLUMN     "userAgent" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Access_userAgent_key" ON "Access"("userAgent");
