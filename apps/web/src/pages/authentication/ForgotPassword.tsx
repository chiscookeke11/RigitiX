import { useState } from 'react';
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { EmailIcon } from "../../assets/icons/Email";

export function Page() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Password reset requested for:', email);
  };

  return (
    <div className="h-full bg-white flex items-center justify-center px-6">
      <div className="w-full max-w-md text-center">
        <div className="mb-8">
          <h1 className="text-xl font-bold text-gray-900 mb-[8px]">Forgot Password</h1>
          <p className="text-[#737373] text-[14px] leading-relaxed mx-auto mx-w-[300px]">
            No worries! Enter your email and we'll help you reset your password
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="text-left">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <Input
              type="email"
              placeholder="hello@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              icon={<EmailIcon className="w-4 text-gray-400" />}
              required
            />
          </div>

          {/* Continue Button */}
          <div className="pt-4">
            <Button
              type="submit"
              variant="primary"
              disabled={!email.trim()}
              className="w-full py-4 text-lg font-semibold rounded-full"
            >
              Continue
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
