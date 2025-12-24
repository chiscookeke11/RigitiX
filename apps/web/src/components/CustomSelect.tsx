"use client"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import type { customSelectTypes } from "@/types/types"

interface CustomSelectProps {
  label?: string
  isRequired?: boolean
  options?: customSelectTypes[]
  placeholder?: string
  name: string
  onChange?: (value: string, name: string) => void
  error?: string
  value?: string
  className?: string
  bg?: string
}

export function CustomSelect({
  label,
  isRequired,
  options,
  placeholder,
  onChange,
  error,
  value,
  name,
  className,
bg,
}: CustomSelectProps) {
  return (
    <div className={`w-fit flex  flex-col items-start gap-1 ${className}`} >
      <span className="text-[#000000] font-medium text-sm font-lato flex items-start gap-1">
        {" "}
        {label}
        {isRequired && <div className=" text-red-600">*</div>}
      </span>
      <Select value={value} onValueChange={(selectedValue) => onChange?.(selectedValue, name)}>
        <SelectTrigger className={`w-full border-0 shadow-none bg-white focus:shadow-none cursor-pointer  py-1 border-none outline-none ${bg} `} >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className="cursor-pointer">
          <SelectGroup>
            <SelectLabel>{}</SelectLabel>
            {options?.map((option, index) => (
              <SelectItem key={index} value={option.value} className="cursor-pointer">
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      {error && <p className="text-red-500 text-xs md:text-sm ml-auto ">{error}</p>}
    </div>
  )
}
