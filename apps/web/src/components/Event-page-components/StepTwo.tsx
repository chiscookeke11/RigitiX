import { Mail01Icon, MapsLocation01Icon, UserIcon } from "hugeicons-react";
import { CustomSelect } from "../CustomSelect";
import { countryOptions } from "@/data/country";
import { GenderOptionsData } from "@/data/GenderOptions";
import { paymentOptions } from "@/data/paymentInfoOptions";
import { EventCheckBox } from "../EventCheckbox";
import { useEventStore } from "@/store/EventStore";
import type React from "react";
import { State } from "country-state-city"
import { useEffect, useState } from "react";
import type { customSelectTypes, EventPurchaseDetails } from "@/types/types";
import { City } from "country-state-city";
import * as countryCodes from "country-codes-list";
import { hasFlag } from "country-flag-icons";
import { CountryDialCodeSelect } from "./CountryDialCodeSelect";




export default function StepTwo() {
    const { formValues, setFormValues } = useEventStore()
    const [stateOptions, setStateOptions] = useState<customSelectTypes[]>([])
    const [cityOptions, setCityOptions] = useState<customSelectTypes[]>([])
    const [countryDialCodes, setCountryDialCodes] = useState<customSelectTypes[]>([])




    // country dial codes
    useEffect(() => {
        const dialCodes = countryCodes.customList(
            "countryCode",
            "{countryCallingCode}"
        );

        const options: customSelectTypes[] = Object.entries(dialCodes)
            .filter(([code, dialCode,]) => dialCode && hasFlag(code))
            .map(([code, dialCode]) => ({
                label: `+${dialCode}`,
                value: `+${dialCode}`,
                iso: code,
                countryName: countryOptions.find((country) => country.iso === code)?.label || code
            }));

        setCountryDialCodes(options);
    }, []);








    // function to select display state options based on the selected country
    useEffect(() => {
        if (!formValues.country) return;

        const selectedCountry = countryOptions.find((country) => country.value === formValues.country);

        if (selectedCountry && selectedCountry.iso) {
            const fetchedStates = State.getStatesOfCountry(selectedCountry.iso)

            const stateOptions = fetchedStates.map((state) => ({
                label: state.name,
                value: state.name,
                iso: state.isoCode
            }))

            setStateOptions(stateOptions)
        }

    }, [formValues.country, setFormValues])


    // function to get city based on the selected country
    useEffect(() => {
        if (!formValues.country) return;


        const selectedCountry = countryOptions.find((country) => country.value === formValues.country);
        const selectedState = stateOptions.find((state) => state.value === formValues.state)


        if (selectedCountry && selectedCountry?.iso && selectedState?.iso) {
            const fetchedCities = City.getCitiesOfState(selectedCountry.iso, selectedState?.iso)

            const cityOptions = fetchedCities?.map((city) => ({
                label: city.name,
                value: city.name,
            }))

            setCityOptions(cityOptions ?? [])
        }

    }, [formValues.state, setFormValues, formValues.country])







    // Checkbox change function
    const handleCheckboxChange = (
        name: keyof EventPurchaseDetails,
        checked: boolean,
        value?: string
    ) => {
        if (!checked) return;

        if (value) {
            setFormValues(name, value);
        }
    };






    // Input change function
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        if (name === "phoneNumber") {
            if (isNaN(Number(value))) return
        }


        setFormValues(name as keyof EventPurchaseDetails, value);
    };





    // select change function
    const handleSelectChange = (name: keyof EventPurchaseDetails, value: string) => {
        setFormValues(name, value);
    };






    return (
        <>
            <div className="flex-1 min-w-0 flex flex-col gap-12">
                <main className="w-full flex flex-col ">
                    <div className="w-full flex flex-col items-start gap-3.5  " >
                        <h4 className="text-base font-semibold text-(--text-dark-gray) " >Contact Information</h4>
                        <div className=" w-full bg-(--bg-white-0) h-full rounded-3xl p-[26px] grid grid-cols-2 place-items-center justify-between justify-items-end gap-x-5 gap-y-6 " >

                            <label htmlFor="firstName" className="w-full flex flex-col gap-1 items-start " >
                                <span className="font-medium text-sm text-[#262626] " >First Name</span>
                                <div className=" flex gap-2 p-2 bg-[#FAFAFA] w-full text-[#A3A3A3] rounded-lg " >
                                    <UserIcon />
                                    <input
                                        className="w-full text-sm font-normal outline-none border-none focus:border-0 focus:outline-0 "
                                        name="firstName"
                                        id="firstName"
                                        type="text"
                                        placeholder="Placeholder text..."
                                        value={formValues.firstName}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </label>


                            <label htmlFor="lastName" className="w-full flex flex-col gap-1 items-start " >
                                <span className="font-medium text-sm text-[#262626] " >Last Name</span>
                                <div className=" flex gap-2 p-2 bg-[#FAFAFA] w-full text-[#A3A3A3] rounded-lg " >
                                    <UserIcon />
                                    <input
                                        className="w-full text-sm font-normal outline-none border-none focus:border-0 focus:outline-0 "
                                        name="lastName"
                                        id="lastName"
                                        type="text"
                                        placeholder="Placeholder text..."
                                        value={formValues.lastName}
                                        onChange={handleInputChange}
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
                                        value={formValues.email}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </label>



                            <label htmlFor="homeAddress" className="w-full flex flex-col gap-1 items-start " >
                                <span className="font-medium text-sm text-[#262626] " >Home Address</span>
                                <div className=" flex gap-2 p-2 bg-[#FAFAFA] w-full text-[#A3A3A3] rounded-lg " >
                                    <MapsLocation01Icon />
                                    <input
                                        className="w-full text-sm font-normal outline-none border-none focus:border-0 focus:outline-0 "
                                        name="homeAddress"
                                        id="homeAddress"
                                        type="text"
                                        placeholder="Placeholder text..."
                                        value={formValues.homeAddress}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </label>



                            <label htmlFor="country" className="w-full flex flex-col gap-1 items-start " >
                                <span className="font-medium text-sm text-[#262626] " >Country</span>

                                <CustomSelect
                                    name="country"
                                    className="w-full"
                                    placeholder="Select Country"
                                    bg=" bg-(--header-bg) "
                                    isTypeable
                                    options={countryOptions}
                                    value={formValues.country}
                                    onChange={(value: string) => handleSelectChange("country", value)}
                                />
                            </label>



                            <label htmlFor="homeAddress" className="w-full flex flex-col gap-1 items-start " >
                                <span className="font-medium text-sm text-[#262626] " >Gender</span>

                                <CustomSelect
                                    name="gender"
                                    className="w-full"
                                    placeholder="select Gender"
                                    bg=" bg-(--header-bg) "
                                    options={GenderOptionsData}
                                    value={formValues.gender}
                                    onChange={(value: string) => handleSelectChange("gender", value)}
                                />

                            </label>




                            {formValues.country ?
                                (<label htmlFor="state" className="w-full flex flex-col gap-1 items-start " >
                                    <span className="font-medium text-sm text-[#262626] " >State</span>

                                    <CustomSelect
                                        name="state"
                                        className="w-full"
                                        placeholder="Select State"
                                        bg=" bg-(--header-bg) "
                                        isTypeable
                                        options={stateOptions}
                                        value={formValues.state}
                                        onChange={(value: string) => handleSelectChange("state", value)}
                                    />
                                </label>) :
                                <>
                                    <div className="w-full flex flex-col gap-2 " >
                                        <span className="font-medium text-sm text-[#262626] " >State</span>
                                        <div className="w-full border rounded-lg px-4 py-2 text-gray-500 bg-gray-100 text-sm ">
                                            Please select a country first
                                        </div>
                                    </div>
                                </>
                            }




                            {formValues.state ?
                                (<label htmlFor="city" className="w-full flex flex-col gap-1 items-start " >
                                    <span className="font-medium text-sm text-[#262626] " >City</span>

                                    <CustomSelect
                                        name="city"
                                        className="w-full"
                                        placeholder="Select City"
                                        bg=" bg-(--header-bg) "
                                        options={cityOptions}
                                        value={formValues.city}
                                        isTypeable={true}
                                        onChange={(value: string) => handleSelectChange("city", value)}
                                    />
                                </label>) :
                                <>
                                    <div className="w-full flex flex-col gap-2 " >
                                        <span className="font-medium text-sm text-[#262626] " >City</span>
                                        <div className="w-full border rounded-lg px-4 py-2 text-gray-500 bg-gray-100 text-sm ">
                                            Please select a State first
                                        </div>
                                    </div>
                                </>
                            }



                            <label htmlFor="phoneNumber" className="w-full col-span-2 flex flex-col gap-1 items-start " >
                                <span className="font-medium text-sm text-[#262626] " >Phone Number</span>
                                <div className=" flex  bg-[#FAFAFA] w-full text-[#A3A3A3] rounded-lg " >
                                    <div className="border-r  border-(--Gray-Light-100) " >
                                        <CountryDialCodeSelect
                                            options={countryDialCodes}
                                            value={formValues.countryDialCode}
                                            onChange={(value) => handleSelectChange("countryDialCode", value)}
                                        />

                                    </div>
                                    <input
                                        className="w-full text-sm font-normal outline-none border-none focus:border-0 focus:outline-0 py-2 px-3 bg-(--header-bg)! "
                                        name="phoneNumber"
                                        id="phoneNumber"
                                        type="tel"
                                        placeholder="(555) 000-0000"
                                        value={formValues.phoneNumber}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </label>

                        </div>

                    </div>

                </main>


                <main className="flex-1 min-w-0 flex flex-col gap-12">
                    <div className="w-full flex flex-col items-start gap-3.5  " >
                        <h4 className="text-base font-semibold text-(--text-dark-gray) " >Contact Information</h4>

                        <div className=" w-full bg-(--bg-white-0) h-full rounded-3xl p-[26px] flex flex-col gap-[18px] " >
                            {
                                paymentOptions.map((option, index) => {
                                    const isChecked = formValues.paymentOptions.toLowerCase() === option.heading.toLowerCase()
                                    return (
                                        <EventCheckBox
                                            key={index}
                                            checked={isChecked}
                                            onCheckedChange={() => handleCheckboxChange("paymentOptions", true, option.heading.toLowerCase())}
                                            options={option}
                                            id={option.heading.trim().toLowerCase()}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}