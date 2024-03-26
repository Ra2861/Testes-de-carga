import { Request, Response } from 'express'
import getAllUserService from '../../service/Employer/getAllUsers/getAllUsers.service'
import getAllUsersByCompanyService from '../../service/Employer/getAllUsersByCompany/getAllUsersByCompany.service'
import { TCustomerId } from './types'

class EmployerGetController {
  async getAllCustomers(req: Request, res: Response) {
    try {
      const customers = await getAllUserService.getAllUsers()
      return res.json(customers)
    } catch (error) {
      console.log(error)
      return res.status(500).send('Ocorreu um erro ao buscar os clientes.')
    }
  }

  async getAllCustomersByCompany(req: Request<TCustomerId>, res: Response) {
    try {
      const customers = await getAllUsersByCompanyService.execute(req.params.id)
      return res.json(customers)
    } catch (error) {
      console.log(error)
      return res.status(500).send('Ocorreu um erro ao buscar os clientes.')
    }
  }
}

export default new EmployerGetController()
