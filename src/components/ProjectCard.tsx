import React from "react";
import { ProjectItem } from "../data/portfolioData";
import { ProjectSlideCover } from "./ProjectSlideCover";
import { ArrowRight, FileText } from "lucide-react";

interface ProjectCardProps {
  project: ProjectItem;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group flex-none w-[340px] sm:w-[400px] md:w-[430px] rounded-2xl border border-slate-200/90 bg-white hover:border-slate-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden">
      {/* Top Presentation Cover Image */}
      <div>
        <ProjectSlideCover
          themeType={project.themeType}
          badgeText={project.badgeText}
          number={project.number}
          category={project.category}
        />

        {/* Card Content Below Image */}
        <div className="p-6 sm:p-7 space-y-4">
          {/* Small Category / Number Label */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-semibold tracking-wider text-blue-700 uppercase">
              {project.number} {project.tag}
            </span>
          </div>

          {/* Project Title */}
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
            {project.title}
          </h3>

          {/* Italicized Subtitle */}
          <p className="text-sm font-normal italic text-slate-700 leading-relaxed">
            {project.subtitle}
          </p>

          {/* Explanatory Paragraph */}
          <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed line-clamp-4">
            {project.description}
          </p>
        </div>
      </div>

      {/* Action Button at Bottom */}
      <div className="p-6 sm:p-7 pt-0">
        <a
          href={project.deckUrl || "#"}
          className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-slate-900 group-hover:text-blue-600 transition-colors py-2 border-t border-slate-100 w-full"
        >
          <FileText size={14} className="text-slate-400 group-hover:text-blue-500 transition-colors" />
          <span>{project.buttonLabel || "VIEW CASE →"}</span>
          <ArrowRight
            size={14}
            className="transition-transform duration-200 group-hover:translate-x-1 ml-auto"
          />
        </a>
      </div>
    </div>
  );
};
