import React, { useRef } from "react";
import { SectionHeader } from "./SectionHeader";
import { Divider } from "./Divider";
import { ProjectCard } from "./ProjectCard";
import { portfolioData } from "../data/portfolioData";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const Work: React.FC = () => {
  const { projects } = portfolioData;
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -440 : 440;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="work" className="py-16 sm:py-24">
      <Divider className="mb-12 sm:mb-16" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Left/Right Navigation Arrows */}
        <SectionHeader
          label="MY WORK"
          title="MY WORK"
          rightAction={
            <div className="flex items-center gap-1.5 mr-2">
              <button
                onClick={() => handleScroll("left")}
                className="w-8 h-8 rounded-full border border-slate-200 bg-white hover:bg-slate-100 flex items-center justify-center text-slate-700 transition-colors shadow-2xs focus:outline-none"
                aria-label="Scroll left"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => handleScroll("right")}
                className="w-8 h-8 rounded-full border border-slate-200 bg-white hover:bg-slate-100 flex items-center justify-center text-slate-700 transition-colors shadow-2xs focus:outline-none"
                aria-label="Scroll right"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          }
        />

        <p className="text-xs sm:text-sm text-slate-500 font-mono mb-6">
          Selected product cases, root cause analyses (RCA), and data analysis reports.
        </p>

        {/* Horizontal Scrollable Carousel Container */}
        <div
          ref={scrollContainerRef}
          className="flex items-stretch gap-6 overflow-x-auto pb-6 pt-2 no-scrollbar scroll-smooth snap-x snap-mandatory"
        >
          {projects.map((project) => (
            <div key={project.id} className="snap-start flex-none">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
