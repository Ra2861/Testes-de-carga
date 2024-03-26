import { prismaService } from '../../prisma/prisma'

export interface CustomerData {
  age: string
  email: string
  name: string
  phoneNumber: string
}

class ReportCreateModel {
  async createReportDistribution(companyId: string, customerIds: string[]) {
    try {
      for (const customerId of customerIds) {
        await prismaService.report.create({
          data: {
            status: 'RECEIVED',
            companyId,
            customerId,
          },
        })
      }

      return customerIds.length
    } catch (error: unknown) {
      throw new Error(
        `Erro ao criar as linhas de pesquisas no Report: ${(error as Error).message}`,
      )
    }
  }

  async uploadReport(xlData: CustomerData[], companyId: string): Promise<void> {
    try {
      await prismaService.customer.createMany({
        data: xlData,
        skipDuplicates: false,
      })

      await prismaService.$executeRaw`
      CREATE OR REPLACE PROCEDURE sp_create_relation_company_customer (idCompany TEXT)
      LANGUAGE plpgsql
      AS $$
      BEGIN

      INSERT INTO "CustomersOnCompany" ("customerId", "companyId")
      SELECT id, idCompany
      FROM "Customer" c
      WHERE NOT EXISTS (
        SELECT 1
        FROM "CustomersOnCompany" coc
        WHERE coc."customerId" = c.id
        AND coc."companyId" = idCompany
      );
          
      END;
      $$;`

      await prismaService.$executeRaw`CALL sp_create_relation_company_customer(${companyId})`
    } catch (error) {
      throw Error(`Error uploading report: ${error}`)
    }
  }
}

export default new ReportCreateModel()
