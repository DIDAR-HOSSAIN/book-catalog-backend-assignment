/*
  Warnings:

  - You are about to drop the `Book` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Book" DROP CONSTRAINT "Book_categoryId_fkey";

-- DropTable
DROP TABLE "Book";

-- CreateTable
CREATE TABLE "books" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "publicationDate" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "books_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "books" ADD CONSTRAINT "books_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
