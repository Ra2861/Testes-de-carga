import customerReadModel from '../../../model/Customer/Customer.read.model'

class GetAllUsersService {
  async getAllUsers() {
    return await customerReadModel.findAllUsers()
  }
}

export default new GetAllUsersService()
