import { AttendeeFullData, UserLogin, UserRegister } from '@/types/user';
import { getCookie } from './server';

export const registerUser = async (data: UserRegister) => {
  const res = await fetch('http://localhost:8000/api/auth/register', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(data),
  });

  return res.json();
};

export const loginUser = async (data: UserLogin) => {
  const res = await fetch('http://localhost:8000/api/auth/login', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(data),
  });
  const response = await res.json();

  return { result: response, ok: res.ok };
};

export const verificationProcess = async (token: string) => {
  const res = await fetch('http://localhost:8000/api/auth/verification', {
    headers: {
      'Content-Type' : 'application/json',
      "Authorization": `Bearer ${token}`
    },
    method: 'PATCH'
  })

  const response = await res.json()

  return {result: response, ok: res.ok}
}


