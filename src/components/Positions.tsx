import React, { useState } from "react";
import { SectionHeader } from "./SectionHeader";
import { Divider } from "./Divider";
import { portfolioData } from "../data/portfolioData";
import { Users, Info, ChevronRight } from "lucide-react";

export const Positions: React.FC = () => {
  const { positions } = portfolioData;
  const [showStructureGuide, setShowStructureGuide] = useState(false);

  return (
    <section id="positions" className="py-16 sm:py-24 bg-[#0c0c0c]">
      <Divider className="mb-12 sm:mb-16" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="POSITIONS OF RESPONSIBILITY"
          title="POSITIONS OF RESPONSIBILITY"
        />

        {positions.length === 0 ? (
          /* Clean, dark placeholder structure */
          <div className="rounded-3xl border border-white/10 bg-[#111014] p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-6 shadow-2xl">
            <div className="w-12 h-12 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mx-auto text-purple-400">
              <Users size={22} />
            </div>

            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Leadership & Campus Initiatives
              </h3>
              <p className="text-sm text-slate-400 max-w-lg mx-auto leading-relaxed">
                Positions of responsibility across student clubs, departmental bodies, and organizing committees at IIT(ISM) Dhanbad will be updated here.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setShowStructureGuide(!showStructureGuide)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-white/10 bg-[#161922] text-xs font-mono text-slate-300 hover:text-white hover:border-white/25 transition-colors"
              >
                <Info size={14} className="text-purple-400" />
                <span>{showStructureGuide ? "Hide Structure Preview" : "View Structure Schema"}</span>
              </button>
            </div>

            {showStructureGuide && (
              <div className="text-left bg-[#07080a] text-slate-200 p-5 rounded-2xl border border-white/10 text-xs font-mono space-y-2 animate-in fade-in-50 duration-200 shadow-inner">
                <p className="text-slate-500 font-semibold mb-2">
                  // You can add leadership positions in <code className="text-cyan-400">src/data/portfolioData.ts</code>:
                </p>
                <pre className="text-[11px] leading-relaxed overflow-x-auto text-purple-400">
{`{
  id: "pos-01",
  organization: "Product Management Club / Student Chapter",
  position: "Core Team Member / Lead",
  duration: "2024 – Present",
  description: "Spearheaded campus workshops on product discovery and data analytics.",
  responsibilities: [
    "Organized flagship case competitions with 400+ participants.",
    "Led peer-mentoring circles on PRDs and Figma wireframing."
  ]
}`}
                </pre>
              </div>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {positions.map((item) => (
              <div
                key={item.id}
                className="p-6 sm:p-7 rounded-2xl border border-white/10 bg-[#111014] hover:border-white/20 transition-all shadow-xl space-y-3"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-base font-bold text-white">
                      {item.position}
                    </h3>
                    <p className="text-sm font-semibold text-cyan-400">
                      {item.organization}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-slate-500">
                    {item.duration}
                  </span>
                </div>

                {item.description && (
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                )}

                {item.responsibilities && item.responsibilities.length > 0 && (
                  <ul className="space-y-1 pt-1">
                    {item.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-xs text-slate-300 flex items-start gap-1.5">
                        <ChevronRight size={13} className="text-cyan-400 flex-shrink-0 mt-0.5" />
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
