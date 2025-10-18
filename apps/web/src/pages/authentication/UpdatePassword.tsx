import { useState } from 'react';
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { LockIcon } from "../../assets/icons/Lock";

export function Page() {
  const [formData, setFormData] = useState({
    newPassword: '',
    confirmPassword: ''
  });

  const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    console.log('Password updated');
    // Handle password update logic
  };

  const isFormValid = formData.newPassword && formData.confirmPassword &&
    formData.newPassword === formData.confirmPassword;

  return (
    <div className="h-full bg-white flex items-center justify-center px-6 w-full">
      <div className="w-full max-w-md ">
        {/* Card with blue dashed border */}
        <div className="border-blue-400 rounded-lg p-8">
          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-xl font-bold text-gray-900 mb-[8px]">Create Password</h1>
            <p className="text-[#737373] text-[14px]">
              Create a password you can remember to continue
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* New Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                New Password
              </label>
              <Input
                type="password"
                placeholder="********"
                value={formData.newPassword}
                onChange={handleInputChange('newPassword')}
                icon={<LockIcon className="w-4 text-gray-400" />}
                showPasswordToggle={true}
                required
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password
              </label>
              <Input
                type="password"
                placeholder="********"
                value={formData.confirmPassword}
                onChange={handleInputChange('confirmPassword')}
                icon={<LockIcon className="w-4 text-gray-400" />}
                showPasswordToggle={true}
                required
              />
            </div>

            {/* Continue Button */}
            <div className="pt-4">
              <Button
                type="submit"
                variant="primary"
                disabled={!isFormValid}
                className="w-full py-4 text-lg font-semibold rounded-full"
              >
                Continue
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
