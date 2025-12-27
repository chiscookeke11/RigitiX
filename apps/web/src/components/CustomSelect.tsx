"use client"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import type { customSelectTypes } from "@/types/types"
import { useMemo, useState } from "react"


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
  isTypeable?: boolean
    renderOption?: (option: customSelectTypes) => React.ReactNode;
  renderValue?: (option: customSelectTypes) => React.ReactNode;
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
  isTypeable,
  renderOption,
}: CustomSelectProps) {

  const [search, setSearch] = useState("")

  const filteredOptions = useMemo(() => {
    if (!isTypeable || !search) return options;


    return options?.filter((option) =>
      option.label.toLowerCase().includes(search.toLowerCase())
    )
  }, [search, options, isTypeable])

  return (
    <div className={`w-fit flex  flex-col items-start gap-1 ${className}`} >
      <span className="text-[#000000] font-medium text-sm font-lato flex items-start gap-1">
        {" "}
        {label}
        {isRequired && <div className=" text-red-600">*</div>}
      </span>
      <Select value={value} onValueChange={(selectedValue) => onChange?.(selectedValue, name)}>
        <SelectTrigger
          className={`w-full border-0 shadow-none bg-white focus:shadow-none cursor-pointer py-1 outline-none ${bg}`}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>

        <SelectContent className="cursor-pointer w-full! shadow-[0px_16px_32px_-12px_#0E121B1A] ">
          <SelectGroup className="w-full!" >

            {/* Search input only when isTypeable is true */}
            {isTypeable && (
              <div className="border border-(--header-bg) p-2 bg-(--header-bg) ">
                <input
                  type="text"
                  placeholder={name === "countryDialCode" ? "search country code" : `search ${name}` }
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full rounded-md  text-sm outline-none"
                />
              </div>
            )}

            {filteredOptions?.length ? (
              filteredOptions.map((option, index) => (
                <SelectItem
                  key={index}
                  value={option.value}
                  className="cursor-pointer w-full "
                >
             {renderOption ? renderOption(option) : option.label}
                </SelectItem>
              ))
            ) : (
              <div className="px-3 py-2 text-sm text-gray-500">
                No results found
              </div>
            )}

          </SelectGroup>
        </SelectContent>
      </Select>

      {error && <p className="text-red-500 text-xs md:text-sm ml-auto ">{error}</p>}
    </div>
  )
}
