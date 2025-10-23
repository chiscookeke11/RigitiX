import { useState, useEffect } from "react"
import { PlusIcon } from "../../../assets/icons/Plus"
import { ArrowLeftDownIcon } from "../../../assets/icons/ArrowLeftDown"
import { Portal } from "radix-ui";
import { XIcon } from "../../../assets/icons/X"
import { WarningIcon } from "../../../assets/icons/Warning"
import { Input } from "../../../components/Input"
import { Select } from "../../../components/Select"
import { Button } from "../../../components/Button"
import { Pagination } from "../../../components/Pagination"

export function Page() {
  const [isRequestPayoutOpen, setIsRequestPayoutOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 9; // Example total pages

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-lg font-bold mb-[4px]">Payout</h1>
          <p className="text-[#737373] text-[14px]">Manage your payouts and withdrawal settings.</p>
        </div>

        <button className="p-[10px] bg-white rounded-full flex text-[14px] cursor-pointer"
          onClick={() => setIsRequestPayoutOpen(true)}
        >
          <PlusIcon className="w-h" />
          <span className="ml-2">Request Payment</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-[12px]">
        <RevenueCard title="Total Paid Out" amount={12500} />
        <RevenueCard title="Available for Payout" amount={3500} />
        <RevenueCard title="Upcoming Payouts" amount={9000} />
        <RevenueCard title="Processing" amount={9000} />
      </div>

      <div className="mt-[21px]">
        <PayoutTable />
      </div>
      
      <div className="mt-6">
        <Pagination 
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
      
      <RequestPayoutModal open={isRequestPayoutOpen} close={() => setIsRequestPayoutOpen(false)} />
    </div>
  );
}


function RevenueCard(props: { title: string, amount: number, options?: string[] }) {
  return (
    <div className={`p-6 rounded-[16px] bg-white`}>
      <div className="flex justify-between items-start mb-4">
        <ArrowLeftDownIcon className={`w-5 h-5 text-black`} />
      </div>

      <div>
        <p className={`text-[14px] text-[#525252]`}>{props.title}</p>
        <div className="flex items-center mt-[4px]">
          <h2 className={`text-2xl font-bold text-black`}>
            ${props.amount.toLocaleString()}
          </h2>
        </div>
      </div>

    </div>
  );
}

