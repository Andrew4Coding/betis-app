export default function CapacityButton({boatCapacity, setBoatCapacity}){
    return <>
        <li className="flex gap-1">
            <div className="flex items-center gap-3">
                <p className="">Capacity</p>
                <div className="bg-mainBlack px-4 py-2 text-white rounded-lg w-[3rem] text-center">{boatCapacity}</div>
            </div>
            <div className="flex flex-col">
                <button className="hover:scale-110"
                onClick={() => setBoatCapacity(boatCapacity + 1)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"/></svg>
                </button>
                <button className="hover:scale-110"
                onClick={() => {
                    if (boatCapacity > 0){
                        setBoatCapacity(boatCapacity - 1)}
                    }
                }>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"/></svg>
                </button>
            </div>
        </li>
    </>
}