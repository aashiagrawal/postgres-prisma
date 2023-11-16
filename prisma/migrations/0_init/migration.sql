-- CreateTable
CREATE TABLE "Chart" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "dashboardId" INTEGER NOT NULL,
    "sqlQuery" TEXT NOT NULL,
    "xAxisField" TEXT NOT NULL,
    "yAxisField" TEXT NOT NULL,

    CONSTRAINT "Chart_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dashboard" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Dashboard_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Chart" ADD CONSTRAINT "Chart_dashboardId_fkey" FOREIGN KEY ("dashboardId") REFERENCES "Dashboard"("id") ON DELETE RESTRICT ON UPDATE CASCADE;



-- -- CreateTable
-- CREATE TABLE "Chart" (
--     "id" SERIAL NOT NULL,
--     "name" TEXT NOT NULL,
--     "dashboardId" INTEGER NOT NULL,
--     "sqlQuery" TEXT NOT NULL,
--     "xAxisField" TEXT NOT NULL,
--     "yAxisField" TEXT NOT NULL,

--     CONSTRAINT "Chart_pkey" PRIMARY KEY ("id")
-- );

-- -- CreateTable
-- CREATE TABLE "Dashboard" (
--     "id" SERIAL NOT NULL,
--     "name" TEXT NOT NULL,

--     CONSTRAINT "Dashboard_pkey" PRIMARY KEY ("id"),
--     CONSTRAINT "Dashboard_name_key" UNIQUE ("name")
-- );

-- -- AddForeignKey
-- ALTER TABLE "Chart" ADD CONSTRAINT "Chart_dashboardId_fkey" FOREIGN KEY ("dashboardId") REFERENCES "Dashboard"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- -- CreateTable CustomerData
-- CREATE TABLE "CustomerData" (
--     "Name" TEXT NOT NULL,
--     "items_purchased" BIGINT,
--     "purchase_date" TEXT,
--     "age" BIGINT,
--     "birth_month" TEXT,
--     "groceries_purchased" TEXT,
--     "day" TEXT,

--     CONSTRAINT "CustomerData_pkey" PRIMARY KEY ("Name")
-- );
