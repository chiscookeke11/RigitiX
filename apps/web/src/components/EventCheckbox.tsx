"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { useEventStore } from "@/store/EventStore";
import type { PaymentOptions } from "@/types/types";
import PaypalForm from "./Event-page-components/PaypalForm";


interface EventCheckBoxProps {
    options: PaymentOptions
    id: string;
    checked?: boolean
    onCheckedChange: (checked: boolean) => void
    error?: string
}

export function EventCheckBox({ options, id, checked, onCheckedChange, error }: EventCheckBoxProps) {

    return (
        <div className="flex flex-col gap-1 border border-(--Gray-Light-100) py-4 px-3.5 rounded-[10px] cursor-pointer ">

            <Label htmlFor={id} className="flex items-center justify-between  gap-3 cursor-pointer ">

                <div className=" flex w-fit  items-center gap-4" >
                    <div className=" w-12 h-12 flex items-center justify-center rounded-[6px] " style={{ backgroundColor: options.color }} >
                        <img src={options.image} alt="logo" className="object-center w-[34px] h-[34px] " />

                    </div>
                    <div className="flex  flex-col gap-0.5 items-start ">
                        <h4 className="font-medium text-lg text-(--text-dark-gray) " > {options.heading} </h4>
                        <p className=" font-medium text-sm text-(--input-text-gray) " > {options.description} </p>
                    </div>
                </div>

                <Checkbox
                    name={id}
                    checked={checked}
                    id={id}
                    onCheckedChange={onCheckedChange}
                    className="border-[#E1E4EA] shadow-xl data-[state=checked]:bg-[#EF8F57] data-[state=checked]:border-[#EF8F57] text-white cursor-pointer" />
            </Label>


            {/* The form for Paypal payment method  */}
           {checked && (
  <>
    {options.heading.trim().toLowerCase() === "paypal" && <PaypalForm />}

    {options.heading.trim().toLowerCase() === "creditcard" && "Credit card"}

    {options.heading.toLowerCase() === "cryptocurrency" && "Crypto"}
  </>
)}

            {error && <p className="text-red-500 text-xs md:text-sm  ">{error}</p>}
        </div>
    )
}
