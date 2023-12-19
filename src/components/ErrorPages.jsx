import { motion } from "framer-motion"

import BrokenBoat from '../assets/brokenboat'

export default function ErrorPage({errorMessage}){
    return <>
        <motion.div
        initial={{scale: 0}}
        animate={{scale: 1}}
        exit={{scale: 0, opacity: 0}}
        transition={{
            type: "spring",
            duration: 0.4
        }}
        className="m-8 text-white text-center flex flex-col items-center">
            <BrokenBoat />
            <h2 className='text-xl'>Something doomed our dock!</h2>
            <p className='font-thin'>
                {errorMessage}
            </p>
        </motion.div>
    </>
}