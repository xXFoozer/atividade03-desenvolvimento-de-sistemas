/*
  Warnings:

  - You are about to drop the `devs` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "devs";

-- CreateTable
CREATE TABLE "dev" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "bio" TEXT,
    "techs" TEXT NOT NULL,

    CONSTRAINT "dev_pkey" PRIMARY KEY ("id")
);
