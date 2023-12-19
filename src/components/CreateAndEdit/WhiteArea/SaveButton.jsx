import { postFetch } from "../../../FetchLogic";
export default function SaveButton({setIsOpenPopup, postDict, isNameValid, isDescriptionValid}){
    return <>
        <div className="flex justify-center mt-3">
            <button className="w-fit bg-mainSeaShade px-8 py-3 text-white rounded-full text-[12px]
            duration-100 hover:scale-110 shadow-lg"
            onClick={() => {
                if (isNameValid && isDescriptionValid){
                    postFetch(postDict, setIsOpenPopup)
                    setIsOpenPopup(true);
                }
            }
            }>
                Save
            </button>
        </div>
    </>
}