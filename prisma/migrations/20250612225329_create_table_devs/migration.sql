-- CreateTable
CREATE TABLE "devs" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "bio" TEXT,
    "techs" TEXT[],

    CONSTRAINT "devs_pkey" PRIMARY KEY ("id")
);
