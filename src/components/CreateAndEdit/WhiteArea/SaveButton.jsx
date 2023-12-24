import { postFetch } from "../../../FetchLogic";

export default function SaveButton({setIsOpenPopup, postDict, isNameValid, isDescriptionValid}){
    return <>
        <div className="flex justify-center mt-3">
            <button className="w-fit bg-mainSeaShade px-8 py-3 text-white rounded-full text-[12px]
            duration-100 hover:scale-110 shadow-lg"
            onClick={() => {
                // Firstly, check if name and description are valid
                if (isNameValid && isDescriptionValid){
                    // Try to do a post method
                    postFetch(postDict, setIsOpenPopup, localStorage.getItem('saved_token'))

                    // If post fetch done, show a popup
                    setIsOpenPopup(true);
                }
            }
            }>
                Save
            </button>
        </div>
    </>
}