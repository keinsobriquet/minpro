import Link from "next/link"
import { BiSolidDiscount } from "react-icons/bi"
import { BsTicketPerforated } from "react-icons/bs"
import { FaRegEdit } from "react-icons/fa"
import { GoPerson } from "react-icons/go"

export default function MiniNavbar() {
    return (
        <div className="text-white flex justify-center gap-10">
            <Link href="/" className="tracking-widest">LOGO</Link>
            <Link href="/" className="flex items-center tracking-widest gap-3 hover:scale-125 duration-300">
                <GoPerson />
                <button>PROFILE</button>
            </Link>
            <Link href="/" className="flex items-center tracking-widest gap-3 hover:scale-125 duration-300">
                <FaRegEdit />
                <button>CUSTOMIZE</button>
            </Link>
            <Link href="/" className="flex items-center tracking-widest gap-3 hover:scale-125 duration-300">
                <BsTicketPerforated />
                <button>TICKETS</button>
            </Link>
            <Link href="/" className="flex items-center tracking-widest gap-3 hover:scale-125 duration-300">
                <BiSolidDiscount />
                <button>VOUCHER</button>
            </Link>
        </div>
    )
}