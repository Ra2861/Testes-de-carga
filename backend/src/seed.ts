import { prismaService } from './prisma/prisma'

async function seed() {
  const companie = await prismaService.company.create({
    data: { name: 'Wonder Technologies' },
  })

  const userA = await prismaService.customer.create({
    data: {
      name: 'John Doe',
      phoneNumber: '123-456-7890',
      email: 'john.doe@example.com',
      age: '30',
    },
  })

  const userB = await prismaService.customer.create({
    data: {
      name: 'Jane Smith',
      phoneNumber: '987-654-3210',
      email: 'jane.smith@example.com',
      age: '25',
    },
  })

  const userC = await prismaService.customer.create({
    data: {
      name: 'Michael Johnson',
      phoneNumber: '555-123-4567',
      email: 'michael.johnson@example.com',
      age: '40',
    },
  })

  await prismaService.customersOnCompany.createMany({
    data: [
      {
        companyId: companie.id,
        customerId: userA.id,
      },
      {
        companyId: companie.id,
        customerId: userB.id,
      },
      {
        companyId: companie.id,
        customerId: userC.id,
      },
    ],
  })
}

// npx prisma db seed

seed()
  .catch((e) => {
    console.error('Seeding failed!', e)
    process.exit(1)
  })
  .finally(async () => {
    await prismaService.$disconnect()
  })
