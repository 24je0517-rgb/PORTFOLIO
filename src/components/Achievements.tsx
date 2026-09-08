import React, { useState } from "react";
import { SectionHeader } from "./SectionHeader";
import { Divider } from "./Divider";
import { portfolioData } from "../data/portfolioData";
import { Trophy, Info } from "lucide-react";

export const Achievements: React.FC = () => {
  const { achievements } = portfolioData;
  const [showStructureGuide, setShowStructureGuide] = useState(false);

  return (
    <section id="achievements" className="py-16 sm:py-24 bg-[#0c0c0c]">
      <Divider className="mb-12 sm:mb-16" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader label="ACHIEVEMENTS" title="ACHIEVEMENTS" />

        {achievements.length === 0 ? (
          /* Clean, dark placeholder structure */
          <div className="rounded-3xl border border-white/10 bg-[#111014] p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-6 shadow-2xl">
            <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mx-auto text-amber-400">
              <Trophy size={22} />
            </div>

            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Case Competitions & Honors
              </h3>
              <p className="text-sm text-slate-400 max-w-lg mx-auto leading-relaxed">
                National case competition rankings, certifications, academic milestones, and product competition achievements will be listed here.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setShowStructureGuide(!showStructureGuide)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-white/10 bg-[#161922] text-xs font-mono text-slate-300 hover:text-white hover:border-white/25 transition-colors"
              >
                <Info size={14} className="text-amber-400" />
                <span>{showStructureGuide ? "Hide Structure Preview" : "View Structure Schema"}</span>
              </button>
            </div>

            {showStructureGuide && (
              <div className="text-left bg-[#07080a] text-slate-200 p-5 rounded-2xl border border-white/10 text-xs font-mono space-y-2 animate-in fade-in-50 duration-200 shadow-inner">
                <p className="text-slate-500 font-semibold mb-2">
                  // You can add achievement items in <code className="text-cyan-400">src/data/portfolioData.ts</code>:
                </p>
                <pre className="text-[11px] leading-relaxed overflow-x-auto text-amber-400">
{`{
  id: "ach-01",
  title: "National Finalist - Product Case Competition",
  category: "Case Competition",
  organization: "IIT / Top B-School",
  date: "2025",
  rank: "Top 5 Nationally",
  description: "Devised a product-led growth strategy for e-commerce user acquisition."
}`}
                </pre>
              </div>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((item) => (
              <div
                key={item.id}
                className="p-6 rounded-2xl border border-white/10 bg-[#111014] hover:border-white/20 transition-all shadow-xl space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-cyan-400 uppercase">
                    {item.category}
                  </span>
                  {item.rank && (
                    <span className="px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-[10.5px] font-mono text-amber-300 font-medium">
                      {item.rank}
                    </span>
                  )}
                </div>
                <h3 className="text-base font-bold text-white">
                  {item.title}
                </h3>
                {item.organization && (
                  <p className="text-xs text-slate-500 font-mono">
                    {item.organization} • {item.date}
                  </p>
                )}
                {item.description && (
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
