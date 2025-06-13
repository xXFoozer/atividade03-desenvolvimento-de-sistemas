/*
  Warnings:

  - The primary key for the `dev` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "dev" DROP CONSTRAINT "dev_pkey",
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "dev_pkey" PRIMARY KEY ("id");
