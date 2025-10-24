interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  icon?: React.ReactNode;
}

export function Textarea({ icon, className = '', ...props }: TextareaProps) {
  return (
    <div className="relative">
      {icon && (
        <div className="absolute left-3 top-3 z-10 text-gray-400">
          {icon}
        </div>
      )}
      <textarea
        {...props}
        className={`w-full px-3 py-[8px] ${icon ? 'pl-10' : ''} bg-gray-50 border border-transparent rounded-[8px] focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900 placeholder-gray-400 text-[14px] resize-none ${className}`}
      />
    </div>
  );
}