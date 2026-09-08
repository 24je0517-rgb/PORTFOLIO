import React from "react";
import { ProjectItem } from "../../data/portfolioData";
import { ChevronRight } from "lucide-react";

interface ProjectNavigationProps {
  projects: ProjectItem[];
  activeProjectId: string;
  onSelectProject: (id: string) => void;
}

export const ProjectNavigation: React.FC<ProjectNavigationProps> = ({
  projects,
  activeProjectId,
  onSelectProject,
}) => {
  return (
    <div className="w-full pb-4 sm:pb-6 overflow-x-auto no-scrollbar">
      <div className="flex items-center gap-2 sm:gap-3 min-w-max p-1.5 rounded-2xl bg-[#0b0d10] border border-white/10 shadow-inner">
        {projects.map((project) => {
          const isActive = project.id === activeProjectId;
          const { accentColor } = project;

          return (
            <button
              key={project.id}
              onClick={() => onSelectProject(project.id)}
              className={`group relative flex items-center gap-2.5 sm:gap-3.5 px-4 sm:px-6 py-3 rounded-xl font-mono text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 focus:outline-none ${
                isActive
                  ? "bg-[#13161c] text-white border border-white/20 shadow-lg"
                  : "text-slate-400 hover:text-slate-200 hover:bg-white/5 border border-transparent"
              }`}
              aria-selected={isActive}
              role="tab"
            >
              {/* Number Badge */}
              <span
                className={`text-[11px] sm:text-xs font-mono transition-colors ${
                  isActive ? accentColor.text : "text-slate-500 group-hover:text-slate-400"
                }`}
              >
                {project.number}
              </span>

              {/* Title */}
              <span className="uppercase">{project.shortName}</span>

              {/* Active Dot / Arrow */}
              {isActive ? (
                <span className={`w-1.5 h-1.5 rounded-full ${accentColor.bg.replace('/10', '')} ${accentColor.text} animate-pulse`} />
              ) : (
                <ChevronRight size={14} className="opacity-0 group-hover:opacity-40 transition-opacity" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
