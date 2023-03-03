-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "event" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);
