import ColorPick from "../colorPick";

import WhiteArea from "../WhiteArea/WhiteArea"
import BoatProperties from "../WhiteArea/BoatProperties"
import CapacityButton from "../WhiteArea/CapacityButton"
import ColorButton from "../WhiteArea/ColorButton"
import SailingButton from "../WhiteArea/SailingButton"
import SaveButton from "../WhiteArea/SaveButton"

import BoatAndPlane from "../../BoatAndPlane";
import PopUp from "../../popUp";

import { GetColorName } from "../../../UsedConst";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Navbar from "../../navbar";
import { Redirect } from "../../../App";
import { useNavigate } from "react-router";

export default function CreateHero({isOpenPopup, setIsOpenPopup}){
    const [openColorPick, setOpenColorPick] = useState(false)
    
    const [isNameValid, setIsNameValid] = useState(false)
    const [isDescriptionValid, setIsDescriptionValid] = useState(false)

    // Post State
    const [boatName, setBoatName] = useState('')
    const [boatDescription, setBoatDescription] = useState('')
    const [boatCapacity, setBoatCapacity] = useState(10)
    const [selectedColor, setSelectedColor] = useState('#FF8080')
    const [isSailing, setIsSailing] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        Redirect(navigate)
    })
    
    return <>
        <Navbar />
        <AnimatePresence>
            {isOpenPopup && 
            <PopUp isOpenPopup={isOpenPopup} setIsOpenPopup={setIsOpenPopup} popupMessage={"Boat Added Successfully!"}/>}
        </AnimatePresence>
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
                            isDescriptionValid={isDescriptionValid} setIsDescriptionValid={setIsDescriptionValid}>
                    <BoatProperties>
                        <CapacityButton boatCapacity={boatCapacity} setBoatCapacity={setBoatCapacity}/>
                        <ColorButton openColorPick={openColorPick} setOpenColorPick={setOpenColorPick} selectedColor={selectedColor}>
                            <AnimatePresence>
                                {openColorPick && 
                                <ColorPick setIsOpenColorPick={setOpenColorPick} setSelectedColor={setSelectedColor}/>}
                            </AnimatePresence>
                        </ColorButton>
                        <SailingButton isSailing={isSailing} setIsSailing={setIsSailing}/>
                    </BoatProperties>
                    <SaveButton setIsOpenPopup={setIsOpenPopup} postDict={{
                        name: boatName,
                        description: boatDescription,
                        capacity: parseInt(boatCapacity),
                        color: GetColorName(selectedColor),
                        is_sailing: isSailing
                    }} isNameValid={isNameValid} isDescriptionValid={isDescriptionValid}/>
                </WhiteArea>
            </div>
        </motion.div>
    </>
}