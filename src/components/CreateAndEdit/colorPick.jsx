import _ from 'underscore'
import { motion } from 'framer-motion'

import {BoatColor} from '../../UsedConst'

function ColorPickButton({assignedColor, setIsOpenColorPick, setSelectedColor}){
    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    function handleSelected(){
        setIsOpenColorPick(false)
        setSelectedColor(assignedColor)
    }
    return <>
        <motion.button 
            variants={item}
            style={{backgroundColor:assignedColor}} className='w-[20px] h-[20px] shadow-xl'
            onClick={handleSelected}>
        </motion.button>
    </>
}

export default function ColorPick({setIsOpenColorPick, setSelectedColor}){    
    const container = {
        hidden: { opacity: 1, scale: 0, y:-90, x:30},
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.05,
            staggerChildren: 0.05
          }
        },
        exit: {
            opacity: 0,
            scale: 1
        }
      };

    return <>
        <motion.div 
        variants={container}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{
            type: "spring",
            duration: 0.4
        }}
        className="bg-white  absolute grid grid-cols-3 gap-3 p-3 -translate-y-24 translate-x-4
        shadow-xl">
            {
                _.values(BoatColor).map((color) => {
                    return <ColorPickButton assignedColor={color[0]} setIsOpenColorPick={setIsOpenColorPick} setSelectedColor={setSelectedColor}
                    key={color}/>
                })
            }
        </motion.div>
    </>
}