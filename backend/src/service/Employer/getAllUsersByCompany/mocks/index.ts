export type CustomerTest = {
  id: string
  name: string
  phoneNumber: string
  email: string
  companyId: string
}

export const mockCustomers: CustomerTest[] = [
  {
    id: '1',
    name: 'Test name user',
    email: 'test@gmail.com',
    phoneNumber: '000000000',
    companyId: '1',
  },
  {
    id: '2',
    name: 'Test name user',
    email: 'test@gmail.com',
    phoneNumber: '000000000',
    companyId: '1',
  },
]
