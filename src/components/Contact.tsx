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
    <section id="contact" className="pt-16 pb-20 sm:pt-24 sm:pb-28 bg-[#0c0c0c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#111014] via-[#161922] to-[#0c0c0c] p-6 sm:p-12 lg:p-20 shadow-2xl relative overflow-hidden">
          {/* Subtle background decorative shapes */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-0" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-0" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left Side: Massive Heading & Context */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-xs font-mono tracking-wider text-cyan-300">
                <Send size={12} className="text-cyan-400" />
                <span>LET'S CONNECT</span>
              </div>

              <h2 className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.05] uppercase">
                LET'S TALK
              </h2>

              <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-md">
                Looking for Product Management, Product Analyst, and Data Analyst internship opportunities. Let's discuss how data and product thinking can solve real user problems.
              </p>

              {/* One-click email copy button */}
              <div className="pt-2">
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 bg-[#111014] hover:bg-[#161922] hover:border-white/25 text-xs font-mono text-slate-300 transition-colors shadow-sm"
                >
                  {copied ? (
                    <>
                      <Check size={13} className="text-emerald-400" />
                      <span className="text-emerald-300 font-medium">Email Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} className="text-slate-500" />
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
                className="group p-4 sm:p-6 rounded-2xl border border-white/10 bg-[#111014] hover:border-cyan-500/50 hover:bg-[#161922] hover:shadow-cyan-500/10 hover:shadow-xl transition-all duration-300 flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black transition-colors flex-shrink-0">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h3 className="font-mono text-sm sm:text-base font-bold tracking-wider text-white group-hover:text-cyan-400 uppercase">
                      GMAIL
                    </h3>
                    <p className="text-xs text-slate-400 font-mono mt-0.5">
                      {personalInfo.email}
                    </p>
                  </div>
                </div>
                <ArrowUpRight
                  size={20}
                  className="text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0"
                />
              </a>

              {/* LINKEDIN BUTTON */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 sm:p-6 rounded-2xl border border-white/10 bg-[#111014] hover:border-blue-500/50 hover:bg-[#161922] hover:shadow-blue-500/10 hover:shadow-xl transition-all duration-300 flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-[#0077b5] group-hover:text-white transition-colors flex-shrink-0">
                    <Linkedin size={22} />
                  </div>
                  <div>
                    <h3 className="font-mono text-sm sm:text-base font-bold tracking-wider text-white group-hover:text-blue-400 uppercase">
                      LINKEDIN
                    </h3>
                    <p className="text-xs text-slate-400 font-mono mt-0.5">
                      in/rajat-sarkar0801
                    </p>
                  </div>
                </div>
                <ArrowUpRight
                  size={20}
                  className="text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0"
                />
              </a>

              {/* GITHUB BUTTON */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 sm:p-6 rounded-2xl border border-white/10 bg-[#111014] hover:border-purple-500/50 hover:bg-[#161922] hover:shadow-purple-500/10 hover:shadow-xl transition-all duration-300 flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors flex-shrink-0">
                    <Github size={22} />
                  </div>
                  <div>
                    <h3 className="font-mono text-sm sm:text-base font-bold tracking-wider text-white group-hover:text-purple-400 uppercase">
                      GITHUB
                    </h3>
                    <p className="text-xs text-slate-400 font-mono mt-0.5">
                      github.com/24je0517-rgb
                    </p>
                  </div>
                </div>
                <ArrowUpRight
                  size={20}
                  className="text-slate-500 group-hover:text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
