function Logo(){
    return <div className="grow flex items-center gap-5">
        <a href="/">
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width='60px' height='60px'version="1.1" x="0px" y="0px" viewBox="0 0 256 256" enableBackground="new 0 0 256 256" xmlSpace="preserve">
                <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>
                <g><g><path fill="#FFFFFF" d="M133.6,189.8h111.3h1.1c0,24.8-20.1,45-44.9,45H54.9c-24.8,0-44.9-20.1-44.9-45h1.1h111.3V21.2h11.2V189.8L133.6,189.8z M246,178.6H144.9V77.4L246,178.6L246,178.6z M43.7,83C10,139.2,10,178.6,10,178.6h101.1c0,0-11.2-16.9-11.2-67.4c0-50.6,11.2-89.9,11.2-89.9S77.4,26.8,43.7,83L43.7,83z"/></g></g>
            </svg>
        </a>
        <h2 className="font-Poppins text-[20px] font-bold text-white hidden sm:flex ">Betis Boat Collection</h2>
    </div>
}

function CreateButton(){
    return <div>
        <a href="/create">
            <button className="bg-white px-10 py-3 flex gap-3 font-Poppins rounded-full font-bold
            duration-100 hover:scale-110">+ <p className="hidden sm:flex">Create</p></button>
        </a>
    </div>
}
export default function Navbar(){
    return <>
        <div className="flex items-center m-12">
            <Logo />
            <CreateButton />
        </div>
    </>
}