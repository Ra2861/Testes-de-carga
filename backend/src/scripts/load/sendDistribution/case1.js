import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
  stages: [
    { duration: '5m', target: 10 },    // 10 usuários, 5 minutos
  ],
};

export default function () {
  const url = 'http://localhost:3000/employer/sendDistribution';

  //ver se precisa enviar alguma coisa 
  const requestBody = {
    idCompany: '897fde59-b9c2-414c-b569-544e99ebce86', // id da empresa procurar
    idCustomers: ['c2679f23-faee-4180-ad6e-0123ec00a4f6'], // id do cliente procurar
  };


  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  let response = http.post(url, JSON.stringify(requestBody), params);

  if (response.status !== 201) {
    console.error(`Erro ${response.status}: ${response.body}`);
  }else{
    check(response, { 'status was 200': (r) => r.status == 201 });
  }

  
  sleep(1);
}
