import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import {motion, AnimatePresence} from "framer-motion"
import _ from "underscore"

import { BoatColor } from "../../../UsedConst";

import BoatAndPlane from "../../BoatAndPlane";
import LoadingHero from "../../Loading";
import BoatProperties from "../WhiteArea/BoatProperties"
import Navbar from "../../navbar";


function CapacityDisplay({singleBoat}){
    return <>
        <li className="flex items-center gap-3">
            <div className="flex items-center gap-3">
                <p className="">Capacity</p>
                <div className="bg-mainBlack px-4 py-2 text-white rounded-lg w-[3rem] text-center">
                    {singleBoat.capacity}
                </div>
            </div>
        </li>
    </>
}

function ColorDisplay({singleBoat}){
    return <>
        <li className="flex items-center gap-3">
            <p className="">Color</p>
            <div style={{backgroundColor: BoatColor[singleBoat.color][0]}} className={`px-4 py-2 ${singleBoat.color == 'WHITE' ? 'text-black' : 'text-white'} 
            rounded-lg w-[5rem] text-center`}>
                {singleBoat.color}
            </div>
        </li>
    </>
}

function SailingDisplay({singleBoat}){
    return <>
        <li className="flex items-center gap-3">
            <p className="">Sailing</p>
            <div className="bg-mainBlack px-4 py-2 text-white rounded-lg w-[4rem] flex justify-center">
                <p>
                    {singleBoat.is_sailing ? 'Yes' : 'No'}
                </p>
            </div>
        </li>
    </>
}

function EditButton({params}){
    const navigate = useNavigate()
    return <>
        <div className="absolute right-8 duration-100 hover:scale-110" 
        onClick={() => {
            navigate(`/${params}/edit`)
        }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit-3"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
        </div>
    </>
}

function DisplayBoatIdentity({singleBoat}){
    return <>
        <p className="text-[12px] text-[#6D6D6D]">Name</p>
        <h2 className="text-[15px] shrink w-[100%] outline-none rounded-lg font-bold">{singleBoat.name}</h2>

        <p className="text-[12px] text-[#6D6D6D]">Last Update</p>
        <p className="text-[15px] font-bold">{singleBoat.updated_at.slice(0, 10)}</p>
        <p className="text-[12px] text-[#6D6D6D] mt-3">Description</p>
        
        <p className="font-thin text-[12px] overflow-auto grow h-[6rem] w-[100%] break-words">{singleBoat.description}</p>
    </>
}

function WhiteArea({children}){
    return <>
        <div className="bg-white grow p-8 shrink
        rounded-[20px] flex flex-col gap-3 max-w-[15rem] sm:max-w-[20rem] relative">
            {children}
        </div>
    </>
}

export default function BoatDetail({boatData}){
    const params = useParams().boatID

    const [singleBoat, setSingleBoat] = useState(null)

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (singleBoat == null){
            setSingleBoat(_.findWhere(boatData, {id: params}))
        }
        else {
            setIsLoading(false)
        }
    })

    return <>
        <Navbar />
        <AnimatePresence>
            <div className="flex m-8 flex-col">
                {
                    isLoading ? <>
                        <LoadingHero />
                    </>
                    :
                    <>
                        <motion.div
                        initial={{opacity: 0, y: 200}}
                        animate={{opacity: 1, y: 0}}
                        transition={{
                            type: "spring",
                            duration: 0.5
                        }}
                        className="flex flex-wrap gap-20 items-center justify-center">
                
                            <BoatAndPlane prefferedColor={singleBoat.color}/>
                            <WhiteArea singleBoat={singleBoat} params={params}>
                                <EditButton params={params}/>
                                <DisplayBoatIdentity singleBoat={singleBoat}/>
                                <BoatProperties>
                                    <CapacityDisplay singleBoat={singleBoat} />
                                    <ColorDisplay singleBoat={singleBoat}/>
                                    <SailingDisplay singleBoat={singleBoat}/>
                                </BoatProperties>
                            </WhiteArea>
                        </motion.div>
                    </>
                }
            </div>
        </AnimatePresence>
    </>
}