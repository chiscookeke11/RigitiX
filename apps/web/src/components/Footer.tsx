import { Mail01Icon, MapsIcon } from "hugeicons-react";
import { SocialMediaData } from "../data/SocialMediaLinks";
import { companyData, platformData, supportData } from "../data/Footer_nav_links";
import { Button } from "./Button";
import { useState } from "react";



export default function Footer() {
    const [emailAddress, setEmailAddress] = useState("")



    return (
        <footer className="w-full flex items-center gap-10 justify-between py-12 px-16  " >

            <div className="w-full flex flex-col items-start bg-white rounded-[37px] h-full gap-6 px-10 py-14 max-w-[516px] " >
                <a href="#" className="w-[141.98px] h-[90px] flex items-center justify-center " >
                    <img src="/images/Company_logos/rigitiX_logo.png" alt="logo" />
                </a>

                <p className="text-[#737373] text-base font-medium " >  rigitiX’s online event ticketing software was built on the idea that anyone, anywhere in the world wanting to organise an event should have the tools to simply do so. </p>
                <p className="text-[#737373] text-base font-medium flex items-center justify-center gap-[3.87px] py-[6.78px] px-[10.65px] bg-[#F5F5F5] rounded-[22.06px] "><MapsIcon size={16} color="#A3A3A3" /> 1234 Akwa-Ibom, Cross River State, Nigeria</p>
                <p className="text-[#737373] text-base font-medium flex items-center justify-center gap-[3.87px] py-[6.78px] px-[10.65px] bg-[#F5F5F5] rounded-[22.06px]"><MapsIcon size={16} color="#A3A3A3" /> +234 81 0000 0000</p>



                <form className="w-full flex flex-col items-start gap-5 my-4 " >
                    <label htmlFor="email" className="w-full flex flex-col gap-1 items-start " >
                        <span className="font-medium text-sm text-[#262626] " >Email Address</span>
                        <div className=" flex gap-2 p-2 bg-[#FAFAFA] w-full text-[#A3A3A3] rounded-lg " >
                            <Mail01Icon />
                            <input
                                className="w-full text-sm font-normal outline-none border-none focus:border-0 focus:outline-0 "
                                name="email"
                                id="email"
                                type="email"
                                placeholder="hello@example.com"
                                value={emailAddress}
                                onChange={(e) => setEmailAddress(e.target.value)}
                            />
                        </div>
                    </label>

                    <Button variant="primary" className="w-full rounded-3xl text-sm font-medium p-2 hover:bg-blue-800! duration-300 ease-in-out transition-all    " >Subscribe</Button>
                </form>
            </div>




            <div className=" flex-1 w-full h-full bg-[#221030] py-16 px-12 flex flex-col items-start justify-between rounded-[37px] gap-16" >

                <div className=" w-full grid grid-cols-3 place-items-start justify-items-start justify-start px-8 " >
                    <div className="flex flex-col gap-4 items-start  " >
                        <h4 className="text-sm font-medium text-[#737373]  tracking-wider " >PLATFORM</h4>
                        <ul className="flex flex-col items-start gap-3 text-[#D4D4D4] font-medium text-base " >
                            {platformData.map((data, i) => (
                                <a href={data.path} key={i} className=" hover:text-[#737373] duration-200 ease-in-out transition-all " > {data.title} </a>
                            ))}
                        </ul>
                    </div>


                    <div className="flex flex-col gap-4 items-start  " >
                        <h4 className="text-sm font-medium text-[#737373]  tracking-wider ">COMPANY</h4>
                        <ul className="flex flex-col items-start gap-3 text-[#D4D4D4] font-medium text-base ">
                            {companyData.map((data, i) => (
                                <a href={data.path} key={i} className=" hover:text-[#737373] duration-200 ease-in-out transition-all "> {data.title} </a>
                            ))}
                        </ul>
                    </div>



                    <div className="flex flex-col gap-4 items-start  " >
                        <h4 className="text-sm font-medium text-[#737373] tracking-wider  ">SUPPORT</h4>
                        <ul className="flex flex-col items-start gap-3 text-[#D4D4D4] font-medium text-base ">
                            {supportData.map((data, i) => (
                                <a href={data.path} key={i} className=" hover:text-[#737373] duration-200 ease-in-out transition-all "> {data.title} </a>
                            ))}
                        </ul>
                    </div>

                </div>


                <hr className="w-full border border-[#522672]  " />


                <div className="w-full flex items-center justify-between gap-10 " >
                    <small className="text-[#A3A3A3] font-normal text-base " >© 2025 rigitiX. All rights reserved.</small>


                    <div className=" w-fit flex  items-center justify-center gap-3 " >
                        {SocialMediaData.map((data, i) => (
                            <a href={data.url} key={i} className="h-[36.79px] w-[36.79px] bg-[#784DEF1A] p-2 rounded-full flex items-center justify-center border border-[#784DEF3D] transform duration-200 ease-in-out hover:scale-125 " >
                                {data.icon}
                            </a>
                        ))}

                    </div>
                </div>

            </div>


        </footer>
    )
}