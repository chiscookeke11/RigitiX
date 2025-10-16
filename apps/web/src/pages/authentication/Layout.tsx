import { Outlet } from "react-router";


export function Layout() {
  return (
    <div className="h-screen grid grid-cols-2 p-[60px] container mx-auto">
      <div className="bg-[#FEF2E6] flex items-end justify-center rounded-[24px]">
        <div className="px-[60px] mb-[100px]">
          <h1 className="text-[30px] leading-[1.12] font-black">
            rigi<span className="text-[#F87B05]">tix</span>: Where Events Go <br /> Next-Level with <br /> Blockchain Magic
          </h1>
          <p className="mt-[20px] text-[16px] text-[#262626]">
            Rigitix revolutionizes events with blockchain-powered ticketing, management, and engagement ensuring security, transparency, and a seamless experience. The future of events is here
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
}
