import { PiLineVerticalThin } from "react-icons/pi";

export default function ProfileData() {
    return (
        <div className="flex justify-center gap-28 py-24 items-center">
            <div className="text-white text-xl">
                <h1 className="tracking-wider">FIRST NAME</h1>
                <h1 className="pt-5 tracking-wider">LAST NAME</h1>
                <h1 className="pt-5 tracking-wider">USERNAME</h1>
                <h1 className="pt-5 tracking-wider">EMAIL ADDRESS</h1>
                <h1 className="pt-5 tracking-wider">DATE OF BIRTH</h1>
                <h1 className="pt-5 tracking-wider">PHONE NUMBER</h1>
                <h1 className="pt-5 tracking-wider">TRANSACTION HISTORY</h1>
                <h1 className="pt-5 tracking-wider">REFERRAL CODE</h1>
                <h1 className="pt-5 tracking-wider">POINTS</h1>
            </div>
            <div className="flex-col">
                <PiLineVerticalThin size={60} className="text-white" />
                <PiLineVerticalThin size={60} className="text-white" />
                <PiLineVerticalThin size={60} className="text-white" />
                <PiLineVerticalThin size={60} className="text-white" />
                <PiLineVerticalThin size={60} className="text-white" />
                <PiLineVerticalThin size={60} className="text-white" />
                <PiLineVerticalThin size={60} className="text-white" />
                {/* <PiLineVerticalThin size={60} className="text-white" /> */}
            </div>
            <div className="text-white text-xl">
                <h1 className="tracking-wider">Adam</h1>
                <h1 className="pt-5 tracking-wide">McGoblough</h1>
                <h1 className="pt-5 tracking-wide">KegobloughanSiThalawl</h1>
                <h1 className="pt-5 tracking-wide">bloughhh69@gmail.com</h1>
                <h1 className="pt-5 tracking-wide">22 November 1876</h1>
                <h1 className="pt-5 tracking-wide">085823498577</h1>
                <button className="pt-5 tracking-wide hover hover:text-teal-500">Click here to view</button>
                <div className="pt-5">
                    <h1 className="bg-white text-black text-center rounded-lg tracking-widest">77BF60C-PQ8008S</h1>
                </div>
                <h1 className="pt-5 tracking-wide">73</h1>
            </div>
        </div>
    )
}