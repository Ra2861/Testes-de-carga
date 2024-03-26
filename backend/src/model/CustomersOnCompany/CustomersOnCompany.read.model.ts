import { prismaService } from '../../prisma/prisma'

class CustomersOnCompanyReadModel {
  async verificationCustomersOnCompany(
    companyId: string,
    customerIDs: string[],
  ) {
    try {
      const records = await prismaService.customersOnCompany.findMany({
        where: {
          companyId,
          customerId: {
            in: customerIDs,
          },
        },
      })

      const result = records.length === customerIDs.length

      return result
    } catch (error: string | unknown) {
      throw Error(error as string)
    }
  }
}

export default new CustomersOnCompanyReadModel()
