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
    "Figma": <PenTool size={18} className="text-purple-600" />,
    "PostgreSQL": <Database size={18} className="text-blue-600" />,
    "Power BI": <BarChart size={18} className="text-amber-500" />,
    "Microsoft Excel": <FileSpreadsheet size={18} className="text-emerald-600" />,
    "Microsoft PowerPoint": <Presentation size={18} className="text-rose-500" />,
    "Jira": <Kanban size={18} className="text-blue-500" />,
    "Miro": <Layers size={18} className="text-yellow-600" />,
    "Notion": <FileText size={18} className="text-slate-800" />
  };

  return (
    <section id="skills" className="py-16 sm:py-24">
      <Divider className="mb-12 sm:mb-16" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader label="SKILLS / TOOLS" title="SKILLS / TOOLS" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Column 1: PRODUCT MANAGEMENT */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <Layers size={16} className="text-blue-600" />
                <h3 className="font-mono text-sm tracking-wider font-bold text-slate-900 uppercase">
                  PRODUCT MANAGEMENT
                </h3>
              </div>
              <span className="text-[11px] font-mono text-slate-400">
                FRAMEWORKS & PRACTICE
              </span>
            </div>

            <div className="space-y-6">
              {skills.productManagement.map((group, idx) => (
                <div key={idx} className="space-y-2.5">
                  <h4 className="text-xs font-mono font-medium text-slate-500 uppercase tracking-wider">
                    {group.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200/90 bg-white text-xs font-medium text-slate-800 shadow-[0_1px_2px_rgba(0,0,0,0.02)] hover:border-blue-300 hover:text-blue-700 transition-colors"
                      >
                        <CheckCircle2 size={12} className="text-blue-500 flex-shrink-0" />
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
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <Wrench size={16} className="text-blue-600" />
                <h3 className="font-mono text-sm tracking-wider font-bold text-slate-900 uppercase">
                  TOOLS & STACK
                </h3>
              </div>
              <span className="text-[11px] font-mono text-slate-400">
                SOFTWARE
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {skills.tools.map((tool, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl border border-slate-200/90 bg-white hover:border-slate-300 hover:shadow-xs transition-all flex items-center gap-3"
                >
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 flex-shrink-0">
                    {toolIcons[tool.name] || <Wrench size={18} className="text-slate-600" />}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 leading-tight">
                      {tool.name}
                    </h4>
                    <p className="text-[10.5px] font-mono text-slate-500 mt-0.5">
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
