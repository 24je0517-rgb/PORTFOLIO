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
      <div className="flex items-center gap-2 sm:gap-3 min-w-max p-1.5 rounded-2xl bg-[#FFFFFF] border border-[#E6DFD3] shadow-sm">
        {projects.map((project) => {
          const isActive = project.id === activeProjectId;
          const { accentColor } = project;

          return (
            <button
              key={project.id}
              onClick={() => onSelectProject(project.id)}
              className={`group relative flex items-center gap-2.5 sm:gap-3.5 px-4 sm:px-6 py-3 rounded-xl font-mono text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 focus:outline-none ${
                isActive
                  ? "bg-[#FBF8F3] text-[#2B2118] border border-[#E6DFD3] shadow-sm font-bold"
                  : "text-[#6B5B4B] hover:text-[#2B2118] hover:bg-[#FBF8F3] border border-transparent"
              }`}
              aria-selected={isActive}
              role="tab"
            >
              {/* Number Badge */}
              <span
                className={`text-[11px] sm:text-xs font-mono transition-colors ${
                  isActive ? accentColor.text : "text-[#8C7B6A] group-hover:text-[#6B5B4B]"
                }`}
              >
                {project.number}
              </span>

              {/* Title */}
              <span className="uppercase">{project.shortName}</span>

              {/* Active Dot / Arrow */}
              {isActive ? (
                <span className={`w-1.5 h-1.5 rounded-full ${accentColor.bg.replace('/10', '').replace('-50', '-600')} ${accentColor.text} animate-pulse`} />
              ) : (
                <ChevronRight size={14} className="opacity-0 group-hover:opacity-60 transition-opacity text-[#8C7B6A]" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
