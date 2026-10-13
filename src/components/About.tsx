import React from "react";
import { SectionHeader } from "./SectionHeader";
import { Divider } from "./Divider";
import { portfolioData } from "../data/portfolioData";
import { Compass, Lightbulb, BarChart3, Search, Layout, Target, ArrowUpRight } from "lucide-react";

export const About: React.FC = () => {
  const { about } = portfolioData;

  const iconMap: { [key: string]: React.ReactNode } = {
    "Figma UX/UI Design": <Layout size={18} className="text-[#8A6035] flex-shrink-0" />,
    "Product Thinking & Strategy": <Target size={18} className="text-[#2F2A8F] flex-shrink-0" />,
    "Data Visualization & Analytics": <BarChart3 size={18} className="text-[#A97F50] flex-shrink-0" />,
    "Root Cause Analysis (RCA)": <Search size={18} className="text-[#8A6035] flex-shrink-0" />,
    "Actionable Problem Solving": <Lightbulb size={18} className="text-[#2F2A8F] flex-shrink-0" />
  };

  return (
    <section id="about" className="py-16 sm:py-24 bg-[#F1ECE4]">
      <Divider className="mb-12 sm:mb-16" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader label="ABOUT ME" />

        {/* 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Left Column: CURRENTLY */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#8A6035] uppercase font-semibold">
              <Compass size={14} className="text-[#A97F50]" />
              <span>CURRENTLY</span>
            </div>

            <p className="text-xl sm:text-2xl font-light text-[#2B2118] leading-relaxed">
              {about.currently}
            </p>

            <div className="pt-4 border-t border-[#E6DFD3] flex flex-wrap gap-4 text-xs font-mono text-[#6B5B4B]">
              <div>
                <span className="text-[#8C7B6A] block text-[10px]">CAMPUS</span>
                <span className="font-semibold text-[#2B2118]">IIT (ISM) Dhanbad</span>
              </div>
              <div className="border-l border-[#E6DFD3] pl-4">
                <span className="text-[#8C7B6A] block text-[10px]">FOCUS</span>
                <span className="font-semibold text-[#2B2118]">Product & Data Analytics</span>
              </div>
            </div>
          </div>

          {/* Right Column: WHAT I DO */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#8A6035] uppercase font-semibold">
              <Target size={14} className="text-[#A97F50]" />
              <span>WHAT I DO</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              {about.whatIDo.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl border border-[#E6DFD3] bg-[#FFFFFF] hover:border-[#A97F50]/40 hover:bg-[#FBF8F3] transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    {iconMap[item.title] || <ArrowUpRight size={18} className="text-[#A97F50] flex-shrink-0" />}
                    <h3 className="text-sm font-semibold text-[#2B2118]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[#6B5B4B] leading-relaxed">
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
