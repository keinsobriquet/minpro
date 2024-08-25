import Image from "next/image";

export default function EventAHero() {
    return (
        <div className="pt-20">
            <h1 className="text-center text-white text-2xl pt-12 tracking-widest">LECALICUS PRESENTS</h1>
            <div className="flex justify-center pt-14">
                <Image src="/repellista.svg" width="800" height="800" alt=""/>
            </div>
            <h1 className="text-white text-center pt-12 px-16 text-2xl tracking-widest">
                A MAGICAL SPECTACLE BROUGHT BY THE SYMPHONY OF UNITY ORCHESTRA AND SECRET ARTIST LINE-UP
            </h1>
            <h1 className="text-yellow-400 text-center pt-12 text-2xl tracking-widest">
                20 NOVEMBER 2024
            </h1>
            <h1 className="text-white text-center pt-12 text-2xl tracking-widest">
                PUSSENIF AVENUE
            </h1>
            <h1 className="text-white text-center pt-12 text-2xl tracking-widest">
                BANDUNG — INDONESIA
            </h1>
        </div>
    )
}