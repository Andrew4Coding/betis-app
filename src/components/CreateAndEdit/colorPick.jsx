import {BoatColor} from '../../const'
import _ from 'underscore'

function ColorPickButton({assignedColor, setIsOpenColorPick, setSelectedColor}){
    function handleSelected(){
        setIsOpenColorPick(false)
        setSelectedColor(assignedColor)
    }
    return <>
        <button style={{backgroundColor:assignedColor}} className='w-[20px] h-[20px] shadow-xl'
        onClick={handleSelected}></button>
    </>
}
export default function ColorPick({setIsOpenColorPick, setSelectedColor}){    
    return <>
        <div className="bg-white  absolute grid grid-cols-3 gap-3 p-3 -translate-y-24 translate-x-4
        shadow-xl">
            {
                _.values(BoatColor).map((color) => {
                    return <ColorPickButton assignedColor={color[0]} setIsOpenColorPick={setIsOpenColorPick} setSelectedColor={setSelectedColor}
                    key={color}/>
                })
            }
        </div>
    </>
}