import React from "react";
import { ProjectItem } from "../../data/portfolioData";
import { ProjectTags } from "./ProjectTags";
import { Deck } from "./Deck";
import { Trophy, ExternalLink, Download } from "lucide-react";

interface ProjectCaseStudyProps {
  project: ProjectItem;
}

export const ProjectCaseStudy: React.FC<ProjectCaseStudyProps> = ({ project }) => {
  const { accentColor } = project;

  // Resolve deckUrl with base
  const resolveDeckUrl = (url: string) => {
    if (url.startsWith("http") || url.startsWith("/")) return url;
    const base = import.meta.env.BASE_URL || "/";
    return `${base}${url.replace(/^\//, "")}`;
  };

  return (
    <div className="relative w-full rounded-3xl bg-[#101318] border border-white/10 p-6 sm:p-8 lg:p-12 shadow-2xl transition-all duration-300">
      {/* Subtle Background Glow */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none -z-0 opacity-25"
        style={{ background: accentColor.glow }}
      />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
        {/* Left Column: Project Details & Analytical Breakdown */}
        <div className="lg:col-span-5 space-y-6">
          {/* Header Metadata */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className={`text-sm font-mono font-bold ${accentColor.text}`}>
                  {project.number}
                </span>
                <span className="text-slate-600 font-mono text-xs">/</span>
                <span className="text-xs font-mono tracking-widest text-slate-400 uppercase">
                  {project.category}
                </span>
              </div>

              {/* Compact Achievement Badge */}
              <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold ${accentColor.bg} ${accentColor.text} border ${accentColor.border} shadow-sm`}>
                <Trophy size={13} className="flex-shrink-0" />
                <span>{project.badgeText}</span>
              </div>
            </div>

            {/* Project Title */}
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white leading-[1.1]">
              {project.title}
            </h3>

            {/* One-Liner Summary */}
            <p className="text-sm sm:text-base font-normal text-slate-300 leading-relaxed">
              {project.oneLiner}
            </p>
          </div>

          {/* 3 Metric / Impact Panels */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 py-1">
            {project.panels.map((panel, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-[#161922] border border-white/5 text-center space-y-0.5"
              >
                <div className={`text-sm sm:text-base font-mono font-bold ${accentColor.text}`}>
                  {panel.key}
                </div>
                <div className="text-[10px] sm:text-[10.5px] font-mono text-slate-400 leading-tight">
                  {panel.label}
                </div>
              </div>
            ))}
          </div>

          {/* PM & Analytics Tags */}
          <ProjectTags
            tags={project.tags}
            accentText={accentColor.text}
            accentBorder={accentColor.border}
          />

          {/* Key Insight Bullet Points */}
          <div className="space-y-2.5 pt-1">
            {project.bullets.map((bullet, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 text-xs sm:text-[13px] text-slate-300 leading-relaxed"
              >
                <span className={`w-2 h-2 rounded-full ${accentColor.text.replace('text-', 'bg-')} flex-shrink-0 mt-1.5 shadow-[0_0_8px_currentColor]`} />
                <span>{bullet}</span>
              </div>
            ))}
          </div>

          {/* Bottom Action Links */}
          <div className="pt-4 flex flex-wrap items-center gap-3">
            <a
              href={resolveDeckUrl(project.deckUrl)}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full ${accentColor.bg} ${accentColor.text} border ${accentColor.border} hover:bg-white/10 hover:text-white text-xs font-mono font-semibold transition-all shadow-md`}
            >
              <span>Explore Deck PDF</span>
              <ExternalLink size={14} />
            </a>

            <a
              href={resolveDeckUrl(project.deckUrl)}
              download
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#161922] border border-white/10 hover:border-white/30 text-xs font-mono text-slate-300 hover:text-white transition-all"
            >
              <Download size={13} />
              <span>Download</span>
            </a>
          </div>
        </div>

        {/* Right Column: 16:9 Interactive Deck Viewer */}
        <div className="lg:col-span-7 w-full">
          <Deck
            slides={project.slides}
            name={project.title}
            deckUrl={project.deckUrl}
            theme={{
              grad: accentColor.grad,
              glow: accentColor.glow,
              text: accentColor.text,
              border: accentColor.border
            }}
          />
        </div>
      </div>
    </div>
  );
};
