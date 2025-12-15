import { ArrowRight01Icon } from "hugeicons-react";
import { Button } from "../Button";



export default function Hero() {
    return (
        <section className=" w-full h-[507px] mx-auto rounded-3xl flex flex-col items-start justify-end bg-gray-300 px-10 py-8 my-12 bg-no-repeat bg-center bg-cover relative overflow-hidden " style={{ backgroundImage: "url('/images/home-hero.jpg')" }} >
            <div className="w-full h-full bg-black/20 absolute top-0 left-0 " />


            <div className="w-full max-w-[748px] flex flex-col items-start gap-[18px] text-white z-10 "  >

                <h1 className=" text-[66px] font-semibold leading-[76px] " >Your Ultimate Event Experience Starts Here</h1>
                <p className="text-lg font-medium " >Discover, book and manage tickets for top events seamlessly</p>
                <Button variant="primary" className="w-fit rounded-3xl text-sm font-medium p-2 hover:bg-blue-800! duration-300 ease-in-out transition-all flex items-center gap-1" ><span>Explore Events</span> <ArrowRight01Icon size={15} /></Button>
            </div>

        </section>
    )
}