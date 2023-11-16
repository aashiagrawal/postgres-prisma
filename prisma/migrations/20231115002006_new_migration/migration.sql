/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Dashboard` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "CustomerData" (
    "Name" TEXT NOT NULL,
    "items_purchased" BIGINT,
    "purchase_date" TEXT,
    "age" BIGINT,
    "birth_month" TEXT,
    "groceries_purchased" TEXT,
    "day" TEXT,

    CONSTRAINT "CustomerData_pkey" PRIMARY KEY ("Name")
);

-- CreateIndex
CREATE UNIQUE INDEX "Dashboard_name_key" ON "Dashboard"("name");
