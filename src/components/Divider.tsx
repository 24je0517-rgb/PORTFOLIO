import React from "react";

interface DividerProps {
  className?: string;
}

export const Divider: React.FC<DividerProps> = ({ className = "" }) => {
  return (
    <div className={`w-full border-t border-[#E6DFD3] my-0 ${className}`} />
  );
};
