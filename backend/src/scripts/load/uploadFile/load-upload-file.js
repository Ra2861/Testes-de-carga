import http from 'k6/http'
import { check, sleep } from 'k6'

export const options = {
  vus: 10,
  duration: '120s',
}

const params = {
  headers: {
    'Content-Type': 'multipart/form-data',
  },
}

export default function () {
  const res = http.post(
    'http://localhost:3000/employer/uploadReportCSV/eb3d0b5c-7379-45ae-b2a5-58371e0616f7',
    params,
  )

  // Verifique se a solicitação foi bem-sucedida
  check(res, {
    'status is 200': (r) => r.status === 200,
  })

  // Aguarde um curto período de tempo entre as solicitações
  sleep(10)
}
