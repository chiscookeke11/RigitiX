interface ToggleProps {
  leftLabel: string;
  rightLabel: string;
  value: 'left' | 'right';
  onChange: (value: 'left' | 'right') => void;
  className?: string;
}

export function Toggle({ leftLabel, rightLabel, value, onChange, className = '' }: ToggleProps) {
  return (
    <div className={`relative flex bg-gray-100 rounded-full p-1 ${className}`}>
      <button
        type="button"
        onClick={() => onChange('left')}
        className={`flex-1 px-6 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
          value === 'left'
            ? 'bg-orange-500 text-white shadow-sm'
            : 'text-gray-600 hover:text-gray-800'
        }`}
      >
        {leftLabel}
      </button>
      <button
        type="button"
        onClick={() => onChange('right')}
        className={`flex-1 px-6 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
          value === 'right'
            ? 'bg-orange-500 text-white shadow-sm'
            : 'text-gray-600 hover:text-gray-800'
        }`}
      >
        {rightLabel}
      </button>
    </div>
  );
}