function PayoutTable() {
  const payouts = [
    {
      dateRequested: "2024-01-15",
      payoutId: "PO-001",
      amount: "$25,000",
      method: "Bank Transfer",
      status: "Paid",
      dateApproved: "Bank Transfer",
      reference: "TXN-789123"
    },
    {
      dateRequested: "2024-01-08",
      payoutId: "PO-002",
      amount: "$18,500",
      method: "PayPal",
      status: "Paid",
      dateApproved: "PayPal",
      reference: "PP-456789"
    },
    {
      dateRequested: "2024-01-01",
      payoutId: "PO-003",
      amount: "$32,000...",
      method: "Bank Transfer",
      status: "Pending",
      dateApproved: "Bank Transfer",
      reference: "TXN-123456"
    },
    {
      dateRequested: "2023-12-25",
      payoutId: "PO-004",
      amount: "$15,000",
      method: "PayPal",
      status: "Failed",
      dateApproved: "PayPal",
      reference: "PP-789012"
    }
  ];

  return (
    <div className="w-full">
      <table className="w-full table-auto border-separate border-spacing-0">
        <thead>
          <tr className="bg-[#124B68]">
            <th className="px-[12px] py-[8px] text-[14px] text-white rounded-l-[10px] text-left">Date Requested</th>
            <th className="px-[12px] py-[8px] text-[14px] text-white text-left">Payout ID</th>
            <th className="px-[12px] py-[8px] text-[14px] text-white text-left">Amount</th>
            <th className="px-[12px] py-[8px] text-[14px] text-white text-left">Method</th>
            <th className="px-[12px] py-[8px] text-[14px] text-white text-left">Status</th>
            <th className="px-[12px] py-[8px] text-[14px] text-white text-left">Date Approved</th>
            <th className="px-[12px] py-[8px] text-[14px] text-white rounded-r-[10px] text-left">Reference</th>
          </tr>
        </thead>
      </table>

      <div className="bg-white rounded-[10px] mt-[10px] overflow-hidden">
        <table className="w-full">
          <tbody>
            {payouts.map((payout, index) => (
              <tr key={index} className="border-b border-[#EEEFF1] last:border-b-0">
                <td className="p-4 text-[14px] text-[#404040] w-[14.28%]">{payout.dateRequested}</td>
                <td className="p-4 text-[14px] text-[#404040] w-[14.28%]">{payout.payoutId}</td>
                <td className="p-4 text-[14px] text-[#404040] w-[14.28%]">{payout.amount}</td>
                <td className="p-4 text-[14px] text-[#404040] w-[14.28%]">{payout.method}</td>
                <td className="p-4 text-[14px] text-[#404040] w-[14.28%]">
                  {payout.status === "Paid" && (
                    <span className="px-2 py-1 bg-[#E0FAEC] text-[#1FC16B] rounded-[8px] text-[14px]">Paid</span>
                  )}
                  {payout.status === "Pending" && (
                    <span className="px-2 py-1 bg-[#FFF1EB] text-[#FF8447] rounded-[8px] text-[14px]">Pending</span>
                  )}
                  {payout.status === "Failed" && (
                    <span className="px-2 py-1 bg-[#FFEBEC] text-[#FB3748] rounded-[8px] text-[14px]">Failed</span>
                  )}
                </td>
                <td className="p-4 text-[14px] text-gray-700 w-[14.28%]">{payout.dateApproved}</td>
                <td className="p-4 text-[14px] text-gray-700 w-[14.28%]">{payout.reference}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function RequestPayoutModal(props: { open: boolean, close: () => void }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(props.open);
  }, [props.open]);

  const onClose = (e: any) => {
    e.stopPropagation();
    props.close();
  }

  return <Portal.Root>
    <div className={`fixed inset-0 bg-[#252525] h-full p-[14px] overflow-scroll ${isOpen ? '' : 'hidden'}`} onClick={onClose}>
      <div className="bg-white rounded-[24px] w-[600px] max-w-[90vw] p-6 my-[20px] mx-auto" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Request Payout</h2>
          <button onClick={onClose} className="cursor-pointer">
            <XIcon className="w-5 h-5 text-black" />
          </button>
        </div>

        <p className="bg-[#EBF8FF] p-[10px] rounded-[12px] text-[12px] font-black mb-[24px]">
          <WarningIcon className="inline w-[20px] mr-2 text-[#22D3BB]" />
          <span className=" text-[#0B463E]">
            Processing Time. Bank transfers typically take 1-3 business days to process.
          </span>
        </p>

        <div className="bg-[#522672] rounded-[16px] p-6 text-white mb-[24px] relative overflow-hidden">
          <p className="text-[#AF9BBE]">
            Available Balance
          </p>

          <h2 className="font-black mt-[9px]">
            <span className="text-[14px]">$</span> <span className="text-[32px]">43,700</span>
          </h2>
          <p className="text-[#AF9BBE]">
            Ready for withdrawal
          </p>

          <img src="/images/wallet.png" alt="Wallet" className="absolute bottom-[-70px] right-0 w-[200px] opacity-30" />
        </div>

        <div className="space-y-[24px]">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Amount to Payout
            </label>
            <Input
              type="number"
              placeholder="0.00"
              className="py-[10px] px-[10px]"
            // value={}
            // onChange={handleInputChange('email')}
            />
            <div className="mt-[4px] flex justify-between items-center  text-[#737373] text-[12px]">
              <button
                className="cursor-pointer"
              >
                Minimum: $100
              </button>
              <button
                className="font-extra-bold cursor-pointer"
              >
                Request Maximum ($43,700)
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Payout Method
            </label>
            <Select
              placeholder="Select Method"
              className="py-[10px] px-[10px]"
            // value={}
            // onChange={handleInputChange('email')}
            >
              <option>PayPal</option>
              <option>Bank Transfer</option>
            </Select>
          </div>
        </div>

        <div className="rounded-[16px] border border-[#EBF1FF] p-[16px] mt-[24px]">
          <h2 className="text-lg font-bold mb-2">
            Payout Summary
          </h2>
          <div className="flex justify-between items-center mb-2">
            <p className="text-[#525252]">Requested Amount</p>
            <p className="font-bold text-[#737373]">$0.00</p>
          </div>
          <div className="flex justify-between items-center text-[#A3A3A3]">
            <p className="text-[#525252]">Fees</p>
            <p className="font-bold text-[#737373]">$0.00</p>
          </div>
          <hr className="border-t border-[#EEEFF1] my-[16px]" />

          <div className="flex justify-between items-center mb-2 text-black">
            <p className="font-bold">Total Payout</p>
            <p className="font-bold">$0.00</p>
          </div>
          <div className="flex justify-between items-center text-[#A3A3A3]">
            <p className="font-bold">Remaining Balance</p>
            <p className="font-bold">$0.00</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-[20px] mt-[24px]">
          <Button
            variant="outline"
            className="ml-4 px-[24px] py-[10px] rounded-full"
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            className="px-[24px] py-[10px] rounded-full"
          >
            Submit Request
          </Button>

        </div>

      </div>
    </div>
  </Portal.Root>
}
