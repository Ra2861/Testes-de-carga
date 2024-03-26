import customerReadModel from '../../../model/Customer/Customer.read.model'
import companyReadModel from '../../../model/Company/Company.read.model'
import { validationLogicalsIfs } from '../../../scripts/validationLogicalIfs'

class GetAllUsersByCompanyService {
  async execute(companyId: string) {
    const company = await companyReadModel.findCompanyById(companyId)

    validationLogicalsIfs([
      { validations: company, msgError: 'Empresa não encontrada' },
    ])

    const result = await customerReadModel.findAllUsersByCompany(companyId)

    result.forEach((item) => {
      if (item.companyId !== companyId) {
        throw new Error('Problema no mecanismo de busca')
      }
    })

    return result
  }
}

export default new GetAllUsersByCompanyService()
