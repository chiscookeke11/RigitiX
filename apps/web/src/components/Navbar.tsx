import { Link } from "react-router-dom";
import { navLinksData } from "../data/navlinksData"




export default function Navbar() {
    return (
        <header className="w-11/12 mx-auto py-6   flex items-center justify-between gap-10">
            {/* The logo */}
            <Link to="/home">
                Logo here
            </Link>

            {/* nav links  */}
            <ul className="w-fit flex items-center gap-8 " >
                {
                    navLinksData.map((navlink, index) => (
                        <li key={index} className="text-base font-medium text-black hover:text-[#F87B07] cursor-pointer duration-300 transition-all ease-in-out  " > {navlink.label} </li>
                    ))
                }
            </ul>



            button here
        </header>
    );
}
