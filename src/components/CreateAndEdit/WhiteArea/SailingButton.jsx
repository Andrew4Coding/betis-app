export default function SailingButton({isSailing, setIsSailing}){
    return <>
        <li className="flex items-center gap-3">
            <p className="">Sailing</p>
            <button className="bg-mainBlack px-4 py-2 text-white rounded-lg w-[4rem]"
            onClick={() => setIsSailing(!isSailing)}>
                {isSailing ? 'Yes' : 'No'}
            </button>
        </li>
    </>
}