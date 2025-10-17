import React from "react";

interface EventButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ComponentType<{ size?: number; color?: string; className?: string }>;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

export function EventButton({
  icon: Icon,
  children,
  variant = "outline",
  className = "",
  ...props
}: EventButtonProps) {
  const baseClasses = "event-button";
  
  const variantClasses = {
    primary: "!bg-black !text-white !border-none",
    secondary: "!bg-gray-100 !text-gray-800 !border-gray-300",
    outline: ""
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {Icon && (
        <div className="event-button-icon">
          <Icon size={20} />
        </div>
      )}
      {children}
    </button>
  );
}
