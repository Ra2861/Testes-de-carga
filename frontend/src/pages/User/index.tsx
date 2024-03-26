import axios from 'axios'
import React, { useState } from 'react'

const FetchCustomersPage: React.FC = () => {
  const [customers, setCustomers] = useState<any[]>([])
  const [companyId, setCompanyId] = useState<string>('')
  const [report, setReport] = useState<File | null>(null)

  const fetchCustomers = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/employer/customer/${companyId}`,
      )
      setCustomers(response.data)
    } catch (error) {
      console.error('Erro ao buscar os clientes:', error)
    }
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null
    setReport(file)
  }

  const uploadCustomers = async () => {
    if (!report) {
      alert('Please select a file to upload.')
      return
    }

    const formData = new FormData()
    formData.append('file', report)

    try {
      const response = await axios.post(
        `http://localhost:3000/employer/uploadReport/${companyId}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      )

      setReport(response.data)
    } catch (error) {
      console.log(error)
      console.error('Error uploading the file:', error)
      throw new Error()
    }
  }

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="ID da Empresa"
          value={companyId}
          onChange={(e) => setCompanyId(e.target.value)}
          data-cy="company-id"
        />
        <button onClick={fetchCustomers}>Buscar Clientes</button>
        {customers.length > 0 && (
          <ul>
            {customers.map((customer) => (
              <li key={customer.id}>
                {customer.name} - {customer.email} - {customer.phoneNumber}
              </li>
            ))}
          </ul>
        )}
      </div>
      <input
        id="fileInput"
        type="file"
        accept=".xlsx"
        onChange={handleFileChange}
      />
      <button data-cy="import-sheets-btn" onClick={uploadCustomers}>
        Upload File with Customers
      </button>
    </div>
  )
}

export default FetchCustomersPage
