import { useParams, Link, NavLink } from "react-router-dom";
import { CustomAccordion } from "@/components/CustomAccordion";
import { Button } from "@/components/Button";
import { useEffect } from "react";
import StepOne from "@/components/Event-page-components/StepOne";
import StepTwo from "@/components/Event-page-components/StepTwo";
import { useEventStore } from "@/store/EventStore";
import StatsBar from "@/components/Event-page-components/StatsBar";
import ShareBtnBar from "@/components/Event-page-components/ShareButtonsBar";
import SelectTickets from "@/components/Event-page-components/SelectTicket";
import { AlertCircleIcon } from "hugeicons-react";
import EventTicketReciept from "@/components/Event-page-components/EventTicketReceipt";





export const Page = () => {
    const { id } = useParams();

    const {
        event,
        currentStep,
        totalTickets,
        setEventById,
        setCurrentStep,
        formValues,
        setFormValues
    } = useEventStore();


    useEffect(() => {
        if (id) {
            setEventById(Number(id));
        }
    }, [id, setEventById]);



    // Remove this and replace with auth check
    const isLoggedIn = false









    // The total price of selected ticket
    useEffect(() => {
        const totalPrice = formValues.selectedTicketsAmount.regularTicketsAmount * (event?.price?.Regular.price ?? 0) + formValues.selectedTicketsAmount.vipTicketsAmount * (event?.price?.VIP.price ?? 0) + formValues.selectedTicketsAmount.vvipTicketsAmount * (event?.price?.VVIP.price ?? 0)

        setFormValues("totalPrice", totalPrice)
    }, [formValues.selectedTicketsAmount])













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
           {currentStep < 3 &&  <StatsBar />}

            <>
                {/* The image section  */}
                {currentStep === 1 && (
                    <div className="w-full  h-[40vh] bg-(--text-secondary) relative mb-[120px] " >
                        <img src={event.eventImage} alt={`${event.eventName}-image`} className="absolute top-0 left-0 w-full h-full object-cover object-center " />

                        <div className="size-[180px] rounded-[20px] bg-(--text-secondary) z-10  absolute -bottom-[90px] left-16 overflow-hidden border-8 border-(--bg-white-0) " >
                            <img src={event.hostImage} alt={`${event.eventName}-image`} className=" w-full h-full object-cover object-center " />
                        </div>
                    </div>
                )}



                {/* The main section  */}
                <div className=" w-full flex items-start gap-6 px-[4%] " >
                    {
                        currentStep === 1 && (
                            <StepOne />
                        )
                    }

                    {
                        currentStep === 2 && (
                            <StepTwo />
                        )
                    }





                    {/* The side panel  */}
                    <div className=" w-full shrink-0  max-w-[457px]  flex flex-col gap-8 " >
                        {currentStep === 1 && (
                            <ShareBtnBar />
                        )}


                        {/* The ticket purchase bar  */}
                        {
                            totalTickets < 1 ? (
                                <div className="w-full bg-(--bg-white-0) flex flex-col items-center justify-center text-center gap-3 h-[267px] rounded-3xl p-[18px] " >
                                    <img src="/images/featuredEvents/ticket-image.png" alt="ticket-img" className=" w-[70px] h-[70px] " />
                                    <h5 className="font-medium text-base text-(--text-dark-gray) " >Tickets are no longer available.</h5>
                                    <p className="max-w-[221px] text-xs font-medium text-(--text-medium-gray) " >Tickets are no longer available. Thank you to all who joined us!</p>
                                </div>
                            ) :
                                (
                                    currentStep <= 2 && (
                                        <div className=" w-full flex flex-col p-4 rounded-3xl gap-4 items-start bg-(--bg-white-0) " >

                                            {currentStep === 1 && (
                                                <SelectTickets />
                                            )}


                                            <>
                                                <div className="w-full flex flex-col gap-6 border border-(--Gray-Light-100) p-4 " >
                                                    <p className="font-normal text-sm text-(--text-medium-gray) " >rigitiX platform fee is  <span className="font-medium" >$2</span></p>

                                                    <div className="w-full flex items-center justify-between " >
                                                        <h4 className="font-medium text-2xl text-(--text-medium-gray) " >Total</h4>
                                                        <h4 className="font-medium text-2xl text-(--text-dark-gray)  " > ${formValues.totalPrice} </h4>
                                                    </div>

                                                    <Button
                                                        onClick={() => setCurrentStep(currentStep + 1)}
                                                        variant="primary"
                                                        className="w-full rounded-[20px] shadow-[0px_11px_14.7px_0px_#AC55031A] " >
                                                        {currentStep === 1 ? "Check Out" :
                                                            currentStep === 2 ? "Confirm and Pay"
                                                                : "Submit"
                                                        }
                                                    </Button>
                                                </div>


                                                {!isLoggedIn && (
                                                    <div className="w-full p-3.5 bg-(--blue-notification-bg) flex items-start gap-3 rounded-[12px] " >
                                                        <AlertCircleIcon fill="#335CFF" color="white" size={27} />

                                                        <div className="w-full flex flex-col items-start gap-2.5  " >

                                                            <h5 className="font-medium text-sm text-(--text-dark-gray) " >Almost there! Please Log in.</h5>
                                                            <p className="font-normal text-sm text-(--text-dark-gray) " >Please log in to your account to secure your tickets.</p>

                                                            <NavLink to={"/"} className={"underline text-sm font-medium text-(--text-dark-gray) mt-2 "} >Login to Purchase</NavLink>
                                                        </div>

                                                    </div>
                                                )}
                                            </>


                                        </div>
                                    )
                                )
                        }



                        {/* Refund policy accordion  */}
                        {
                            currentStep === 1 && (
                                <div className="w-full flex flex-col items-start gap-8 " >
                                    <h5 className="text-(--text-dark-gray) text-base font-semibold " >Refund Policy</h5>
                                    <CustomAccordion />
                                </div>
                            )
                        }

                    </div>

                </div>
            </>


            {
                currentStep === 3 && (
                    <EventTicketReciept />
                )
            }


        </div>
    );
};
