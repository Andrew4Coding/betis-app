import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

// import {} from "../assets/"
export default function DeveloperHero(){
    const [isOpenDeveloperPopUp, setIsOpenDeveloperPopup] = useState(false)
    return <>
        <div className="fixed bottom-10 right-10 flex flex-col items-end gap-5"
        onMouseLeave={() => {
            setIsOpenDeveloperPopup(false)
        }}>
            <AnimatePresence>
                {
                    isOpenDeveloperPopUp && 
                    <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{
                        type: "spring",
                        duration: 0.7
                    }}
                    exit={{
                        opacity: 0
                    }}
                    className="bg-white p-8 flex flex-col items-center rounded-xl max-w-[50vw] text-center gap-2">
                        {/* <div className="bg-myProfile w-20 h-20 bg-cover mb-5 rounded-full duration-100 hover:scale-110"></div> */}
                        <div></div>
                        <h2>Created by Andrew Devito Aryo</h2>
                        <p className="text-sm font-thin">From Ilmu Komputer Gaung 2023</p>
                        <p className="text-sm font-bold underline duration-100 hover:scale-110">
                            <a href="https://github.com/Andrew4Coding/betis-app/" target="_blank">
                                My Github
                            </a>
                        </p>
                    </motion.div>
                }

            </AnimatePresence>
            <button className={`w-16 h-16 text-2xl rounded-full ${isOpenDeveloperPopUp ? 'bg-mainSeaShade text-white' : 'bg-white'} duration-100 hover:scale-110 hover:bg-mainSeaShade
            hover:text-white`}             
            onMouseOver={() => {
                setIsOpenDeveloperPopup(true)
            }}

            onClick={() => {
                setIsOpenDeveloperPopup(!isOpenDeveloperPopUp)
            }}
            >
                ?
            </button>
        </div>
    </>
}