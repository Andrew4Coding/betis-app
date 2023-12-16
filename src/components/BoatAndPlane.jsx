import { BoatColor } from "../const"
import MainBoat from "../assets/mainboat"
import SeaPlane from "../seaPlane"

export default function BoatAndPlane({prefferedColor}){
    return <>
        <div className="grow h-fit relative">
            <div className="absolute left-[20%] right-[20%] flex justify-center items-center bottom-0 top-0 duration-100">
                <MainBoat mainColor={BoatColor[prefferedColor][0]} shadeColor={BoatColor[prefferedColor][1]} scale={100}/>
            </div>
            
            <div className="">
                <SeaPlane />
            </div>
        </div>
    </>
}