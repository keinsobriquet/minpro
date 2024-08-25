import Link from "next/link";
import { IEvent } from "../../eomenu/myevents/_components/cardtemplates";
import { CreateEvent } from "@/types/event";

export default function EventCardMap({ data }: { data: any }) {
    // console.log(data.eventname);

    return (
        <Link href={`/eventA/${data.id}`}>
            <div className="text-2xl text-white"></div>
            <div className="pt-5">
                <div className="card card-compact bg-white bg-opacity-10 w-[280px] h-[400px] shadow-xl hover hover:scale-105 duration-300">
                    <figure>
                        <img    
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes"
                        />
                    </figure>
                    <div className="card-body ">
                        <h2 className="card-title">{data.eventname}</h2>
                        <p>{data.description}</p>
                        <div className="card-actions flex justify-evenly">
                            <button className="btn btn-primary w-20">Info</button>
                            <button className="btn btn-primary w-20">Ticket</button>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}