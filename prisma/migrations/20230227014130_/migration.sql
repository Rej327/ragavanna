-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "event" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "date" TEXT NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);
