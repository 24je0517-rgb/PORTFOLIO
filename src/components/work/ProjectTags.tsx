import React from "react";

interface ProjectTagsProps {
  tags: string[];
  accentText?: string;
  accentBorder?: string;
}

export const ProjectTags: React.FC<ProjectTagsProps> = ({
  tags,
  accentText = "text-[#8A6035]",
  accentBorder = "border-[#E6DFD3]",
}) => {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, idx) => (
        <span
          key={idx}
          className={`inline-flex items-center px-2.5 py-1 rounded-md text-[10.5px] font-mono tracking-wider uppercase bg-[#FBF8F3] border ${accentBorder} text-[#6B5B4B] transition-all hover:text-[#2B2118] hover:border-[#A97F50]/40 shadow-xs`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${accentText.startsWith("text-") ? accentText.replace("text-", "bg-") : "bg-[#A97F50]"} mr-1.5 opacity-85`} />
          {tag}
        </span>
      ))}
    </div>
  );
};
