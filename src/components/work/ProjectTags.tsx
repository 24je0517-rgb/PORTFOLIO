import React from "react";

interface ProjectTagsProps {
  tags: string[];
  accentText?: string;
  accentBorder?: string;
}

export const ProjectTags: React.FC<ProjectTagsProps> = ({
  tags,
  accentText = "text-emerald-400",
  accentBorder = "border-emerald-500/20",
}) => {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, idx) => (
        <span
          key={idx}
          className={`inline-flex items-center px-2.5 py-1 rounded-md text-[10.5px] font-mono tracking-wider uppercase bg-[#13161c] border ${accentBorder} text-slate-300 transition-all hover:text-white hover:border-white/30`}
        >
          <span className={`w-1 h-1 rounded-full ${accentText.replace('text-', 'bg-')} mr-1.5 opacity-75`} />
          {tag}
        </span>
      ))}
    </div>
  );
};
