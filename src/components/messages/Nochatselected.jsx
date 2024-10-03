import { TiMessage } from "react-icons/ti";
export default function NoCHatSelected(){
    return (
        <div className="flex item-center justify-center w-full h-full">
            <div className="px-4 text-center sm:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
                <p >welcome anubrath</p>
                <p>select a chat to start messaging</p>
                <TiMessage />

            </div>

        </div>
    )
}