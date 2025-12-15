


export default function AboutHero() {
    return (
        <section className="py-12 px-[4%] flex flex-col items-start gap-[53px] w-full  " >
            <div className="w-full  max-w-[748px] " >
                <h1 className="text-[#262626] font-semibold text-[66px] leading-[76px] " >Revolutionizing Events with Web3</h1>
                <p className="text-[#737373] font-medium text-lg " >We're transforming how people connect, engage, and create lasting memories at events through the power of blockchain technology and Web3 innovation.</p>
            </div>

            <div className="w-full flex items-center gap-[13px] h-[405px]   " >
                <div className="h-full bg-gray-300 w-full flex-2 rounded-3xl overflow-hidden " >

                    <img src="/images/about-images/image1.png" alt="image1" className="w-full h-full object-cover object-center" />
                </div>


                <div className="h-full  w-full rounded-3xl flex-[1.3] flex flex-col gap-[15px] items-start justify-between " >
                    <div className="w-full h-[195px] flex items-center justify-between  bg-white rounded-3xl  relative overflow-hidden  " >
                        <div className=" flex flex-col h-full w-fit items-start justify-between gap-10 p-5 " >
                            <h3 className="text-[#262626] font-semibold text-[66px] " >10K+</h3>
                            <p className="text-[#737373] font-medium text-lg ">Events Powered</p>
                        </div>

                        <img src="/images/about-images/album.svg" alt="albums" className="w-full max-w-[300px] h-full object-cover object-center  " />
                    </div>

                    <div className="w-full  h-[195px] flex flex-col bg-white rounded-3xl  p-5  " >
                        <h3 className="text-[#262626] font-semibold text-[66px] " >50+</h3>
                        <div className="w-full flex items-center justify-between gap-4" >
                            <p className="text-[#737373] font-medium text-lg ">Countries Reached</p>

                            <img src="/images/about-images/flags.svg" alt="flags" className="w-[116.7px] h-fit object-cover object-center" />
                        </div>

                    </div>


                </div>


                <div className="h-full  w-full rounded-3xl max-w-[305px] bg-[#221030] relative " >
                    <h3 className="text-white font-semibold text-[66px] absolute left-6 top-5 " >1M+</h3>
                    <img src="/images/about-images/image3.svg" alt="image3" className="w-full h-[50%] object-cover object-bottom  absolute bottom-0 " />
                </div>

            </div>
        </section>
    )
}