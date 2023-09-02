/*
  Warnings:

  - Added the required column `bookId` to the `orders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "books" ALTER COLUMN "orderId" DROP DEFAULT;

-- AlterTable
ALTER TABLE "orders" ADD COLUMN     "bookId" TEXT NOT NULL;
