import { Outlet, Link, useLocation } from "react-router";

export function Page() {
  const location = useLocation();

  const tabs = [
    { name: "Revenue", path: "/dashboard/financials" },
    { name: "Payout", path: "/dashboard/financials/payout" },
    { name: "Payout Method", path: "/dashboard/financials/payout-method" },
    { name: "Transactions", path: "/dashboard/financials/transactions" },
    { name: "Refunds", path: "/dashboard/financials/refunds" },
  ];

  return (
    <div className="container p-8 mx-auto">
      <div className="flex space-x-1 mb-6 bg-white max-w-fit rounded-[16px] p-[8px]">
        {tabs.map((tab) => {
          const isActive = location.pathname === tab.path;
          return (
            <Link
              key={tab.path}
              to={tab.path}
              className={`px-4 py-2 rounded-[12px] text-sm font-black transition-colors ${isActive
                ? "bg-[#F99539] text-white"
                : "text-[#737373] hover:text-gray-900 hover:bg-gray-100"
                }`}
            >
              {tab.name}
            </Link>
          );
        })}
      </div>
      <Outlet />
    </div>
  );
}
