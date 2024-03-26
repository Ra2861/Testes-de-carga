
import { Router } from 'express'
import { body } from 'express-validator'
import clientPostController from '../controller/Client/Client.post.controller'

export const routerClient: Router = Router()

routerClient.post(
    '/answerdReport',
    [body('questionA').isString().notEmpty()],
    [body('questionB').isString().notEmpty()],
    [body('questionC').isString().notEmpty()],
    [body('idCustomer').isString().isUUID().notEmpty()],
    [body('idCompany').isString().isUUID().notEmpty()],
    [body("idReport").isString().isUUID().notEmpty()],
    clientPostController.postReport,
  )

