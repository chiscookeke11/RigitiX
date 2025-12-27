import { NavLink } from "react-router-dom";
import { navLinksData } from "../data/navlinksData"
import { Button } from "./Button";




export default function Navbar() {
    return (
        <header className="w-11/12 mx-auto py-6   flex items-center justify-between gap-10">
            {/* The logo */}
            <NavLink to="#" className="w-[129px] h-6 flex items-center justify-center " >
                <img src="/images/Company_logos/rigitiX_logo.png" alt="logo" />
            </NavLink>

            {/* nav links  */}
            <ul className="w-fit flex items-center gap-8 " >
                {
                    navLinksData.map((navlink, index) => (
                        <li key={index} className="text-base font-medium text-black hover:text-[#F87B07] cursor-pointer duration-300 transition-all ease-in-out  " > {navlink.label} </li>
                    ))
                }
            </ul>



            <Button variant="primary" className="w-fit rounded-3xl text-sm font-medium p-2 hover:bg-blue-800! duration-300 ease-in-out transition-all  custom-shadow " >Get Started</Button>
        </header>
    );
}
