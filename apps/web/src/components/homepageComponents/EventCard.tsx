import { Bookmark01Icon, Calendar04Icon, Comment02Icon, FavouriteIcon, MapsIcon, Share01Icon } from "hugeicons-react"
import type { FeaturedEventsDataType } from "../../types/types"
import { timeAgo } from "../../utils/time"




interface EventCardProps {
    data: FeaturedEventsDataType
}

export default function EventCard({ data }: EventCardProps) {
    return (
        <div className="w-full max-w-[579px] bg-white rounded-[37px] py-6 px-[25px] flex flex-col items-start gap-[18px] shrink-0  " >

            <div className="w-full flex items-center justify-between" >
                <div className="w-fit flex gap-[8.71px] items-center " >
                    <div className="w-12 h-12 rounded-full bg-blue-400 overflow-hidden " >
                        <img src={data.hostImage} className="object-cover object-center h-full w-full " alt="image" />
                    </div>
                    <h5 className="text-lg font-medium " >{data.hostName}</h5>
                </div>


                <span className="flex items-center justify-center rounded-[45.51px] py-[4.91px] px-2 bg-[#FAFAFA] text-[#A3A3A3]  font-medium text-xs " >
                    {timeAgo(data.timeCreated)}
                </span>
            </div>



            <div>
                <h3 className=" text-lg font-medium text-[#262626] " > {data.eventName} </h3>
                <p className=" text-base font-normal text-[#737373] " > {data.eventDescription} </p>
            </div>

            {/* event time and location  */}
            <div className="w-full flex items-center justify-between gap-2 font-medium text-base "  >

                <div className="flex items-center gap-[3.87px] bg-[#F5F5F5] py-[6.76px] px-[10.65px] rounded-[22.06px]  text-[#737373] text-base font-medium" >
                    <Calendar04Icon size={16} color="#737373" />
                    <span>
                        {data.eventTime.toLocaleDateString("en-us", {
                            weekday: "short",
                            month: "short",
                            day: "numeric"
                        })}
                    </span>
                    <span>{data.eventTime.toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                    })}</span>
                </div>


                <div className="flex items-center gap-[3.87px] bg-[#F5F5F5] py-[6.76px] px-[10.65px] rounded-[22.06px] " >
                    <MapsIcon size={16} color="#737373" />
                    <span className="text-[#737373] text-base font-medium  " > {data.eventLocation} </span>
                </div>

            </div>


            <div className="w-full rounded-3xl h-64 flex items-center justify-center overflow-hidden bg-gray-300  " >
                <img src={data.eventImage} className="object-cover object-center h-full w-full " alt="image" />
            </div>

            <div className="w-full flex items-center justify-between  " >
                <div className=" flex items-center gap-3" >
                    {data.tags.map((tag, i) => (
                        <span key={i} className="block py-1.5 px-[7px] bg-[#EEE9F1] rounded-3xl text-[#522672] font-medium text-sm   " > {tag}</span>
                    ))}
                    <span className=" py-1.5 px-[7px] bg-[#EBF8FF] rounded-3xl text-[#124B68] font-medium text-sm flex items-center gap-1.5 " >
                        <img src="/images/featuredEvents/ticket-image.png" className="w-5 h-5" />
                        {data.status}</span>
                </div>



                get ticket button
            </div>



            {/* the stats row  */}
            <div className="w-full flex items-center justify-between  ">
                <div className=" flex items-center gap-2.5" >
                    <span className="flex items-center gap-[3.87px] text-sm font-medium " ><FavouriteIcon size={22} /> {data.number_of_likes}k</span>
                    <span className="flex items-center gap-[3.87px] text-sm font-medium" ><Comment02Icon size={22} /> {data.number_of_comments}</span>
                </div>

                <div className=" flex items-center gap-3.5" >
                    <button className="flex items-center gap-[3.87px] text-sm font-medium cursor-pointer" ><Bookmark01Icon size={22} /></button>
                    <button className="flex items-center gap-[3.87px] text-sm font-medium cursor-pointer" ><Share01Icon size={22} /> </button>
                </div>


            </div>

        </div>
    )
}