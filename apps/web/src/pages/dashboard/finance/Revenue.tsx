import { ArrowLeftDownIcon } from "../../../assets/icons/ArrowLeftDown";
import { ChevronDownIcon } from "../../../assets/icons/ChevronDown";
import { MoneyIcon } from "../../../assets/icons/Money";
import { PadlockIcon } from "../../../assets/icons/Padlock";
import { useMemo } from "react";


export function Page() {
  return (
    <div>
      <h1 className="text-lg font-bold mb-[4px]">Revenue</h1>
      <p className="text-[#737373] text-[14px]">Track your revenue, earnings, and financial performance.</p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[4px]">
        <RevenueCard title="Total Revenue" amount={125000} options={["This Month", "Last Month", "This Year"]} change={-20} />
        <RevenueCard title="Refunds Issued" amount={85000} change={10} />
        <RevenueCard title="Service Fees" amount={15000} change={-10} />
        <RevenueCard title="Discount Used" amount={15000} change={0} />
      </div>

      <div className="grid grid-cols-1  gap-4 mt-4 lg:grid-cols-[1fr_350px]">
        <div className="space-y-[8px]">

          <div className="p-[16px] bg-white rounded-[16px]">
            <h2 className="text-[16px] font-bold mb-2">Daily Work Hours</h2>
            <hr className="border-[#F5F5F5] mb-4" />
            <div className="flex gap-[37px]">
              <div className="flex items-start gap-[6px]">
                <span className="w-[40px] h-[40px] flex items-center justify-center bg-[#FAFAFA] rounded-[10px]">
                  <MoneyIcon className="w-5 h-5 text-[#737373]" />
                </span>
                <div>
                  <h3 className="text-[20px] font-bold mt-[2px]">$100,409</h3>
                  <p className="text-[#A3A3A3] text-[14px]">Total Revenue</p>
                </div>
              </div>

              <div className="flex items-start gap-[6px]">
                <span className="w-[40px] h-[40px] flex items-center justify-center bg-[#FAFAFA] rounded-[10px]">
                  <MoneyIcon className="w-5 h-5 text-[#737373]" />
                </span>
                <div>
                  <h3 className="text-[20px] font-bold mt-[2px]">10%</h3>
                  <p className="text-[#A3A3A3] text-[14px]">Deduction Rate</p>
                </div>
              </div>
            </div>
            <div className="flex gap-[10px] mt-4">
              <span className="h-[10px] bg-[#22D3BB] rounded-full" style={{ width: "80%" }}></span>
              <span className="h-[10px] bg-[#47C2FF] rounded-full" style={{ width: "20%" }}></span>
            </div>
            <div className="flex gap-[10px] text-[12px] text-[#A3A3A3] mt-2">
              <div className="flex items-center gap-[4px]">
                <span className="w-[10px] h-[10px] bg-[#22D3BB] rounded-full"></span>
                <span>Gross Revenue ($52,847)</span>
              </div>
              <div className="flex items-center gap-[4px]">
                <span className="w-[10px] h-[10px] bg-[#47C2FF] rounded-full"></span>
                <span>Net Revenue ($47,562)</span>
              </div>
            </div>
          </div>

          <div className="p-[16px] bg-white rounded-[16px]">
            <h2 className="text-[16px] font-bold mb-2">Revenue by Category</h2>
            <hr className="border-[#F5F5F5] mb-4" />
            <div className="flex gap-[37px]">
              <div className="flex items-start gap-[6px]">
                <span className="w-[40px] h-[40px] flex items-center justify-center bg-[#FAFAFA] rounded-[10px]">
                  <MoneyIcon className="w-5 h-5 text-[#737373]" />
                </span>
                <div>
                  <h3 className="text-[20px] font-bold mt-[2px]">$100,409</h3>
                  <p className="text-[#A3A3A3] text-[14px]">Total Revenue</p>
                </div>
              </div>

            </div>

            <div className="flex gap-[10px] mt-4">
              <span className="h-[10px] bg-[#F99539] rounded-full" style={{ width: "50%" }}></span>
              <span className="h-[10px] bg-[#1FC16B] rounded-full" style={{ width: "30%" }}></span>
              <span className="h-[10px] bg-[#FB4BA3] rounded-full" style={{ width: "20%" }}></span>
            </div>

            <div className="flex gap-[10px] text-[12px] text-[#A3A3A3] mt-2">
              <div className="flex items-center gap-[4px]">
                <span className="w-[10px] h-[10px] bg-[#F99539] rounded-full"></span>
                <span>Ticket Sales ($38,420)</span>
              </div>
              <div className="flex items-center gap-[4px]">
                <span className="w-[10px] h-[10px] bg-[#1FC16B] rounded-full"></span>
                <span>Referral Commissions ($4,187)</span>
              </div>
              <div className="flex items-center gap-[4px]">
                <span className="w-[10px] h-[10px] bg-[#FB4BA3] rounded-full"></span>
                <span>Other Revenue ($2,000)</span>
              </div>
            </div>

          </div>
        </div>

        <div className="bg-white p-[16px] rounded-[16px]">

          <h2 className="text-[16px] font-bold mb-2">Pending Earnings</h2>
          <div className="green-100 p-[16px] rounded-[16px] bg-[#0B463E] mt-4 text-center">
            <h3 className="text-[40px] font-bold mt-[2px] text-white">$4,500</h3>
            <p className="text-[#C2F5EE] text-[12px]">
              <PadlockIcon className="w-4 h-4 inline-block mr-[4px]" />
              <span>
                Locked until post-event
              </span>
            </p>
          </div>

          <h3 className="text-[12px] font-bold mt-[16px] mb-[16px] text-[#A3A3A3] uppercase">Earnings</h3>
          <div className="space-y-[10px]">
            {[{ label: "Total Earnings", amount: 15000 }, { label: "Pending Earnings", amount: 4500 }, { label: "Available Earnings", amount: 10500 }].map((item, index) => (
              <div key={index} className="flex items-center">
                <h4 className="w-[50px] h-[50px] bg-[#FAFAFA] rounded-[7px] inline-block mr-2"></h4>
                <div className="space-y-[4px] flex flex-col">
                  <span className="text-[#262626] text-[14px]">{item.label}</span>
                  <span className="text-[#737373] font-bold text-[14px]">${item.amount.toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

export function RevenueCard(props: { title: string, amount: number, options?: string[], change: number }) {
  const isPremium = useMemo(() => {
    return props.options && props.options.length > 0;
  }, [props.options]);

  return (
    <div className={`p-6 rounded-[16px] ${isPremium ? 'bg-[#522772]' : 'bg-white'}`}>
      <div className="flex justify-between items-start mb-4">
        <ArrowLeftDownIcon className={`w-5 h-5 ${isPremium ? 'text-white' : 'text-black'}`} />
        {props.options && (
          <div className="relative">
            <select className="bg-[#3E1D58] rounded-full px-4 py-2 text-sm text-white appearance-none pr-8 outline-none cursor-pointer" defaultValue={props.options[0]}>
              {props.options.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
            <ChevronDownIcon className="w-4 h-4 text-white absolute top-1/2 right-2 transform -translate-y-1/2 pointer-events-none" />
          </div>

        )}
      </div>

      <div>
        <p className={`text-[14px] ${isPremium ? 'text-[#D4D4D4]' : 'text-[#A3A3A3]'}`}>{props.title}</p>
        <div className="flex items-center mt-[4px]">
          <h2 className={`text-2xl font-bold ${isPremium ? 'text-white' : 'text-black'}`}>
            ${props.amount.toLocaleString()}
          </h2>
          <div className={`flex items-center ml-[10px] ${props.change >= 0 ? 'bg-[#c2ffcc] text-[#126833]' : 'bg-[#FFC0C5] text-[#681219]'} px-[8px] py-[2px] rounded-full`}>
            <span className="text-sm font-medium">{props.change}%</span>
          </div>
        </div>
      </div>

    </div>
  );
}
