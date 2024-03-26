import { Request, Response } from 'express'
import updateCustomerService from '../../service/Employer/updateCustomer/updateCustomer.service'

class EmployerPutController {
  async updateCustomerInfo(req: Request, res: Response) {
    try {
      const { id, name, phoneNumber, age, email } = req.body

      if (!id || !name || !phoneNumber || !age || !email) {
        return res.status(400).send('Todos os campos são obrigatórios.')
      }

      const result = await updateCustomerService.execute(
        id,
        name,
        phoneNumber,
        age,
        email,
      )

      return res.json(result)
    } catch (error) {
      return res
        .status(500)
        .send('Ocorreu um erro ao atualizar os dados do empregador.')
    }
  }
}

export default new EmployerPutController()
