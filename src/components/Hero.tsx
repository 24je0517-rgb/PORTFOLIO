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
      className="relative pt-24 pb-12 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-32 overflow-hidden"
    >
      {/* Soft background ambient gradient glow */}
      <div className="absolute top-10 right-10 w-72 sm:w-96 h-72 sm:h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-64 sm:w-80 h-64 sm:h-80 bg-indigo-50/60 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200/80 bg-blue-50/70 text-[11px] sm:text-xs font-mono tracking-wider text-blue-900">
            <Sparkles size={13} className="text-blue-600 animate-pulse flex-shrink-0" />
            <span>{personalInfo.roleTagline}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-mono text-slate-500">
            <MapPin size={13} className="text-slate-400 flex-shrink-0" />
            <span>{personalInfo.institute}</span>
          </div>
        </div>

        {/* Hero Name & Connect Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-end">
          {/* Main Name Heading */}
          <div className="lg:col-span-8">
            <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight text-slate-900 leading-[1.05] uppercase">
              {personalInfo.name}
            </h1>

            <div className="mt-4 sm:mt-8 space-y-1.5 sm:space-y-2">
              <p className="text-xs sm:text-base font-mono font-semibold tracking-wider text-blue-700 uppercase">
                {personalInfo.positioningTitle}
              </p>
              <p className="text-base sm:text-xl md:text-2xl text-slate-700 font-normal leading-relaxed max-w-2xl">
                {personalInfo.positioningSubtitle}
              </p>
            </div>
          </div>

          {/* Connect Button Callout */}
          <div className="lg:col-span-4 flex lg:justify-end pt-2 lg:pb-2">
            <a
              href="#contact"
              onClick={scrollToContact}
              className="group inline-flex items-center justify-between gap-4 px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl bg-slate-900 text-white hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-auto min-w-[180px]"
            >
              <span className="font-mono text-xs sm:text-sm tracking-widest font-semibold uppercase">
                CONNECT
              </span>
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
