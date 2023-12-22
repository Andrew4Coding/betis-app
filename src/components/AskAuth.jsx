import { useState } from "react"

export default function AskAuth({setBearerToken, boatData, setBoatData}){
    const [auth, setAuth] = useState('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJiMzdmZTM3OC01N2JjLTQ1N2MtYTM2OS0zN2E1NmViYTFmNjkiLCJpZCI6ImIzN2ZlMzc4LTU3YmMtNDU3Yy1hMzY5LTM3YTU2ZWJhMWY2OSIsInVzZXJuYW1lIjoiYW5kcmV3LmRldml0byIsImlhdCI6MTcwMTk2MDUyMywiZXhwIjoxNzA0NTUyNTIzfQ.mBB_8hb7yOGPUbZlnL9o_5K9x5p0xf5mbQki-jR0RNA')

    return <>
        <div className="h-[100vh] justify-center flex items-center">
            <div className="m-8 flex flex-col items-center gap-5">
                <svg className="cursor-pointer duration-100 hover:scale-110" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width='60px' height='60px'version="1.1" x="0px" y="0px" viewBox="0 0 256 256" enableBackground="new 0 0 256 256" xmlSpace="preserve"
                onClick={() => window.location.reload(false)}>
                    <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>
                    <g><g><path fill="#FFFFFF" d="M133.6,189.8h111.3h1.1c0,24.8-20.1,45-44.9,45H54.9c-24.8,0-44.9-20.1-44.9-45h1.1h111.3V21.2h11.2V189.8L133.6,189.8z M246,178.6H144.9V77.4L246,178.6L246,178.6z M43.7,83C10,139.2,10,178.6,10,178.6h101.1c0,0-11.2-16.9-11.2-67.4c0-50.6,11.2-89.9,11.2-89.9S77.4,26.8,43.7,83L43.7,83z"/></g></g>
                </svg>

                <h2 className="font-thin text-white">Enter Your Boat Auth</h2>
                <input type="text" placeholder="" className="px-8 py-2 rounded-lg outline-none max-w-[80vw]"
                value={auth}
                onChange={(event) => setAuth(event.target.value)}
                onKeyDown={(event) => {
                    if (event.key == 'Enter' && auth){
                        setBearerToken(auth)
                        localStorage.setItem('saved_token', auth)
                    }
                }}/>
                {
                    !auth && <p className="text-white font-thin text-sm">* Bearer token must not be empty!</p>
                }
                <button className="bg-mainSeaShadeDarken px-8 py-3 rounded-xl text-white text-sm 
                duration-100 hover:scale-110"
                onClick={() => {
                    setBearerToken(auth)
                    localStorage.setItem('saved_token', auth)
                }}>Enter</button>
            </div>
        </div>
    </>
}