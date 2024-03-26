import http from 'k6/http';
import { check, sleep } from 'k6';


export const options = {
  vus: 10,
  duration: '300s',
}

const payload = JSON.stringify(
  {
    questionA: "a",
    questionB: "b",
    questionC: "c",
    idCustomer: "b60da69e-e16d-43da-a87b-a8a0a5ebb343",
    idCompany: "9d705da8-36dc-4d3d-a502-53a4f833f186",
    idReport: "5911bad1-0a1f-4df8-83a0-904739d275d2"
  }
);

const params = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export default function () {
  let response = http.post('http://localhost:3000/client/answerdReport/', payload, params);

  check(response, {
    'status is 200': (r) => r.status === 200,
  });
  sleep(11)
}