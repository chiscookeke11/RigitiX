import { ArrowLeftDownIcon } from "../../assets/icons/ArrowLeftDown";
import { ChevronDownIcon } from "../../assets/icons/ChevronDown";
import { useState } from "react";
import { NavLink } from "react-router"

export function Page() {
  return (
    <div className="container mx-auto">
      <div className="p-8 bg-gray-50 min-h-screen ">
        <div className="mb-8">
          <h1 className="text-xl font-bold text-gray-900 mb-[4px]">Welcome Back, Owai</h1>
          <p className="text-[#737373] text-[14px]">Welcome back Tena, we hope you have event to attend this weekend.</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-[8px]">
          <StatCard title="Ticket Revenue" value={30} change={30} />
          <StatCard title="Ticket sales" value={40} change={10} options={['sold', 'total']} />
          <StatCard title="Total Revenue" value={40} change={-10} />

          <StatCard title="Average Ticket Price" value={2} change={10} />
          <StatCard title="Refund Rate" value={20} change={10} />
          <StatCard title="Tickets Remaining" value={40} change={10} />
        </div>

        <div className="mt-[18px] grid grid-cols-1 md:grid-cols-3 gap-[8px]">
          <FeatureCard
            title="Event Ticketing"
            description="Create and Manage Events"
            image="/images/event-ticketing-default.svg"
          />
          <FeatureCard
            title="Merch Store"
            description="Sell event-related merchandise"
            image="/images/merch-store-default.svg"
          />
          <FeatureCard
            title="Service Providers Marketplace"
            description="Marketplace for event service provider"
            image="/images/service-provider-marketplace-default.svg"
          />
          <FeatureCard
            title="Do-to-Earn"
            description="Introduces gamification into the event ecosystem"
            image="/images/do-to-earn-default.svg"
          />
          <FeatureCard
            title="rigiVote"
            description="Generate buzz around events"
            image="/images/rigivote-default.svg"
          />
          <FeatureCard
            title="FrameIt"
            description="Create customized event-themed photo frames"
            image="/images/frame-it-default.svg"
          />

        </div>
      </div>
    </div>
  );
}

function FeatureCard({ title, description, image }: { title: string; description: string, image: string }) {
  return (
    <NavLink className="bg-white p-[8px] rounded-[24px] w-full" to="/auth/launchpad">
      <img src={image} alt={title} className="mb-4 w-full h-[100px] object-cover rounded-[24px]" />
      <div className="px-4 pb-4">
        <h3 className="text-[16px] font-bold mb-[4px]">{title}</h3>
        <p className="text-gray-600 text-[14px] text-[#262626]">{description}</p>
      </div>
    </NavLink>
  );
}

function StatCard({ title, value, change, options }: { title: string; value: number, change: number, options?: string[], onChangeOption?: (option: string) => void }) {
  const [selectedOption, setSelectedOption] = useState(options?.[0] || '');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white p-6 rounded-[20px] w-full">
      {/* <ArrowLeftDownIcon className="mb-[18px]" /> */}
      <div className="flex justify-between items-center mb-[18px]">
        <ArrowLeftDownIcon />
        {options && (
          <div className="relative">
            <div
              className="flex items-center bg-[#FAFAFA] px-[10px] py-[6px] rounded-full cursor-pointer font-bold"
              onClick={() => setIsOpen(!isOpen)}
            >
              <p className="text-sm text-gray-600 mr-2 capitalize">{selectedOption}</p>
              <ChevronDownIcon className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </div>
            {isOpen && (
              <div className="absolute top-full mt-1 right-0 bg-white shadow-lg rounded-lg border z-10 min-w-[120px]">
                {options.map((option) => (
                  <div
                    key={option}
                    className="px-4 py-2 hover:bg-[#FAFAFA] cursor-pointer text-sm capitalize first:rounded-t-lg last:rounded-b-lg"
                    onClick={() => {
                      setSelectedOption(option);
                      setIsOpen(false);
                    }}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
      <p className="text-[14px] text-[#A3A3A3]">{title}</p>
      <div className="flex items-center mt-[4px]">
        <p className="text-lg font-black">{value}k</p>
        <div className={`flex items-center ml-[10px] ${change >= 0 ? 'bg-[#c2ffcc] text-[#126833]' : 'bg-[#FFC0C5] text-[#681219]'} px-[8px] py-[2px] rounded-full`}>
          <span className="text-sm font-medium">{change}%</span>
        </div>
      </div>
    </div>
  );
}
