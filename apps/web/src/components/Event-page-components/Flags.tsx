import * as Flags from "country-flag-icons/react/3x2";

interface Props {
  code: string;
  className?: string;
}

export function CountryFlag({ code, className }: Props) {
  const Flag = (Flags as Record<string, React.FC<any>>)[code];

  if (!Flag) return null;

  return <Flag className={className ?? "w-5! h-5! rounded-full!"} />;
}
