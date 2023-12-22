import { GetColorName } from "../../../UsedConst";

export default function ColorButton({openColorPick, setOpenColorPick, selectedColor, children}){
    return <>
        <li className="flex items-center gap-3">
            {children}
            <p className="">Color</p>
            <div style={{backgroundColor: selectedColor}} className={`px-4 py-2 ${GetColorName(selectedColor) == 'WHITE' ? 'text-black' : 'text-white'} 
            rounded-lg w-[5rem] text-center cursor-pointer`}
            onClick={() => setOpenColorPick(!openColorPick)}>
                {GetColorName(selectedColor)}
            </div>
        </li>
    </>
}