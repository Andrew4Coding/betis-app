export default function WhiteArea({
    boatName, setBoatName,
    boatDescription, setBoatDescription,

    isNameValid, setIsNameValid,
    isDescriptionValid, setIsDescriptionValid,

    EditValue='',

    children}) {
    
    return <div className="bg-white grow p-8 shrink 
    rounded-[20px] flex flex-col gap-3 max-w-[30rem] relative">
        <p className="text-[15px] text-[#6D6D6D]">Name</p>
        <input type="text" className="px-4 py-2 w-[100%] outline-none rounded-lg shadow-sm border-[1px] font-bold placeholder:font-normal placeholder:text-[15px]"
        placeholder="Enter your boat name" 

        // If EditValue is an empty string, then client is in detail page. 
        value={EditValue == '' ? boatName : EditValue}
        onChange={(event) => {
            if (event.target.value === ''){
                setIsNameValid(false)
            }
            else{
                setIsNameValid(true)
            }
            setBoatName(event.target.value)
        }}
        />
        {
            !isNameValid && <p className="text-[10px] font-normal text-red-600">* Boat name should not be empty!</p>
        }
        

        <p className="text-[15px] text-[#6D6D6D] mt-3">Description</p>
        <textarea cols="30" rows="10" className="p-4 max-h-[10rem] text-[12px] font-thin outline-none rounded-lg shadow-sm border-[1px]
        w-[100%]" 
        placeholder="Enter your boat description"
        value={boatDescription}
        onChange={(event) => {
            // If the description input is empty, then it's invalid
            if (event.target.value === ''){
                setIsDescriptionValid(false)
            }
            else{
                setIsDescriptionValid(true)
            }

            // Change the state of Boat Description every time the input changed
            setBoatDescription(event.target.value)
        }}
        />
        {
            !isDescriptionValid && <p className="text-[10px] font-normal text-red-600">* Boat description should not be empty!</p>
        }

        {children}
    </div>
}