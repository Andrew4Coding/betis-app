import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { getFetch } from "../FetchLogic"

export default function AskTokenHero({bearerToken, setBearerToken, boatData, setBoatData, setTempSearch, setIsLoading, setErrorMessage}){
    const [typedToken, setTypedToken] = useState('')
    const navigate = useNavigate()

    const [tempData, setTempData] = useState([''])

    function handleClick(){
        getFetch(setTempData, setTempSearch, setIsLoading, setErrorMessage, 'Bearer ' + typedToken)

        setBearerToken(typedToken)

        localStorage.setItem('saved_token', 'Bearer ' + typedToken)
    }

    useEffect(() => {
        if (tempData[0] != ''){
            setBoatData(tempData)
            // localStorage.setItem('saved_data', tempData)
            navigate('/')
        }
    }, [tempData])

    return <>
        <div className="h-[100vh] justify-center flex items-center">
            <div className="m-8 flex flex-col items-center gap-5">

                <svg className="cursor-pointer duration-100 hover:scale-110" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width='60px' height='60px'version="1.1" x="0px" y="0px" viewBox="0 0 256 256" enableBackground="new 0 0 256 256" xmlSpace="preserve"
                onClick={() => {
                    navigate('/')
                }}>
                    <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>
                    <g><g><path fill="#FFFFFF" d="M133.6,189.8h111.3h1.1c0,24.8-20.1,45-44.9,45H54.9c-24.8,0-44.9-20.1-44.9-45h1.1h111.3V21.2h11.2V189.8L133.6,189.8z M246,178.6H144.9V77.4L246,178.6L246,178.6z M43.7,83C10,139.2,10,178.6,10,178.6h101.1c0,0-11.2-16.9-11.2-67.4c0-50.6,11.2-89.9,11.2-89.9S77.4,26.8,43.7,83L43.7,83z"/></g></g>
                </svg>

                <h2 className="font-thin text-white text-xl">Enter Your Boat Token</h2>
                <p className="text-white text-sm">Dont have any token? Click <a href="https://soal-oprec-betis-2024.vercel.app/register" target="_blank" className="underline">here</a></p>
                <input type="text" placeholder="" className="px-8 py-2 rounded-lg outline-none max-w-[80vw]"
                value={typedToken}
                onChange={(event) => setTypedToken(event.target.value)}
                onKeyDown={(event) => {
                    if (event.key == 'Enter' && typedToken){
                        handleClick()
                    }
                }}/>
                {
                    !typedToken && <p className="text-white font-thin text-sm">* Bearer token must not be empty!</p>
                }
                <button className="bg-mainSeaShadeDarken px-8 py-3 rounded-xl text-white text-sm 
                duration-100 hover:scale-110"
                onClick={() => {
                    if (typedToken){
                        handleClick()
                    }
                }}>Enter</button>

                {/* <button className="bg-white" onClick={() => {
                    localStorage.clear()
                }}>Clear Token</button> */}

            </div>
        </div>
    </>
}