import React from "react";
import { SectionHeader } from "./SectionHeader";
import { Divider } from "./Divider";
import { portfolioData } from "../data/portfolioData";
import { Compass, Lightbulb, BarChart3, Search, Layout, Target, ArrowUpRight } from "lucide-react";

export const About: React.FC = () => {
  const { about } = portfolioData;

  const iconMap: { [key: string]: React.ReactNode } = {
    "Figma UX/UI Design": <Layout size={18} className="text-indigo-600 flex-shrink-0" />,
    "Product Thinking & Strategy": <Target size={18} className="text-blue-600 flex-shrink-0" />,
    "Data Visualization & Analytics": <BarChart3 size={18} className="text-sky-600 flex-shrink-0" />,
    "Root Cause Analysis (RCA)": <Search size={18} className="text-amber-600 flex-shrink-0" />,
    "Actionable Problem Solving": <Lightbulb size={18} className="text-emerald-600 flex-shrink-0" />
  };

  return (
    <section id="about" className="py-12 sm:py-20 lg:py-24">
      <Divider className="mb-10 sm:mb-16" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader label="ABOUT ME" />

        {/* 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-start">
          {/* Left Column: CURRENTLY */}
          <div className="lg:col-span-5 space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-slate-500 uppercase font-semibold">
              <Compass size={14} className="text-blue-600" />
              <span>CURRENTLY</span>
            </div>

            <p className="text-lg sm:text-2xl font-normal text-slate-900 leading-relaxed">
              {about.currently}
            </p>

            <div className="pt-3 sm:pt-4 border-t border-slate-200/60 flex flex-wrap gap-4 text-xs font-mono text-slate-500">
              <div>
                <span className="text-slate-400 block text-[10px]">CAMPUS</span>
                <span className="font-semibold text-slate-700">IIT (ISM) Dhanbad</span>
              </div>
              <div className="border-l border-slate-200 pl-4">
                <span className="text-slate-400 block text-[10px]">FOCUS</span>
                <span className="font-semibold text-slate-700">Product & Data Analytics</span>
              </div>
            </div>
          </div>

          {/* Right Column: WHAT I DO */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-slate-500 uppercase font-semibold">
              <Target size={14} className="text-blue-600" />
              <span>WHAT I DO</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {about.whatIDo.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-xl border border-slate-200/80 bg-white/70 backdrop-blur-xs hover:border-slate-300 hover:bg-white transition-all duration-200 shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    {iconMap[item.title] || <ArrowUpRight size={18} className="text-blue-600 flex-shrink-0" />}
                    <h3 className="text-sm font-semibold text-slate-900">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
