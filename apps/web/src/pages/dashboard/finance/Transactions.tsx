import { useState } from "react";
import { ArrowLeftDownIcon } from "../../../assets/icons/ArrowLeftDown";
import { SearchIcon } from "../../../assets/icons/Search";
import { Table, TableHeader, TableBody, TableRow, TableHeaderCell, TableCell } from "../../../components/Table";
import { Pagination } from "../../../components/Pagination";
import { Select } from "../../../components/Select";
import { Input } from "../../../components/Input";

export function Page() {
  const [isEmpty, setIsEmpty] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [transactionType, setTransactionType] = useState("");
  const [status, setStatus] = useState("");
  const [dateRange, setDateRange] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const totalPages = 9;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-lg font-bold mb-[4px]">Transactions</h1>
        <p className="text-[#737373] text-[14px]">View all your transaction history and payment details.</p>
      </div>

      {isEmpty && <div className="mt-6 flex items-center min-h-[400px]"
      >
        <div onClick={() => setIsEmpty(false)} className="cursor-pointer w-[300px] max-w-full mx-auto">
          <img src="/images/empty-transactions.png" alt="No Transactions" className="mx-auto mb-4 w-[70px]" />
          <p className="text-center text-[#737373] text-[16px]">
            Your transaction history will appear here once you start making or receiving payments.
          </p>
        </div>
      </div>
      }

      {!isEmpty && <div>
        <div className="grid grid-cols-2 gap-[4px] mb-6">
          <RevenueCard title="Total Revenue" amount={12500} />
          <RevenueCard title="Total Expenses" amount={-4300} />
        </div>

        {/* Filter Controls */}
        <div className="flex items-center gap-4 justify-end mb-[21px]">
          <Select
            placeholder="All Transaction Types"
            className="py-[8px] px-[12px] bg-white !text-[#737373] !rounded-full"
            value={transactionType}
            onValueChange={setTransactionType}
          >
            <option value="">All Transaction Types</option>
            <option value="sale">Sale</option>
            <option value="free">Free</option>
            <option value="merchandise">Merchandise</option>
            <option value="commission">Commission</option>
          </Select>

          <Select
            placeholder="All Status"
            className="py-[8px] px-[12px] bg-white !text-[#737373] !rounded-full"
            value={status}
            onValueChange={setStatus}
          >
            <option value="">All Status</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
            <option value="failed">Failed</option>
          </Select>


          <Select
            placeholder="Date Range"
            className="py-[8px] px-[12px] bg-white !text-[#737373] !rounded-full"
            value={dateRange}
            onValueChange={setDateRange}
          >
            <option value="">Date Range</option>
            <option value="today">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="year">This Year</option>
          </Select>
          <Input
            type="text"
            placeholder="Search"
            className="py-[10px] px-[10px] bg-white !text-[#737373] rounded-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            icon={<SearchIcon className="w-4 h-4 text-gray-400" />}
          />
        </div>
        {/* Transactions Table */}
        <div className="mb-6">
          <Table>
            <TableHeader>
              <TableHeaderCell isFirst className="w-[10%]">Date</TableHeaderCell>
              <TableHeaderCell className="w-[12%]">Transaction ID</TableHeaderCell>
              <TableHeaderCell className="w-[16%]">Description</TableHeaderCell>
              <TableHeaderCell className="w-[12%]">Type</TableHeaderCell>
              <TableHeaderCell className="w-[14%]">Event</TableHeaderCell>
              <TableHeaderCell className="w-[10%]">Amount</TableHeaderCell>
              <TableHeaderCell className="w-[14%]">Payment Method</TableHeaderCell>
              <TableHeaderCell isLast className="w-[12%]">Status</TableHeaderCell>
            </TableHeader>

            <TableBody>
              <TableRow>
                <TableCell className="w-[10%]">2024-01-15</TableCell>
                <TableCell className="w-[12%]">TXN-001</TableCell>
                <TableCell className="w-[16%]">Ticket Sale ...</TableCell>
                <TableCell className="w-[12%]">
                  <span className="px-2 py-1 bg-[#E0FAEC] text-[#1FC16B] rounded-[8px] text-[12px]">Sale</span>
                </TableCell>
                <TableCell className="w-[14%]">Tech Confere...</TableCell>
                <TableCell className="w-[10%]">+$299.00</TableCell>
                <TableCell className="w-[14%]">Credit Card</TableCell>
                <TableCell className="w-[12%]">
                  <span className="px-2 py-1 bg-[#E0FAEC] text-[#1FC16B] rounded-[8px] text-[12px]">Completed</span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="w-[10%]">2024-01-08</TableCell>
                <TableCell className="w-[12%]">TXN-002</TableCell>
                <TableCell className="w-[16%]">Platform Fee...</TableCell>
                <TableCell className="w-[12%]">
                  <span className="px-2 py-1 bg-[#E1F0FF] text-[#1E40AF] rounded-[8px] text-[12px]">Free</span>
                </TableCell>
                <TableCell className="w-[14%]">Tech Confere...</TableCell>
                <TableCell className="w-[10%]">$14.95</TableCell>
                <TableCell className="w-[14%]">N/A</TableCell>
                <TableCell className="w-[12%]">
                  <span className="px-2 py-1 bg-[#E0FAEC] text-[#1FC16B] rounded-[8px] text-[12px]">Completed</span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="w-[10%]">2024-01-01</TableCell>
                <TableCell className="w-[12%]">TXN-003</TableCell>
                <TableCell className="w-[16%]">Merchandise...</TableCell>
                <TableCell className="w-[12%]">
                  <span className="px-2 py-1 bg-[#FFF1EB] text-[#FF8447] rounded-[8px] text-[12px]">Merchandise</span>
                </TableCell>
                <TableCell className="w-[14%]">Tech Confere...</TableCell>
                <TableCell className="w-[10%]">+$25.00</TableCell>
                <TableCell className="w-[14%]">PayPal</TableCell>
                <TableCell className="w-[12%]">
                  <span className="px-2 py-1 bg-[#E0FAEC] text-[#1FC16B] rounded-[8px] text-[12px]">Completed</span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="w-[10%]">2023-12-25</TableCell>
                <TableCell className="w-[12%]">TXN-005</TableCell>
                <TableCell className="w-[16%]">Referral Com...</TableCell>
                <TableCell className="w-[12%]">
                  <span className="px-2 py-1 bg-[#F2F5F8] text-[#525866] rounded-[8px] text-[12px]">Commission</span>
                </TableCell>
                <TableCell className="w-[14%]">Workshop Ser...</TableCell>
                <TableCell className="w-[10%]">+$50.00</TableCell>
                <TableCell className="w-[14%]">N/A</TableCell>
                <TableCell className="w-[12%]">
                  <span className="px-2 py-1 bg-[#FFF1EB] text-[#FF8447] rounded-[8px] text-[12px]">Pending</span>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>

      </div>
      }
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
          <h2 className={`text-2xl font-bold ${props.amount < 0 ? 'text-[#FB3748]' : 'text-[#1FC16B]'}`}>
            ${props.amount.toLocaleString()}
          </h2>
        </div>
      </div>

    </div>
  );
}
