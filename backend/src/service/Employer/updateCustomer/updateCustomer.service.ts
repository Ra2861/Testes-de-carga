import CustomerReadModel from '../../../model/Customer/Customer.read.model'
import CustomerUpdateModel from '../../../model/Customer/Customer.update.model'
import { error } from 'console'

class UpdateCustomerService {
  async execute(
    id: string,
    name: string,
    phoneNumber: string,
    age: string,
    email: string,
  ) {
    const idVerify = CustomerReadModel.findUserById(id)

    if (!idVerify) {
      throw new Error('Id de usuário não existe')
    }

    const result = await CustomerUpdateModel.updateCustomer(
      id,
      name,
      phoneNumber,
      age,
      email,
    )

    return result
  }
}

export default new UpdateCustomerService()
