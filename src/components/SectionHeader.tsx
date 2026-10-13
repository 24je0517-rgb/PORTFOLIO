import React from "react";

interface SectionHeaderProps {
  label: string;
  title?: string;
  className?: string;
  rightAction?: React.ReactNode;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  label,
  title,
  className = "",
  rightAction,
}) => {
  return (
    <div className={`w-full mb-8 sm:mb-12 ${className}`}>
      <div className="flex items-center justify-between gap-4">
        {title ? (
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#2B2118] uppercase">
            {title}
          </h2>
        ) : (
          <div />
        )}
        
        <div className="flex items-center gap-3">
          {rightAction}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md border border-[#E6DFD3] bg-[#FFFFFF] text-[11px] font-mono tracking-widest text-[#8A6035] uppercase shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A97F50]"></span>
            {label}
          </div>
        </div>
      </div>
    </div>
  );
};
