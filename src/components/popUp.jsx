import {motion} from 'framer-motion'
import { useNavigate } from 'react-router'
export default function PopUp({setIsOpenPopup, popupMessage}){
    const navigate = useNavigate()

    function handleClick(event){
        if (event.target === event.currentTarget){
            setIsOpenPopup(false)
            navigate('/')
        }
    }

    return <>
        <motion.div 
        initial={{scale: 0, y: -200}}
        animate={{scale: 1, y: 0}}
        exit={{scale: 0, opacity: 0}}
        transition={{
            type: "spring",
            duration: 0.4
        }}
        className="fixed z-10 flex justify-center top-[2rem] w-full h-full"
        onClick={handleClick}>
            <div className="bg-white min-w-[10rem] max-w-full h-[10rem] p-8 sm:min-w-[20rem] sm:h-[15rem] flex flex-col
            items-center justify-center gap-5 rounded-3xl shadow-xl">
                <h2 className="font-bold text-sm sm:text-lg">{popupMessage}</h2>
                <button className=""
                onClick={() => {
                    setIsOpenPopup(false)
                    navigate('/')
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </button>
            </div>
        </motion.div>
    </>
}