import { useEventStore } from "@/store/EventStore"



export default function StatsBar() {
    const { event, currentStep } = useEventStore()


    return (
        <>
            <div className="w-full px-[4%] flex items-center justify-between py-4 my-5 " >
                <div className="w-fit flex items-center gap-2.5 " >
                    <h3 className="text-sm font-medium text-(--text-secondary) " >Events</h3>
                    <span className="h-1 w-1 shrink-0 bg-(--gray-custom) rounded-full " />
                    <h3 className={`text-sm font-medium ${currentStep === 1 ? "text-(--orange-500)" : "text-(--text-secondary)"}`} > {event?.eventName} </h3>
                    {currentStep < 3 && currentStep > 1 && <>    <span className="h-1 w-1 shrink-0 bg-(--gray-custom) rounded-full " /> <h3 className="text-sm font-medium text-(--orange-500)" > Checkout </h3></>}
                </div>


                <div className="w-fit flex items-center gap-1 p-1 border border-(--Gray-Light-100) rounded-[20px] " >
                    <button className=" flex items-center justify-center py-1 px-4 font-medium text-sm text-(--text-secondary) hover:bg-(--orange-500) hover:text-(--bg-white-0) rounded-2xl transition-all duration-300 ease-in-out cursor-pointer " >Event Details</button>
                    <button className=" flex items-center justify-center py-1 px-4 font-medium text-sm text-(--text-secondary) hover:bg-(--orange-500) hover:text-(--bg-white-0) rounded-2xl transition-all duration-300 ease-in-out cursor-pointer ">Merchandise</button>
                    <button className=" flex items-center justify-center py-1 px-4 font-medium text-sm text-(--text-secondary) hover:bg-(--orange-500) hover:text-(--bg-white-0) rounded-2xl transition-all duration-300 ease-in-out cursor-pointer ">Photo Frame Generator</button>
                </div>
            </div>
        </>
    )
}