import { StoryData } from "@/data/StoryData";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function OurStory() {
    const targetRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"],
    });


    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-310%"]);

    return (
        <section className="w-full flex flex-col items-center py-12 px-[4%]">
            <h2 className="text-[#181D27] font-semibold text-[56px] mb-10">
                Our Story
            </h2>


            <div ref={targetRef} className="relative w-full h-[400vh]">

                <div className="sticky top-[10%] h-[80vh] overflow-hidden flex items-center">
                    <motion.div
                        style={{ x }}
                        className="flex gap-6 w-[400vw]"
                    >
                        {StoryData.map((data, index) => (
                            <div
                                key={index}
                                className={`w-full h-[95vh] relative shrink-0 bg-gray-500 flex text-white text-3xl font-semibold rounded-xl py-32 px-[6%] ${data.positionY}  `}
                            >
                                <div className={` w-full max-w-[534px] space-y-2 text-white  ${index + 1 === StoryData.length ? "text-center" : ""}  `} >
                                    <h3 className=" text-[32px] font-semibold " >   {data.title}</h3>
                                    <p className=" text-base font-normal " > {data.content} </p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
