/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from 'express'
import { validationResult } from 'express-validator'
import sendDistributionService from '../../service/Employer/sendDistribution/sendDistribution.service'
import { validBodyAndParamsRequest } from '../../scripts/validBodyAndParamsRequest'
import uploadReportService from '../../service/Employer/uploadReport/uploadReport.service'
import {
  CustomRequest,
  RequestBodySendDistribution,
  RequestBodyUploadReport,
} from './types'

class EmployerPostController {
  async sendDistribuicionForUsers(
    req: CustomRequest<RequestBodySendDistribution>,
    res: Response,
  ) {
    // Check for validation errors using the modified function
    if (validBodyAndParamsRequest(validationResult(req), res)) {
      return // Return early if there are validation errors
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { idCompany, idCustomers } = req.body

    try {
      const result = await sendDistributionService.execute(req.body)
      return res.status(201).json(result)
    } catch (error: { message: string } | any) {
      if (error.message) {
        return res.status(404).send(error.message)
      }
    }
  }

  async uploadReport(req: Request, res: Response) {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({
        error: errors.array()[0],
      })
    }

    if (!req.file) {
      return res
        .status(404)
        .send({ status: false, message: 'No file uploaded' })
    }

    const { companyId } = req.params
    const reportPath = req.file.path

    try {
      const result = await uploadReportService.execute(companyId, reportPath)
      return res.status(201).json(result)
    } catch (error) {
      return res.status(500).send(error)
    }
  }

  async uploadReportLocal(req: Request, res: Response) {
    const { companyId } = req.params

    const filePath = './data.csv'

    try {
      const result = await uploadReportService.executeCSV(companyId, filePath)
      return res.status(201).json(result)
    } catch (error) {
      return res.status(500).send(error)
    }
  }
}

export default new EmployerPostController()