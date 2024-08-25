import EventAHero from "../_components/hero"
import EventATicketInfo from "../_components/ticketInfo"
import EventAInfo from "../_components/eventInfo"
import EventDescription from "../_components/eventDescription"
import BuyOrReview from "../_components/buyorreview"


export default function EventA() {
    return (
        <div className="bg-transparent">
            <EventAHero/>
            <EventDescription/>
            <EventAInfo/>
            <EventATicketInfo/>
            <BuyOrReview/>
        </div>
    )
}