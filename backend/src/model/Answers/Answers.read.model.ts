import { prismaService } from '../../prisma/prisma'

class AnswerReadModel {
  async verifySearch(id: string) {
    try {
      const result = await prismaService.report.findUnique({
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

export default new AnswerReadModel()
