import Navbar from "../../navbar";
import SeaPlane from "../../../seaPlane";
import MainBoat from '../../../assets/mainboat'

import { BoatColor } from "../../../const";

import { useState } from "react";
import ColorPick from "../colorPick";
import BoatAndPlane from "../../BoatAndPlane";

function WhiteArea({children}) {
    return <div className="bg-white grow p-8 font-Poppins md:max-w-[50vw]
    rounded-[20px] flex flex-col">
        <p className="text-[15px] text-[#6D6D6D]">Name</p>
        <h2 className="font-bold font-Poppins text-[25px]">Andrew's Boat</h2>

        <p className="text-[15px] text-[#6D6D6D] mt-3">Description</p>
        <p className="text-[12px] font-thintext-[#898989] overflow-auto break-words mb-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, quasi? Quaerat laborum sit hic animi! Impedit ratione ea dicta recusandae magnam quo blanditiis dolorum! Eius, impedit commodi? Cum, in magni.
        </p>

        {children}
    </div>
}

function BoatProperties({openColorPick, setOpenColorPick}){
    return <div className="mt-3">
        <ul className="flex gap-3 flex-wrap justify-end text-[12px]">
            <li className="flex items-center gap-3">
                <p className="">Capacity</p>
                <div className="bg-mainBlack px-4 py-2 text-white rounded-lg">10</div>
            </li>
            <li className="flex items-center gap-3 cursor-pointer"
            onClick={() => setOpenColorPick(!openColorPick)}>
                {openColorPick && <ColorPick />}
                <p className="">Color</p>
                <div className="bg-red-500 px-4 py-2 text-white rounded-lg">RED</div>
            </li>
            <li className="flex items-center gap-3">
                <p className="">Sailing</p>
                <div className="bg-mainBlack px-4 py-2 text-white rounded-lg">Yes</div>
            </li>
        </ul>
    </div>
}
export default function EditeHero(){
    const [openColorPick, setOpenColorPick] = useState(false)

    return <>
        <Navbar />
        <div className="flex m-8 flex-col">
            <div className="flex flex-wrap gap-10">
                <BoatAndPlane prefferedColor={'BLACK'}/>
                <WhiteArea>
                    <BoatProperties openColorPick={openColorPick} setOpenColorPick={setOpenColorPick}/>
                </WhiteArea>
            </div>
        </div>
    </>
}