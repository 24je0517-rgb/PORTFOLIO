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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 uppercase">
            {title}
          </h2>
        ) : (
          <div />
        )}
        
        <div className="flex items-center gap-3">
          {rightAction}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-slate-200 bg-slate-50/80 text-[11px] font-mono tracking-widest text-slate-600 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500/80"></span>
            {label}
          </div>
        </div>
      </div>
    </div>
  );
};
