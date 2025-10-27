import { useState, useEffect } from "react";
import { ArrowLeftDownIcon } from "../../../assets/icons/ArrowLeftDown";
import { HorizonalDotsIcon } from "../../../assets/icons/HorizontalDots";
import { XIcon } from "../../../assets/icons/X";
import { Table, TableHeader, TableBody, TableRow, TableHeaderCell, TableCell } from "../../../components/Table";
import { Pagination } from "../../../components/Pagination";
import { Button } from "../../../components/Button";
import { Textarea } from "../../../components/Textarea";
import { Portal } from "radix-ui";

export function Page() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isRejectModalOpen, setIsRejectModalOpen] = useState(false);
  const [selectedRefundId, setSelectedRefundId] = useState<string>("");
  const totalPages = 9;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleRejectRequest = (refundId: string) => {
    setSelectedRefundId(refundId);
    setIsRejectModalOpen(true);
  };

  const refunds = [
    {
      id: "REF-001",
      customer: "John Smith",
      event: "Tech Confere...",
      amount: "$299.00",
      reason: "Event Cancel...",
      type: "Full Refund",
      status: "Completed",
      request: "2024..."
    },
    {
      id: "REF-002",
      customer: "Sarah Johnson",
      event: "Workshop Ser...",
      amount: "$119.20",
      reason: "Unable to Att...",
      type: "Partial Refund",
      status: "Completed",
      request: "2024..."
    },
    {
      id: "REF-003",
      customer: "Mike Davis",
      event: "Music Festival...",
      amount: "$89.00",
      reason: "Duplicate Pur...",
      type: "Full Refund",
      status: "Processing",
      request: "2024..."
    },
    {
      id: "REF-004",
      customer: "Lisa Wilson",
      event: "Tech Confere...",
      amount: "$0.00",
      reason: "Policy Violati...",
      type: "No Refund ...",
      status: "Rejected",
      request: "2024..."
    }
  ];

  const getStatusBadge = (status: string) => {
    const statusStyles = {
      "Completed": "px-2 py-1 bg-[#E0FAEC] text-[#1FC16B] rounded-[8px] text-[12px]",
      "Processing": "px-2 py-1 bg-[#FFF1EB] text-[#FF8447] rounded-[8px] text-[12px]",
      "Rejected": "px-2 py-1 bg-[#FFEBEC] text-[#FB3748] rounded-[8px] text-[12px]"
    };
    return statusStyles[status as keyof typeof statusStyles] || statusStyles["Processing"];
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-lg font-bold mb-[4px]">Refunds</h1>
        <p className="text-[#737373] text-[14px]">Manage refund requests and process customer refunds.</p>
      </div>

      <div className="grid grid-cols-3 gap-[4px] mb-6">
        <RefundCard title="Total Refunds" amount={12500} />
        <RefundCard title="Completed Refunds" amount={-4300} />
        <RefundCard title="Pending Refunds" amount={3200} />
      </div>

      {/* Refunds Table */}
      <div className="mb-6 overflow-visible">
        <Table>
          <TableHeader>
            <TableHeaderCell isFirst className="w-[12%]">Refund ID</TableHeaderCell>
            <TableHeaderCell className="w-[14%]">Customer</TableHeaderCell>
            <TableHeaderCell className="w-[16%]">Event</TableHeaderCell>
            <TableHeaderCell className="w-[12%]">Refund Amount</TableHeaderCell>
            <TableHeaderCell className="w-[16%]">Reason</TableHeaderCell>
            <TableHeaderCell className="w-[12%]">Type</TableHeaderCell>
            <TableHeaderCell className="w-[10%]">Status</TableHeaderCell>
            <TableHeaderCell isLast className="w-[8%]">Request</TableHeaderCell>
          </TableHeader>

          <TableBody>
            {refunds.map((refund) => (
              <TableRow key={refund.id} className="group hover:bg-gray-50">
                <TableCell className="w-[12%]">{refund.id}</TableCell>
                <TableCell className="w-[14%]">{refund.customer}</TableCell>
                <TableCell className="w-[16%]">{refund.event}</TableCell>
                <TableCell className="w-[12%]">{refund.amount}</TableCell>
                <TableCell className="w-[16%]">{refund.reason}</TableCell>
                <TableCell className="w-[12%]">{refund.type}</TableCell>
                <TableCell className="w-[10%]">
                  <span className={getStatusBadge(refund.status)}>{refund.status}</span>
                </TableCell>
                <TableCell className="w-[8%] relative">
                  <div className="flex items-center justify-center">
                    <span className="group-hover:hidden">{refund.request}</span>
                    <div className="hidden group-hover:block">
                      <RefundActionDropdown refundId={refund.id} onReject={handleRejectRequest} />
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            ))}
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

      <RejectRequestModal
        open={isRejectModalOpen}
        close={() => setIsRejectModalOpen(false)}
        refundId={selectedRefundId}
      />

    </div>
  );
}

