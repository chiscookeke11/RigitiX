import { FeaturedEventsData } from "../../data/FeaturedEventsData";
import EventCard from "./EventCard";



export default function StateEvents() {
    return (
  <section className=" w-full flex flex-col gap-5  my-10" >

                   <div className="w-full flex items-center justify-between " >
                       <h2 className="text-black text-[28px] font-semibold   " >Events in my State</h2>
                       category dropdown
                   </div>


                   <div className="w-full flex items-center gap overflow-x-auto gap-3" >
                     {FeaturedEventsData.map((data, index) => (
                         <EventCard key={index} data={data} />
                     ))}
                   </div>


               </section>
    )
}