import type { customSelectTypes } from "@/types/types";
import { CustomSelect } from "../CustomSelect";
import { CountryFlag } from "./Flags";


interface Props {
  options: customSelectTypes[];
  value?: string;
  onChange: (value: string) => void;
}

export function CountryDialCodeSelect({ options, value, onChange }: Props) {
  return (
    <CustomSelect
      name="countryDialCode"
      options={options}
      value={value}
      className="w-full! h-full! bg-(--header-bg)!  "
      placeholder="Select Code"
      bg="bg-(--header-bg)!"
      isTypeable={true}
      onChange={(val) => onChange(val)}
      renderOption={(option) => (
        <div className="flex items-center gap-2 h-full w-full!  ">
          <CountryFlag code={option.iso ?? ""} className="rounded-full! h-5! w-5! " />
          <span className="w-full! flex items-center justify-between " >{option.countryName}  <span className="ml-auto" >{option.label}</span></span>
        </div>
      )}
      renderValue={(option) => (
        <div className="w-full flex items-center gap-2">
          <CountryFlag code={option.iso ?? ""}  className="rounded-full! h-5! w-5! "/>
          <span>{option.label}</span>
        </div>
      )}
    />
  );
}
