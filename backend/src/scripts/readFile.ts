import { CustomerData } from '../model/Report/Report.create.model'
import xlsx from 'xlsx'

export async function readReport(reportPath: string): Promise<CustomerData[]> {
  try {
    const sheet = xlsx.readFile(reportPath)
    const sheetNameList = sheet.SheetNames
    const xlData: CustomerData[] = xlsx.utils.sheet_to_json(
      sheet.Sheets[sheetNameList[0]],
    )

    return xlData
  } catch (error) {
    throw new Error(
      'Arquivo não encontrado ou não pode ser lido. Verifique o caminho do arquivo.',
    )
  }
}
