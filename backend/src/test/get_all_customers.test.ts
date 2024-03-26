import supertest from 'supertest'
import { app } from '../index'
import { prismaService } from '../prisma/prisma'
import { Company, Customer, CustomersOnCompany } from '@prisma/client'

const request = supertest(app)

describe('Tests if the user can be updated', () => {
  let user1: Customer
  let user2: Customer
  let company1: Company
  let company2: Company
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let userCompany1: CustomersOnCompany
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let userCompany2: CustomersOnCompany
  beforeAll(async () => {
    company1 = await prismaService.company.create({
      data: {
        name: 'Apple',
      },
    })

    company2 = await prismaService.company.create({
      data: {
        name: 'Samsung',
      },
    })

    user1 = await prismaService.customer.create({
      data: {
        name: 'Sofia Pimazzoni',
        phoneNumber: '+55 (11) 99559-5566',
        age: '20',
        email: 'sofia@gmail.com',
      },
    })

    user2 = await prismaService.customer.create({
      data: {
        name: 'Carol Fricks',
        phoneNumber: '+55 (11) 99110-5566',
        age: '19',
        email: 'CFricks@gmail.com',
      },
    })

    userCompany1 = await prismaService.customersOnCompany.create({
      data: {
        companyId: company1.id,
        customerId: user1.id,
      },
    })

    userCompany2 = await prismaService.customersOnCompany.create({
      data: {
        companyId: company2.id,
        customerId: user2.id,
      },
    })
  })

  it('should get all users from Apple', async () => {
    const response = await request.get(`/employer/customer/${company1.id}`)

    expect(response.status).toBe(200)
    expect(response.body).toBeDefined()
    // expect(response.body).toBeInstanceOf(Array)

    const users1 = response.body
    users1.forEach((user: { companyId: string }) => {
      expect(user.companyId).toEqual(company1.id)
    })

    const otherCompanyUsers = users1.filter(
      (user: { companyId: string }) => user.companyId !== company1.id,
    )
    expect(otherCompanyUsers.length).toEqual(0)
  })

  it('should get all users from Samsung', async () => {
    const response = await request.get(`/employer/customer/${company2.id}`)

    expect(response.status).toBe(200)
    expect(response.body).toBeDefined()
    expect(response.body).toBeInstanceOf(Array)

    const users2 = response.body
    users2.forEach((user: { companyId: string }) => {
      expect(user.companyId).toEqual(company2.id)
    })

    const otherCompanyUsers = users2.filter(
      (user: { companyId: string }) => user.companyId !== company2.id,
    )
    expect(otherCompanyUsers.length).toEqual(0)
  })

  afterAll(async () => {
    await prismaService.customer.delete({
      where: {
        id: user1.id,
      },
    })

    await prismaService.customer.delete({
      where: {
        id: user2.id,
      },
    })

    await prismaService.company.delete({
      where: {
        id: company1.id,
      },
    })

    await prismaService.company.delete({
      where: {
        id: company2.id,
      },
    })
  })
})
