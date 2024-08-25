import Image from "next/image"

export default function EventDescription() {
    return (
        <div className="">
            <div className="hero bg-transparent py-28">
                <div className="hero-content flex-col lg:flex-row">
                    <Image src={"/heroimage.jpg"} width="500" height="100" alt="" />
                    <div>
                        <h1 className="text-4xl text-white font-semibold tracking-widest sm:text-center sm:pt-10">OUR STORY 2019</h1>
                        <p className="pt-6 tracking-wide text-white sm:text-center">
                            28.000 people from more than 100 different countries celebrated the 15th anniversary of Tomorrowland 
                            during two unique shows at the 15-year anniversary spectacle Our Story in the Ziggo Dome in Amsterdam.
                            
                            Our Story took visitors on a three-hour magical journey through 15 years of Tomorrowland&apos;s musical history 
                            whereby all artists performed their most iconic electronic Tomorrowland tracks of the past 15 years.
                        </p>
                        <p className="pt-6 tracking-wide text-white sm:text-center">
                            28.000 people from more than 100 different countries celebrated the 15th anniversary of Tomorrowland 
                            during two unique shows at the 15-year anniversary spectacle Our Story in the Ziggo Dome in Amsterdam.
                            
                            Our Story took visitors on a three-hour magical journey through 15 years of Tomorrowland&apos;s musical history 
                            whereby all artists performed their most iconic electronic Tomorrowland tracks of the past 15 years.
                        </p>
                        {/* <button className="btn btn-primary">Get Started</button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}