


export default function OurMission() {
    return (

        <section className="py-12 px-[4%] flex items-start flex-col gap-7 " >
            <div className="w-full  max-w-[748px] " >
                <h1 className="text-[#262626] font-semibold text-[32px] " >Our Mission & Vision</h1>
                <p className="text-[#737373] font-medium text-lg " >Building bridges between technology and human connection</p>
            </div>


            <div className="w-full h-[450px] relative overflow-hidden rounded-3xl " >
                <img src="/images/about-images/cropped-image.jpg" className="w-full h-full object-cover object-center absolute top-0 left-0 " />
            </div>


            <div className="w-full h-full overflow-x-auto py-2 pb-7 custom-scrollbar " >

                <div className="w-fit h-full flex items-center gap-[43px] " >
                    <div className=" w-full h-full max-w-[621px] flex flex-col items-start gap-2 shrink-0 " >
                        <h4 className="text-[#262626] font-semibold text-[32px] " >About RigitiX</h4>
                        <p className="font-normal text-lg text-[#737373] " >Born from a passion for innovation and community, RigitiX is more than a platform it's a movement. We believe in the transformative power of bringing people together and leveraging cutting-edge technology to create unforgettable experiences.</p>
                    </div>


                    <div className=" w-full h-full max-w-[621px] flex flex-col items-start gap-2 shrink-0 " >
                        <h4 className="text-[#262626] font-semibold text-[32px] " >Our Mission</h4>
                        <p className="font-normal text-lg text-[#737373] ">To revolutionize the events industry by creating immersive, engaging experiences powered by Web3 technology. We empower organizers to build meaningful connections while giving attendees ownership of their digital presence and memories.</p>
                    </div>


                    <div className=" w-full h-full max-w-[621px] flex flex-col items-start gap-2 shrink-0 " >
                        <h4 className="text-[#262626] font-semibold text-[32px] " >Our Vision</h4>
                        <p className="font-normal text-lg text-[#737373] ">A world where every event becomes a catalyst for lasting relationships, where technology enhances human connection rather than replacing it, and where participants truly own their digital achievements and experiences.</p>
                    </div>



                </div>

            </div>


        </section>
    )
}