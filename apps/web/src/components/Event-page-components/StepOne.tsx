import { Calendar03Icon, GlobalIcon, InstagramIcon, Linkedin01Icon, NewTwitterIcon } from "hugeicons-react";
import Map from "../Map";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";
import { useEventStore } from "@/store/EventStore";





export default function StepOne() {

    const { event, totalTickets } = useEventStore();
    const eventDate = event?.eventTime.getTime()
    const [timeLeft, setTimeLeft] = useState({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00"
    })



    // The timer countdown function
    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();

            if (!eventDate) return;

            const distance = eventDate - now;

            if (distance <= 0) {
                clearInterval(interval)
                setTimeLeft({
                    days: "00",
                    hours: "00",
                    minutes: "00",
                    seconds: "00"
                })
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24))
            const hours = Math.floor(
                (distance % (1000 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeLeft({
                days: String(days).padStart(2, "0"),
                hours: String(hours).padStart(2, "0"),
                minutes: String(minutes).padStart(2, "0"),
                seconds: String(seconds).padStart(2, "0"),
            })
        }, 1000)

        return () => clearInterval(interval)
    }, [eventDate])


    return (
        <>
            <main className="flex-1 min-w-0 flex flex-col gap-12" >

                {/* key info  */}
                <div className="bg-(--bg-white-0) rounded-3xl p-[26px] flex flex-col gap-8  " >
                    <div className=" w-full flex items-center justify-between " >
                        <span className=" py-1.5 px-[7px] bg-[#EBF8FF] rounded-3xl text-[#124B68] font-medium text-sm flex items-center gap-1.5 " >
                            <img src="/images/featuredEvents/ticket-image.png" className="w-5 h-5" />
                            {totalTickets < 1 ? "Tickets Sold Out" : `Only ${totalTickets} Spot Left`} </span>



                        <div className=" text-xl flex items-center gap-2 " >
                            <div className="flex flex-col items-center gap-1 px-3 py-1 border border-(--Gray-Light-100) rounded-xl" > <span className="font-semibold " >{timeLeft.days}</span> <span className="text-xs font-normal text-(--text-secondary)  " >Days</span> </div>
                            <div className="flex flex-col items-center gap-1 px-3 py-1 border border-(--Gray-Light-100) rounded-xl" > <span className="font-semibold ">{timeLeft.minutes} </span> <span className="text-xs font-normal text-(--text-secondary) " >Hours</span> </div>
                            <div className="flex flex-col items-center gap-1 px-3 py-1 border border-(--Gray-Light-100) rounded-xl" > <span className="font-semibold ">{timeLeft.minutes}</span> <span className="text-xs font-normal text-(--text-secondary) " >Min</span> </div>
                            <div className="flex flex-col items-center gap-1 px-3 py-1 border border-(--Gray-Light-100) rounded-xl" > <span className="font-semibold ">{timeLeft.seconds}</span> <span className="text-xs font-normal text-(--text-secondary) " >Sec</span> </div>
                        </div>

                    </div>

                    <div className="w-full flex flex-col items-start gap-3 " >
                        <h2 className=" font-semibold text-3xl text-(--text-dark-gray) " > {event?.eventName} </h2>
                        <h3 className=" text-(--text-medium-gray) text-sm font-medium  flex items-center gap-1.5 " ><GlobalIcon size={16} /> {event?.eventLocation} </h3>
                        <h3 className=" text-(--text-medium-gray) text-sm font-medium  flex items-center gap-1.5 "><Calendar03Icon size={16} /> {event?.eventTime.toLocaleDateString("en-us", {
                            weekday: "short",
                            month: "short",
                            day: "numeric",
                        })} </h3>

                        <div className="w-fit flex items-center gap-4  " >
                            <a href={event?.facebookUrl} target="_blank" className="size-5 flex items-center justify-center " >
                                <img src="/images/Company_logos/ic_round-facebook.svg" alt="Facebook icon" />
                            </a>

                            <a href={event?.linkedInUrl} target="_blank" className="size-5 flex items-center justify-center ">
                                <img src="/images/Company_logos/Linked.svg" alt="LinkedIn icon" />
                            </a>

                            <a href={event?.xUrl} target="_blank" className="size-5 flex items-center justify-center ">
                                <img src="/images/Company_logos/x.svg" alt="Twitter(X) icon" />
                            </a>
                        </div>

                        <div className="flex items-center gap-1 bg-(--header-bg) py-1.5 px-[7px] rounded-3xl " >
                            <img src={event?.hostImage} alt={`${event?.hostImage}-image `} className=" h-5 w-5 rounded-full " />
                            <h4 className="text-sm font-medium text-(--text-dark-gray)  " >Posted By {event?.hostName} </h4>
                        </div>

                    </div>

                </div>


                {/* the event description */}
                <div className="bg-(--bg-white-0) rounded-3xl p-[26px] flex flex-col gap-8  " >
                    <h4 className="text-base font-semibold text-(--text-dark-gray) " >About {event?.eventName} </h4>

                    <p className="text-sm font-normal text-(--text-medium-gray) " > {event?.eventDescription} </p>


                    <div className=" py-1.5 px-[7px] bg-(--state-feature-lighter) rounded-3xl text-(--text-purple) font-medium text-sm flex items-center justify-center w-fit  ">
                        {event?.category}
                    </div>
                </div>


                {/* The event Tags  */}
                <div className="bg-(--bg-white-0) rounded-3xl p-[26px] flex flex-col gap-8  " >
                    <h4 className="text-base font-semibold text-(--text-dark-gray) ">Tags</h4>

                    <div className="w-fit flex items-center gap-1" >
                        {event?.tags?.slice(0, 3).map((tag, index) => (
                            <span key={index} className="text-sm font-medium text-(--state-stable-dark) bg-(--green-background) py-1.5 px-[7px] rounded-3xl " > {tag} </span>
                        ))}
                        {event?.tags && event.tags.length > 3 && <span className="text-sm font-medium text-(--state-stable-dark) bg-(--green-background) py-1.5 px-[7px] rounded-3xl " > +{event.tags.length - 3} </span>}
                    </div>
                </div>

                {/* The event location  */}
                <div className="bg-(--bg-white-0) rounded-3xl p-[26px] flex flex-col gap-8  " >
                    <h4 className="text-base font-semibold text-(--text-dark-gray) ">Location</h4>
                    <p className="text-sm font-medium text-(--text-medium-gray) flex items-center gap-2 " ><GlobalIcon size={16} /> {event?.eventLocation + ", " + event?.town + ", " + event?.state + ", " + event?.country} </p>
                    <div className="w-full h-[269px] bg-(--input-text-gray) rounded-3xl flex items-center justify-center " >
                        <Map current_lat={9.96431} current_lng={8.87938} />
                    </div>
                </div>



                {/* The gallery  */}
                <div className="bg-(--bg-white-0) rounded-3xl p-[26px] flex flex-col gap-8  " >
                    <h4 className="text-base font-semibold text-(--text-dark-gray) " >Gallery</h4>
                    <div className="w-full flex items-center gap-2 " >
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
                                1280: {
                                    slidesPerView: 4,
                                }
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
                            {event?.galleryImages?.map((image, index) => (
                                <SwiperSlide key={index} className="mx-2" >
                                    <div className="w-[252px] h-52 rounded-2xl flex items-center justify-center overflow-hidden " >
                                        <img src={image} alt="gallery image" className="w-full h-full object-cover object-center" />
                                    </div>
                                </SwiperSlide>
                            ))
                            }
                        </Swiper>
                    </div>
                </div>


                {/* The sponsors  */}
                <div className="bg-(--bg-white-0) rounded-3xl p-[26px] flex flex-col gap-8  " >
                    <h4 className="text-base font-semibold text-(--text-dark-gray) " >Sponsors</h4>
                    <Marquee className="w-full " >
                        <div className="w-full grid grid-cols-3 gap-2 place-items-center justify-items-center justify-center " >
                            {event?.sponsors?.slice(0, 3).map((sponsor, index) => (
                                <div key={index} className="w-[234px] h-[142px] rounded-2xl flex items-center justify-center overflow-hidden bg-amber-500 relative mx-2 " style={{ backgroundColor: sponsor.color }} >
                                    <img src={sponsor.image} alt="gallery image" className="w-[60%] object-cover object-center" />
                                </div>
                            ))}
                        </div>
                    </Marquee>
                </div>


                {/* The speakers  */}
                <div className="bg-(--bg-white-0) rounded-3xl p-[26px] flex flex-col gap-8  " >
                    <h4 className="text-base font-semibold text-(--text-dark-gray) " >Speakers</h4>


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
                            1280: {
                                slidesPerView: 4,
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
                            event?.speakers?.map((speaker, i) => (
                                <SwiperSlide key={i} className="mx-2" >
                                    <div className="w-[262px] h-[314px] rounded-3xl flex items-center justify-center relative bg-(--stroke-white-0) overflow-hidden" >
                                        <img src={speaker.image} alt={`${speaker.name}-image`} className=" w-full h-full object-center object-cover " />
                                        <div
                                            className="
    w-full absolute bottom-0
    flex flex-col gap-[9px]
    px-4 py-4 pt-10
    backdrop-blur-xl
    bg-white/25
    mask-[linear-gradient(to_top,black_70%,transparent)]
  "
                                        >


                                            <h4 className="text-xl font-medium text-(--bg-white-0)  " > {speaker.name} </h4>
                                            <p className=" text-sm font-normal text-(--bg-white-0) " > {speaker.profession} </p>

                                            <div className="w-fit flex items-center gap-[7.73px] text-white " >
                                                <a href={speaker.instaUrl} className="w-[30.91px] h-[30.91px] shrink-0 rounded-full bg-white/10 backdrop-blur-2xl flex items-center justify-center p-[7.73px] " >
                                                    <InstagramIcon size={16} />
                                                </a>

                                                <a href={speaker.linkedInUrl} className="w-[30.91px] h-[30.91px] shrink-0 rounded-full bg-white/10 backdrop-blur-2xl flex items-center justify-center p-[7.73px] " >
                                                    <Linkedin01Icon size={16} />
                                                </a>

                                                <a href={speaker.xUrl} className="w-[30.91px] h-[30.91px] shrink-0 rounded-full bg-white/10 backdrop-blur-2xl flex items-center justify-center p-[7.73px] " >
                                                    <NewTwitterIcon size={16} />
                                                </a>

                                            </div>

                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>

                </div>



                {/* The Comments  */}
            <div className="bg-(--bg-white-0) rounded-3xl p-[26px] flex flex-col gap-8  " >
                    <h4 className="text-base font-semibold text-(--text-dark-gray) " >Comments</h4>

                    <div className=" w-full flex items-center justify-center flex-col text-center gap-1 " >
                        <img src="/images/Event-images/comment-icon.png" alt="comment" className="w-[70px] h-[70px] " />
                        <h4 className="text-base font-medium text-(--text-dark-gray) " >Sign in to join the conversation</h4>
                        <p className="text-xs font-medium text-(--text-medium-gray) max-w-[185px] " >You need to be logged in to leave a comment.</p>
                        <button className=" rounded-[20px] bg-(--bg-white-0) flex items-center justify-center p-2 border-2 border-(--header-bg) text-sm font-medium text-[#525252] cursor-pointer my-3 " aria-label="Login to Comment" >Login to comment</button>

                    </div>
                </div>


            </main>
        </>
    )
}