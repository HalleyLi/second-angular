import { intercepter, mock } from '../config';

mock.mock('/api/v1/account/login', 'post', (config: any) => {
  const body: any = JSON.parse(config?.body);
  return intercepter({
    "id": 1,
    "name": body.username,
    "memberSince": "2022-05-07T11:56:49Z",
    "role": body.username?.toLocaleLowerCase().indexOf("trader") > -1 ? 'TRADER' : 'CLIENT',
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJyb2xlIjoiVFJBREVSIiwibmFtZSI6IjEyMzQ1NiIsImV4cCI6MTY4NzQ5MTE0OCwidXNlcklkIjoidGVzdC10cmFkZXIifQ.qpXvzorU0gJ5LYhu4VQj4ZWNj9ktQI3Naexc_-ap1EfpFW-1onkezdOWAJAA08XSkSVL8IVNM4DNQUJsibuZSQ"
  });
});
