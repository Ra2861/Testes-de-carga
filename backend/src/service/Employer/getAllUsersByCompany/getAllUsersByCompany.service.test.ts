import getAllUsersByCompanyService from './getAllUsersByCompany.service'
import customerReadModel from '../../../model/Customer/Customer.read.model'
import companyReadModel from '../../../model/Company/Company.read.model'
import { mockCustomers } from './mocks/index'
import { CustomerTest } from './mocks'

// this is for mock some funtion or file when they is called
jest.mock('../../../model/Customer/Customer.read.model', () => ({
  findAllUsersByCompany: jest.fn(),
}))

jest.mock('../../../model/Company/Company.read.model', () => ({
  findCompanyById: jest.fn(),
}))

describe('GetAllUsersByCompanyService', () => {
  beforeEach(() => {
    customerReadModel.findAllUsersByCompany = jest
      .fn()
      .mockResolvedValue(mockCustomers)

    companyReadModel.findCompanyById = jest.fn().mockImplementation((i) => {
      if (i === '1') {
        return true
      }

      return false
    })
  })

  it('deve retornar os clientes de acordo com o id da company', async () => {
    const result = await getAllUsersByCompanyService.execute('1')

    result.forEach((item) => {
      expect((item as CustomerTest).companyId).toBe('1')
    })
  })

  it('deve retornar erro pois a empresa não foi localizada', async () => {
    await expect(getAllUsersByCompanyService.execute('2')).rejects.toThrowError(
      'Empresa não encontrada',
    )
  })

  it('deve retornar erro se algum usuário tiver ID de empresa diferente', async () => {
    const mockCustomersWithDifferentCompanyId: CustomerTest[] = [
      {
        id: '1',
        companyId: '1',
        name: 'User 1',
        phoneNumber: '123456',
        email: 'user1@example.com',
      },
      {
        id: '2',
        companyId: '2',
        name: 'User 2',
        phoneNumber: '654321',
        email: 'user2@example.com',
      },
    ]

    customerReadModel.findAllUsersByCompany = jest
      .fn()
      .mockResolvedValue(mockCustomersWithDifferentCompanyId)

    // Chama a função execute com o id da empresa
    await expect(getAllUsersByCompanyService.execute('1')).rejects.toThrowError(
      'Problema no mecanismo de busca',
    )
  })
})
