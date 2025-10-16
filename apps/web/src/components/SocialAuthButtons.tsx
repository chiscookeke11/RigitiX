import { GoogleIcon } from '../assets/icons/Google';
import { AppleIcon } from '../assets/icons/Apple';
import { DiscordIcon } from '../assets/icons/Discord';

interface SocialButtonProps {
  icon: React.ReactNode;
  text: string;
  onClick?: () => void;
  className?: string;
}

function SocialButton({ icon, text, onClick, className = '' }: SocialButtonProps) {
  return (
    <button
      onClick={onClick}
      className={` bg-[#FAFAFA] text-black flex gap-[10px] px-[20px] py-[7px] rounded-full text-[12px] ${className}`}
    >
      {icon}
      {text}
    </button>
  );
}

export function SocialAuthButtons() {
  return (
    <div className="space-x-3 flex justify-center">
      <SocialButton
        icon={<GoogleIcon className="w-5 h-5" />}
        text="Google"
        onClick={() => {
          // Handle Google auth
          console.log('Google auth clicked');
        }}
      />

      <SocialButton
        icon={<AppleIcon className="w-5 h-5" />}
        text="Apple ID"
        onClick={() => {
          // Handle Apple auth
          console.log('Apple auth clicked');
        }}
      />

      <SocialButton
        icon={<DiscordIcon className="w-5 h-5" />}
        text="Discord"
        onClick={() => {
          // Handle Discord auth
          console.log('Discord auth clicked');
        }}
      />
    </div>
  );
}
