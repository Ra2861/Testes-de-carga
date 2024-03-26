import xlsx from 'xlsx'
import ReportCreateModel, {
  CustomerData,
} from '../../../model/Report/Report.create.model'
import { prismaService } from '../../../prisma/prisma'
import * as fs from 'fs'
import { parse } from 'csv-parse'

class UploadReportService {
  async execute(id: string, reportPath: string): Promise<void> {
    const company = await prismaService.company.findUnique({
      where: { id },
    })

    if (!company) throw new Error('Company does not exist')

    const report = await this.readReport(reportPath)

    await ReportCreateModel.uploadReport(report, id)
  }

  async executeCSV(id: string, reportPath: string): Promise<void> {
    const company = await prismaService.company.findUnique({
      where: { id },
    })

    if (!company) throw new Error('Company does not exist')

    const report = await this.readCSV(reportPath)

    await ReportCreateModel.uploadReport(report, id)
  }

  private async readReport(reportPath: string): Promise<CustomerData[]> {
    const sheet = xlsx.readFile(reportPath)
    const sheetNameList = sheet.SheetNames
    const xlData: CustomerData[] = xlsx.utils.sheet_to_json(
      sheet.Sheets[sheetNameList[0]],
    )

    return xlData
  }

  private async readCSV(filePath: string): Promise<CustomerData[]> {
    return new Promise((resolve, reject) => {
      const data: CustomerData[] = []

      fs.createReadStream(filePath)
        .pipe(
          parse({
            delimiter: ',',
            columns: true,
            ltrim: true,
          }),
        )
        .on('data', function (row) {
          data.push(row)
        })
        .on('end', () => {
          resolve(data) // Resolva a promessa com os dados após a leitura completa do CSV
        })
        .on('error', (error) => {
          reject(error) // Rejeita a promessa se houver um erro na leitura do arquivo
        })
    })
  }
}

export default new UploadReportService()
