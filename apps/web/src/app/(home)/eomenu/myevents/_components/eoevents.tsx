import { cookies } from 'next/headers';
import Cardtemplates, { IEvent } from './cardtemplates';

export default async function EOEvents() {
  const token = cookies().get('token')?.value;
  const fet = await fetch(`http://localhost:8000/api/event/myevents`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    method: 'GET',
  });
  const dat = await fet.json();
  // console.log(dat);

  return (
    <div>
      {dat.eventData.map((item: IEvent) => {
        // console.log(item.eventname);
        return (
          <div className='p-4'>
            <Cardtemplates
              eventname={item.eventname}
              type={item.type}
              date={item.date}
              venue={item.venue}
              category={item.category}
            />
          </div>
        );
      })}
    </div>
  );
}
