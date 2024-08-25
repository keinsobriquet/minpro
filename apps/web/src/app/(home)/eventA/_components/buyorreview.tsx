import Link from "next/link";
import { PiLineVerticalThin } from "react-icons/pi";

export default function BuyOrReview() {
    return (
        <div className="py-32 ">
            <div className="flex justify-center text-xl">
                <div className="text-white w-1/4 h-52">
                    <div className="text-center">
                        <p className="tracking-widest pt-20 lg:text-center">GRAB YOUR OWN TICKET NOW!</p>

                    </div>
                    <Link href={"/payment"} className="flex justify-center pt-10">
                        <button className="text-white bg-white/5 text-lg border rounded-md px-3 py-3 tracking-widest hover hover:scale-110 duration-300 hover:bg-teal-500">BUY TICKET
                        </button>
                    </Link>
                </div>
                <div>
                    <PiLineVerticalThin size={150} className="text-white" />
                    <PiLineVerticalThin size={150} className="text-white" />
                </div>
                <div className="text-white w-1/4 h-52">
                    <p className="tracking-widest text-center">GIVE US YOUR THOUGHTS</p>
                    <div className="pt-5 items-center">
                        <textarea className="bg-white/5 lg:w-96 lg:h-36 border-transparent rounded-lg"></textarea>
                    </div>
                    <div className="text-center pt-5">
                        <button className="tracking-widest border rounded-md px-3 py-3 hover hover:scale-110 duration-300 hover:bg-teal-500">SUBMIT</button>
                    </div>
                </div>
            </div>
        </div>
    )
}