import { cookies } from 'next/headers';
import EvorgProfileTemplate, { IData } from './evorgprofileTemplate';

export default async function EvorgProfileData() {
  const token = cookies().get('token')?.value;
  const fet = await fetch(`http://localhost:8000/api/attendee/details/`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    method: 'GET',
  });
  const dat = await fet.json();

  return (
    <div>
      <EvorgProfileTemplate
        email={dat.user.email}
        username={dat.user.username}
        phone={dat.user.phone}
      />
    </div>
  )
}
