import React, { useState } from "react";
import { Mail, Linkedin, Github, ArrowUpRight, Copy, Check, Send } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export const Contact: React.FC = () => {
  const { personalInfo } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="pt-16 pb-20 sm:pt-24 sm:pb-28 bg-[#F7F4EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[#E6DFD3] bg-gradient-to-br from-[#FFFFFF] via-[#FBF8F3] to-[#F1ECE4] p-6 sm:p-12 lg:p-20 shadow-[0_4px_24px_rgba(43,33,24,0.06)] relative overflow-hidden">
          {/* Subtle background decorative shapes */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#F0E4D4]/40 rounded-full blur-3xl pointer-events-none -z-0" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#A97F50]/10 rounded-full blur-3xl pointer-events-none -z-0" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left Side: Massive Heading & Context */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#E6DFD3] bg-[#FFFFFF] text-xs font-mono tracking-wider text-[#8A6035] shadow-xs">
                <Send size={12} className="text-[#A97F50]" />
                <span>LET'S CONNECT</span>
              </div>

              <h2 className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#2B2118] leading-[1.05] uppercase">
                LET'S TALK
              </h2>

              <p className="text-base sm:text-lg text-[#6B5B4B] font-normal leading-relaxed max-w-md">
                Looking for Product Management, Product Analyst, and Data Analyst internship opportunities. Let's discuss how data and product thinking can solve real user problems.
              </p>

              {/* One-click email copy button */}
              <div className="pt-2">
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-[#E6DFD3] bg-[#FFFFFF] hover:bg-[#FBF8F3] hover:border-[#A97F50]/40 text-xs font-mono text-[#2B2118] transition-colors shadow-xs"
                >
                  {copied ? (
                    <>
                      <Check size={13} className="text-emerald-700" />
                      <span className="text-emerald-800 font-medium">Email Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} className="text-[#8C7B6A]" />
                      <span>Copy Email ({personalInfo.email})</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Right Side: 3 Large Interactive Buttons */}
            <div className="lg:col-span-6 flex flex-col gap-3.5 sm:gap-4">
              {/* GMAIL BUTTON */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="group p-4 sm:p-6 rounded-2xl border border-[#E6DFD3] bg-[#FFFFFF] hover:border-[#A97F50]/60 hover:bg-[#FBF8F3] hover:shadow-[0_8px_24px_rgba(43,33,24,0.08)] transition-all duration-300 flex items-center justify-between shadow-xs"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#F0E4D4] border border-[#E6DFD3] flex items-center justify-center text-[#8A6035] group-hover:bg-[#A97F50] group-hover:text-white transition-colors flex-shrink-0">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h3 className="font-mono text-sm sm:text-base font-bold tracking-wider text-[#2B2118] group-hover:text-[#8A6035] uppercase">
                      GMAIL
                    </h3>
                    <p className="text-xs text-[#6B5B4B] font-mono mt-0.5">
                      {personalInfo.email}
                    </p>
                  </div>
                </div>
                <ArrowUpRight
                  size={20}
                  className="text-[#8C7B6A] group-hover:text-[#8A6035] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0"
                />
              </a>

              {/* LINKEDIN BUTTON */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 sm:p-6 rounded-2xl border border-[#E6DFD3] bg-[#FFFFFF] hover:border-[#2F2A8F]/40 hover:bg-[#FBF8F3] hover:shadow-[0_8px_24px_rgba(43,33,24,0.08)] transition-all duration-300 flex items-center justify-between shadow-xs"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#2F2A8F]/10 border border-[#2F2A8F]/20 flex items-center justify-center text-[#2F2A8F] group-hover:bg-[#2F2A8F] group-hover:text-white transition-colors flex-shrink-0">
                    <Linkedin size={22} />
                  </div>
                  <div>
                    <h3 className="font-mono text-sm sm:text-base font-bold tracking-wider text-[#2B2118] group-hover:text-[#2F2A8F] uppercase">
                      LINKEDIN
                    </h3>
                    <p className="text-xs text-[#6B5B4B] font-mono mt-0.5">
                      in/rajat-sarkar0801
                    </p>
                  </div>
                </div>
                <ArrowUpRight
                  size={20}
                  className="text-[#8C7B6A] group-hover:text-[#2F2A8F] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0"
                />
              </a>

              {/* GITHUB BUTTON */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 sm:p-6 rounded-2xl border border-[#E6DFD3] bg-[#FFFFFF] hover:border-[#8A6035]/50 hover:bg-[#FBF8F3] hover:shadow-[0_8px_24px_rgba(43,33,24,0.08)] transition-all duration-300 flex items-center justify-between shadow-xs"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#F0E4D4] border border-[#E6DFD3] flex items-center justify-center text-[#2B2118] group-hover:bg-[#2B2118] group-hover:text-white transition-colors flex-shrink-0">
                    <Github size={22} />
                  </div>
                  <div>
                    <h3 className="font-mono text-sm sm:text-base font-bold tracking-wider text-[#2B2118] group-hover:text-[#8A6035] uppercase">
                      GITHUB
                    </h3>
                    <p className="text-xs text-[#6B5B4B] font-mono mt-0.5">
                      github.com/24je0517-rgb
                    </p>
                  </div>
                </div>
                <ArrowUpRight
                  size={20}
                  className="text-[#8C7B6A] group-hover:text-[#8A6035] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
