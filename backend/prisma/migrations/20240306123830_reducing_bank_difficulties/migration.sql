/*
  Warnings:

  - The primary key for the `Company` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `templateId` on the `Company` table. All the data in the column will be lost.
  - The primary key for the `Customer` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `CustomersOnCompany` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `assignedBy` on the `CustomersOnCompany` table. All the data in the column will be lost.
  - You are about to drop the column `assignetAt` on the `CustomersOnCompany` table. All the data in the column will be lost.
  - The primary key for the `Report` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `customerReport` on the `Report` table. All the data in the column will be lost.
  - You are about to drop the column `templateId` on the `Report` table. All the data in the column will be lost.
  - You are about to drop the `CustomersOnReport` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `StatusDB` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Template` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterEnum
ALTER TYPE "Status" ADD VALUE 'ANSWERD';

-- DropForeignKey
ALTER TABLE "Company" DROP CONSTRAINT "Company_templateId_fkey";

-- DropForeignKey
ALTER TABLE "CustomersOnCompany" DROP CONSTRAINT "CustomersOnCompany_companyId_fkey";

-- DropForeignKey
ALTER TABLE "CustomersOnCompany" DROP CONSTRAINT "CustomersOnCompany_customerId_fkey";

-- DropForeignKey
ALTER TABLE "CustomersOnReport" DROP CONSTRAINT "CustomersOnReport_customerId_fkey";

-- DropForeignKey
ALTER TABLE "CustomersOnReport" DROP CONSTRAINT "CustomersOnReport_reportId_fkey";

-- DropForeignKey
ALTER TABLE "Report" DROP CONSTRAINT "Report_templateId_fkey";

-- DropForeignKey
ALTER TABLE "StatusDB" DROP CONSTRAINT "StatusDB_reportId_fkey";

-- AlterTable
ALTER TABLE "Company" DROP CONSTRAINT "Company_pkey",
DROP COLUMN "templateId",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Company_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Company_id_seq";

-- AlterTable
ALTER TABLE "Customer" DROP CONSTRAINT "Customer_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Customer_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Customer_id_seq";

-- AlterTable
ALTER TABLE "CustomersOnCompany" DROP CONSTRAINT "CustomersOnCompany_pkey",
DROP COLUMN "assignedBy",
DROP COLUMN "assignetAt",
ALTER COLUMN "companyId" SET DATA TYPE TEXT,
ALTER COLUMN "customerId" SET DATA TYPE TEXT,
ADD CONSTRAINT "CustomersOnCompany_pkey" PRIMARY KEY ("companyId", "customerId");

-- AlterTable
ALTER TABLE "Report" DROP CONSTRAINT "Report_pkey",
DROP COLUMN "customerReport",
DROP COLUMN "templateId",
ADD COLUMN     "companyId" TEXT,
ADD COLUMN     "customerId" TEXT,
ADD COLUMN     "questionA" TEXT,
ADD COLUMN     "questionB" TEXT,
ADD COLUMN     "questionC" TEXT,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Report_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Report_id_seq";

-- DropTable
DROP TABLE "CustomersOnReport";

-- DropTable
DROP TABLE "StatusDB";

-- DropTable
DROP TABLE "Template";

-- AddForeignKey
ALTER TABLE "CustomersOnCompany" ADD CONSTRAINT "CustomersOnCompany_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomersOnCompany" ADD CONSTRAINT "CustomersOnCompany_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Report" ADD CONSTRAINT "Report_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Report" ADD CONSTRAINT "Report_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE SET NULL ON UPDATE CASCADE;
