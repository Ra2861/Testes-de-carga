import supertest from 'supertest'
import { app } from '../index'
import { prismaService } from '../prisma/prisma'
import { Company, Customer, Report } from '@prisma/client'

const request = supertest(app)

describe('Teste se o relatório do cliente pode ser atualizado', () => {
  let report: Report
  let user: Customer
  let company: Company

  beforeEach(async () => {
    user = await prismaService.customer.create({
      data: {
        name: 'Sofia Pimazzoni',
        phoneNumber: '+55 (11) 99559-5566',
        age: '20',
        email: 'sofia@gmail.com',
      },
    })

    company = await prismaService.company.create({
      data: {
        name: 'Samsung',
      },
    })

    report = await prismaService.report.create({
      data: {
        customerId: user.id,
        companyId: company.id,
      },
    })
    await prismaService.customersOnCompany.create({
      data: {
        companyId: company.id,
        customerId: user.id,
      },
    })
  })

  it('deve atualizar os dados do relatório do cliente', async () => {
    const updatedReportData = {
      idReport: report.id,
      questionA: 'updated question A',
      questionB: 'updated question B',
      questionC: 'updated question C',
      idCustomer: user.id,
      idCompany: company.id,
    }

    const response = await request
      .post(`/client/answerdReport/`)
      .send(updatedReportData)

    // expect(response.status).toBe(200)
    expect(response.body).toHaveProperty(
      'questionA',
      updatedReportData.questionA,
    )
    expect(response.body).toHaveProperty(
      'questionB',
      updatedReportData.questionB,
    )
    expect(response.body).toHaveProperty(
      'questionC',
      updatedReportData.questionC,
    )
  })

  afterAll(async () => {
    await prismaService.report.delete({
      where: {
        id: report.id,
      },
    })
    await prismaService.company.delete({
      where: {
        id: company.id,
      },
    })
    await prismaService.customer.delete({
      where: {
        id: user.id,
      },
    })
  })
})
