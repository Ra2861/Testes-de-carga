import { prismaService } from '../../prisma/prisma'

class CustomerReadModel {
  async findAllUsers() {
    try {
      const result = await prismaService.customer.findMany()
      return result
    } catch (error: string | unknown) {
      console.log(error)
      throw Error(error as string)
    }
  }

  async findAllUsersByCompany(companyId: string) {
    try {
      const result = await prismaService.customer.findMany({
        where: {
          CustomersOnCompany: {
            every: {
              companyId,
            },
          },
        },
        select: {
          id: true,
          name: true,
          email: true,
          phoneNumber: true,
          CustomersOnCompany: {
            select: {
              companyId: true,
            },
          },
        },
      })

      // Need verify if this do a some slow in API with mult rows
      const transformedResult = result.map((item) => ({
        id: item.id,
        name: item.name,
        email: item.email,
        phoneNumber: item.phoneNumber,
        companyId: item.CustomersOnCompany.map(
          (customer) => customer.companyId,
        )[0],
      }))
      return transformedResult
    } catch (error: string | unknown) {
      console.log(error)
      throw Error(error as string)
    }
  }

  async verificationExistCustomers(IDs: string[]) {
    try {
      const records = await prismaService.customer.findMany({
        where: {
          id: {
            in: IDs,
          },
        },
      })
      const result = records.length === IDs.length

      return result
    } catch (error: string | unknown) {
      console.log(error)
      throw Error(error as string)
    }
  }

  async findNameById(id: string) {
    try {
      const result = await prismaService.customer.findUnique({
        where: {
          id,
        },
      })
      return result
    } catch (error: string | unknown) {
      console.log(error)
      throw Error(error as string)
    }
  }

  async findUserById(id: string) {
    try {
      const result = await prismaService.customer.findUnique({
        where: {
          id,
        },
      })
      return result
    } catch (error: string | unknown) {
      console.log(error)
      throw Error(error as string)
    }
  }
}

export default new CustomerReadModel()
