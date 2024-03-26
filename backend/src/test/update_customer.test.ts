import supertest from 'supertest'
import { app } from '../index'
import { prismaService } from '../prisma/prisma'
import { Customer } from '@prisma/client'

const request = supertest(app)

describe('Tests if the user can be updated', () => {
  let user: Customer
  beforeAll(async () => {
    user = await prismaService.customer.create({
      data: {
        name: 'Carol Fricks',
        phoneNumber: '+55 (11) 99110-5566',
        age: '19',
        email: 'CFricks@gmail.com',
      },
    })
  })
  it('should update user data', async () => {
    const updatedUserData = {
      id: user.id,
      name: 'John Doe',
      phoneNumber: '+55 (11) 99338-8339',
      age: '27',
      email: 'johndoe@gmail.com',
    }

    const response = await request
      .put(`/employer/updateEmployer`)
      .send(updatedUserData)

    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('name', updatedUserData.name)
    expect(response.body).toHaveProperty(
      'phoneNumber',
      updatedUserData.phoneNumber,
    )
    expect(response.body).toHaveProperty('age', updatedUserData.age)
    expect(response.body).toHaveProperty('email', updatedUserData.email)
  })

  afterAll(async () => {
    await prismaService.customer.delete({
      where: {
        id: user.id,
      },
    })
  })
})
