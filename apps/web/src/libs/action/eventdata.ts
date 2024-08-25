import { CreateEvent } from '@/types/event';
import { getCookie } from './server';

export const eventCreate = async (data: CreateEvent) => {
  const token = await getCookie('token');
  const res = await fetch(`http://localhost:8000/api/event/`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token?.value}`,
    },
    method: 'POST',
    body: JSON.stringify(data),
  });
  const response = await res.json();
  console.log(response);
  return { result: response, ok: res.ok };
};


export const getEvent = async  () => {
  interface IEvent {
    status: string;
    event: CreateEvent[]
  }

  const res = await fetch('http://localhost:8000/api/event', {
    next: { revalidate: 60 }
  })

  const response: CreateEvent = await res.json()

  return {rosul: response}
}