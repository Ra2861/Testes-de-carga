-- DropForeignKey
ALTER TABLE "CustomersOnCompany" DROP CONSTRAINT "CustomersOnCompany_companyId_fkey";

-- DropForeignKey
ALTER TABLE "CustomersOnCompany" DROP CONSTRAINT "CustomersOnCompany_customerId_fkey";

-- DropForeignKey
ALTER TABLE "Report" DROP CONSTRAINT "Report_companyId_fkey";

-- DropForeignKey
ALTER TABLE "Report" DROP CONSTRAINT "Report_customerId_fkey";

-- AddForeignKey
ALTER TABLE "CustomersOnCompany" ADD CONSTRAINT "CustomersOnCompany_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomersOnCompany" ADD CONSTRAINT "CustomersOnCompany_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Report" ADD CONSTRAINT "Report_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Report" ADD CONSTRAINT "Report_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;
