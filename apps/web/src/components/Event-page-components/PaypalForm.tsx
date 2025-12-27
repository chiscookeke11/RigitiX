import { useEventStore } from "@/store/EventStore";
import type { PaypalFormDetails } from "@/types/types";
import { Calendar04Icon, CreditCardIcon, PinCodeIcon, UserIcon } from "hugeicons-react";




export default function PaypalForm() {
    const { paypalFormValues, setPaypalFormValues } = useEventStore()

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;


        if (name === "cardNumber") {
            const digitsOnly = value.replace(/\D/g, "");

            const limitedDigits = digitsOnly.slice(0, 16);

            const formatted = limitedDigits.replace(/(.{4})/g, "$1 ").trim()
            setPaypalFormValues("cardNumber", formatted)
            return;
        }


        if (name === "csv") {
            if (isNaN(Number(value))) return

            const formatted = value.slice(0, 3)
            setPaypalFormValues("csv", formatted)
            return;
        }

        setPaypalFormValues(name as keyof PaypalFormDetails, value);
    }

console.log(paypalFormValues)

    return (
        <>
            <form className=" w-full bg-(--bg-white-0) h-full rounded-3xl p-[26px] grid grid-cols-2 place-items-center justify-between justify-items-end gap-x-5 gap-y-6  " >

                <label htmlFor="cardNumber" className="w-full flex flex-col gap-1 items-start " >
                    <span className="font-medium text-sm text-[#262626] " >Card Number</span>
                    <div className=" flex gap-2 p-2 bg-[#FAFAFA] w-full text-[#A3A3A3] rounded-lg " >
                        <CreditCardIcon />
                        <input
                            className="w-full text-sm font-normal outline-none border-none focus:border-0 focus:outline-0 "
                            name="cardNumber"
                            id="cardNumber"
                            type="text"
                            placeholder="4024  0071  7677  8545"
                            value={paypalFormValues.cardNumber}
                            onChange={handleInputChange}
                        />
                    </div>
                </label>


                <label htmlFor="cardholderName" className="w-full flex flex-col gap-1 items-start " >
                    <span className="font-medium text-sm text-[#262626] " >Cardholder Name</span>
                    <div className=" flex gap-2 p-2 bg-[#FAFAFA] w-full text-[#A3A3A3] rounded-lg " >
                        <UserIcon />
                        <input
                            className="w-full text-sm font-normal outline-none border-none focus:border-0 focus:outline-0 "
                            name="cardholderName"
                            id="cardholderName"
                            type="text"
                            placeholder="Placeholder text..."
                            value={paypalFormValues.cardholderName}
                            onChange={handleInputChange}
                        />
                    </div>
                </label>

                <label htmlFor="expiryDate" className="w-full flex flex-col gap-1 items-start " >
                    <span className="font-medium text-sm text-[#262626] " >Expiry Date</span>
                    <div className=" flex gap-2 p-2 bg-[#FAFAFA] w-full text-[#A3A3A3] rounded-lg " >
                        <Calendar04Icon />
                        <input
                            className="w-full text-sm font-normal outline-none border-none focus:border-0 focus:outline-0 "
                            name="expiryDate"
                            id="expiryDate"
                            type="date"
                            placeholder="01/12/1999"
                        value={String(paypalFormValues.expiryDate)}
                        onChange={handleInputChange}
                        />
                    </div>
                </label>


                <label htmlFor="csv" className="w-full flex flex-col gap-1 items-start " >
                    <span className="font-medium text-sm text-[#262626] " >CSV</span>
                    <div className=" flex gap-2 p-2 bg-[#FAFAFA] w-full text-[#A3A3A3] rounded-lg " >
                        <PinCodeIcon />
                        <input
                            className="w-full text-sm font-normal outline-none border-none focus:border-0 focus:outline-0 "
                            name="csv"
                            id="csv"
                            type="text"
                            placeholder="1234"
                            value={paypalFormValues.csv}
                            onChange={handleInputChange}
                        />
                    </div>
                </label>


            </form>
        </>
    )
}