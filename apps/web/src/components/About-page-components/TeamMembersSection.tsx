import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import 'swiper/css/scrollbar';
import 'swiper/css/pagination';
import { Autoplay, Scrollbar } from 'swiper/modules';
import Teamcard from './TeamCard';
import { teamMembers } from '@/data/TeamData';





export default function TeamMembers() {


    return (
        <section className="py-12 px-[4%] flex flex-col items-start gap-8  " >
            <div className="space-y-2" >
                <h4 className="text-[#262626] text-[32px] font-semibold " >Meet Our Team</h4>
                <p className="text-[#737373] font-normal text-lg " >The passionate innovators building the future of events</p>
            </div>


            <Swiper
                scrollbar={{
                    draggable: true,
                }}
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 4 },
                }}
                spaceBetween={20}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                loop
                modules={[Autoplay, Scrollbar]}
                className="w-full cursor-grab team-swiper pb-10! "
            >

                {teamMembers.map((data, index) => (
                    <SwiperSlide key={index} >
                        <Teamcard key={index} data={data} />
                    </SwiperSlide>
                ))
                }
            </Swiper>








        </section>
    )
}