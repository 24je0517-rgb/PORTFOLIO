import React from "react";
import { ArrowRight, Sparkles, MapPin } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export const Hero: React.FC = () => {
  const { personalInfo } = portfolioData;

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactEl = document.querySelector("#contact");
    if (contactEl) {
      const navHeight = 72;
      const elementPosition = contactEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="top"
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-[#F7F4EF] paper-texture"
    >
      {/* Soft background ambient gradient glows */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#A97F50]/10 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#2F2A8F]/5 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#A97F50]/30 bg-[#F0E4D4] text-[11px] sm:text-xs font-mono tracking-wider text-[#8A6035]">
            <Sparkles size={13} className="text-[#A97F50] flex-shrink-0" />
            <span>{personalInfo.roleTagline}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-mono text-[#8C7B6A]">
            <MapPin size={13} className="text-[#A97F50] flex-shrink-0" />
            <span>{personalInfo.institute}</span>
          </div>
        </div>

        {/* Hero Name & Connect Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          {/* Main Name Heading */}
          <div className="lg:col-span-8">
            <h1 className="head-grad text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black tracking-tight leading-[1.03] uppercase">
              {personalInfo.name}
            </h1>

            <div className="mt-6 sm:mt-8 space-y-2">
              <p className="text-xs sm:text-base font-mono font-semibold tracking-wider text-[#8A6035] uppercase">
                {personalInfo.positioningTitle}
              </p>
              <p className="text-base sm:text-xl md:text-2xl text-[#6B5B4B] font-light leading-relaxed max-w-2xl">
                {personalInfo.positioningSubtitle}
              </p>
            </div>
          </div>

          {/* Connect Button Callout */}
          <div className="lg:col-span-4 flex lg:justify-end pt-2 lg:pb-2">
            <a
              href="#contact"
              onClick={scrollToContact}
              className="group inline-flex items-center justify-between gap-4 px-6 py-4 rounded-full bg-[#A97F50] text-white hover:bg-[#8A6035] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 w-full sm:w-auto min-w-[190px]"
            >
              <span className="font-mono text-xs sm:text-sm tracking-widest font-bold uppercase">
                CONNECT
              </span>
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 text-white"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
