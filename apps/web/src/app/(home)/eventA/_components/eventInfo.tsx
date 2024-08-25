import { PiLineVerticalThin } from "react-icons/pi";

export default function EventAInfo() {
    return (
        <div className="items-center">
            <h1 className="text-white text-center text-2xl tracking-widest">EVENT INFO</h1>
            <div className="flex justify-center text-xl pt-20">
                <div className="stats stats-vertical shadow bg-white/5 text-white">
                    <div className="stat">
                        <div className="stat-title">Date</div>
                        <div className="stat-value">31K</div>
                        <div className="stat-desc">Jan 1st - Feb 1st</div>
                    </div>
                </div>
                <PiLineVerticalThin size={150} className="text-white" />
                <div className="stats stats-vertical shadow bg-white/5 text-white">
                    <div className="stat">
                        <div className="stat-title">Location</div>
                        <div className="stat-value">31K</div>
                        <div className="stat-desc">Jan 1st - Feb 1st</div>
                    </div>
                </div>
            </div>
        </div>
    )
}