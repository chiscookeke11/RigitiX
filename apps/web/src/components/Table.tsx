interface TableProps {
  children: React.ReactNode;
  className?: string;
}

interface TableHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface TableBodyProps {
  children: React.ReactNode;
  className?: string;
}

interface TableRowProps {
  children: React.ReactNode;
  className?: string;
}

interface TableHeaderCellProps {
  children: React.ReactNode;
  className?: string;
  isFirst?: boolean;
  isLast?: boolean;
}

interface TableCellProps {
  children: React.ReactNode;
  className?: string;
}

export function Table({ children, className = "" }: TableProps) {
  return (
    <div className={`w-full ${className}`}>
      {children}
    </div>
  );
}

export function TableHeader({ children, className = "" }: TableHeaderProps) {
  return (
    <table className="w-full table-fixed border-separate border-spacing-0">
      <thead>
        <tr className={`bg-[#124B68] ${className}`}>
          {children}
        </tr>
      </thead>
    </table>
  );
}

export function TableBody({ children, className = "" }: TableBodyProps) {
  return (
    <div className={`bg-white rounded-[10px] mt-[10px] overflow-visible ${className}`}>
      <table className="w-full table-fixed">
        <tbody>
          {children}
        </tbody>
      </table>
    </div>
  );
}

export function TableRow({ children, className = "" }: TableRowProps) {
  return (
    <tr className={`border-b border-[#EEEFF1] last:border-b-0 ${className}`}>
      {children}
    </tr>
  );
}

export function TableHeaderCell({ 
  children, 
  className = "", 
  isFirst = false, 
  isLast = false 
}: TableHeaderCellProps) {
  const borderRadius = isFirst ? "rounded-l-[10px]" : isLast ? "rounded-r-[10px]" : "";
  
  return (
    <th className={`px-[12px] py-[8px] text-[14px] text-white text-left ${borderRadius} ${className}`}>
      {children}
    </th>
  );
}

export function TableCell({ children, className = "" }: TableCellProps) {
  return (
    <td className={`p-4 text-[14px] text-[#737373] ${className}`}>
      {children}
    </td>
  );
}