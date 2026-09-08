import React from "react";
import { SectionHeader } from "./SectionHeader";
import { Divider } from "./Divider";
import { portfolioData } from "../data/portfolioData";
import { 
  Layers, 
  Wrench, 
  CheckCircle2, 
  Database, 
  BarChart, 
  FileSpreadsheet, 
  Presentation, 
  Kanban, 
  PenTool, 
  FileText 
} from "lucide-react";

export const Skills: React.FC = () => {
  const { skills } = portfolioData;

  const toolIcons: { [key: string]: React.ReactNode } = {
    "Figma": <PenTool size={18} className="text-purple-400" />,
    "PostgreSQL": <Database size={18} className="text-cyan-400" />,
    "Power BI": <BarChart size={18} className="text-amber-400" />,
    "Microsoft Excel": <FileSpreadsheet size={18} className="text-emerald-400" />,
    "Microsoft PowerPoint": <Presentation size={18} className="text-rose-400" />,
    "Jira": <Kanban size={18} className="text-blue-400" />,
    "Miro": <Layers size={18} className="text-yellow-400" />,
    "Notion": <FileText size={18} className="text-slate-200" />
  };

  return (
    <section id="skills" className="py-16 sm:py-24 bg-[#0c0c0c]">
      <Divider className="mb-12 sm:mb-16" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader label="SKILLS / TOOLS" title="SKILLS / TOOLS" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-14 items-start">
          {/* Column 1: PRODUCT MANAGEMENT */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Layers size={16} className="text-cyan-400" />
                <h3 className="font-mono text-sm tracking-wider font-bold text-white uppercase">
                  PRODUCT MANAGEMENT
                </h3>
              </div>
              <span className="text-[11px] font-mono text-slate-500">
                FRAMEWORKS & PRACTICE
              </span>
            </div>

            <div className="space-y-6">
              {skills.productManagement.map((group, idx) => (
                <div key={idx} className="space-y-2.5">
                  <h4 className="text-xs font-mono font-medium text-slate-400 uppercase tracking-wider">
                    {group.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 bg-[#111014] text-xs font-medium text-slate-200 hover:border-cyan-500/50 hover:text-cyan-300 transition-colors shadow-sm"
                      >
                        <CheckCircle2 size={12} className="text-cyan-400 flex-shrink-0" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: TOOLS */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Wrench size={16} className="text-cyan-400" />
                <h3 className="font-mono text-sm tracking-wider font-bold text-white uppercase">
                  TOOLS & STACK
                </h3>
              </div>
              <span className="text-[11px] font-mono text-slate-500">
                SOFTWARE
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {skills.tools.map((tool, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl border border-white/10 bg-[#111014] hover:border-white/20 hover:bg-[#161922] transition-all flex items-center gap-3 shadow-sm"
                >
                  <div className="p-2 rounded-lg bg-[#161922] border border-white/5 flex-shrink-0">
                    {toolIcons[tool.name] || <Wrench size={18} className="text-slate-400" />}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white leading-tight">
                      {tool.name}
                    </h4>
                    <p className="text-[10.5px] font-mono text-slate-400 mt-0.5">
                      {tool.category}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
