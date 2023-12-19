import { RandomLoadingWords } from "../UsedConst";

export default function LoadingHero(){
    return <>
        <div className="text-white animate-pulse font-light w-full text-center my-10 text-sm">
            {
                RandomLoadingWords == undefined ? 'Scratching Your Boat ... ' : RandomLoadingWords() + '...'
            }
        </div>
    </>
}