import { prismaService } from '../../prisma/prisma'

class ReportModel {
  async findAllReport() {
    try {
      const result = await prismaService.report.findMany()
      return result
    } catch (error) {
      throw Error(error as string)
    }
  }

  async sendReport(reportId: string, customerId: string): Promise<string> {
    try {
      const report = await prismaService.report.findUnique({
        where: { id: reportId },
      })

      if (!report) {
        throw new Error('Relatório não encontrado')
      }

      const customer = await prismaService.customer.findUnique({
        where: { id: customerId },
      })

      if (!customer) {
        throw new Error('Consumidor não encontrado')
      }

      return 'Relatório enviado com sucesso para o cliente'
    } catch (error) {
      throw Error(error as string)
    }
  }
}

export default new ReportModel()
