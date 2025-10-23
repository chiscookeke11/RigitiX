import { useState, useEffect, useMemo } from "react";
import { Portal } from "radix-ui"
import { Button } from "../../../components/Button"
import { Select } from "../../../components/Select"
import { Input } from "../../../components/Input"
import { GearIcon } from "../../../assets/icons/Gear"
import { PlusIcon } from "../../../assets/icons/Plus"
import { HorizonalDotsIcon } from "../../../assets/icons/HorizontalDots"
import { WarningIcon } from "../../../assets/icons/Warning"
import { BugIcon } from "../../../assets/icons/Bug"
import { XIcon } from "../../../assets/icons/X"

export function Page() {
  const [isEmptyState, setIsEmptyState] = useState(true);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isPayoutSettingsOpen, setIsPayoutSettingsOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-lg font-bold mb-[4px]">Payout Method</h1>
          <p className="text-[#737373] text-[14px]">Configure your preferred payout methods and bank details.</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="white" className="text-[14px] rounded-full flex items-center"
            onClick={() => setIsPayoutSettingsOpen(true)}
          >
            <GearIcon className="w-4 h-4 mr-2" />
            Payout Settings
          </Button>
          <Button className="text-[14px] rounded-full flex items-center"
            onClick={() => setIsAddModalOpen(true)}
          >
            <PlusIcon className="w-4 h-4 mr-2" />
            Add Payout Method
          </Button>
        </div>
      </div>

      {isEmptyState ? (
        <div className=" min-h-[400px] flex flex-col items-center justify-center ">
          <div className="max-w-[400px] text-center flex flex-col items-center">
            <img src="/images/empty-payout.png" alt="No Payout Method" className="w-[70px] mb-[4px]" />
            <p className="text-gray-500 mb-4">
              To receive your earnings, please add a bank account or debit card.
            </p>
            <Button className="text-[14px] rounded-full mx-auto regular-shadow-md font-black" variant="white"
              onClick={() => setIsEmptyState(!isEmptyState)}
            >
              Add Payout Method
            </Button>
          </div>
        </div>
      ) : (
        <div className="mt-[20px] grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-[13px]">
          <PayoutMethodCard
            methodType="bank"
            accountAddress="1234567890"
            accountHolderName="John Doe"
            onDelete={() => setIsDeleteModalOpen(true)}
          />
          <PayoutMethodCard
            methodType="crypto"
            accountAddress="0xAbC12345DeF67890GhI12345JkL67890MnOpQrSt"
            accountHolderName="Jane Smith"
            onDelete={() => setIsDeleteModalOpen(true)}
          />
          <PayoutMethodCard
            methodType="paypal"
            accountAddress="myemail@gmail.com"
            accountHolderName="Alice Johnson"
            onDelete={() => setIsDeleteModalOpen(true)}
          />
          <PayoutMethodCard
            methodType="paypal"
            accountAddress="myemail@gmail.com"
            accountHolderName="Alice Johnson"
            onDelete={() => setIsDeleteModalOpen(true)}
          />
          <PayoutMethodCard
            methodType="paypal"
            accountAddress="myemail@gmail.com"
            accountHolderName="Alice Johnson"
            onDelete={() => setIsDeleteModalOpen(true)}
          />

        </div>
      )}
      <PayoutSettingsModal open={isPayoutSettingsOpen} close={() => setIsPayoutSettingsOpen(false)} />
      <DeletePayoutMethodModal open={isDeleteModalOpen} close={() => setIsDeleteModalOpen(false)} />
      <AddPayoutMethodModal open={isAddModalOpen} close={() => setIsAddModalOpen(false)} />
    </div>

  );
}

interface PayoutMethodCardProps {
  methodType: 'bank' | 'crypto' | 'paypal'
  accountAddress: string
  accountHolderName: string,
  onEdit?: () => void
  onDelete?: () => void
}

function PayoutMethodCard(props: PayoutMethodCardProps) {
  const [showOptions, setShowOptions] = useState(false);
  return <div className="bg-white rounded-[24px] overflow-hidden">
    <div className="p-4 flex justify-between items-center h-[100px] bg-[#EBF8FF] relative">
      <div className="absolute top-4 right-4">
        <button className="p-2 rounded-[8px] bg-white p-[8px] cursor-pointer"
          onClick={() => setShowOptions(!showOptions)}
        >
          <HorizonalDotsIcon className="w-4 h-4 text-[#404040]" />
        </button>
        <Portal.Root>
          {showOptions && <div className="fixed inset-0 z-5" onClick={() => setShowOptions(false)}></div>}
        </Portal.Root>
        <ul className={`absolute right-0 mt-2 bg-white w-[100px] rounded-[12px] z-10 text-sm ${showOptions ? '' : 'hidden'} [&>li]:text-[13px] [&>li]:text-[#1F144DB2] [&>li]:px-[10px] [&>li]:py-[5px] py-[10px] [&>li]:cursor-pointer [&>li]:hover:bg-[#F5F5F5] overflow-hidden regular-shadow-md`}>
          <li onClick={() => {
            setShowOptions(false);
            props.onEdit && props.onEdit();
          }}>
            Edit
          </li>
          <li onClick={() => {
            setShowOptions(false);
            props.onDelete && props.onDelete();
          }}
            className="!text-red-500"
          >
            Delete
          </li>
        </ul>
      </div>
    </div>
    <div className="p-4">
      <h2 className="font-black mb-[6px] text-[14px] text-[#404040]">{props.methodType === 'bank' ? 'Bank Account' : props.methodType === 'crypto' ? 'Cryptocurrency Wallet' : 'PayPal Account'}</h2>
      <p className="text-[#737373] text-[14px]">{props.methodType == 'bank' ? "Bank Account " : ""} **** {props.accountAddress.slice(-5)}</p>
    </div>
  </div>
}

