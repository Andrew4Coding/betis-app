import ColorPick from "../colorPick";
import BoatAndPlane from "../../BoatAndPlane";
import PopUp from "../../popUp";

import { GetColorName } from "../../../const";

import {postFetch} from "../../../FetchLogic/postFetch";

import { AnimatePresence } from "framer-motion";
import { useState } from "react";

function WhiteArea({
    boatName, setBoatName,
    boatDescription, setBoatDescription,

    isNameValid, setIsNameValid,
    isDescriptionValid, setIsDescriptionValid,


    children}) {
    
    return <div className="bg-white grow p-8 shrink font-Poppins md:grow-0
    rounded-[20px] flex flex-col gap-3">
        <p className="text-[15px] text-[#6D6D6D]">Name</p>
        <input type="text" className="px-4 py-2 shrink w-[100%] outline-none rounded-lg shadow-sm border-[1px] font-bold placeholder:font-normal placeholder:text-[15px]"
        placeholder="Enter your boat name" 
        value={boatName}
        onChange={(event) => {
            if (event.target.value === ''){
                setIsNameValid(false)
            }
            else{
                setIsNameValid(true)
            }
            setBoatName(event.target.value)
        }}
        />
        {
            !isNameValid && <p className="text-[10px] font-normal text-red-600">* Boat name should not be empty!</p>
        }
        

        <p className="text-[15px] text-[#6D6D6D] mt-3">Description</p>
        <textarea cols="30" rows="10" className="p-4 max-h-[10rem] text-[12px] font-thin outline-none rounded-lg shadow-sm border-[1px]" 
        placeholder="Enter your boat description"
        value={boatDescription}
        onChange={(event) => {
            if (event.target.value === ''){
                setIsDescriptionValid(false)
            }
            else{
                setIsDescriptionValid(true)
            }
            setBoatDescription(event.target.value)
        }}
        />
        {
            !isDescriptionValid && <p className="text-[10px] font-normal text-red-600">* Boat description should not be empty!</p>
        }

        {children}
    </div>
}

function CapacityButton({boatCapacity, setBoatCapacity}){
    return <>
        <li className="flex gap-1">
            <div className="flex items-center gap-3">
                <p className="">Capacity</p>
                <div className="bg-mainBlack px-4 py-2 text-white rounded-lg w-[3rem] text-center">{boatCapacity}</div>
            </div>
            <div className="flex flex-col">
                <button className="hover:scale-110"
                onClick={() => setBoatCapacity(boatCapacity + 1)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"/></svg>
                </button>
                <button className="hover:scale-110"
                onClick={() => {
                    if (boatCapacity > 0){
                        setBoatCapacity(boatCapacity - 1)}
                    }
                }>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"/></svg>
                </button>
            </div>
        </li>
    </>
}

function ColorButton({openColorPick, setOpenColorPick, selectedColor, children}){
    return <>
        <li className="flex items-center gap-3 cursor-pointer">
            {children}
            <p className="">Color</p>
            <div style={{backgroundColor: selectedColor}} className={`px-4 py-2 ${GetColorName(selectedColor) == 'WHITE' ? 'text-black' : 'text-white'} 
            rounded-lg w-[5rem] text-center `}
            onClick={() => setOpenColorPick(!openColorPick)}>
                {GetColorName(selectedColor)}
            </div>
        </li>
    </>
}

function SailingButton({isSailing, setIsSailing}){
    return <>
        <li className="flex items-center gap-3">
            <p className="">Sailing</p>
            <button className="bg-mainBlack px-4 py-2 text-white rounded-lg w-[4rem]"
            onClick={() => setIsSailing(!isSailing)}>
                {isSailing ? 'Yes' : 'No'}
            </button>
        </li>
    </>
}

function SaveButton({setIsOpenPopup, postDict, isNameValid, isDescriptionValid}){
    return <>
        <div className="flex justify-center mt-3">
            <button className="w-fit bg-mainSeaShade px-8 py-3 text-white rounded-full text-[12px]
            duration-100 hover:scale-110 shadow-lg"
            onClick={() => {
                if (isNameValid && isDescriptionValid){
                    postFetch(postDict, setIsOpenPopup)
                    setIsOpenPopup(true);
                }
            }
            }>
                Save
            </button>
        </div>
    </>
}

function BoatProperties({children}){
    return <div className="mt-3">
        <ul className="flex gap-3 flex-wrap justify-end text-[12px]">
            {children}
        </ul>
    </div>
}

export default function CreateHero(){
    const [openColorPick, setOpenColorPick] = useState(false)
    
    const [isNameValid, setIsNameValid] = useState(false)
    const [isDescriptionValid, setIsDescriptionValid] = useState(false)

    // Post State
    const [boatName, setBoatName] = useState('')
    const [boatDescription, setBoatDescription] = useState('')
    const [boatCapacity, setBoatCapacity] = useState(10)
    const [selectedColor, setSelectedColor] = useState('#FF8080')
    const [isSailing, setIsSailing] = useState(false)

    const [isOpenPopup, setIsOpenPopup] = useState(false)

    return <>
        <AnimatePresence>
            {isOpenPopup && 
            <PopUp isOpenPopup={isOpenPopup} setIsOpenPopup={setIsOpenPopup} popupMessage={"Boat Added Successfully!"}/>}
        </AnimatePresence>
        <div className="flex m-8 flex-col">
            <div className="flex flex-wrap gap-10 items-center justify-center">
                <BoatAndPlane prefferedColor={GetColorName(selectedColor)}/>
                <WhiteArea  boatName={boatName} setBoatName={setBoatName} 
                            boatDescription={boatDescription} setBoatDescription={setBoatDescription}
                            isNameValid={isNameValid} setIsNameValid={setIsNameValid}
                            isDescriptionValid={isDescriptionValid} setIsDescriptionValid={setIsDescriptionValid}>
                    <BoatProperties>
                        <CapacityButton boatCapacity={boatCapacity} setBoatCapacity={setBoatCapacity}/>
                        <ColorButton openColorPick={openColorPick} setOpenColorPick={setOpenColorPick} selectedColor={selectedColor}>
                            {openColorPick && 
                            <ColorPick setIsOpenColorPick={setOpenColorPick} setSelectedColor={setSelectedColor}/>}
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
        </div>
    </>
}