import { RequestBodySendDistribution } from '../../../controller/Employer/types/index'
import reportCreateModel from '../../../model/Report/Report.create.model'
import companyRedModel from '../../../model/Company/Company.read.model'
import customerReadModel from '../../../model/Customer/Customer.read.model'
import customersOnCompanyReadModel from '../../../model/CustomersOnCompany/CustomersOnCompany.read.model'
import { validationLogicalsIfs } from '../../../scripts/validationLogicalIfs'

class SendDistribuicionService {
  async execute(body: RequestBodySendDistribution) {
    const { idCompany, idCustomers } = body

    const company = await companyRedModel.findCompanyById(idCompany)
    const existAllCustomers =
      await customerReadModel.verificationExistCustomers(idCustomers)
    const isAllFromThisCompany =
      await customersOnCompanyReadModel.verificationCustomersOnCompany(
        idCompany,
        idCustomers,
      )

    validationLogicalsIfs([
      { validations: company, msgError: 'Empresa não encontrada' },
      {
        validations: existAllCustomers,
        msgError: 'Alguns desses usuário não estão registrados',
      },
      {
        validations: isAllFromThisCompany,
        msgError: 'Está querendo fazer coisa errada bro :(',
      },
    ])

    const result = await reportCreateModel.createReportDistribution(
      idCompany,
      idCustomers,
    )

    // for (const idCustomer of idCustomers) {
    //   console.log('DIstribuição feita para o usuário com o id:', idCustomer)
    // }

    return `Quantidade de pesquisas enviadas: ${result}`
  }
}

export default new SendDistribuicionService()
