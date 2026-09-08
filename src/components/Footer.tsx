import React from "react";
import { portfolioData } from "../data/portfolioData";

export const Footer: React.FC = () => {
  const { personalInfo } = portfolioData;

  return (
    <footer className="border-t border-white/10 bg-[#08080a] py-12 text-[#D7E2EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Left Side */}
          <div className="space-y-1">
            <p className="text-xs sm:text-sm font-bold tracking-wider text-white font-mono uppercase">
              {personalInfo.name} — {personalInfo.institute}
            </p>
            {/* Plain selectable/copyable text, NOT a hyperlink */}
            <p className="text-xs font-mono text-slate-500 select-all cursor-text">
              {personalInfo.email}
            </p>
          </div>

          {/* Right Side */}
          <div className="space-y-1 md:text-right">
            <p className="text-xs font-mono text-slate-400">
              © 2026 {personalInfo.name}
            </p>
            <p className="text-[10.5px] font-mono tracking-widest text-slate-500 uppercase font-medium">
              {personalInfo.roleTagline}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
