-- AlterTable
ALTER TABLE "books" ADD COLUMN     "orderId" TEXT NOT NULL DEFAULT '0';

-- CreateTable
CREATE TABLE "orders" (
    "id" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "books" ADD CONSTRAINT "books_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
