import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

import Navbar from "../../Navbar";
import WhiteArea from "../WhiteArea/WhiteArea"
import BoatProperties from "../WhiteArea/BoatProperties"
import CapacityButton from "../WhiteArea/CapacityButton"
import ColorButton from "../WhiteArea/ColorButton"
import SailingButton from "../WhiteArea/SailingButton"
import ColorPick from "../ColorOption";
import BoatAndPlane from "../../BoatAndPlane";
import LoadingHero from "../../LoadingHero";
import PopUp from "../../PopUp";

import { BoatColor, GetColorName } from "../../../UsedConst";

import { getDetailFetch, deleteFetch, patchFetch} from "../../../FetchLogic";

export default function EditHero({isOpenPopup, setIsOpenPopup}){
    const params = useParams().boatID

    const [openColorPick, setOpenColorPick] = useState(false)
    
    const [isNameValid, setIsNameValid] = useState(false)
    const [isDescriptionValid, setIsDescriptionValid] = useState(false)

    // Post State
    const [boatName, setBoatName] = useState('')
    const [boatDescription, setBoatDescription] = useState('')
    const [boatCapacity, setBoatCapacity] = useState(10)
    const [selectedColor, setSelectedColor] = useState('#FF8080')
    const [isSailing, setIsSailing] = useState(false)

    const [popupMessage, setPopUpMessage] = useState('')

    const [isLoading, setIsLoading] = useState(true)

    const [boatData, setBoatData] = useState('')

    useEffect(() => {
        getDetailFetch(setBoatData, setIsLoading, params, localStorage.getItem('saved_token'))
    }, [])

    useEffect(() => {
        if (boatData){
            // set all data to each item
            setBoatName(boatData.name)
            setBoatDescription(boatData.description)
            setBoatCapacity(boatData.capacity)
    
            setIsSailing(boatData.is_sailing)
            setSelectedColor(BoatColor[boatData.color][0])
    
            setIsNameValid(true)
            setIsDescriptionValid(true)
        }
        
    }, [boatData])

    return <>
        <Navbar />
        <AnimatePresence>
            {isOpenPopup && 
            <PopUp isOpenPopup={isOpenPopup} setIsOpenPopup={setIsOpenPopup} popupMessage={popupMessage}/>}
        </AnimatePresence>
        {
            isLoading && (boatData != null) ? <LoadingHero />
            :
            <motion.div 
            initial={{opacity: 0, y: 200}}
            animate={{opacity: 1, y: 0}}
            transition={{
                type: "spring",
                duration: 0.5
            }}
            className="flex m-8 flex-col">
                <div className="flex flex-wrap gap-10 items-center justify-center">
                    <BoatAndPlane prefferedColor={GetColorName(selectedColor)}/>
                    <WhiteArea  boatName={boatName} setBoatName={setBoatName} 
                                boatDescription={boatDescription} setBoatDescription={setBoatDescription}
                                isNameValid={isNameValid} setIsNameValid={setIsNameValid}
                                isDescriptionValid={isDescriptionValid} setIsDescriptionValid={setIsDescriptionValid}
                                EditValue={''}>

                        <div className="absolute right-8 duration-100 hover:scale-125 hover:rotate-6"
                        onClick={() => {
                            setPopUpMessage('Boat Sold Successfully!')
                            deleteFetch(params, setIsOpenPopup, localStorage.getItem('saved_token'))
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#FF8080" stroke="#FF8080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                        </div>
                        
                        <BoatProperties>
                            <CapacityButton boatCapacity={boatCapacity} setBoatCapacity={setBoatCapacity}/>
                            <ColorButton openColorPick={openColorPick} setOpenColorPick={setOpenColorPick} selectedColor={selectedColor}>
                                {openColorPick && 
                                <ColorPick setIsOpenColorPick={setOpenColorPick} setSelectedColor={setSelectedColor}/>}
                            </ColorButton>
                            <SailingButton isSailing={isSailing} setIsSailing={setIsSailing}/>
                        </BoatProperties>
                        <div className="flex justify-center mt-3">
                            <button className="w-fit bg-mainSeaShade px-8 py-3 text-white rounded-full text-[12px]
                            duration-100 hover:scale-110 shadow-lg"
                            onClick={() => {
                                if (isNameValid && isDescriptionValid){
                                    patchFetch(params, {
                                        name: boatName,
                                        description: boatDescription,
                                        capacity: parseInt(boatCapacity),
                                        color: GetColorName(selectedColor),
                                        is_sailing: isSailing

                                    }, setIsOpenPopup, localStorage.getItem('saved_token'))
                                    setPopUpMessage('Boat Edited Successfully!')
                                    setIsOpenPopup(true);
                                }
                            }
                            }>
                                Save
                            </button>
                        </div>
                    </WhiteArea>
                </div>
            </motion.div>
        }
    </>
}