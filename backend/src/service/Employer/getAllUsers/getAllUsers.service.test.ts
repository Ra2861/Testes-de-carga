import getAllUsers from './getAllUsers.service'
import customerReadModel from '../../../model/Customer/Customer.read.model'
import { mockCustomers } from './mocks'

// this is for mock some funtion or file when they is called
jest.mock('../../../model/Customer/Customer.read.model', () => ({
  findAllUsers: jest.fn(),
}))

describe('GetAllUsers', () => {
  beforeEach(() => {
    customerReadModel.findAllUsers = jest.fn().mockResolvedValue(mockCustomers)
  })

  it('deve retornar os clientes corretamente', async () => {
    const result = await getAllUsers.getAllUsers()

    expect(result).toEqual(mockCustomers)
  })

  it('deve retornar uma lista vazia pois não existem clientes', async () => {
    customerReadModel.findAllUsers = jest.fn().mockResolvedValueOnce([])
    const result = await getAllUsers.getAllUsers()

    expect(result.length).toEqual(0)
  })
})
