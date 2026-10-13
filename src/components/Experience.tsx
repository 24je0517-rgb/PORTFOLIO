import React, { useState } from "react";
import { SectionHeader } from "./SectionHeader";
import { Divider } from "./Divider";
import { portfolioData } from "../data/portfolioData";
import { Briefcase, Calendar, MapPin, ChevronRight, Info } from "lucide-react";

export const Experience: React.FC = () => {
  const { experience } = portfolioData;
  const [showStructureGuide, setShowStructureGuide] = useState(false);

  return (
    <section id="journey" className="py-16 sm:py-24 bg-[#F7F4EF] text-[#2B2118]">
      <Divider className="mb-12 sm:mb-16" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader label="JOURNEY" title="EXPERIENCE" />

        {experience.length === 0 ? (
          /* Clean editorial placeholder structure */
          <div className="rounded-3xl border border-[#E6DFD3] bg-[#FFFFFF] p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-6 shadow-[0_4px_20px_rgba(43,33,24,0.06)]">
            <div className="w-12 h-12 rounded-full bg-[#F0E4D4] border border-[#E6DFD3] flex items-center justify-center mx-auto text-[#8A6035]">
              <Briefcase size={22} />
            </div>

            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-bold text-[#2B2118]">
                Internship & Work Experience
              </h3>
              <p className="text-sm text-[#6B5B4B] max-w-lg mx-auto leading-relaxed">
                Currently preparing for Product Management & Data Analyst internship opportunities. Experience milestones, live project stints, and industry engagements will be detailed here.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setShowStructureGuide(!showStructureGuide)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-[#E6DFD3] bg-[#FBF8F3] text-xs font-mono text-[#6B5B4B] hover:text-[#2B2118] hover:border-[#A97F50]/40 transition-colors"
              >
                <Info size={14} className="text-[#A97F50]" />
                <span>{showStructureGuide ? "Hide Structure Preview" : "View Structure Schema"}</span>
              </button>
            </div>

            {showStructureGuide && (
              <div className="text-left bg-[#FBF8F3] text-[#2B2118] p-5 rounded-2xl border border-[#E6DFD3] text-xs font-mono space-y-2 animate-in fade-in-50 duration-200 shadow-inner">
                <p className="text-[#8C7B6A] font-semibold mb-2">
                  // You can add experience items in <code className="text-[#8A6035]">src/data/portfolioData.ts</code>:
                </p>
                <pre className="text-[11px] leading-relaxed overflow-x-auto text-[#2F2A8F]">
{`{
  id: "exp-01",
  company: "Company / Startup Name",
  position: "Product Management Intern",
  duration: "May 2025 – July 2025",
  location: "Bengaluru, India (Hybrid)",
  description: "Summary of problem space and project mandate.",
  responsibilities: ["Conducted user interviews...", "Created PRD for feature X..."],
  achievements: ["Increased funnel conversion by 12%..."],
  skills: ["Figma", "RICE Prioritization", "PostgreSQL", "PRD"]
}`}
                </pre>
              </div>
            )}
          </div>
        ) : (
          /* Rendered Experience Timeline if populated */
          <div className="space-y-8 max-w-4xl">
            {experience.map((item) => (
              <div
                key={item.id}
                className="p-6 sm:p-8 rounded-2xl border border-[#E6DFD3] bg-[#FFFFFF] hover:border-[#A97F50]/40 transition-all shadow-[0_4px_20px_rgba(43,33,24,0.06)] space-y-4"
              >
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#2B2118]">
                      {item.position}
                    </h3>
                    <p className="text-sm font-semibold text-[#8A6035]">
                      {item.company}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-mono text-[#6B5B4B]">
                    <span className="inline-flex items-center gap-1">
                      <Calendar size={13} />
                      {item.duration}
                    </span>
                    {item.location && (
                      <span className="inline-flex items-center gap-1 border-l border-[#E6DFD3] pl-3">
                        <MapPin size={13} />
                        {item.location}
                      </span>
                    )}
                  </div>
                </div>

                {item.description && (
                  <p className="text-sm text-[#6B5B4B] leading-relaxed">
                    {item.description}
                  </p>
                )}

                {item.responsibilities && item.responsibilities.length > 0 && (
                  <ul className="space-y-1.5 pt-2">
                    {item.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-xs text-[#2B2118] flex items-start gap-2">
                        <ChevronRight size={14} className="text-[#A97F50] flex-shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
