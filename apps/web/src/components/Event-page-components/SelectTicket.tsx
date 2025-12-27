import { useEventStore } from "@/store/EventStore"



export default function SelectTickets() {
    const { addTicket, removeTicket, event, formValues } = useEventStore()

//     setFormValues("selectedTicketsAmount", {
//     regularTicketsAmount: selectedTicketAmount.regular,
//     vipTicketsAmount: selectedTicketAmount.vip,
//     vvipTicketsAmount: selectedTicketAmount.vvip,
// });



    return (
        <>
            <div className="w-full flex items-center justify-between border border-(--Gray-Light-100) py-4 px-3.5 " >
                <div className="w-fit flex items-center gap-2  " >
                    <div className="w-[46px] h-[46px] bg-(--text-secondary) rounded-[6px] overflow-hidden " >
                        <img src={event?.eventImage} alt="ticket-image" className="h-full w-full object-cover object-center " />
                    </div>
                    <p className="text-lg font-medium text-(--text-dark-gray) " > Regular </p>
                </div>

                <p className="font-medium text-base text-(--text-medium-gray) " >${event?.price?.Regular.price} </p>


                <div className="w-fit flex items-center gap-5 " >
                    <button
                        onClick={() => removeTicket("regular")}
                        className="w-8 h-8 rounded-[6px] bg-(--header-bg) flex items-center justify-center cursor-pointer text-(--gray-custom) "  >-</button>
                    {formValues.selectedTicketsAmount.regularTicketsAmount}
                    <button
                        onClick={() => addTicket("regular")}
                        className="w-8 h-8 rounded-[6px] bg-(--orange-500) flex items-center justify-center cursor-pointer text-[#F9F6ED] ">+</button>
                </div>

            </div>

            <div className="w-full flex items-center justify-between border border-(--Gray-Light-100) py-4 px-3.5 " >
                <div className="w-fit flex items-center gap-2  " >
                    <div className="w-[46px] h-[46px] bg-(--text-secondary) rounded-[6px] overflow-hidden " >
                        <img src={event?.eventImage} alt="ticket-image" className="h-full w-full object-cover object-center " />
                    </div>
                    <p className="text-lg font-medium text-(--text-dark-gray) " >VIP</p>
                </div>

                <p className="font-medium text-base text-(--text-medium-gray) " >${event?.price?.VIP.price} </p>


                <div className="w-fit flex items-center gap-5 " >
                    <button
                        onClick={() => removeTicket("vip")}
                        className="w-8 h-8 rounded-[6px] bg-(--header-bg) flex items-center justify-center cursor-pointer text-(--gray-custom) "  >-</button>
                    {formValues.selectedTicketsAmount.vipTicketsAmount}
                    <button
                        onClick={() => addTicket("vip")}
                        className="w-8 h-8 rounded-[6px] bg-(--orange-500) flex items-center justify-center cursor-pointer text-[#F9F6ED] ">+</button>
                </div>

            </div>



            <div className="w-full flex items-center justify-between border border-(--Gray-Light-100) py-4 px-3.5 " >
                <div className="w-fit flex items-center gap-2  " >
                    <div className="w-[46px] h-[46px] bg-(--text-secondary) rounded-[6px] overflow-hidden " >
                        <img src={event?.eventImage} alt="ticket-image" className="h-full w-full object-cover object-center " />
                    </div>
                    <p className="text-lg font-medium text-(--text-dark-gray) " >VVIP</p>
                </div>

                <p className="font-medium text-base text-(--text-medium-gray) " >${event?.price?.VVIP.price} </p>


                <div className="w-fit flex items-center gap-5 " >
                    <button
                        onClick={() => removeTicket("vvip")}
                        className="w-8 h-8 rounded-[6px] bg-(--header-bg) flex items-center justify-center cursor-pointer text-(--gray-custom) "  >-</button>
                    {formValues.selectedTicketsAmount.vvipTicketsAmount}
                    <button
                        onClick={() => addTicket("vvip")}
                        className="w-8 h-8 rounded-[6px] bg-(--orange-500) flex items-center justify-center cursor-pointer text-[#F9F6ED] ">+</button>
                </div>

            </div>
        </>
    )
}