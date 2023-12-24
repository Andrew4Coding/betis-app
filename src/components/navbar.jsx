import { useNavigate } from "react-router"

function Logo(){
    const navigate = useNavigate()

    return <div className="grow flex items-center gap-5 mr-5">
        <svg className="cursor-pointer duration-100 hover:scale-110" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width='60px' height='60px'version="1.1" x="0px" y="0px" viewBox="0 0 256 256" enableBackground="new 0 0 256 256" xmlSpace="preserve"
        onClick={() => navigate('/')}>
            <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>
            <g><g><path fill="#FFFFFF" d="M133.6,189.8h111.3h1.1c0,24.8-20.1,45-44.9,45H54.9c-24.8,0-44.9-20.1-44.9-45h1.1h111.3V21.2h11.2V189.8L133.6,189.8z M246,178.6H144.9V77.4L246,178.6L246,178.6z M43.7,83C10,139.2,10,178.6,10,178.6h101.1c0,0-11.2-16.9-11.2-67.4c0-50.6,11.2-89.9,11.2-89.9S77.4,26.8,43.7,83L43.7,83z"/></g></g>
        </svg>
        <h2 className="text-[20px] font-bold text-white hidden sm:flex ">Betis Boat Collection</h2>
    </div>
}

// Create Boat Child Button
export function CreateButton(){
    const navigate = useNavigate()
    return <div>
        <button className="bg-white py-3 flex gap-3 rounded-full font-bold min-h-[3rem]
        duration-100 hover:scale-110
        px-6 sm:px-10"
        onClick={() => navigate('/create')}>
            + 
            <p className="hidden sm:flex">
                Buy
            </p>
        </button>
    </div>
}


// New Token Child Button
export function LoginNewToken(){
    const navigate = useNavigate()
    return <div>
        <button className="bg-white py-3 flex items-center justify-center gap-3 rounded-full font-bold
        duration-100 hover:scale-110 min-h-[3rem]
        px-6 sm:px-10"
        onClick={() => navigate('/newToken')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-key"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>
            <p className="hidden sm:flex">New Token</p>
        </button>
    </div>
}

export default function Navbar({children}){
    return <>
        <div className="flex items-center m-12">
            <Logo />
            <div className="flex gap-5 flex-wrap justify-end">
                {children}
            </div>
        </div>
    </>
}