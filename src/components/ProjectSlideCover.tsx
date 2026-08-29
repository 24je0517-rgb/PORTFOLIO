import React from "react";

interface ProjectSlideCoverProps {
  themeType?: "case" | "rca" | "data1" | "data2";
  badgeText?: string;
  number?: string;
  category?: string;
}

export const ProjectSlideCover: React.FC<ProjectSlideCoverProps> = ({
  themeType = "case",
  badgeText = "DECK ↗",
}) => {
  return (
    <div className="relative w-full aspect-[16/10] bg-slate-900 rounded-t-xl overflow-hidden select-none group-hover:brightness-95 transition-all">
      {/* Badge in top right corner */}
      <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 z-20 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded bg-white/90 backdrop-blur-md text-[9px] sm:text-[10px] font-mono font-bold tracking-wider text-slate-800 shadow-sm">
        {badgeText}
      </div>

      {themeType === "case" && (
        /* Case Competition Presentation Deck Slide Style */
        <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 p-3.5 sm:p-5 flex flex-col justify-between text-white relative overflow-hidden">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]" />
          
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-rose-500" />
              <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-slate-300 uppercase">
                CASE COMPETITION
              </span>
            </div>
            <span className="text-[8px] sm:text-[9px] font-mono text-slate-400">FINALIST DECK</span>
          </div>

          <div className="z-10 my-auto py-1">
            <div className="inline-block px-1.5 py-0.5 rounded bg-blue-500/20 border border-blue-400/30 text-[8px] sm:text-[9px] font-mono text-blue-300 mb-1">
              PRODUCT STRATEGY & GTM
            </div>
            <h4 className="text-base sm:text-lg font-extrabold tracking-tight text-white leading-tight">
              MARKET ENTRY & USER ADOPTION
            </h4>
            <p className="text-[10px] sm:text-[11px] text-slate-300 mt-0.5 line-clamp-1">
              TAM Sizing • Unit Economics • User Persona & PRD
            </p>
          </div>

          {/* Bottom slide preview badges */}
          <div className="flex items-center gap-1.5 sm:gap-2 z-10 pt-1.5 sm:pt-2 border-t border-slate-700/60">
            <div className="px-1.5 sm:px-2 py-0.5 rounded bg-slate-800 text-[8px] sm:text-[9px] font-mono text-slate-300">
              TAM: $12.5B
            </div>
            <div className="px-1.5 sm:px-2 py-0.5 rounded bg-slate-800 text-[8px] sm:text-[9px] font-mono text-slate-300">
              RICE: 8.4
            </div>
            <div className="px-1.5 sm:px-2 py-0.5 rounded bg-slate-800 text-[8px] sm:text-[9px] font-mono text-slate-300">
              NPS: 65+
            </div>
          </div>
        </div>
      )}

      {themeType === "rca" && (
        /* RCA & Product Analysis Slide Style */
        <div className="w-full h-full bg-gradient-to-br from-indigo-950 via-slate-900 to-blue-950 p-3.5 sm:p-5 flex flex-col justify-between text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#818cf8_1px,transparent_1px),linear-gradient(to_bottom,#818cf8_1px,transparent_1px)] bg-[size:20px_20px]" />
          
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-slate-300 uppercase">
                ROOT CAUSE ANALYSIS
              </span>
            </div>
            <span className="text-[8px] sm:text-[9px] font-mono text-slate-400">5-WHYS • FUNNEL</span>
          </div>

          <div className="z-10 my-auto py-1">
            <div className="inline-block px-1.5 py-0.5 rounded bg-amber-500/20 border border-amber-400/30 text-[8px] sm:text-[9px] font-mono text-amber-300 mb-1">
              METRIC DECONSTRUCTION
            </div>
            <h4 className="text-base sm:text-lg font-extrabold tracking-tight text-white leading-tight">
              ONBOARDING DROP-OFF & FRICTION
            </h4>
            <p className="text-[10px] sm:text-[11px] text-slate-300 mt-0.5 line-clamp-1">
              UX Telemetry • User Cohorts • Remediation Plan
            </p>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 z-10 pt-1.5 sm:pt-2 border-t border-slate-700/60">
            <div className="px-1.5 sm:px-2 py-0.5 rounded bg-slate-800 text-[8px] sm:text-[9px] font-mono text-amber-300">
              Drop-off: Step 3 (42%)
            </div>
            <div className="px-1.5 sm:px-2 py-0.5 rounded bg-slate-800 text-[8px] sm:text-[9px] font-mono text-emerald-300">
              Fix: 1-Click Auth
            </div>
          </div>
        </div>
      )}

      {themeType === "data1" && (
        /* Data Analysis 01 - Power BI / SQL Dashboard Style */
        <div className="w-full h-full bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 p-3.5 sm:p-5 flex flex-col justify-between text-white relative overflow-hidden">
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-slate-300 uppercase">
                DATA ANALYTICS
              </span>
            </div>
            <span className="text-[8px] sm:text-[9px] font-mono text-slate-400">POWER BI • SQL</span>
          </div>

          <div className="z-10 my-auto py-1">
            <div className="inline-block px-1.5 py-0.5 rounded bg-sky-500/20 border border-sky-400/30 text-[8px] sm:text-[9px] font-mono text-sky-300 mb-1">
              EXPLORATORY DATA ANALYSIS
            </div>
            <h4 className="text-base sm:text-lg font-extrabold tracking-tight text-white leading-tight">
              BUSINESS METRICS & KPI DASHBOARD
            </h4>
            <p className="text-[10px] sm:text-[11px] text-slate-300 mt-0.5 line-clamp-1">
              Data Cleaning • SQL Aggregations • Retention Heatmaps
            </p>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 z-10 pt-1.5 sm:pt-2 border-t border-slate-700/60">
            <div className="px-1.5 sm:px-2 py-0.5 rounded bg-slate-800 text-[8px] sm:text-[9px] font-mono text-sky-300">
              100K+ Records
            </div>
            <div className="px-1.5 sm:px-2 py-0.5 rounded bg-slate-800 text-[8px] sm:text-[9px] font-mono text-slate-300">
              DAU/MAU: 0.28
            </div>
          </div>
        </div>
      )}

      {themeType === "data2" && (
        /* Data Analysis 02 - E-Commerce & Funnel Synthesis Style */
        <div className="w-full h-full bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 p-3.5 sm:p-5 flex flex-col justify-between text-white relative overflow-hidden">
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-slate-300 uppercase">
                DATA ANALYTICS
              </span>
            </div>
            <span className="text-[8px] sm:text-[9px] font-mono text-slate-400">EXCEL • PYTHON</span>
          </div>

          <div className="z-10 my-auto py-1">
            <div className="inline-block px-1.5 py-0.5 rounded bg-emerald-500/20 border border-emerald-400/30 text-[8px] sm:text-[9px] font-mono text-emerald-300 mb-1">
              CONVERSION & BEHAVIORAL TRENDS
            </div>
            <h4 className="text-base sm:text-lg font-extrabold tracking-tight text-white leading-tight">
              FUNNEL CONVERSION & COHORTS
            </h4>
            <p className="text-[10px] sm:text-[11px] text-slate-300 mt-0.5 line-clamp-1">
              Statistical Significance • A/B Test Modeling • Revenue Drivers
            </p>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 z-10 pt-1.5 sm:pt-2 border-t border-slate-700/60">
            <div className="px-1.5 sm:px-2 py-0.5 rounded bg-slate-800 text-[8px] sm:text-[9px] font-mono text-emerald-300">
              CVR: +18.2%
            </div>
            <div className="px-1.5 sm:px-2 py-0.5 rounded bg-slate-800 text-[8px] sm:text-[9px] font-mono text-slate-300">
              p-val &lt; 0.05
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
