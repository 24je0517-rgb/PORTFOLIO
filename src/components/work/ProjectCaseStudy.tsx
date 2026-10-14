import React, { useState } from "react";
import { ProjectItem } from "../../data/portfolioData";
import { ProjectTags } from "./ProjectTags";
import { Deck } from "./Deck";
import { CertificateModal } from "./CertificateModal";
import { Trophy, Award, Layers, ExternalLink } from "lucide-react";

interface ProjectCaseStudyProps {
  project: ProjectItem;
}

export const ProjectCaseStudy: React.FC<ProjectCaseStudyProps> = ({ project }) => {
  const { accentColor } = project;
  const [isDeckOpen, setIsDeckOpen] = useState(false);
  const [isCertOpen, setIsCertOpen] = useState(false);

  const resolveUrl = (url?: string) => {
    if (!url) return "#";
    if (url.startsWith("http://") || url.startsWith("https://") || url.startsWith("/")) return url;
    const base = import.meta.env.BASE_URL || "/";
    return `${base}${url.replace(/^\//, "")}`;
  };

  return (
    <div className="relative w-full rounded-3xl bg-[#FFFFFF] border border-[#E6DFD3] p-6 sm:p-8 lg:p-12 shadow-md transition-all duration-300">
      {/* Subtle Background Glow */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none -z-0 opacity-10"
        style={{ background: accentColor.glow }}
      />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
        {/* Left Column: Project Details & Action Links */}
        <div className="lg:col-span-5 space-y-5">
          {/* Header Metadata */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className={`text-sm font-mono font-bold ${accentColor.text}`}>
                  {project.number}
                </span>
                <span className="text-[#8C7B6A] font-mono text-xs">/</span>
                <span className="text-xs font-mono tracking-widest text-[#8C7B6A] uppercase">
                  {project.category}
                </span>
              </div>

              {/* Compact Achievement Badge */}
              <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold ${accentColor.bg} ${accentColor.text} border ${accentColor.border} shadow-xs`}>
                <Trophy size={13} className="flex-shrink-0" />
                <span>{project.badgeText}</span>
              </div>
            </div>

            {/* Project Title */}
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#2B2118] leading-[1.1]">
              {project.title}
            </h3>

            {/* One-Liner Summary */}
            <p className="text-sm sm:text-base font-normal text-[#6B5B4B] leading-relaxed">
              {project.oneLiner}
            </p>

            {/* Skills / Category Tags */}
            <div className="pt-1">
              <ProjectTags
                tags={project.tags}
                accentText={accentColor.text}
                accentBorder={accentColor.border}
              />
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-2.5 sm:gap-3">
              <a
                href={resolveUrl(project.deckUrl)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#A97F50] text-white hover:bg-[#8A6035] text-xs font-mono font-semibold transition-all shadow-sm cursor-pointer hover:scale-105 active:scale-95"
                title="Open PDF deck in a new tab"
              >
                <Layers size={14} />
                <span>View Deck</span>
                <ExternalLink size={12} className="opacity-80" />
              </a>

              {project.certificateUrl ? (
                <button
                  type="button"
                  onClick={() => setIsCertOpen(true)}
                  className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#FFFFFF] border border-[#A97F50] text-[#8A6035] hover:bg-[#F0E4D4] text-xs font-mono font-semibold transition-all shadow-sm cursor-pointer hover:scale-105 active:scale-95"
                >
                  <Award size={14} className="text-[#8A6035]" />
                  <span>View Certificate</span>
                </button>
              ) : project.certificateStatus === "coming_soon" ? (
                <div
                  className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#FBF8F3] border border-[#E6DFD3] text-xs font-mono font-medium text-[#8C7B6A] shadow-xs cursor-default select-none"
                  title="Certificate: Coming Soon"
                >
                  <Award size={14} className="text-[#A97F50]" />
                  <span>Certificate: Coming Soon</span>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        {/* Right Column: 16:9 Interactive Deck Viewer */}
        <div className="lg:col-span-7 w-full space-y-3">
          <Deck
            slides={project.slides}
            name={project.title}
            deckUrl={project.deckUrl}
            isOpen={isDeckOpen}
            onOpenChange={setIsDeckOpen}
            theme={{
              grad: accentColor.grad,
              glow: accentColor.glow,
              text: accentColor.text,
              border: accentColor.border
            }}
          />

          {/* Secondary Quick Action Bar Below Deck for Instant Access */}
          <div className="flex items-center justify-end gap-2.5 pt-1">
            <button
              type="button"
              onClick={() => setIsDeckOpen(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-[#E6DFD3] bg-[#FFFFFF] hover:bg-[#F0E4D4] text-xs font-mono text-[#6B5B4B] hover:text-[#2B2118] transition-all cursor-pointer shadow-xs"
            >
              <Layers size={13} className="text-[#8A6035]" />
              <span>Expand Deck</span>
            </button>

            {project.certificateUrl ? (
              <button
                type="button"
                onClick={() => setIsCertOpen(true)}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-[#E6DFD3] bg-[#FFFFFF] hover:bg-[#F0E4D4] text-xs font-mono text-[#6B5B4B] hover:text-[#2B2118] transition-all cursor-pointer shadow-xs"
              >
                <Award size={13} className="text-[#8A6035]" />
                <span>Certificate</span>
              </button>
            ) : project.certificateStatus === "coming_soon" ? (
              <div
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-[#E6DFD3] bg-[#FBF8F3] text-xs font-mono text-[#8C7B6A] cursor-default select-none"
              >
                <Award size={13} className="text-[#A97F50]" />
                <span>Certificate: Coming Soon</span>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      {/* Non-Downloadable Protected Certificate Modal */}
      {project.certificateUrl && (
        <CertificateModal
          isOpen={isCertOpen}
          onClose={() => setIsCertOpen(false)}
          certificateUrl={project.certificateUrl}
          title={project.certificateTitle || `${project.title} Certificate`}
          projectTitle={project.title}
          themeColor={accentColor}
        />
      )}
    </div>
  );
};
