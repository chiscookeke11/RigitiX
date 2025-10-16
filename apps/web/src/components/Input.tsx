import { useState } from 'react';
import { EyeIcon, EyeOffIcon } from '../assets/icons/Eye';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  showPasswordToggle?: boolean;
}

export function Input({ showPasswordToggle = false, icon, className = '', ...props }: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = props.type === 'password' && showPassword ? 'text' : props.type;

  return (
    <div className="relative">
      {icon && (
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10 text-gray-400">
          {icon}
        </div>
      )}
      <input
        {...props}
        type={inputType}
        className={`w-full px-3 py-[8px] ${icon ? 'pl-10' : ''} ${showPasswordToggle ? 'pr-10' : ''} bg-gray-50 border border-transparent rounded-[8px] focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900 placeholder-gray-400 text-[14px] ${className}`}
      />
      {showPasswordToggle && props.type === 'password' && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
        >
          {showPassword ? <EyeOffIcon className="w-4" /> : <EyeIcon className="w-4" />}
        </button>
      )}
    </div>
  );
}
