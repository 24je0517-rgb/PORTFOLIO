import React from "react";
import { SectionHeader } from "./SectionHeader";
import { Divider } from "./Divider";
import { portfolioData } from "../data/portfolioData";
import { Users, CheckCircle2, Calendar } from "lucide-react";

export const Positions: React.FC = () => {
  const { positions } = portfolioData;

  return (
    <section id="positions" className="py-16 sm:py-24 bg-[#0c0c0c] text-white">
      <Divider className="mb-12 sm:mb-16" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <SectionHeader
          label="POSITIONS OF RESPONSIBILITY"
          title="POSITIONS OF RESPONSIBILITY"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {positions.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-3xl border border-white/10 bg-[#111014] p-6 sm:p-8 hover:border-white/25 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-5">
                {/* Card Header: Number & Initiative */}
                <div className="flex items-center justify-between gap-2 border-b border-white/5 pb-4">
                  <div className="flex items-center gap-2">
                    <span className={`text-base font-mono font-bold ${item.accentColor?.text || "text-cyan-400"}`}>
                      {item.number}
                    </span>
                    <span className="text-slate-700 font-mono text-xs">/</span>
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                      {item.initiative}
                    </h3>
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-slate-400">
                    <Calendar size={12} className="text-slate-500" />
                    <span>{item.duration}</span>
                  </div>
                </div>

                {/* Role & Org */}
                <div className="space-y-1">
                  <div className="text-sm sm:text-base font-semibold text-white flex items-center gap-2">
                    <Users size={16} className={item.accentColor?.text || "text-cyan-400"} />
                    <span>{item.position}</span>
                  </div>
                  <div className="text-xs font-mono text-slate-400 pl-6">
                    {item.organization}
                  </div>
                </div>

                {/* Summary Description */}
                {item.description && (
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-1">
                    {item.description}
                  </p>
                )}

                {/* Key Contributions & Responsibilities */}
                {item.responsibilities && item.responsibilities.length > 0 && (
                  <div className="space-y-2 pt-2 border-t border-white/5">
                    <div className="text-[11px] font-mono tracking-wider text-slate-400 uppercase">
                      KEY CONTRIBUTIONS
                    </div>
                    <ul className="space-y-2">
                      {item.responsibilities.map((resp, idx) => (
                        <li key={idx} className="text-xs sm:text-[13px] text-slate-300 flex items-start gap-2.5 leading-relaxed">
                          <CheckCircle2
                            size={14}
                            className={`${item.accentColor?.text || "text-cyan-400"} flex-shrink-0 mt-0.5`}
                          />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Bottom Subtle Tag */}
              <div className="pt-6 mt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>Campus & Leadership</span>
                <span className={item.accentColor?.text || "text-cyan-400"}>Active</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
