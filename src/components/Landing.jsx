import { useEffect, useState } from "react"
import { motion } from 'framer-motion'
import { useNavigate } from "react-router"

import MainBoat from "../assets/mainboat"
import LoadingHero from "./Loading"
import { BoatColor } from "../UsedConst"
import Navbar, { CreateButton, LoginNewToken } from "./Navbar"
import { Redirect } from "../App"

function Card({boat}){
    const navigate = useNavigate()
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

            <div className="bg-white p-4 grow flex flex-col gap-3 rounded-3xl
            sm:gap-5
            sm:p-8
            sm:h-[20rem]">
                <h2 className="text-center text-[12px] font-bold h-[3rem] break-words
                sm:text-[20px]
                sm:truncate">{boat.name}</h2>

                <p className="text-[10px] font-thin text-[#898989] text-center grow overflow-auto break-words
                h-[5rem]
                sm:max-h-[10rem] sm:text-[12px]">
                    {boat.description}
                </p>
                <div className="flex justify-center">
                    <button className="rounded-full bg-mainSeaShade w-fit px-5 py-3 text-white shadow-lg text-[10px]
                    sm:px-8 sm:py-3 sm:text-[12px]
                    duration-100 hover:scale-110"
                    onClick={() => {
                        navigate(`/betis-app/${boat.id}`)
                    }}>Detail</button>
                </div>
            </div>
        </motion.div>
    </>
}

export default function Landing({boatData, search, setSearch, isLoading}){
    const [searchText, setSearchText] = useState('')
    const navigate = useNavigate()

    // useEffect(() => {
    //     Redirect(navigate)
    // }, [])

    useEffect(() => {
        if (search){
            const itemToSearch = boatData.filter(function(item) {
                if (searchText){
                    return item.name.toLowerCase().includes(searchText.toLowerCase())
                }
                else {
                    return item.name
                }
            })
            setSearch(itemToSearch)
        }
    }, [searchText])

    return <>
        <Navbar>
            <CreateButton />
            <LoginNewToken />
        </Navbar>
        {
            isLoading ? 
            <LoadingHero />
            :
            <>
                <div className="m-8 flex justify-center" >
                    <div className="flex flex-col justify-center">
                        <h2 className="text-white text-sm sm:text-xl">Search your boat collection here!</h2>
                        <input type="text" className="mt-2 outline-none rounded-lg px-8 py-3 placeholder:font-thin
                        text-xs sm:text-sm shrink w-[100%]" 
                        placeholder="Search here" value={searchText}
                        
                        onChange={(event) => setSearchText(event.target.value)}/>
                    </div>
                </div>
                    {
                        search == 0 && boatData != [] && 
                        <div className="mx-8 my-20 text-white text-center">
                            Keyword not found :v
                        </div> 
                    }
                <div className="m-8 grid grid-cols-mobileGrid gap-5
                sm:gap-10
                sm:grid-cols-myGrid">
                    {
                        search.map(((boat) => {
                        return <Card boat={boat} key={boat.id}/>  
                        }))
                    }
                </div>
            </>
        }
    </>
}