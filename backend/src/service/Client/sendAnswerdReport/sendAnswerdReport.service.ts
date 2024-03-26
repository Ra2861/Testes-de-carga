import customerReadModel from '../../../model/Customer/Customer.read.model'
import CompanyReadModel from '../../../model/Company/Company.read.model'
import CustomersOnCompanyReadModel from '../../../model/CustomersOnCompany/CustomersOnCompany.read.model'
import AnswersReadModel from '../../../model/Answers/Answers.read.model'
import ReportUpdateModel from '../../../model/Report/Report.update.model'

export type bodyAnswer = {
  questionA: string
  questionB: string
  questionC: string
  idReport: string
  idCompany: string
  idCustomer: string
}

class SendAnswerdReportService {
  async execute(body: bodyAnswer) {
    const { idCompany, idCustomer, idReport, questionA, questionB, questionC } =
      body
    console.log(idCompany)

    const company = await CompanyReadModel.findCompanyById(idCompany)

    const existAllCustomers =
      await customerReadModel.verificationExistCustomers([idCustomer])

    const isAllFromThisCompany =
      await CustomersOnCompanyReadModel.verificationCustomersOnCompany(
        idCompany,
        [idCustomer],
      )

    const searchExists = await AnswersReadModel.verifySearch(idReport)

    const nameUser = await customerReadModel.findNameById(idCustomer)

    // eslint-disable-next-line no-useless-catch
    try {
      if (!nameUser) {
        throw new Error('Usuario nao indentificado')
      }

      if (!company) {
        throw new Error('Empresa não encontrada')
      }

      if (!existAllCustomers) {
        throw new Error('Alguns desses usuário não estão registrados')
      }

      if (!isAllFromThisCompany) {
        throw new Error('Está querendo fazer coisa errada bro :(')
      }

      if (!searchExists) {
        throw new Error('Essa pesquisa não existe')
      }

      const result = await ReportUpdateModel.updateReportById(
        idReport,
        questionA,
        questionB,
        questionC,
      )
      return result
    } catch (error) {
      throw error
    }
  }
}

export default new SendAnswerdReportService()
