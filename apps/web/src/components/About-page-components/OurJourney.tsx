import { timelineData } from "@/data/TimelineData";




export default function OurJourney() {
    return (
        <section className=" pt-12 px-[4%] flex flex-col items-center justify-center bg-[#fafafa]" >

            <div className="flex flex-col items-center justify-center  gap-2 " >
                <h4 className="text-[#262626] font-semibold text-[32px] " >Our Journey</h4>
                <p className="text-[#737373] font-normal text-lg " >Key milestones that shaped RigitiX</p>
            </div>



            <div className="w-full flex-col flex items-center justify-center mt-20 " >

                {/* The story slides  */}
                {
                    timelineData.map((item, index) => {
                        const isLeft = index % 2 === 0;
                        const Icon = item.icon;

                        return (
                            <div
                                key={index}
                                className="relative grid grid-cols-[1fr_auto_1fr] gap-5 "
                            >
                                {/* LEFT CARD */}
                                <div className={`w-full ${isLeft ? "flex justify-end" : ""}`}>
                                    {isLeft && (
                                        <TimelineCard
                                            year={item.year}
                                            title={item.title}
                                            description={item.description}
                                            align="right"
                                            index={index}
                                        />
                                    )}
                                </div>

                                {/* CENTER ICON */}
                                <div className="flex flex-col items-center  ">
                                    <div className={`w-[63.99px] h-[63.99px]  rounded-full  flex items-center justify-center z-10 shadow-sm ${index % 2 === 0 ? "bg-white text-[#737373] " : "bg-[#F87B07] text-white"} `} >
                                        <Icon size={20} />
                                    </div>
                                </div>

                                {/* RIGHT CARD */}
                                <div className={`w-full   ${!isLeft ? "flex justify-start" : ""}`}>
                                    {!isLeft && (
                                        <TimelineCard
                                            year={item.year}
                                            title={item.title}
                                            description={item.description}
                                            align="left"
                                            index={index}
                                        />
                                    )}
                                </div>
                            </div>
                        );
                    })
                }





            </div>

        </section>
    )
}



function TimelineCard({
    year,
    title,
    description,
    align,
    index,
}: {
    year: string;
    title: string;
    description: string;
    align: "left" | "right";
    index: number
}) {
    return (
        <div
            className={`max-w-[568px]  p-6 flex flex-col gap-3  ${align === "right" ? "text-right" : "text-left"
                }`}
        >
            <p className="text-base  text-[#A3A3A3] font-medium mb-1">{year}</p>
            <div className={` p-[25.5px] rounded-2xl w-full ${index + 1 === timelineData.length ? "bg-[#522672]" : "bg-white"} `} >
                <h4 className={`font-medium text-base  ${index + 1 === timelineData.length ? "text-white " : "text-[#262626]"} `} >{title}</h4>
                <p className={`text-base font-normal text-[#737373] ${index + 1 === timelineData.length ? "text-[#D4D4D4] " : "text-[#737373]"} `} >{description}</p>
            </div>
        </div>
    );
}
