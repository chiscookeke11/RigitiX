import { Home05Icon, Mail01Icon, UserIcon } from "hugeicons-react";
import { CustomSelect } from "../CustomSelect";
import { countryOptions } from "@/data/country";
import { GenderOptionsData } from "@/data/GenderOptions";


export default function StepTwo() {
    return (
        <>
            <div className="flex-1 min-w-0 flex flex-col gap-12">
                <main className="w-full flex flex-col ">
                    <div className="w-full flex flex-col items-start gap-3.5  " >
                        <h4 className="text-base font-semibold text-(--text-dark-gray) " >Contact Information</h4>
                        <div className=" w-full bg-(--bg-white-0) h-full rounded-3xl p-[26px] grid grid-cols-2 place-items-center justify-between justify-items-end gap-x-5 gap-y-6 " >

                            <label htmlFor="firstname" className="w-full flex flex-col gap-1 items-start " >
                                <span className="font-medium text-sm text-[#262626] " >First Name</span>
                                <div className=" flex gap-2 p-2 bg-[#FAFAFA] w-full text-[#A3A3A3] rounded-lg " >
                                    <UserIcon />
                                    <input
                                        className="w-full text-sm font-normal outline-none border-none focus:border-0 focus:outline-0 "
                                        name="firstname"
                                        id="firstname"
                                        type="text"
                                        placeholder="Placeholder text..."
                                    // value={emailAddress}
                                    // onChange={(e) => setEmailAddress(e.target.value)}
                                    />
                                </div>
                            </label>


                            <label htmlFor="lastname" className="w-full flex flex-col gap-1 items-start " >
                                <span className="font-medium text-sm text-[#262626] " >Last Name</span>
                                <div className=" flex gap-2 p-2 bg-[#FAFAFA] w-full text-[#A3A3A3] rounded-lg " >
                                    <UserIcon />
                                    <input
                                        className="w-full text-sm font-normal outline-none border-none focus:border-0 focus:outline-0 "
                                        name="lastname"
                                        id="lastname"
                                        type="text"
                                        placeholder="Placeholder text..."
                                    // value={emailAddress}
                                    // onChange={(e) => setEmailAddress(e.target.value)}
                                    />
                                </div>
                            </label>


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
                                    // value={emailAddress}
                                    // onChange={(e) => setEmailAddress(e.target.value)}
                                    />
                                </div>
                            </label>



                            <label htmlFor="homeAddress" className="w-full flex flex-col gap-1 items-start " >
                                <span className="font-medium text-sm text-[#262626] " >Home Address</span>
                                <div className=" flex gap-2 p-2 bg-[#FAFAFA] w-full text-[#A3A3A3] rounded-lg " >
                                    <Home05Icon />
                                    <input
                                        className="w-full text-sm font-normal outline-none border-none focus:border-0 focus:outline-0 "
                                        name="homeAddress"
                                        id="homeAddress"
                                        type="text"
                                        placeholder="Placeholder text..."
                                    // value={emailAddress}
                                    // onChange={(e) => setEmailAddress(e.target.value)}
                                    />
                                </div>
                            </label>



                            <label htmlFor="homeAddress" className="w-full flex flex-col gap-1 items-start " >
                                <span className="font-medium text-sm text-[#262626] " >Country</span>

                                <CustomSelect
                                    name="country"
                                    className="w-full"
                                    placeholder="select Country"
                                    bg=" bg-(--header-bg) "
                                    options={countryOptions}
                                />
                            </label>



                            <label htmlFor="homeAddress" className="w-full flex flex-col gap-1 items-start " >
                                <span className="font-medium text-sm text-[#262626] " >Gender</span>

                                <CustomSelect
                                    name="country"
                                    className="w-full"
                                    placeholder="select Gender"
                                    bg=" bg-(--header-bg) "
                                    options={GenderOptionsData} />
                            </label>





                            <label htmlFor="state" className="w-full flex flex-col gap-1 items-start " >
                                <span className="font-medium text-sm text-[#262626] " >State</span>
                                <div className=" flex gap-2 p-2 bg-[#FAFAFA] w-full text-[#A3A3A3] rounded-lg " >
                                    <Home05Icon />
                                    <input
                                        className="w-full text-sm font-normal outline-none border-none focus:border-0 focus:outline-0 "
                                        name="state"
                                        id="state"
                                        type="text"
                                        placeholder="Placeholder text..."
                                    // value={emailAddress}
                                    // onChange={(e) => setEmailAddress(e.target.value)}
                                    />
                                </div>
                            </label>



                            <label htmlFor="city" className="w-full flex flex-col gap-1 items-start " >
                                <span className="font-medium text-sm text-[#262626] " >City</span>
                                <div className=" flex gap-2 p-2 bg-[#FAFAFA] w-full text-[#A3A3A3] rounded-lg " >
                                    <Home05Icon />
                                    <input
                                        className="w-full text-sm font-normal outline-none border-none focus:border-0 focus:outline-0 "
                                        name="city"
                                        id="city"
                                        type="text"
                                        placeholder="Placeholder text..."
                                    // value={emailAddress}
                                    // onChange={(e) => setEmailAddress(e.target.value)}
                                    />
                                </div>
                            </label>


                            <label htmlFor="phoneNumber" className="w-full col-span-2 flex flex-col gap-1 items-start " >
                                <span className="font-medium text-sm text-[#262626] " >Phone Number</span>
                                <div className=" flex gap-2 p-2 bg-[#FAFAFA] w-full text-[#A3A3A3] rounded-lg " >
                                    <Home05Icon />
                                    <input
                                        className="w-full text-sm font-normal outline-none border-none focus:border-0 focus:outline-0 "
                                        name="phoneNumber"
                                        id="phoneNumber"
                                        type="tel"
                                        placeholder="(555) 000-0000"
                                    // value={emailAddress}
                                    // onChange={(e) => setEmailAddress(e.target.value)}
                                    />
                                </div>
                            </label>
                        </div>

                    </div>

                </main>


                <main className="flex-1 min-w-0 flex flex-col gap-12">
                    <div className="w-full flex flex-col items-start gap-3.5  " >
                        <h4 className="text-base font-semibold text-(--text-dark-gray) " >Contact Information</h4>

                        <div className=" w-full bg-(--bg-white-0) h-full rounded-3xl p-[26px] " >

                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}