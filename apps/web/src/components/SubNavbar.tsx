import { subNavlinksData } from "@/data/SubNalinks";
import { NavLink } from "react-router-dom";



export default function SubNavbar() {
    return (
        <nav className="w-full overflow-x-auto " >
            <ul className="w-fit p-6 flex items-center justify-between gap-5 pr-5 " >
                {
                    subNavlinksData.map((data, i) => (
                        <li key={i} className="shrink-0 text-[#737373] font-medium text-base  " > <NavLink to={data.path} >{data.label}</NavLink> </li>
                    ))
                }
            </ul>
        </nav>
    )
}