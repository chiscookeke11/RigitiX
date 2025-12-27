import { CountryEventsData } from "../../data/CountryEventsData";
import EventCard from "./EventCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import { useState } from "react";
import type { customSelectTypes } from "@/types/types";
import { CustomSelect } from "../CustomSelect";


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

export default function CountryEvents() {
    const [selectedValue, setSelectedValue] = useState("")

    const handleSelectChange = (value: string) => {
        setSelectedValue(value)
    }


    return (
        <section className=" w-full flex flex-col gap-5  my-10" >

            <div className="w-full flex items-center justify-between " >
                <h2 className="text-black text-[28px] font-semibold   " >Events in my Country</h2>
                <CustomSelect name="featuredEvents" value={selectedValue} onChange={handleSelectChange} options={categories} placeholder="Category" />
            </div>


            <Swiper
                slidesPerView={1}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
                spaceBetween={20}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }}
                loop={true}
                modules={[Autoplay]}
                className="w-full cursor-grab "
            >
                {CountryEventsData.map((data, index) => (
                    <SwiperSlide key={index} >
                        <EventCard key={index} data={data} />
                    </SwiperSlide>
                ))
                }
            </Swiper>



        </section>
    )
}