export interface IEvent {
  eventname: string;
  type: string;
  date: string;
  venue: string;
  category: string;
}

export default function Cardtemplates({
  eventname,
  type,
  date,
  venue,
  category,
}: IEvent) {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl px-3 py-3 lg:w-2/5 text-white">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
          alt="Album"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title pb-10">{eventname}</h2>
        <p>Venue: {venue}</p>
        <p>Date: {date}</p>
        <p>Genre: {category}</p>
        <div className="card-actions flex justify-between">
          <h1 className="text-2xl font-bold">{type}</h1>
          <button className="btn btn-primary">Listen</button>
        </div>
      </div>
    </div>
  );
}
