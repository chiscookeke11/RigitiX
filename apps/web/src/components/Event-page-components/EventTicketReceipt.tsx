import { Button } from "../Button";



export default function EventTicketReciept() {
    return (
        <div className="w-full h-fit flex items-center justify-center bg-(--header-bg) py-16 px-[10%] " >

            {/* The Receipt  */}
            <div className="w-full max-w-[381px] bg-(--bg-white-0) h-fit rounded-3xl p-4  flex flex-col items-center gap-3.5 " >

                <div className="w-full flex items-center justify-center overflow-hidden " >
                    <img src="/images/Event-images/receipt-svg.svg" alt="image" className="w-full h-full object-cover object-center " />
                </div>

                <div className="w-full  flex flex-col items-center justify-center gap-4 text-center" >
                    <h3 className="font-medium text-lg text-(--text-dark-gray) " >Purchase Successful</h3>
                    <p className="text-sm font-normal text-(-text-medium-gray) " >Your ticket purchase has been successfully complete.</p>
                </div>


                {/* Receipts details  */}
                <ul className="w-full bg-(--header-bg) p-5 rounded-2xl flex flex-col gap-5 items-start  " >

                    <li className="w-full flex items-center justify-between gap-4 " >
                        <span className="font-normal text-[13px] text-(-text-medium-gray) " >Amount</span>
                        <span className="text-lg font-medium text-(--text-dark-gray) " >$20.00</span>
                    </li>

                    <li className="w-full flex items-center justify-between gap-4 " >
                        <span className="font-normal text-[13px] text-(-text-medium-gray) " >Payment Status</span>
                        <span className="text-xs font-medium  py-1 px-2 rounded-3xl flex items-center justify-center bg-(--state-success-lighter) text-(--state-success-dark) " >Successful</span>
                    </li>

                    <hr className="w-full border border-(--stroke-white-0) " />


                    <li className="w-full flex items-center justify-between gap-4 " >
                        <span className="font-normal text-[13px] text-(-text-medium-gray) " >Attendee</span>
                        <span className="text-[13px] font-normal text-(--text-dark-gray) " >Jane Smith</span>
                    </li>


                    <li className="w-full flex items-center justify-between gap-4 " >
                        <span className="font-normal text-[13px] text-(-text-medium-gray) " >Event Name</span>
                        <span className="text-[13px] font-normal text-(--text-dark-gray) " >Wizkid Live in Lagos</span>
                    </li>

                    <li className="w-full flex items-center justify-between gap-4 " >
                        <span className="font-normal text-[13px] text-(-text-medium-gray) " >Reference Number</span>
                        <span className="text-[13px] font-normal text-(--text-dark-gray) " >REF987654321</span>
                    </li>


                    <li className="w-full flex items-center justify-between gap-4 " >
                        <span className="font-normal text-[13px] text-(-text-medium-gray) " >Transaction ID</span>
                        <span className="text-[13px] font-normal text-(--text-dark-gray) " >TXN123456789</span>
                    </li>


                    <li className="w-full flex items-center justify-between gap-4 " >
                        <span className="font-normal text-[13px] text-(-text-medium-gray) " >Number of Tickets</span>
                        <span className="text-[13px] font-normal text-(--text-dark-gray) " >1 ticket</span>
                    </li>


                    <li className="w-full flex items-center justify-between gap-4 " >
                        <span className="font-normal text-[13px] text-(-text-medium-gray) " >Transaction Date</span>
                        <span className="text-[13px] font-normal text-(--text-dark-gray) " >Saturday, 11 Feb. 2025 6:58pm</span>
                    </li>


                    <li className="w-full flex items-center justify-between gap-4 " >
                        <span className="font-normal text-[13px] text-(-text-medium-gray) " >Payment Method</span>
                        <span className="text-[13px] font-normal text-(--text-dark-gray) " >Crypto (USDT - TRC20)</span>
                    </li>
                </ul>

                <div className="w-full flex items-center justify-end gap-2 " >

                    <Button
                        variant="secondary"
                        className="bg-(--bg-weak-50)! text-(--text-medium-gray)! rounded-[20px] p-1.5
                                text-sm  "
                    >
                        Download PDF
                    </Button>

                    <Button
                        variant="primary"
                        className="rounded-[20px] p-1.5
                                text-sm shadow-[0px_22px_47px_0px_#EDEDED1A,0px_86px_86px_0px_#EDEDED17,1px_194px_116px_0px_#EDEDED0D,1px_345px_138px_0px_#EDEDED03,2px_539px_151px_0px_#EDEDED00]  " >
                        Share Receipt
                    </Button>

                </div>

            </div>

        </div>

    )
}