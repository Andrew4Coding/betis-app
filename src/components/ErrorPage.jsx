import { motion } from "framer-motion"

import BrokenBoat from '../assets/brokenboat'

export default function ErrorPage({errorMessage}){
    return <>
        <motion.div
        // Animation setup
        initial={{scale: 0}}
        animate={{scale: 1}}
        exit={{scale: 0, opacity: 0}}
        transition={{
            type: "spring",
            duration: 0.4
        }}

        className="fixed h-full w-full z-10 bg-black bg-opacity-20 text-center flex flex-col items-center justify-center" onClick={(event) => {
            // If area outside the popup is clicked, then hard reload
            if (event.target == event.currentTarget){
                window.location.reload(false)
            }
        }}>
            <div className="bg-white flex flex-col items-center p-8 max-w-[80%] max-h-[50%]">
                <div className="w-[50%]">
                    <BrokenBoat />
                </div>
                <div>
                    <h2 className='text-xl'>Something doomed our dock!</h2>
                    <p className='font-bold text-xl m-3 text-red-500'>
                        {errorMessage}
                    </p>
                    <p className="font-thin text-[12px] my-3">
                        {
                            // If Error 401, then show client a message that their token is somehow invalid
                            errorMessage == 'Error 401' && '*Try to check if your token is correct'
                        }
                    </p>
                    <button className="bg-mainSeaShade text-white text-[12px] px-8 py-3 rounded-lg duration-100 hover:scale-110"
                    onClick={() => {
                        // If refresh button clicked, then hard reload the page
                        window.location.reload(false)
                    }
                    }>Refresh Page</button>
                </div>
            </div>
        </motion.div>
    </>
}