type PayoutMethodType = 'bank' | 'crypto' | 'paypal';
interface PayoutFormData {
  methodType: PayoutMethodType
  accountHolderName: string
  accountNumber: string
  bankName?: string
  paypalEmail?: string
}

function PayoutSettingsModal(props: { open: boolean, close: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [payoutFrequency, setPayoutFrequency] = useState('');
  const [preferredDay, setPreferredDay] = useState('');
  const [minimumAmount, setMinimumAmount] = useState('');
  const [withdrawalLockPeriod, setWithdrawalLockPeriod] = useState('');

  useEffect(() => {
    setIsOpen(props.open);
  }, [props.open]);

  const onClose = (e: any) => {
    e.stopPropagation();
    props.close();
  }

  return <Portal.Root>
    <div className={`fixed inset-0 bg-[#252525] bg-opacity-75 h-full p-[14px] overflow-auto ${isOpen ? '' : 'hidden'} flex items-center`} onClick={onClose}>
      <div className="bg-white rounded-[16px] w-[400px] max-w-[90vw] p-6 my-[20px] mx-auto" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold">Payout Settings</h2>
          <button onClick={onClose} className="cursor-pointer">
            <XIcon className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-[24px]">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Payout Frequency
              </label>
              <Select
                placeholder="Select frequency"
                className="py-[10px] px-[10px]"
                value={payoutFrequency}
                onValueChange={setPayoutFrequency}
              >
                <option value="weekly">Weekly</option>
                <option value="bi-weekly">Bi-weekly</option>
                <option value="monthly">Monthly</option>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Day
              </label>
              <Select
                placeholder="Monday"
                className="py-[10px] px-[10px]"
                value={preferredDay}
                onValueChange={setPreferredDay}
              >
                <option value="monday">Monday</option>
                <option value="tuesday">Tuesday</option>
                <option value="wednesday">Wednesday</option>
                <option value="thursday">Thursday</option>
                <option value="friday">Friday</option>
                <option value="saturday">Saturday</option>
                <option value="sunday">Sunday</option>
              </Select>
            </div>

          </div>
          {/* Minimum Payout Amount */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Minimum Payout Amount
            </label>
            <Input
              type="text"
              placeholder="payment@gmail.com"
              className="py-[10px] px-[10px]"
              value={minimumAmount}
              onChange={(e) => setMinimumAmount(e.target.value)}
            />
            <p className="text-[12px] text-[#737373] mt-1">
              <WarningIcon className="w-4 h-4 inline-block mr-1" />
              Payouts will only be processed when your balance exceeds this amount.
            </p>
          </div>

          {/* Withdrawal Lock Period */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Withdrawal Lock Period
            </label>
            <Select
              placeholder="No Lock Period"
              className="py-[10px] px-[10px]"
              value={withdrawalLockPeriod}
              onValueChange={setWithdrawalLockPeriod}
            >
              <option value="none">No Lock Period</option>
              <option value="7">7 days</option>
              <option value="14">14 days</option>
              <option value="30">30 days</option>
            </Select>
            <p className="text-[12px] text-[#737373] mt-1">
              <WarningIcon className="w-4 h-4 inline-block mr-1" />
              Funds will be locked for this period after each payout ends.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-[10px] mt-6">
          <Button
            variant="white"
            className="px-[24px] py-[10px] rounded-full text-[14px]"
            onClick={() => close()}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            className="px-[24px] py-[10px] rounded-full text-[14px]"
          >
            Add Method
          </Button>
        </div>
      </div>
    </div>
  </Portal.Root>
}

function DeletePayoutMethodModal(props: { open: boolean, close: () => void }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(props.open);
  }, [props.open]);

  const onClose = (e: any) => {
    e.stopPropagation();
    props.close();
  }

  const handleDelete = () => {
    // Handle delete logic here
    props.close();
  }

  return <Portal.Root>
    <div className={`fixed inset-0 bg-[#252525] bg-opacity-75 h-full p-[14px] overflow-auto ${isOpen ? '' : 'hidden'} flex items-center`} onClick={onClose}>
      <div className="bg-white rounded-[16px] w-[400px] max-w-[90vw] p-6 my-[20px] mx-auto" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold">Delete Payout Method</h2>
          <button onClick={onClose} className="cursor-pointer">
            <XIcon className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        <div className="mb-6">
          <p className="text-[#737373] text-[14px]">
            Are you sure you want to delete this payout method? This action cannot be undone.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-[10px]">
          <Button
            variant="white"
            className="px-[24px] py-[10px] rounded-full text-[14px]"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            className="px-[24px] py-[10px] rounded-full text-[14px] bg-[#F87B07] hover:bg-[#E6700A]"
            onClick={handleDelete}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  </Portal.Root>
}

function AddPayoutMethodModal(props: { open: boolean, close: () => void }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(props.open);
  }, [props.open]);

  const onClose = (e: any) => {
    e.stopPropagation();
    props.close();
  }

  const payoutMethods = useMemo(() => {
    return [
      { label: 'PayPal', value: 'paypal' },
      { label: 'Bank Transfer', value: 'bank' },
      { label: 'Cryptocurrency', value: 'crypto' },
    ]
  }, []);

  const [formData, setFormData] = useState<PayoutFormData>({
    methodType: 'paypal',
    accountHolderName: '',
    accountNumber: '',
  });
  const [accountNameState, setAccountNameState] = useState<'pending' | 'verified' | 'invalid'>('pending');


  const submitForm = () => {
    // Handle form submission logic here
    const random = Math.random() > 0.5;
    setAccountNameState(random ? 'verified' : 'invalid');
  }

  return <Portal.Root>
    <div className={`fixed inset-0 bg-[#252525] h-full p-[14px] overflow-auto ${isOpen ? '' : 'hidden'}`} onClick={onClose}>
      <div className="bg-white rounded-[16px] p-6 w-[550px] mx-auto mt-[100px]" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-lg font-bold mb-4">Add Payout Method</h2>
        {/* Form fields for adding payout method */}
        <div className="text-[12px] px-[12px] py-[8px] text-[#0B463E] rounded-[12px] bg-[#EBF8FF] grid grid-cols-[auto_1fr] gap-2">
          <WarningIcon className="w-6 h-6 inline-block mr-2 text-[#22D3BB]" />
          <span className="text-[#0B463E]">
            After you make your first sale (or Affiliate sale), you will be required to complete your KYC and set your government details before you can withdraw your funds
          </span>
        </div>
        <div className="mt-[24px]">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Payout Method
          </label>
          <Select
            placeholder="Select Method"
            className="py-[10px] px-[10px]"
            value={formData.methodType}
            onValueChange={(value) => setFormData({ ...formData, methodType: value as PayoutMethodType })}
          >
            {payoutMethods.map((method) => (
              <option key={method.value} value={method.value}>
                {method.label}
              </option>
            ))}
          </Select>
        </div>

        {formData.methodType === 'paypal' && (
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              PayPal Email
            </label>
            <Input
              type="email"
              className="py-[10px] px-[10px]"
              placeholder="Enter your PayPal email"
            />
          </div>
        )}

        {formData.methodType === 'bank' && (
          <>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Account Holder Name
              </label>
              <Input
                type="text"
                className="py-[10px] px-[10px]"
                placeholder="Enter account holder name"
              />
            </div>


            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Bank Name
              </label>
              <Select
                placeholder="Select Bank"
                className="py-[10px] px-[10px]"
              >
                <option value="bank1">Bank 1</option>
                <option value="bank2">Bank 2</option>
                <option value="bank3">Bank 3</option>
              </Select>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Account Number
              </label>
              <Input
                type="text"
                className={`py-[10px] px-[10px] ${accountNameState == 'invalid' ? '  !bg-[#FFEBEC] !text-[#FB3748]' : ''}`}
                placeholder="Enter account number"
              />
              {accountNameState == 'invalid' && (
                <p className="text-red-500 text-sm mt-1">
                  <BugIcon className="w-4 h-4 inline-block mr-1 text-red-500" />
                  <span>
                    Account holder name does not match our records.
                  </span>
                </p>
              )}
            </div>

          </>
        )}

        {formData.methodType === 'crypto' && (
          <>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Wallet Address
              </label>
              <Input
                type="text"
                className="py-[10px] px-[10px]"
                placeholder="Enter your cryptocurrency wallet address"
              />
            </div>
          </>
        )}

        <div className="grid grid-cols-2 gap-[10px] mt-4">
          <Button variant="white" className="rounded-full text-[14px]"
            onClick={close}
          >
            Cancel
          </Button>
          <Button className="rounded-full text-[14px]" onClick={submitForm}
          >Save</Button>
        </div>
      </div>
    </div >
  </Portal.Root >
}
