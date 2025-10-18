import { useState, useEffect } from 'react';
import { Button } from "../../components/Button";
import { OTPInput } from "../../components/OTPInput";

export function Page() {
  const [otp, setOtp] = useState('');
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds
  const [canResend, setCanResend] = useState(false);

  // Email from URL params or state (in real app, this would come from navigation state)
  const email = "rigi****@gmail.com";

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length === 6) {
      console.log('OTP submitted:', otp);
      // Handle OTP verification
    }
  };

  const handleResend = () => {
    console.log('Resending OTP...');
    setTimeLeft(300); // Reset timer
    setCanResend(false);
    setOtp(''); // Clear current OTP
  };

  const handleGoBack = () => {
    // Navigate back to previous page
    window.history.back();
  };

  return (
    <div className="h-full bg-white flex items-center justify-center px-6">
      <div className="w-full max-w-md text-center">
        {/* Title */}
        <div className="mb-8">
          <h1 className="text-xl font-bold text-gray-900 mb-[8px]">OTP Verification</h1>
          <p className="text-[14px] text-[#737373]">
            We've sent a verification code to{' '}
            <span className="font-medium">{email}</span>
          </p>
        </div>

        {/* OTP Input */}
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="mb-8">
            <OTPInput
              length={6}
              value={otp}
              onChange={setOtp}
              className="mb-8"
            />
          </div>

          {/* Continue Button */}
          <Button
            type="submit"
            variant="primary"
            disabled={otp.length !== 6}
            className="w-full py-4 text-lg font-semibold rounded-full mb-6"
          >
            Continue
          </Button>
        </form>

        {/* Go Back Button */}
        <button
          onClick={handleGoBack}
          className="text-[#262626] text-[14px] font-medium hover:text-gray-900 mb-8 block w-full "
        >
          Go Back
        </button>

        {/* Resend Section */}
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">
            Didn't receive the OTP ? Click to{' '}
            <button
              onClick={handleResend}
              disabled={!canResend}
              className={`font-medium ${canResend
                ? 'text-orange-500 hover:text-orange-600 cursor-pointer'
                : 'text-gray-400 cursor-not-allowed'
                }`}
            >
              resend
            </button>
          </span>
          <span className="text-gray-600 font-mono">
            {formatTime(timeLeft)}
          </span>
        </div>
      </div>
    </div>
  );
}
