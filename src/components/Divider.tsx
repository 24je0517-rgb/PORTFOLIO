import React from "react";

interface DividerProps {
  className?: string;
}

export const Divider: React.FC<DividerProps> = ({ className = "" }) => {
  return (
    <div className={`w-full border-t border-slate-200/80 my-0 ${className}`} />
  );
};
