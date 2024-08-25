'use client'

import Image from "next/image";

export default function ChooseActions() {
    return (
        <div className="flex justify-center pt-28 gap-10 fixed">
            <div className="card bg-white bg-opacity-10 w-96 shadow-xl">
                <figure className="px-10 pt-10">
                    <Image src="/heroimage.jpg" width="500" height="100" alt="" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Create Your Own Event</h2>
                    <p className="pt-10">You can create and manage your own event here</p>
                    <div className="card-actions">
                        <button className="btn bg-black hover hover:scale-125 duration-300">Create</button>
                    </div>
                </div>
            </div>
            <div className="divider lg:divider-horizontal divide-red-600">OR</div>
            <div className="card bg-white bg-opacity-10 w-96 shadow-xl">
                <figure className="px-10 pt-10">
                    <Image src="/heroimage.jpg" width="500" height="100" alt="" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">View Your Event</h2>
                    <p className="pt-10">You can view event(s) that've been created by you here</p>
                    <div className="card-actions">
                        <button className="btn bg-black hover hover:scale-125 duration-300">View</button>
                    </div>
                </div>
            </div>
        </div>
    )
}