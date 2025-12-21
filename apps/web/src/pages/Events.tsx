import { CustomSelect } from "@/components/CustomSelect";
import EventCard from "@/components/homepageComponents/EventCard";
import { eventCategoryLabels } from "@/data/EventCategories";
import { Events } from "@/data/EventsData";
import type { customSelectTypes } from "@/types/types";
import { Search01Icon } from "hugeicons-react";
import { useState } from "react";




const categories: customSelectTypes[] = [
    {
        label: "Category1",
        value: "Category1",
    },
    {
        label: "Category2",
        value: "Category2",
    },
    {
        label: "Category3",
        value: "Category3",
    },
    {
        label: "Category4",
        value: "Category4",
    },
]


export function Page() {
    const [selectedValue, setSelectedValue] = useState("")

    const handleSelectChange = (value: string) => {
        setSelectedValue(value)
    }


    return (
        <div className=" px-[4%] " >
            hello

            {/* Category bar */}
            <nav className="w-full overflow-x-auto">
                <ul className="flex w-max items-center gap-4 p-6 ">
                    {eventCategoryLabels.map((label, i) => (
                        <li
                            key={i}
                            className="shrink-0 px-4 py-2.5 rounded-full text-[#262626] font-medium text-base cursor-pointer
                   hover:bg-[#F87B07] hover:text-white transition-colors"
                        >
                            {label}
                        </li>
                    ))}
                </ul>
            </nav>



            {/* Filter bar  */}
            <div className="w-full flex items-center justify-between my-4 " >
                <div className="w-full max-w-[361px] flex-1 flex items-center gap-2 bg-white p-2 pl-2.5 rounded-3xl  " >
                    <Search01Icon color="#A3A3A3" size={15} />
                    <input className="w-full flex-1 outline-none border-none" placeholder="Search" type="text" />
                </div>

                <div className=" w-fit flex gap-3 items-center  " >
                    <CustomSelect name="featuredEvents" value={selectedValue} onChange={handleSelectChange} options={categories} placeholder="Date Range" />
                    <CustomSelect name="featuredEvents" value={selectedValue} onChange={handleSelectChange} options={categories} placeholder="Price" />
                    <CustomSelect name="featuredEvents" value={selectedValue} onChange={handleSelectChange} options={categories} placeholder="Location" />
                    <CustomSelect name="featuredEvents" value={selectedValue} onChange={handleSelectChange} options={categories} placeholder="Popularity" />
                </div>

            </div>



            <section className=" w-full grid grid-cols-2 place-items-center justify-items-center justify-center gap-3 " >

                {Events.map((data, index) => (
                    <EventCard key={index} data={data} className=" max-w-none! " />
                ))}
            </section>
        </div>
    )
}