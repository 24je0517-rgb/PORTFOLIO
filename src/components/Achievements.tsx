import React from "react";
import { SectionHeader } from "./SectionHeader";
import { Divider } from "./Divider";
import { portfolioData } from "../data/portfolioData";
import { Trophy, Award } from "lucide-react";

export const Achievements: React.FC = () => {
  const { achievements } = portfolioData;

  return (
    <section id="achievements" className="py-16 sm:py-24 bg-[#0c0c0c] text-white">
      <Divider className="mb-12 sm:mb-16" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <SectionHeader
          label="ACHIEVEMENTS"
          title="ACHIEVEMENTS"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {achievements.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-3xl border border-white/10 bg-[#111014] p-6 sm:p-8 hover:border-white/25 transition-all duration-300 shadow-xl flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle ambient glow behind card */}
              <div
                className="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                style={{ background: item.accentColor.glow }}
              />

              <div className="relative z-10 space-y-5">
                {/* Top Row: Number & Tag */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className={`text-base font-mono font-bold ${item.accentColor.text}`}>
                      {item.number}
                    </span>
                    <span className="text-slate-700 font-mono text-xs">/</span>
                    <span className="text-[11px] font-mono tracking-widest text-slate-400 uppercase">
                      RANKING & HONOR
                    </span>
                  </div>

                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-semibold ${item.accentColor.bg} ${item.accentColor.text} border ${item.accentColor.border}`}
                  >
                    <Trophy size={12} />
                    <span>{item.tag}</span>
                  </span>
                </div>

                {/* Main Stat Centerpiece Box */}
                <div className="p-5 sm:p-6 rounded-2xl bg-[#09090c] border border-white/5 text-center space-y-1.5 shadow-inner">
                  <div className="text-[11px] font-mono tracking-widest text-slate-400 uppercase">
                    RESULT / STANDING
                  </div>
                  <div className={`text-2xl sm:text-3xl font-black tracking-tight font-mono ${item.accentColor.text}`}>
                    {item.stat}
                  </div>
                  <div className="text-xs font-mono text-slate-300 pt-0.5">
                    {item.subtitle}
                  </div>
                </div>

                {/* Title & Description */}
                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Bottom Footer Accent */}
              <div className="relative z-10 pt-5 mt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-500">
                <div className="flex items-center gap-1.5">
                  <Award size={13} className={item.accentColor.text} />
                  <span>National Competition</span>
                </div>
                <span className="text-[11px] text-slate-400">Verified</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
