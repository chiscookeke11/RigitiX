import { Call02Icon } from "hugeicons-react";



export default function UtilityNavbar() {
    return (
        <nav className="w-full flex items-center justify-between gap-10 py-4 px-[7%] bg-[#522672] text-white " >

            <small className="flex gap-1 items-center text-xs font-medium " ><Call02Icon size={16} /> +1 2345 56768</small>


            <div className=" flex items-center gap-6 " >
                <small className="text-white/75 text-xs font-medium " >Get 50% Off on ticket purchase</small>
                <span className="h-6 w-0 border border-white/35 " />
                <small className="text-white text-xs font-medium " >Buy Now</small>
            </div>


            united states


        </nav>
    )
}