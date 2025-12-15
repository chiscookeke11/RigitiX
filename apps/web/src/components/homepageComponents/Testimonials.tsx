import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import type { TestimonialCardTypes } from '../../types/types';
import { testimonials } from '../../data/TestimonialsData';

interface TestimonialCardProps {
    data: TestimonialCardTypes
}

const TestimonialCard = ({ data }: TestimonialCardProps) => {
    return (
        <div className="w-full max-w-[431px] h-[516px] bg-gray-300 rounded-[26px] py-7 px-[35px] flex flex-col items-start justify-end relative overflow-hidden " >
            <div className='absolute top-0 left-0 bg-linear-to-b from-black/0 to-black/80 z-10 h-full w-full ' />
            <img src={data.image} alt={`${data.name}-image`} className='w-full h-full object-cover object-center absolute top-0 left-0 ' />


            <div className='z-10 flex flex-col items-start gap-2 ' >
                <h4 className='text-2xl font-medium text-white' >{data.name}</h4>
                <p className='text-[#FFFFFF] text-lg font-normal ' >{data.testimony}</p>
            </div>
        </div>
    )
}

export default function Testimonials() {
    return (
        <section className="w-full flex flex-col items-start gap-6 cursor-grab " >
            <div className="flex gap-2 items-start flex-col" >
                <h3 className="font-semibold text-[32px] text-[#262626] " >Why Event Organizers Choose rigitiX</h3>
                <p className="text-[#737373] font-normal text-lg " >Discover, book and manage tickets for top events seamlessly</p>
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
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                modules={[Autoplay]}
                className="w-full"
            >
                {
                    testimonials.map((testimony, i) => (
                        <SwiperSlide key={i} >
                            <TestimonialCard data={testimony} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>

        </section>
    )
}