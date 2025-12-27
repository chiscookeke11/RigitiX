import { StandOutData } from "../../data/StandOutData";




export default function RigitiXStandsOut() {
    return (
        <section className="w-full flex flex-col items-start gap-6 py-12  " >
            <div className="flex gap-2 items-start flex-col" >
                <h3 className="font-semibold text-[32px] text-[#262626] " >What Makes <span className="text-[#F87B07]" >rigitiX</span> Stands Out</h3>
                <p className="text-[#737373] font-normal text-lg " >Discover, book and manage tickets for top events seamlessly</p>
            </div>


            <div className="w-full grid grid-cols-2 place-items-center justify-between gap-10 " >

                <div className="w-full h-full flex flex-col items-center justify-center gap-3  " >

                    {
                        StandOutData.map((data, index) => (
                            <div key={index} className={` w-full  rounded-[26px] py-7 px-[35px] relative  text-black  flex flex-col gap-2 items-start shadow-xs cursor-pointer ${index === 0 ? "bg-[#522672] text-white" : "bg-white"}   `}  >
                                <img src="/images/abstract2.svg" alt="abstract-img" className="w-[50%] h-full absolute top-0 right-0 object-cover object-center " />
                                <h4 className=" text-[24px] font-medium " > {data.title} </h4>
                                <p className={`text-base font-normal w-full max-w-[529px] ${index === 0 ? "text-white" : "text-[#737373] "} `} > {data.content} </p>
                            </div>
                        ))
                    }

                </div>


                <div className="w-full h-full  bg-[#FFFFFF] rounded-3xl  " >

                </div>
            </div>

        </section>
    )
}