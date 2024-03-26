import { PrismaClient } from '@prisma/client'

export class PrismaService extends PrismaClient {
  constructor() {
    super()
    this.$connect()
      .then(() => console.log('Database connected!'))
      .catch((error) =>
        console.error('Error connecting to the database', error),
      )
  }

  async disconnect(): Promise<void> {
    await this.$disconnect()
  }
}

export const prismaService = new PrismaService()
