import sendDistributionService from './sendDistribution.service'
import reportCreateModel from '../../../model/Report/Report.create.model'
import companyReadModel from '../../../model/Company/Company.read.model'
import customerReadModel from '../../../model/Customer/Customer.read.model'
import customersOnCompanyReadModel from '../../../model/CustomersOnCompany/CustomersOnCompany.read.model'
import { body, bodyWrong } from './mocks'

// this is for mock some funtion or file when they is called
jest.mock('../../../model/Report/Report.create.model', () => ({
  createReportDistribution: jest.fn(),
}))

jest.mock('../../../model/Company/Company.read.model', () => ({
  findCompanyById: jest.fn(),
}))

jest.mock('../../../model/Customer/Customer.read.model', () => ({
  verificationExistCustomers: jest.fn(),
}))

jest.mock(
  '../../../model/CustomersOnCompany/CustomersOnCompany.read.model',
  () => ({
    verificationCustomersOnCompany: jest.fn(),
  }),
)

describe('SendDistributionService', () => {
  beforeEach(() => {
    companyReadModel.findCompanyById = jest
      .fn()
      .mockImplementation((i: string) => {
        if (i !== '1') {
          return false
        }

        return true
      })
    customerReadModel.verificationExistCustomers = jest
      .fn()
      .mockImplementation((i: string[]) => {
        if (i.includes('4')) {
          return false
        }

        return true
      })
    customersOnCompanyReadModel.verificationCustomersOnCompany = jest
      .fn()
      .mockImplementation((a, b) => {
        if (a === '2' && b.includes('4')) {
          return false
        }

        return true
      })
    reportCreateModel.createReportDistribution = jest
      .fn()
      .mockImplementation((a, b) => {
        return b.length
      })
  })

  it('deve retornar um erro pois não existe company com esse ID', async () => {
    await expect(
      sendDistributionService.execute(bodyWrong),
    ).rejects.toThrowError('Empresa não encontrada')
  })

  it('deve retornar um erro pois não existe alguns dos IDs dos customers', async () => {
    companyReadModel.findCompanyById = jest.fn().mockReturnValueOnce(true)

    await expect(
      sendDistributionService.execute(bodyWrong),
    ).rejects.toThrowError('Alguns desses usuário não estão registrados')
  })

  it('deve retornar um erro pois tem IDs de usuário que não tem relação com aquele ID da empresa', async () => {
    companyReadModel.findCompanyById = jest.fn().mockReturnValueOnce(true)
    customerReadModel.verificationExistCustomers = jest
      .fn()
      .mockReturnValueOnce(true)

    await expect(
      sendDistributionService.execute(bodyWrong),
    ).rejects.toThrowError('Está querendo fazer coisa errada bro :(')
  })

  it('deve retornar a quantidade de pesquisas que foi distribuida', async () => {
    const result = await sendDistributionService.execute(body)

    expect(result).toBe(
      `Quantidade de pesquisas enviadas: ${body.idCustomers.length}`,
    )
  })
})
