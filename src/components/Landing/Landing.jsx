import MainBoat from "../../assets/mainboat"
import {motion} from 'framer-motion'
import { BoatColor } from "../../const"

function Card({boat}){
    return <>
        <motion.div 
        initial={{opacity: 0, y: 200}}
        animate={{opacity: 1, y: 0}}
        transition={{
            type: "spring",
            duration: 0.5
        }}
        className="bg-mainSea flex flex-col rounded-3xl">
            <div className="grow flex items-center justify-center p-4 sm:p-8">
                <MainBoat mainColor={BoatColor[boat.color][0]} shadeColor={BoatColor[boat.color][1]}/>
            </div>

            <div className="bg-white p-4 font-Poppins grow flex flex-col gap-2 rounded-3xl
            sm:gap-5
            sm:p-8
            sm:h-[20rem]">
                <h2 className="text-center text-[12px] font-bold h-[3rem]
                sm:text-[20px]
                sm:truncate">{boat.name}</h2>

                <p className="text-[10px] font-thin text-[#898989] text-center grow line-clamp-2
                h-[5rem]
                sm:max-h-[10rem] sm:line-clamp-6 sm:text-[12px]">
                    {boat.description}
                </p>
                <div className="flex justify-center">
                    <button className="rounded-full bg-mainSeaShade w-fit px-8 py-3 text-white shadow-lg text-[10px]
                    sm:px-8 sm:py-3 sm:text-[12px]
                    duration-100 hover:scale-110">Detail</button>
                </div>
            </div>
        </motion.div>
    </>
}

export default function Landing({boatData}){
    return <>
        <div className="m-8 grid grid-cols-mobileGrid gap-5
        sm:gap-10
        sm:grid-cols-myGrid">
            {
                boatData.map(((boat) => {
                  return <Card boat={boat} key={boat.id}/>  
                }))
            }  
        </div>
    </>
}