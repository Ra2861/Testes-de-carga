import { Router } from 'express'
import { body, param } from 'express-validator'
import employerGetController from '../controller/Employer/Employer.get.controller'
import employerPostController from '../controller/Employer/Employer.post.controller'
import employerUpdateController from '../controller/Employer/Employer.put.controller'
import { upload } from '../config/multer'

export const routerEmployer: Router = Router()

routerEmployer.get('/customer', employerGetController.getAllCustomers)
routerEmployer.get(
  '/customer/:id',
  employerGetController.getAllCustomersByCompany,
)

routerEmployer.put(
  '/updateEmployer',
  employerUpdateController.updateCustomerInfo,
)

routerEmployer.post(
  '/sendDistribution',
  [body('idCompany').isString().isUUID().notEmpty()],
  [body('idCustomers').isArray().isUUID().notEmpty()],
  employerPostController.sendDistribuicionForUsers,
)

routerEmployer.post(
  '/uploadReport/:companyId',
  [param('companyId').isString().isUUID().notEmpty()],
  upload.single('file'),
  employerPostController.uploadReport,
)

routerEmployer.post(
  '/uploadReportCSV/:companyId',
  [param('companyId').isString().isUUID().notEmpty()],
  employerPostController.uploadReportLocal,
)
