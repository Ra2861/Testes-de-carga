import { Request } from 'express'

export interface CustomRequest<T> extends Request {
  body: T
}

export type RequestBodySendDistribution = {
  idCompany: string
  idCustomers: string[]
}

export type RequestBodyUploadReport = {
  companyId: string
}

export type TCustomerId = { id: string }
