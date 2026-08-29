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
    <section id="contact" className="pt-16 pb-20 sm:pt-24 sm:pb-28">
      {/* Notice: No normal horizontal partition line above, as requested */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200/90 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/40 p-8 sm:p-14 lg:p-20 shadow-[0_4px_24px_rgba(0,0,0,0.03)] relative overflow-hidden">
          {/* Subtle background decorative shapes */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-0" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-100/30 rounded-full blur-2xl pointer-events-none -z-0" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Side: Massive Heading & Context */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200/90 bg-white/90 text-xs font-mono tracking-wider text-blue-800">
                <Send size={12} className="text-blue-600" />
                <span>LET'S CONNECT</span>
              </div>

              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.05] uppercase">
                LET'S TALK
              </h2>

              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-md">
                Looking for Product Management, Product Analyst, and Data Analyst internship opportunities. Let's discuss how data and product thinking can solve real user problems.
              </p>

              {/* One-click email copy button */}
              <div className="pt-2">
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-xs font-mono text-slate-600 transition-colors shadow-2xs"
                >
                  {copied ? (
                    <>
                      <Check size={13} className="text-emerald-600" />
                      <span className="text-emerald-700 font-medium">Email Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} className="text-slate-400" />
                      <span>Copy Email ({personalInfo.email})</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Right Side: 3 Large Interactive Buttons */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              {/* GMAIL BUTTON */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="group p-5 sm:p-6 rounded-2xl border border-slate-200 bg-white hover:border-blue-400 hover:bg-blue-50/50 hover:shadow-md transition-all duration-300 flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h3 className="font-mono text-sm sm:text-base font-bold tracking-wider text-slate-900 group-hover:text-blue-700 uppercase">
                      GMAIL
                    </h3>
                    <p className="text-xs text-slate-500 font-mono mt-0.5">
                      {personalInfo.email}
                    </p>
                  </div>
                </div>
                <ArrowUpRight
                  size={20}
                  className="text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                />
              </a>

              {/* LINKEDIN BUTTON */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 sm:p-6 rounded-2xl border border-slate-200 bg-white hover:border-blue-500 hover:bg-blue-50/50 hover:shadow-md transition-all duration-300 flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-[#0077b5] group-hover:text-white transition-colors">
                    <Linkedin size={22} />
                  </div>
                  <div>
                    <h3 className="font-mono text-sm sm:text-base font-bold tracking-wider text-slate-900 group-hover:text-blue-700 uppercase">
                      LINKEDIN
                    </h3>
                    <p className="text-xs text-slate-500 font-mono mt-0.5">
                      in/rajat-sarkar0801
                    </p>
                  </div>
                </div>
                <ArrowUpRight
                  size={20}
                  className="text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                />
              </a>

              {/* GITHUB BUTTON */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 sm:p-6 rounded-2xl border border-slate-200 bg-white hover:border-slate-400 hover:bg-slate-50 hover:shadow-md transition-all duration-300 flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-800 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                    <Github size={22} />
                  </div>
                  <div>
                    <h3 className="font-mono text-sm sm:text-base font-bold tracking-wider text-slate-900 group-hover:text-slate-950 uppercase">
                      GITHUB
                    </h3>
                    <p className="text-xs text-slate-500 font-mono mt-0.5">
                      github.com/24je0517-rgb
                    </p>
                  </div>
                </div>
                <ArrowUpRight
                  size={20}
                  className="text-slate-400 group-hover:text-slate-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
