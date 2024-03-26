import { RequestBodySendDistribution } from '../../../../controller/Employer/types'

export const body: RequestBodySendDistribution = {
  idCompany: '1',
  idCustomers: ['1', '2', '3'],
}

export const bodyWrong: RequestBodySendDistribution = {
  idCompany: '2',
  idCustomers: ['1', '2', '3', '4'],
}
