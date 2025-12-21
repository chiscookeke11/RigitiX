import { useParams, Link } from "react-router-dom"; // make sure the path is correct
import { Events } from "@/data/EventsData";
import { SocialMediaDataTwo } from "@/data/SocialLinks2";
import { Calendar03Icon, Copy01Icon, GlobalIcon, InstagramIcon, Linkedin01Icon, NewTwitterIcon } from "hugeicons-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import { CustomAccordion } from "@/components/CustomAccordion";
import { Button } from "@/components/Button";




export const Page = () => {
    const { id } = useParams();


    const event = Events.find((e) => e.id === Number(id));


    if (!event) {
        return (
            <div className="p-10 text-center">
                <h1 className="text-2xl font-bold">Event Not Found</h1>
                <Link to="/events" className="text-blue-500 mt-4 inline-block">
                    Go back to events
                </Link>
            </div>
        );
    }

    return (
        <div className=" bg-(--header-bg) w-full flex flex-col items-center gap-5 ">



            {/* The Stats bar  */}
            <div className="w-full px-[4%] flex items-center justify-between py-4 my-5 " >
                <div className="w-fit flex items-center gap-1.5 " >
                    <h3 className="text-sm font-medium text-(--text-secondary) " >Events</h3>
                    <span className="h-2 w-2 shrink-0 bg-(--gray-custom) rounded-full " />
                    <h3 className="text-sm font-medium text-(--orange-500)" > {event.eventName} </h3>
                </div>


                <div className="w-fit flex items-center gap-1 p-1 border border-(--Gray-Light-100) rounded-[20px] " >
                    <button className=" flex items-center justify-center py-1 px-4 font-medium text-sm text-(--text-secondary) hover:bg-(--orange-500) hover:text-(--bg-white-0) rounded-2xl transition-all duration-300 ease-in-out cursor-pointer " >Event Details</button>
                    <button className=" flex items-center justify-center py-1 px-4 font-medium text-sm text-(--text-secondary) hover:bg-(--orange-500) hover:text-(--bg-white-0) rounded-2xl transition-all duration-300 ease-in-out cursor-pointer ">Merchandise</button>
                    <button className=" flex items-center justify-center py-1 px-4 font-medium text-sm text-(--text-secondary) hover:bg-(--orange-500) hover:text-(--bg-white-0) rounded-2xl transition-all duration-300 ease-in-out cursor-pointer ">Photo Frame Generator</button>
                </div>

            </div>


            {/* The image section  */}
            <div className="w-full  h-[278px] bg-(--text-secondary) relative mb-[120px] " >
                <img src={event.eventImage} alt={`${event.eventName}-image`} className="absolute top-0 left-0 w-full h-full object-cover object-center " />

                <div className="size-[180px] rounded-[20px] bg-(--text-secondary) z-10  absolute -bottom-[90px] left-16 overflow-hidden border-8 border-(--bg-white-0) " >
                    <img src={event.hostImage} alt={`${event.eventName}-image`} className=" w-full h-full object-cover object-center " />
                </div>
            </div>



            {/* The main section  */}
            <div className=" w-full flex items-start gap-6 px-[4%] " >
                <div className="flex-1 min-w-0 flex flex-col gap-12" >

                    {/* key info  */}
                    <div className="bg-(--bg-white-0) rounded-3xl p-[26px] flex flex-col gap-8  " >
                        <div className=" w-full flex items-center justify-between " >
                            <span className=" py-1.5 px-[7px] bg-[#EBF8FF] rounded-3xl text-[#124B68] font-medium text-sm flex items-center gap-1.5 " >
                                <img src="/images/featuredEvents/ticket-image.png" className="w-5 h-5" />
                                {"Only 100 Spot Left"}</span>



                            timer here

                        </div>

                        <div className="w-full flex flex-col items-start gap-3 " >
                            <h2 className=" font-semibold text-3xl text-(--text-dark-gray) " > {event.eventName} </h2>
                            <h3 className=" text-(--text-medium-gray) text-sm font-medium  flex items-center gap-1.5 " ><GlobalIcon size={16} /> {event.eventLocation} </h3>
                            <h3 className=" text-(--text-medium-gray) text-sm font-medium  flex items-center gap-1.5 "><Calendar03Icon size={16} /> {event.eventTime.toLocaleDateString("en-us", {
                                weekday: "short",
                                month: "short",
                                day: "numeric",
                            })} </h3>

                            <div className="w-fit flex items-center gap-4  " >
                                <a href="#" target="_blank" className="size-5 flex items-center justify-center " >
                                    <img src="/images/Company_logos/ic_round-facebook.svg" alt="Facebook icon" />
                                </a>

                                <a href="#" target="_blank" className="size-5 flex items-center justify-center ">
                                    <img src="/images/Company_logos/Linked.svg" alt="LinkedIn icon" />
                                </a>

                                <a href="#" target="_blank" className="size-5 flex items-center justify-center ">
                                    <img src="/images/Company_logos/x.svg" alt="Twitter(X) icon" />
                                </a>
                            </div>

                            <div className="flex items-center gap-1 bg-(--header-bg) py-1.5 px-[7px] rounded-3xl " >
                                <img src={event.hostImage} alt={`${event.hostImage}-image `} className=" h-5 w-5 rounded-full " />
                                <h4 className="text-sm font-medium text-(--text-dark-gray)  " >Posted By {event.hostName} </h4>
                            </div>

                        </div>

                    </div>


                    {/* the event description */}
                    <div className="bg-(--bg-white-0) rounded-3xl p-[26px] flex flex-col gap-8  " >
                        <h4 className="text-base font-semibold text-(--text-dark-gray) " >About {event.eventName} </h4>

                        <p className="text-sm font-normal text-(--text-medium-gray) " > {event.eventDescription} </p>


                        <div className=" py-1.5 px-[7px] bg-(--state-feature-lighter) rounded-3xl text-(--text-purple) font-medium text-sm flex items-center justify-center w-fit  ">
                            {event.category}
                        </div>
                    </div>


                    {/* The event Tags  */}
                    <div className="bg-(--bg-white-0) rounded-3xl p-[26px] flex flex-col gap-8  " >
                        <h4 className="text-base font-semibold text-(--text-dark-gray) ">Tags</h4>

                        <div className="w-fit flex items-center gap-1" >
                            {event.tags?.slice(0, 3).map((tag, index) => (
                                <span key={index} className="text-sm font-medium text-(--state-stable-dark) bg-(--green-background) py-1.5 px-[7px] rounded-3xl " > {tag} </span>
                            ))}
                            {event.tags && event.tags.length > 3 && <span className="text-sm font-medium text-(--state-stable-dark) bg-(--green-background) py-1.5 px-[7px] rounded-3xl " > +{event.tags.length - 3} </span>}
                        </div>
                    </div>

                    {/* The event location  */}
                    <div className="bg-(--bg-white-0) rounded-3xl p-[26px] flex flex-col gap-8  " >
                        <h4 className="text-base font-semibold text-(--text-dark-gray) ">Location</h4>
                        <p className="text-sm font-medium text-(--text-medium-gray) " > {event.eventLocation} </p>
                        <div className="w-full h-[269px] bg-(--input-text-gray) rounded-3xl flex items-center justify-center " >
                        </div>
                    </div>



                    {/* The gallery  */}
                    <div className="bg-(--bg-white-0) rounded-3xl p-[26px] flex flex-col gap-8  " >
                        <h4 className="text-base font-semibold text-(--text-dark-gray) " >Gallery</h4>
                        <div className="w-full flex items-center gap-2 " >
                            {event.galleryImages?.slice(0, 3).map((image, index) => (
                                <div key={index} className="w-[252px] h-52 rounded-2xl flex items-center justify-center overflow-hidden " >
                                    <img src={image} alt="gallery image" className="w-full h-full object-cover object-center" />
                                </div>
                            ))}
                        </div>
                    </div>


                    {/* The sponsors  */}
                    <div className="bg-(--bg-white-0) rounded-3xl p-[26px] flex flex-col gap-8  " >
                        <h4 className="text-base font-semibold text-(--text-dark-gray) " >Sponsors</h4>
                        <div className="w-full grid grid-cols-3 gap-2 place-items-center justify-items-center justify-center " >
                            {event.sponsors?.slice(0, 3).map((sponsor, index) => (
                                <div key={index} className="w-full h-[142px] rounded-2xl flex items-center justify-center overflow-hidden bg-amber-500 relative " style={{ backgroundColor: sponsor.color }} >
                                    <img src={sponsor.image} alt="gallery image" className="w-[60%] object-cover object-center" />
                                </div>
                            ))}
                        </div>
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


                </div>







                {/* The side panel  */}
                <div className=" w-full shrink-0  max-w-[457px]  flex flex-col gap-8 " >
                    <div className=" w-fit flex items-center gap-3 ml-auto " >
                        {SocialMediaDataTwo.map((data, index) => (
                            <a href={data.url} key={index} className="w-10 h-10 rounded-full shrink-0 bg-(--bg-white-0) flex items-center justify-center shadow-custom-dark " >
                                <img src={data.icon} alt={`${data.title}-image `} title={data.title} className=" h-5 w-5 " />
                            </a>
                        ))}

                        <button className="bg-(--bg-white-0) flex items-center justify-center gap-1 text-sm font-medium text-(--text-dark-gray) p-2.5 px-4 cursor-pointer rounded-[20px] w-fit shrink-0 hover:text-(--text-medium-gray) transition-all duration-300 ease-in-out ">
                            <Copy01Icon size={20} />
                            Copy Link
                        </button>
                    </div>



                    {/* The ticket purchase bar  */}
                    <div className=" w-full flex flex-col p-4 rounded-3xl gap-4 items-start bg-(--bg-white-0) " >


                        <div className="w-full flex items-center justify-between border border-(--Gray-Light-100) py-4 px-3.5 " >
                            <div className="w-fit flex items-center gap-2  " >
                                <div className="w-[46px] h-[46px] bg-(--text-secondary) rounded-[6px] overflow-hidden " >
                                    <img src={event.eventImage} alt="ticket-image" className="h-full w-full object-cover object-center " />
                                </div>
                                <p className="text-lg font-medium text-(--text-dark-gray) " >Regular</p>
                            </div>

                            <p className="font-medium text-base text-(--text-medium-gray) " >$10.00</p>


                            <div className="w-fit flex items-center gap-5 " >
                                <button className="w-8 h-8 rounded-[6px] bg-(--header-bg) flex items-center justify-center cursor-pointer text-(--gray-custom) "  >-</button>
                                0
                                <button className="w-8 h-8 rounded-[6px] bg-(--orange-500) flex items-center justify-center cursor-pointer text-[#F9F6ED] ">+</button>
                            </div>

                        </div>

                        <div className="w-full flex items-center justify-between border border-(--Gray-Light-100) py-4 px-3.5 " >
                            <div className="w-fit flex items-center gap-2  " >
                                <div className="w-[46px] h-[46px] bg-(--text-secondary) rounded-[6px] overflow-hidden " >
                                    <img src={event.eventImage} alt="ticket-image" className="h-full w-full object-cover object-center " />
                                </div>
                                <p className="text-lg font-medium text-(--text-dark-gray) " >Regular</p>
                            </div>

                            <p className="font-medium text-base text-(--text-medium-gray) " >$10.00</p>


                            <div className="w-fit flex items-center gap-5 " >
                                <button className="w-8 h-8 rounded-[6px] bg-(--header-bg) flex items-center justify-center cursor-pointer text-(--gray-custom) "  >-</button>
                                0
                                <button className="w-8 h-8 rounded-[6px] bg-(--orange-500) flex items-center justify-center cursor-pointer text-[#F9F6ED] ">+</button>
                            </div>

                        </div>



                        <div className="w-full flex items-center justify-between border border-(--Gray-Light-100) py-4 px-3.5 " >
                            <div className="w-fit flex items-center gap-2  " >
                                <div className="w-[46px] h-[46px] bg-(--text-secondary) rounded-[6px] overflow-hidden " >
                                    <img src={event.eventImage} alt="ticket-image" className="h-full w-full object-cover object-center " />
                                </div>
                                <p className="text-lg font-medium text-(--text-dark-gray) " >Regular</p>
                            </div>

                            <p className="font-medium text-base text-(--text-medium-gray) " >$10.00</p>


                            <div className="w-fit flex items-center gap-5 " >
                                <button className="w-8 h-8 rounded-[6px] bg-(--header-bg) flex items-center justify-center cursor-pointer text-(--gray-custom) "  >-</button>
                                0
                                <button className="w-8 h-8 rounded-[6px] bg-(--orange-500) flex items-center justify-center cursor-pointer text-[#F9F6ED] ">+</button>
                            </div>

                        </div>


                        <div className="w-full flex flex-col gap-6 border border-(--Gray-Light-100) p-4 " >
                            <p className="font-normal text-sm text-(--text-medium-gray) " >rigitiX platform fee is  <span className="font-medium" >$2</span></p>

                            <div className="w-full flex items-center justify-between " >
                                <h4 className="font-medium text-2xl text-(--text-medium-gray) " >Total</h4>
                                <h4 className="font-medium text-2xl text-(--text-dark-gray)  " >$0.00</h4>
                            </div>

                            <Button variant="primary" className="w-full rounded-[20px] " >Check Out</Button>
                        </div>


                    </div>



                    {/* Refund policy accordion  */}
                    <div className="w-full flex flex-col items-start gap-8 " >
                        <h5 className="text-(--text-dark-gray) text-base font-semibold " >Refund Policy</h5>

                        <CustomAccordion />
                    </div>

                </div>

            </div>

        </div>
    );
};
