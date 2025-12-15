import type { TeamMember } from "@/types/types";

interface TeamCardProps {
  data: TeamMember;
}

export default function TeamCard({ data }: TeamCardProps) {
  const { name, role, image } = data;

  return (
    <div className="relative w-[382px] h-[420px] rounded-[28px] overflow-hidden shrink-0 group">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
      />

      {/* Info overlay */}
      <div className="absolute flex flex-col items-start gap-[3px] bottom-3 left-3 right-3 bg-white rounded-2xl px-4 py-3 shadow-sm">
        <h4 className="text-[#262626] font-semibold text-xl leading-tight">
          {name}
        </h4>
        <p className="text-[#737373] text-[14px] font-medium mt-2">
          {role}
        </p>
      </div>
    </div>
  );
}
