export default function Sidebar() {
    return (
        <div className="w-1/5">
            <div className=" w-1/6 h-screen flex flex-col fixed top-[66px] z-10 text-white text-2xl items-center">
                <div className="flex flex-col gap-3 pt-16 font-semibold tracking-[7px]">
                    <button className="hover hover:scale-125 duration-300">METAL</button>
                    <button className="hover hover:scale-125 duration-300">EDM</button>
                    <button className="hover hover:scale-125 duration-300">JAZZ</button>
                    <button className="hover hover:scale-125 duration-300">POP</button>
                    <button className="hover hover:scale-125 duration-300">ROCK</button>
                    <button className="hover hover:scale-125 duration-300">CLASSIC</button>
                    <button className="hover hover:scale-125 duration-300">K-POP</button>
                    <button className="hover hover:scale-125 duration-300">J-POP</button>
                </div>
            </div>
        </div>
    )
}