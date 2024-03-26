import { Request, Response } from 'express'
import { validationResult } from 'express-validator'
import sendAnswerdReportService, {
  bodyAnswer,
} from '../../service/Client/sendAnswerdReport/sendAnswerdReport.service'
import { CustomRequest } from '../Employer/types'

class ClientPostController {
  async postReport(req: CustomRequest<bodyAnswer>, res: Response) {
    try {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(400).json({
          error: errors.array()[0],
        })
      }

      const {
        idCompany,
        idCustomer,
        idReport,
        questionA,
        questionB,
        questionC,
      } = req.body

      const result = await sendAnswerdReportService.execute(req.body)
      return res.json(result)
    } catch (error: { message: string } | any) {
      if (error.message) {
        return res.status(404).send(error.message)
      }
    }
  }
}

export default new ClientPostController()
