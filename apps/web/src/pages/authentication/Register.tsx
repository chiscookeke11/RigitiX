import { useState } from 'react';
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Select, SelectItem } from "../../components/Select";
import { SocialAuthButtons } from "../../components/SocialAuthButtons";
import { Person } from "../../assets/icons/Person";
import { EmailIcon } from "../../assets/icons/Email";
import { LockIcon } from "../../assets/icons/Lock";
import { NavLink } from "react-router"

export function Page() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    countryCode: '+1',
    email: '',
    password: '',
    confirmPassword: '',
    gender: ''
  });

  const [passwordStrength, setPasswordStrength] = useState('');

  const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    setFormData(prev => ({ ...prev, [field]: value }));

    if (field === 'password') {
      if (value.length < 6) {
        setPasswordStrength('Weak');
      } else if (value.length < 10) {
        setPasswordStrength('Medium');
      } else {
        setPasswordStrength('Strong');
      }
    }
  };

  const handleGenderChange = (value: string) => {
    setFormData(prev => ({ ...prev, gender: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex justify-end items-center p-4">
        <div className="text-gray-600 text-[13px]">
          <span className="inline-block mr-[10px] text-[#737373]">Already have an account?
          </span>
          <NavLink to="/auth/login" className="text-orange-500 font-medium hover:text-orange-600 cursor-pointer">
            Sign In
          </NavLink>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center px-6">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-xl font-bold text-gray-900 mb-[4px]">Create Your Account</h1>
            <p className="text-[#737373] text-[13px]">You're signing up as an organizer</p>
          </div>

          <div className="mb-6">
            <SocialAuthButtons />
          </div>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">OR</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-[10px]">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <Input
                  type="text"
                  placeholder="Placeholder text..."
                  value={formData.firstName}
                  onChange={handleInputChange('firstName')}
                  icon={<Person className="w-4 text-gray-400" />}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <Input
                  type="text"
                  placeholder="Placeholder text..."
                  value={formData.lastName}
                  onChange={handleInputChange('lastName')}
                  icon={<Person className="w-4 text-gray-400" />}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <div className="grid grid-cols-[max-content_1fr] w-full items-stretch">
                <Select
                  value={formData.countryCode || '+1'}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, countryCode: value }))}
                  className="w-24 rounded-r-none border-r-0"
                >
                  <SelectItem value="+1">🇺🇸 +1</SelectItem>
                  <SelectItem value="+44">🇬🇧 +44</SelectItem>
                  <SelectItem value="+33">🇫🇷 +33</SelectItem>
                  <SelectItem value="+49">🇩🇪 +49</SelectItem>
                  <SelectItem value="+81">🇯🇵 +81</SelectItem>
                  <SelectItem value="+86">🇨🇳 +86</SelectItem>
                  <SelectItem value="+91">🇮🇳 +91</SelectItem>
                  <SelectItem value="+234">🇳🇬 +234</SelectItem>
                </Select>
                <Input
                  type="tel"
                  placeholder="(555) 000-0000"
                  value={formData.phone}
                  onChange={handleInputChange('phone')}
                  className="flex-1 rounded-l-none border-l-0"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <Input
                type="email"
                placeholder="hello@alignui.com"
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
              {passwordStrength && (
                <p className={`text-sm mt-1 ${passwordStrength === 'Weak' ? 'text-red-500' :
                  passwordStrength === 'Medium' ? 'text-yellow-500' :
                    'text-green-500'
                  }`}>
                  {passwordStrength}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password
              </label>
              <Input
                type="password"
                placeholder="••••••••••"
                value={formData.confirmPassword}
                onChange={handleInputChange('confirmPassword')}
                icon={<LockIcon className="w-4 text-gray-400" />}
                showPasswordToggle={true}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Gender
              </label>
              <Select
                placeholder="Select Gender"
                value={formData.gender}
                onValueChange={handleGenderChange}
              >
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
                <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
              </Select>
            </div>

            <div className="pt-4">
              <Button
                type="submit"
                variant="primary"
                className="w-full py-[8px] text-lg font-semibold rounded-full"
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
