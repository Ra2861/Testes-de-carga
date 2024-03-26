import csvParser from 'csv-parser'
import { createObjectCsvWriter } from 'csv-writer'
import ExcelJS from 'exceljs'
import fs from 'fs'
import supertest from 'supertest'
import { app } from '../index'
import { prismaService } from '../prisma/prisma'
import { CsvWriter } from 'csv-writer/src/lib/csv-writer'

const request = supertest(app)

describe('Tests if the user can be uploaded from excel sheet', () => {
  let csvWriter: CsvWriter<object>

  beforeAll(async () => {
    const csvFilePath = 'mockDataSheet.csv'
    const xlsxFilePath = 'mockDataSheet.xlsx'

    const workbook = new ExcelJS.Workbook()
    const worksheet = workbook.addWorksheet('Sheet 1')

    const csvHeaders = [
      { id: 'name', title: 'Name' },
      { id: 'phoneNumber', title: 'Phone Number' },
      { id: 'email', title: 'Email' },
      { id: 'age', title: 'Age' },
    ]

    const mockData = [
      {
        name: 'Pedro Gattai',
        phoneNumber: '999-999-9999',
        email: 'pedro.gattai@test-upload.com',
        age: 20,
      },
      {
        name: 'Yves Lapa',
        phoneNumber: '111-111-1111',
        email: 'yves.lapa@test-upload.com',
        age: 21,
      },
      {
        name: 'Abner Silva',
        phoneNumber: '222-222-2222',
        email: 'abner.silva@test-upload.com',
        age: 20,
      },
    ]

    csvWriter = createObjectCsvWriter({
      path: csvFilePath,
      header: csvHeaders,
    })

    await csvWriter.writeRecords(mockData)

    await new Promise<void>((resolve, reject) => {
      fs.createReadStream(csvFilePath)
        .pipe(csvParser())
        .on('data', (row) => {
          worksheet.addRow(row)
        })
        .on('end', async () => {
          await workbook.xlsx.writeFile(xlsxFilePath)
          resolve()
        })
        .on('error', (err) => {
          reject(err)
        })
    })
  })

  it('should upload user data', async () => {
    const xlsxFilePath = 'mockDataSheet.xlsx'

    const companyId: string = '71a396f2-1235-4672-8eea-8fd5def84d06'

    const response = await request
      .post(`/employer/uploadReport/${companyId}`)
      .attach('file', xlsxFilePath)

    expect(response.status).toBe(500)
  })

  it('should not upload user data because companyId is not found', async () => {
    const xlsxFilePath = 'mockDataSheet.xlsx'
    const response = await request
      .post(`/employer/uploadReport`)
      .attach('file', xlsxFilePath)

    expect(response.status).toBe(404)
  })

  it('should not upload user data because companyId is int', async () => {
    const xlsxFilePath = 'mockDataSheet.xlsx'

    const companyId: number = 12

    const response = await request
      .post(`/employer/uploadReport/${companyId}`)
      .attach('file', xlsxFilePath)

    expect(response.status).toBe(400)
  })

  it('should not upload user data because there is no file', async () => {
    const companyId: string = '71a396f2-1235-4672-8eea-8fd5def84d06'
    const response = await request.post(`/employer/uploadReport/${companyId}`)

    expect(response.status).toBe(404)
    expect(response.body.message).toBe('No file uploaded')
  })

  afterAll(async () => {
    const csvFilePath = 'mockDataSheet.csv'
    const xlsxFilePath = 'mockDataSheet.xlsx'

    try {
      fs.unlink(csvFilePath, () => {
        console.log('CSV Deleted')
      })
      fs.unlink(xlsxFilePath, () => {
        console.log('Excel Deleted')
      })

      await prismaService.customer.deleteMany({
        where: {
          email: {
            endsWith: '@test-upload.com',
          },
        },
      })
    } catch (err) {
      console.error(err.message)
    }
  })
})
