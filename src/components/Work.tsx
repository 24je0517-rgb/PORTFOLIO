import React, { useState, useEffect, useRef } from "react";
import { portfolioData } from "../data/portfolioData";
import { ProjectCaseStudy } from "./work/ProjectCaseStudy";
import { Sparkles, FolderKanban } from "lucide-react";

export const Work: React.FC = () => {
  const { projects } = portfolioData;
  const [activeProjectIndex, setActiveProjectIndex] = useState<number>(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -35% 0px",
      threshold: 0.15,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.getAttribute("data-index"));
          if (!isNaN(index)) {
            setActiveProjectIndex(index);
          }
        }
      });
    }, observerOptions);

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [projects]);

  return (
    <section
      id="work"
      className="relative py-16 sm:py-24 lg:py-28 bg-[#07080a] text-[#f5f5f5] border-y border-white/10 overflow-visible"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-cyan-950/20 via-emerald-950/10 to-transparent blur-3xl pointer-events-none -z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-white/10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-xs font-mono text-emerald-400">
              <FolderKanban size={13} className="text-emerald-400" />
              <span>CASE STUDIES & DECK SHOWCASE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase">
              PROJECTS
            </h2>

            <p className="text-sm sm:text-base text-slate-400 font-normal max-w-2xl">
              Selected work / Case studies — Scroll to explore in-depth product audits, growth frameworks, and analytics models.
            </p>
          </div>

          {/* Sticky/Dynamic Active Project Indicator Pill */}
          <div className="flex items-center self-start sm:self-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/15 bg-[#101318] text-xs font-mono tracking-wider text-slate-300 shadow-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-emerald-400 font-bold">
                {String(activeProjectIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
              </span>
              <span className="text-slate-500">·</span>
              <span className="text-white font-medium truncate max-w-[140px] sm:max-w-[180px]">
                {projects[activeProjectIndex]?.shortName || "CASE STUDY"}
              </span>
            </div>
          </div>
        </div>

        {/* Scroll-Driven Overlapping Sticky Stack Container */}
        <div className="relative space-y-16 sm:space-y-24 lg:space-y-32 pb-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (cardRefs.current[index] = el)}
              data-index={index}
              style={{
                top: `${80 + index * 10}px`,
                zIndex: 10 + index * 5,
              }}
              className="sticky transition-all duration-300"
            >
              <div className="shadow-[0_-16px_50px_rgba(0,0,0,0.9)] rounded-3xl">
                <ProjectCaseStudy project={project} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Understated Note */}
        <div className="pt-10 sm:pt-14 text-center border-t border-white/10">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#101318] border border-white/10 text-xs font-mono text-slate-400 shadow-lg">
            <Sparkles size={14} className="text-emerald-400" />
            <span className="tracking-wide">MORE CASE STUDIES COMING SOON</span>
          </div>
        </div>
      </div>
    </section>
  );
};
