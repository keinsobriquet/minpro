import { getEvent } from "@/libs/action/eventdata";
import EventCardMap from "./_components/eventcard";
import Sidebar from "./_components/sidebar";
import { IEvent } from "../eomenu/myevents/_components/cardtemplates";
import { CreateEvent } from "@/types/event";


export default async function EventsList() {

    const response = await getEvent()
    // console.log(response.rosul);
    const res = response.rosul

    return (
        <div className="h-full flex justify-between">
            <Sidebar />
            <div className="flex flex-wrap w-full gap-3 pl-6 pt-24">
                {res.map((item : any)=>{
                    return(

                        <EventCardMap data={item} />
                    )
                })}
            </div>
        </div>
    )
}