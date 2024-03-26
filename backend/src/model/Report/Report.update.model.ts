import { prismaService } from '../../prisma/prisma'

class ReportUpdateModel {
  async updateReportById(
    idReport: string,
    questionA: string,
    questionB: string,
    questionC: string,
  ) {
    try {
      const result = await prismaService.report.update({
        where: {
          id: idReport,
        },
        data: {
          questionA,
          questionB,
          questionC,
          status: 'ANSWERD',
        },
      })
      return result
    } catch (error: string | unknown) {
      throw Error(error as string)
    }
  }
}

export default new ReportUpdateModel()
