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
    "Figma": <PenTool size={18} className="text-[#8A6035]" />,
    "PostgreSQL": <Database size={18} className="text-[#2F2A8F]" />,
    "Power BI": <BarChart size={18} className="text-[#A97F50]" />,
    "Microsoft Excel": <FileSpreadsheet size={18} className="text-[#2F2A8F]" />,
    "Microsoft PowerPoint": <Presentation size={18} className="text-[#8A6035]" />,
    "Jira": <Kanban size={18} className="text-[#2F2A8F]" />,
    "Miro": <Layers size={18} className="text-[#A97F50]" />,
    "Notion": <FileText size={18} className="text-[#2B2118]" />
  };

  return (
    <section id="skills" className="py-16 sm:py-24 bg-[#F7F4EF]">
      <Divider className="mb-12 sm:mb-16" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader label="SKILLS / TOOLS" title="SKILLS / TOOLS" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-14 items-start">
          {/* Column 1: PRODUCT MANAGEMENT */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-[#E6DFD3]">
              <div className="flex items-center gap-2">
                <Layers size={16} className="text-[#A97F50]" />
                <h3 className="font-mono text-sm tracking-wider font-bold text-[#2B2118] uppercase">
                  PRODUCT MANAGEMENT
                </h3>
              </div>
              <span className="text-[11px] font-mono text-[#8C7B6A]">
                FRAMEWORKS & PRACTICE
              </span>
            </div>

            <div className="space-y-6">
              {skills.productManagement.map((group, idx) => (
                <div key={idx} className="space-y-2.5">
                  <h4 className="text-xs font-mono font-medium text-[#8C7B6A] uppercase tracking-wider">
                    {group.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#E6DFD3] bg-[#FFFFFF] text-xs font-medium text-[#2B2118] hover:border-[#A97F50] hover:text-[#8A6035] hover:bg-[#F0E4D4]/30 transition-colors shadow-xs"
                      >
                        <CheckCircle2 size={12} className="text-[#A97F50] flex-shrink-0" />
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
            <div className="flex items-center justify-between pb-3 border-b border-[#E6DFD3]">
              <div className="flex items-center gap-2">
                <Wrench size={16} className="text-[#A97F50]" />
                <h3 className="font-mono text-sm tracking-wider font-bold text-[#2B2118] uppercase">
                  TOOLS & STACK
                </h3>
              </div>
              <span className="text-[11px] font-mono text-[#8C7B6A]">
                SOFTWARE
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {skills.tools.map((tool, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl border border-[#E6DFD3] bg-[#FFFFFF] hover:border-[#A97F50]/40 hover:bg-[#FBF8F3] transition-all flex items-center gap-3 shadow-xs"
                >
                  <div className="p-2 rounded-lg bg-[#F7F4EF] border border-[#E6DFD3] flex-shrink-0">
                    {toolIcons[tool.name] || <Wrench size={18} className="text-[#8C7B6A]" />}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#2B2118] leading-tight">
                      {tool.name}
                    </h4>
                    <p className="text-[10.5px] font-mono text-[#8C7B6A] mt-0.5">
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
