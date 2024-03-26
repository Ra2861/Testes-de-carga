import { Customer } from '@prisma/client'

export const mockCustomers: Customer[] = [
  {
    id: '1',
    name: 'Test name user',
    age: '20',
    email: 'test@gmail.com',
    phoneNumber: '000000000',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '2',
    name: 'Test name user',
    age: '20',
    email: 'test@gmail.com',
    phoneNumber: '000000000',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]