function RefundActionDropdown({ refundId, onReject }: { refundId: string, onReject: (id: string) => void }) {
  const [showOptions, setShowOptions] = useState(false);

  const handleApprove = () => {
    console.log(`Approving refund ${refundId}`);
    setShowOptions(false);
  };

  const handleReject = () => {
    onReject(refundId);
    setShowOptions(false);
  };

  return (
    <div className="relative">
      <button
        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer border border-[#E1E4EA]"
        onClick={(e) => {
          e.stopPropagation();
          setShowOptions(!showOptions);
        }}
      >
        <HorizonalDotsIcon className="w-4 h-4 text-[#404040]" />
      </button>

      {showOptions && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setShowOptions(false)}></div>
          <div className="absolute right-0 bottom-full mb-1 bg-white w-[100px] rounded-[12px] z-20 text-sm shadow-lg border border-gray-200">
            <ul className="py-2">
              <li
                className="px-3 py-2 text-[13px] text-[#1F144DB2] cursor-pointer hover:bg-[#F5F5F5]"
                onClick={handleApprove}
              >
                Approve
              </li>
              <li
                className="px-3 py-2 text-[13px] text-[#1F144DB2] cursor-pointer hover:bg-[#F5F5F5]"
                onClick={handleReject}
              >
                Reject
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

function RejectRequestModal(props: { open: boolean, close: () => void, refundId: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [reason, setReason] = useState("");

  useEffect(() => {
    setIsOpen(props.open);
  }, [props.open]);

  const onClose = (e: any) => {
    e?.stopPropagation();
    props.close();
  }

  const handleReject = () => {
    console.log(`Rejecting refund ${props.refundId} with reason: ${reason}`);
    setReason("");
    props.close();
  };

  return <Portal.Root>
    <div className={`fixed inset-0 bg-[#252525] bg-opacity-75 h-full p-[14px] overflow-scroll ${isOpen ? '' : 'hidden'} flex items-center justify-center`} onClick={onClose}>
      <div className="bg-white rounded-[16px] w-[550px] max-w-[90vw] p-6" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold">Reject Request</h2>
          <button onClick={onClose} className="cursor-pointer">
            <XIcon className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Reason (Required)
          </label>
          <Textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="Explain why you are rejecting this request"
            className="h-24"
            rows={4}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Button
            variant="white"
            className="px-6 py-3 rounded-full text-sm"
            onClick={() => onClose(null)}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            className="px-6 py-3 rounded-full text-sm bg-[#F87B07] hover:bg-[#E6700A]"
            onClick={handleReject}
            disabled={!reason.trim()}
          >
            Reject Request
          </Button>
        </div>
      </div>
    </div>
  </Portal.Root>
}

function RefundCard(props: { title: string, amount: number, options?: string[] }) {
  return (
    <div className={`p-6 rounded-[16px] bg-white`}>
      <div className="flex justify-between items-start mb-4">
        <ArrowLeftDownIcon className={`w-5 h-5 text-black`} />
      </div>

      <div>
        <p className={`text-[14px] text-[#525252]`}>{props.title}</p>
        <div className="flex items-center mt-[4px]">
          <h2 className={`text-2xl font-bold`}>
            ${props.amount.toLocaleString()}
          </h2>
        </div>
      </div>

    </div>
  );
}
