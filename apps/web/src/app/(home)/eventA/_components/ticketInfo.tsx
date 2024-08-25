import { PiLineVerticalThin } from "react-icons/pi";

export default function EventATicketInfo() {
    return (
        <div className="pt-32">
            <h1 className="text-white text-center text-2xl tracking-widest">TICKET SALE</h1>
            <h1 className="text-white text-center lg:px-80 md:px-16 pt-20 tracking-widest">
                WITH YOUR LECALICUS ACCOUNT, YOU HAVE EXCLUSIVE BENEFITS AND YOU ARE ABLE TO
                PURCHASE TICKETS AT A REDUCED PRICE</h1>
            <div className="flex justify-center text-xl pt-20">
                <div className="stats stats-vertical shadow bg-white/5 text-white">
                    <div className="stat">
                        <div className="stat-title">Downloads</div>
                        <div className="stat-value">31K</div>
                        <div className="stat-desc">Jan 1st - Feb 1st</div>
                    </div>
                    <div className="stat">
                        <div className="stat-title">New Users</div>
                        <div className="stat-value">4,200</div>
                        <div className="stat-desc">↗︎ 400 (22%)</div>
                    </div>
                    <div className="stat">
                        <div className="stat-title">New Registers</div>
                        <div className="stat-value">1,200</div>
                        <div className="stat-desc">↘︎ 90 (14%)</div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <PiLineVerticalThin size={170} className="text-white" />
                    <PiLineVerticalThin size={170} className="text-white" />
                </div>
                <div className="stats stats-vertical shadow bg-white/5 text-white">
                    <div className="stat">
                        <div className="stat-title">Downloads</div>
                        <div className="stat-value">31K</div>
                        <div className="stat-desc">Jan 1st - Feb 1st</div>
                    </div>
                    <div className="stat">
                        <div className="stat-title">New Users</div>
                        <div className="stat-value">4,200</div>
                        <div className="stat-desc">↗︎ 400 (22%)</div>
                    </div>
                    <div className="stat">
                        <div className="stat-title">New Registers</div>
                        <div className="stat-value">1,200</div>
                        <div className="stat-desc">↘︎ 90 (14%)</div>
                    </div>
                </div>
            </div>
            <h1 className="text-white text-center lg:px-72 pt-20 tracking-widest">
                ALL PROCEEDINGS OF TICKETS GO TO THE LECALICUS FOUNDATION 
                TO SUPPORT CHILDREN AND YOUNGSTERS AROUND THE WORLD. </h1>
        </div>
    )
}