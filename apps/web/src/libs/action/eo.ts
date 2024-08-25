import { EORegister, UserLogin } from "@/types/user";

export const registerEO = async (data: EORegister) => {
    const res = await fetch('http://localhost:8000/api/auth/eoregister', {
        headers: {
            'Content-Type' : 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(data)
    })

    return res.json()
}

export const loginEO = async (data: UserLogin) => {
    const res = await fetch('http://localhost:8000/api/auth/eologin', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(data),
    });
    const response = await res.json();
  
    return { result: response, ok: res.ok };
  };