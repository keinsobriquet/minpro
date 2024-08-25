import Image from "next/image";
import Link from "next/link";

export default function HomeDocumentation() {
    return (
        <div className="pt-32">
            <h1 className= "text-white text-center text-3xl tracking-wider">EVENTS DOCUMENTATION</h1>
            <div className="flex justify-center">
                <div className="grid grid-cols-3 pt-14 justify-center gap-10">
                    <Image src={"/events-documentation1.jpg"} width={300} height={100} alt="" className="w-[300px] h-[300px]"/>
                    <Image src={"/events-documentation2.jpg"} width={300} height={100} alt="" className="w-[300px] h-[300px]"/>
                    <Image src={"/events-documentation3.jpg"} width={300} height={100} alt="" className="w-[300px] h-[300px]"/>
                    <Image src={"/events-documentation4.jpg"} width={300} height={100} alt="" className="w-[300px] h-[300px]"/>
                    <Image src={"/events-documentation5.jpg"} width={300} height={100} alt="" className="w-[300px] h-[300px]"/>
                    <Image src={"/events-documentation6.jpg"} width={300} height={100} alt="" className="w-[300px] h-[300px]"/>
                    <Image src={"/events-documentation7.jpg"} width={300} height={100} alt="" className="w-[300px] h-[300px]"/>
                    <Image src={"/events-documentation8.jpg"} width={300} height={100} alt="" className="w-[300px] h-[300px]"/>
                    <Image src={"/events-documentation9.jpg"} width={300} height={100} alt="" className="w-[300px] h-[300px]"/>
                </div>
            </div>
            <div className="items-center flex justify-center py-20">
                <Link href={"/documentation"}>
                    <button className=" text-white text-2xl tracking-wider hover hover:text-teal-500 hover:scale-105 duration-300">MORE INFO</button>
                </Link>
            </div>
        </div>
    )
}