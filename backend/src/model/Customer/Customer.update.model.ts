import { prismaService } from '../../prisma/prisma'

class CustomerUpdateModel {
  async updateCustomer(
    id: string,
    name: string,
    phoneNumber: string,
    age: string,
    email: string,
  ) {
    try {
      const result = await prismaService.customer.update({
        where: {
          id,
        },
        data: {
          name,
          phoneNumber,
          age,
          email,
        },
      })
      return result
    } catch (error: string | unknown) {
      throw Error(error as string)
    }
  }
}

export default new CustomerUpdateModel()
