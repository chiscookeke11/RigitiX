import { useState } from 'react';
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Toggle } from "../../components/Toggle";
import { Checkbox } from "../../components/Checkbox";
import { SocialAuthButtons } from "../../components/SocialAuthButtons";
import { EmailIcon } from "../../assets/icons/Email";
import { LockIcon } from "../../assets/icons/Lock";

export function Page() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
    userType: 'organizer' as 'organizer' | 'attendee'
  });

  const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  const handleUserTypeChange = (value: 'left' | 'right') => {
    setFormData(prev => ({
      ...prev,
      userType: value === 'left' ? 'organizer' : 'attendee'
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login submitted:', formData);
  };

  return (
    <div className=" min-h-full bg-white flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="flex justify-end mb-8">
          <div className="text-gray-600 text-[13px]">
            <a href="/auth/register" className="text-orange-500 font-medium hover:text-orange-600">
              Sign Up
            </a>
          </div>
        </div>

        <div className="rounded-lg p-8">
          {/* Title */}
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back!</h1>
            <p className="text-gray-600 text-sm">
              Sign in to access your account and manage your events seamlessly
            </p>
          </div>

          <div className="mb-6">
            <Toggle
              leftLabel="Event Organizer"
              rightLabel="Attendee"
              value={formData.userType === 'organizer' ? 'left' : 'right'}
              onChange={handleUserTypeChange}
            />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <Input
                type="email"
                placeholder="hello@example.com"
                value={formData.email}
                onChange={handleInputChange('email')}
                icon={<EmailIcon className="w-4 text-gray-400" />}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <Input
                type="password"
                placeholder="••••••••••"
                value={formData.password}
                onChange={handleInputChange('password')}
                icon={<LockIcon className="w-4 text-gray-400" />}
                showPasswordToggle={true}
              />
            </div>

            <div className="pt-2">
              <Button
                type="submit"
                variant="primary"
                className="w-full py-[8px] text-lg font-semibold rounded-full"
              >
                Sign in
              </Button>
            </div>

            <div className="flex items-center justify-between pt-2">
              <Checkbox
                checked={formData.rememberMe}
                onChange={(checked) => setFormData(prev => ({ ...prev, rememberMe: checked }))}
                label="Remember me"
              />
              <a
                href="/auth/forgot-password"
                className="text-sm text-gray-600 hover:text-gray-800"
              >
                Forgot Password ?
              </a>
            </div>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">OR</span>
            </div>
          </div>

          <div className="space-y-3">
            <SocialAuthButtons />
          </div>
        </div>
      </div>
    </div>
  );
}
