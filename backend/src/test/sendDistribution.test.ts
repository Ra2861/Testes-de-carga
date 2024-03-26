/* eslint-disable @typescript-eslint/no-unused-vars */
import supertest from 'supertest'
import { app } from '../index'
import { prismaService } from '../prisma/prisma'
import { Company, Customer, CustomersOnCompany, Report } from '@prisma/client'

const request = supertest(app)

describe('Teste para distribuição de resposta', () => {
  let company: Company
  let user: Customer
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let user2: Customer
  let userCompany: CustomersOnCompany
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let userCompany2: CustomersOnCompany
  let report: Report
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let report2: Report

  beforeAll(async () => {
    company = await prismaService.company.create({
      data: {
        name: 'Track.co',
      },
    })

    user = await prismaService.customer.create({
      data: {
        name: 'abner',
        phoneNumber: '+55 (11) 99999-9999',
        age: '20',
        email: 'abner@example.com',
      },
    })

    user2 = await prismaService.customer.create({
      data: {
        name: 'Soso',
        phoneNumber: '+55 (11) 99999-9999',
        age: '19',
        email: 'soso@example.com',
      },
    })

    userCompany = await prismaService.customersOnCompany.create({
      data: {
        companyId: company.id,
        customerId: user.id,
      },
    })

    userCompany2 = await prismaService.customersOnCompany.create({
      data: {
        companyId: company.id,
        customerId: user2.id,
      },
    })

    report = await prismaService.report.create({
      data: {
        companyId: company.id,
        customerId: user.id,
      },
    })

    report2 = await prismaService.report.create({
      data: {
        companyId: company.id,
        customerId: user2.id,
      },
    })
  })

  it('deve distribuir 2 pesquisas', async () => {
    const response = await request
      .post('/employer/sendDistribution')
      .send({ idCompany: company.id, idCustomers: [user.id, user2.id] })

    expect(response.status).toBe(201)
    expect(response.body).toEqual('Quantidade de pesquisas enviadas: 2')
  })

  it('deve retornar um erro por enviar um idCustomer que não existe no banco', async () => {
    const response = await request.post('/employer/sendDistribution').send({
      idCompany: company.id,
      idCustomers: [user.id, '5445e37d-6cef-4de6-bc57-f057eac568a9'],
    })

    expect(response.status).toBe(404)
  })

  it('deve retornar um erro por enviar um idCompany que não existe no banco', async () => {
    const response = await request.post('/employer/sendDistribution').send({
      idCompany: '5445e37d-6cef-4de6-bc57-f057eac568a9',
      idCustomers: [user.id, user2.id],
    })

    expect(response.status).toBe(404)
  })

  afterAll(async () => {
    await prismaService.report.deleteMany()
    await prismaService.customersOnCompany.deleteMany()
    await prismaService.customer.deleteMany()
    await prismaService.company.deleteMany()
  })
})
