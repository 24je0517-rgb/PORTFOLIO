import React, { useState } from "react";
import { SectionHeader } from "./SectionHeader";
import { Divider } from "./Divider";
import { portfolioData } from "../data/portfolioData";
import { Briefcase, Calendar, MapPin, ChevronRight, Info } from "lucide-react";

export const Experience: React.FC = () => {
  const { experience } = portfolioData;
  const [showStructureGuide, setShowStructureGuide] = useState(false);

  return (
    <section id="journey" className="py-16 sm:py-24 bg-[#0c0c0c]">
      <Divider className="mb-12 sm:mb-16" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader label="JOURNEY" title="EXPERIENCE" />

        {experience.length === 0 ? (
          /* Clean, dark editorial placeholder structure */
          <div className="rounded-3xl border border-white/10 bg-[#111014] p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-6 shadow-2xl">
            <div className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mx-auto text-cyan-400">
              <Briefcase size={22} />
            </div>

            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Internship & Work Experience
              </h3>
              <p className="text-sm text-slate-400 max-w-lg mx-auto leading-relaxed">
                Currently preparing for Product Management & Data Analyst internship opportunities. Experience milestones, live project stints, and industry engagements will be detailed here.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setShowStructureGuide(!showStructureGuide)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-white/10 bg-[#161922] text-xs font-mono text-slate-300 hover:text-white hover:border-white/25 transition-colors"
              >
                <Info size={14} className="text-cyan-400" />
                <span>{showStructureGuide ? "Hide Structure Preview" : "View Structure Schema"}</span>
              </button>
            </div>

            {showStructureGuide && (
              <div className="text-left bg-[#07080a] text-slate-200 p-5 rounded-2xl border border-white/10 text-xs font-mono space-y-2 animate-in fade-in-50 duration-200 shadow-inner">
                <p className="text-slate-500 font-semibold mb-2">
                  // You can add experience items in <code className="text-cyan-400">src/data/portfolioData.ts</code>:
                </p>
                <pre className="text-[11px] leading-relaxed overflow-x-auto text-emerald-400">
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
                className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-[#111014] hover:border-white/20 transition-all shadow-xl space-y-4"
              >
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {item.position}
                    </h3>
                    <p className="text-sm font-semibold text-cyan-400">
                      {item.company}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                    <span className="inline-flex items-center gap-1">
                      <Calendar size={13} />
                      {item.duration}
                    </span>
                    {item.location && (
                      <span className="inline-flex items-center gap-1 border-l border-white/10 pl-3">
                        <MapPin size={13} />
                        {item.location}
                      </span>
                    )}
                  </div>
                </div>

                {item.description && (
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                )}

                {item.responsibilities && item.responsibilities.length > 0 && (
                  <ul className="space-y-1.5 pt-2">
                    {item.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                        <ChevronRight size={14} className="text-cyan-400 flex-shrink-0 mt-0.5" />
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
