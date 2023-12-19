export default function BoatProperties({children}){
    return <div className="mt-3">
        <ul className="flex gap-3 flex-wrap justify-end text-[12px]">
            {children}
        </ul>
    </div>
}