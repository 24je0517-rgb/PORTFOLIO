import React from "react";
import { ProjectItem } from "../../data/portfolioData";
import { ProjectTags } from "./ProjectTags";
import { ProjectDeckViewer } from "./ProjectDeckViewer";
import { Trophy, ExternalLink, Download, CheckCircle2 } from "lucide-react";

interface ProjectCaseStudyProps {
  project: ProjectItem;
}

export const ProjectCaseStudy: React.FC<ProjectCaseStudyProps> = ({ project }) => {
  const { accentColor } = project;

  return (
    <div className="relative w-full rounded-3xl bg-[#0b0d10] border border-white/10 p-6 sm:p-8 lg:p-10 shadow-2xl transition-all duration-300">
      {/* Background Soft Glow */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none -z-0 opacity-20"
        style={{ background: accentColor.glow }}
      />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Project Metadata & Problem Breakdown */}
        <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
          <div className="space-y-5">
            {/* Top Row: Number & Category & Achievement Badge */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className={`text-sm font-mono font-bold ${accentColor.text}`}>
                  {project.number}
                </span>
                <span className="text-slate-500 font-mono text-xs">/</span>
                <span className="text-xs font-mono tracking-wider text-slate-400 uppercase">
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
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
              {project.title}
            </h3>

            {/* PM & Analytics Tags */}
            <div className="pt-1">
              <ProjectTags
                tags={project.tags}
                accentText={accentColor.text}
                accentBorder={accentColor.border}
              />
            </div>

            {/* Achievement Highlight Card */}
            {project.achievement && (
              <div className={`p-4 rounded-xl bg-[#101318] border ${accentColor.border} flex items-start gap-3`}>
                <div className={`p-2 rounded-lg ${accentColor.bg} ${accentColor.text} flex-shrink-0 mt-0.5`}>
                  <Trophy size={16} />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                    Competition Achievement
                  </span>
                  <p className="text-xs text-slate-200 leading-relaxed font-medium">
                    {project.achievement}
                  </p>
                </div>
              </div>
            )}

            {/* Key Summary Bullet Points */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-slate-400 uppercase">
                <span className={`w-1.5 h-1.5 rounded-full ${accentColor.text.replace('text-', 'bg-')}`} />
                <span>Key Contributions & Analytical Scope</span>
              </div>

              <div className="space-y-2.5">
                {project.bullets.map((bullet, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#101318]/90 border border-white/5 hover:border-white/15 transition-all text-xs text-slate-300 leading-relaxed flex items-start gap-2.5"
                  >
                    <CheckCircle2 size={15} className={`${accentColor.text} flex-shrink-0 mt-0.5`} />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Deck Actions */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-3">
            <a
              href={project.deckUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl ${accentColor.bg} ${accentColor.text} border ${accentColor.border} hover:bg-white/10 hover:text-white text-xs font-mono font-semibold transition-all`}
            >
              <ExternalLink size={14} />
              <span>Open Deck in New Tab</span>
            </a>

            <a
              href={project.deckUrl}
              download
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#13161c] border border-white/10 hover:border-white/30 text-xs font-mono text-slate-300 hover:text-white transition-all"
            >
              <Download size={14} />
              <span>Download PDF</span>
            </a>
          </div>
        </div>

        {/* Right Column: Live Presentation Deck Viewer */}
        <div className="lg:col-span-7 w-full">
          <ProjectDeckViewer
            deckUrl={project.deckUrl}
            projectTitle={project.title}
            accentText={accentColor.text}
            accentBorder={accentColor.border}
            accentGlow={accentColor.glow}
          />
        </div>
      </div>
    </div>
  );
};
