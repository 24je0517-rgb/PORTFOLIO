import React from "react";
import { portfolioData } from "../data/portfolioData";

export const Footer: React.FC = () => {
  const { personalInfo } = portfolioData;

  return (
    <footer className="border-t border-[#E6DFD3] bg-[#F1ECE4] py-12 text-[#2B2118]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Left Side */}
          <div className="space-y-1">
            <p className="text-xs sm:text-sm font-bold tracking-wider text-[#2B2118] font-mono uppercase">
              {personalInfo.name} — {personalInfo.institute}
            </p>
            {/* Plain selectable/copyable text, NOT a hyperlink */}
            <p className="text-xs font-mono text-[#6B5B4B] select-all cursor-text">
              {personalInfo.email}
            </p>
          </div>

          {/* Right Side */}
          <div className="space-y-1 md:text-right">
            <p className="text-xs font-mono text-[#6B5B4B]">
              © 2026 {personalInfo.name}
            </p>
            <p className="text-[10.5px] font-mono tracking-widest text-[#8C7B6A] uppercase font-medium">
              {personalInfo.roleTagline}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
