import { useState, useRef, useEffect } from 'react';

interface OTPInputProps {
  length?: number;
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export function OTPInput({ length = 6, value, onChange, className = '' }: OTPInputProps) {
  const [otp, setOtp] = useState(value.split(''));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    setOtp(value.split(''));
  }, [value]);

  const handleChange = (index: number, digit: string) => {
    if (!/^\d*$/.test(digit)) return; // Only allow digits

    const newOtp = [...otp];
    newOtp[index] = digit;
    setOtp(newOtp);
    onChange(newOtp.join(''));

    // Auto focus next input
    if (digit && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      // Focus previous input on backspace
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text');
    const digits = pastedData.replace(/\D/g, '').slice(0, length);

    const newOtp = Array(length).fill('');
    for (let i = 0; i < digits.length; i++) {
      newOtp[i] = digits[i];
    }

    setOtp(newOtp);
    onChange(newOtp.join(''));

    // Focus the next empty input or the last one
    const nextIndex = Math.min(digits.length, length - 1);
    inputRefs.current[nextIndex]?.focus();
  };

  return (
    <div className={`flex space-x-3 justify-center ${className}`}>
      {Array.from({ length }, (_, index) => (
        <input
          key={index}
          ref={(el) => (inputRefs.current[index] = el)}
          type="text"
          maxLength={1}
          value={otp[index] || ''}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          onPaste={handlePaste}
          className="w-12 h-12 text-center text-lg font-semibold bg-[#FAFAFA] rounded-[10px] focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
        />
      ))}
    </div>
  );
}
