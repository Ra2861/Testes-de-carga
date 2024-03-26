import UpdateCustomerService from './updateCustomer.service'
import CustomerReadModel from '../../../model/Customer/Customer.read.model'
import CustomerUpdateModel from '../../../model/Customer/Customer.update.model'

// Simulando modelos
jest.mock('../../../model/Customer/Customer.read.model', () => ({
    findUserById: jest.fn(),
}))

jest.mock('../../../model/Customer/Customer.update.model', () => ({
    updateCustomer: jest.fn(),
}))

describe('UpdateCustomerService', () => {
    const clienteMock = {
        id: '1',
        name: 'Usuário Teste',
        phoneNumber: '1234567890',
        age: '30',
        email: 'teste@example.com',
    }

    beforeEach(() => {
        CustomerReadModel.findUserById = jest.fn().mockImplementation(id => id === clienteMock.id)
        CustomerUpdateModel.updateCustomer = jest.fn().mockImplementation(() => true)
    })

    it('deve lançar um erro porque o ID do usuário não existe', async () => {
        await expect(
            UpdateCustomerService.execute('id-inexistente', clienteMock.name, clienteMock.phoneNumber, clienteMock.age, clienteMock.email),
        ).rejects.toThrowError('Id de usuário não existe')
    })

    it('deve atualizar com sucesso um cliente', async () => {
        const resultado = await UpdateCustomerService.execute(clienteMock.id, clienteMock.name, clienteMock.phoneNumber, clienteMock.age, clienteMock.email)

        expect(resultado).toBeTruthy()
        expect(CustomerReadModel.findUserById).toHaveBeenCalledWith(clienteMock.id)
        expect(CustomerUpdateModel.updateCustomer).toHaveBeenCalledWith(clienteMock.id, clienteMock.name, clienteMock.phoneNumber, clienteMock.age, clienteMock.email)
    })
})
