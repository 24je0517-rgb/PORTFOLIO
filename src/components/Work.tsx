import React, { useState } from "react";
import { portfolioData } from "../data/portfolioData";
import { ProjectNavigation } from "./work/ProjectNavigation";
import { ProjectCaseStudy } from "./work/ProjectCaseStudy";
import { Sparkles, FolderKanban } from "lucide-react";

export const Work: React.FC = () => {
  const { projects } = portfolioData;
  const [activeProjectId, setActiveProjectId] = useState<string>(projects[0]?.id || "credit-planner");

  const activeProject = projects.find((p) => p.id === activeProjectId) || projects[0];

  return (
    <section
      id="work"
      className="relative py-16 sm:py-24 lg:py-28 bg-[#07080a] text-[#f5f5f5] border-y border-white/10 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-cyan-950/20 via-emerald-950/10 to-transparent blur-3xl pointer-events-none -z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
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

            <p className="text-sm sm:text-base text-slate-400 font-normal">
              Selected work / Case studies — Explore in-depth product audits, growth frameworks, and analytics models.
            </p>
          </div>

          {/* Section Indicator Label */}
          <div className="flex items-center self-start sm:self-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded border border-white/15 bg-[#101318] text-[11px] font-mono tracking-widest text-slate-300 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              PROJECTS
            </div>
          </div>
        </div>

        {/* Project Navigation System */}
        <ProjectNavigation
          projects={projects}
          activeProjectId={activeProjectId}
          onSelectProject={setActiveProjectId}
        />

        {/* Active Case Study Layout */}
        <div key={activeProject.id} className="animate-in fade-in duration-300">
          <ProjectCaseStudy project={activeProject} />
        </div>

        {/* Bottom Understated Note */}
        <div className="pt-8 sm:pt-12 text-center border-t border-white/10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#101318] border border-white/10 text-xs font-mono text-slate-400">
            <Sparkles size={13} className="text-emerald-400" />
            <span>More case studies coming soon.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
