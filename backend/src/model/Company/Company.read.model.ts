import { prismaService } from '../../prisma/prisma'

class CompanyReadModel {
  async findCompanyById(id: string) {
    try {
      const result = await prismaService.company.findUnique({
        where: {
          id,
        },
      })
      return result
    } catch (error: string | unknown) {
      throw Error(error as string)
    }
  }
}

export default new CompanyReadModel()
