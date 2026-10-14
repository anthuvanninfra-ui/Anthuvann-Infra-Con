import React, { useState } from 'react';
import { ArrowRight, Check, Hammer, Layers, ShieldCheck, Zap, HardHat, FileSpreadsheet, RefreshCw, Landmark } from 'lucide-react';
import { CAPABILITIES } from '../data/projectsData';

interface CapabilitiesSectionProps {
  onStartInquiry: () => void;
}

export const CapabilitiesSection: React.FC<CapabilitiesSectionProps> = ({ onStartInquiry }) => {
  const [selectedCapability, setSelectedCapability] = useState<number>(0);

  const icons = [
    <Hammer className="w-5 h-5" />,
    <Layers className="w-5 h-5" />,
    <Zap className="w-5 h-5" />,
    <HardHat className="w-5 h-5" />,
    <ShieldCheck className="w-5 h-5" />,
    <FileSpreadsheet className="w-5 h-5" />,
    <RefreshCw className="w-5 h-5" />,
    <Landmark className="w-5 h-5" />
  ];

  return (
    <section id="capabilities" className="py-24 bg-stone-900 text-white border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs uppercase tracking-widest text-amber-400 font-bold mb-2">
            Multi-Disciplinary Strength Under One Roof
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Our Capabilities
          </h2>
          <p className="mt-4 text-stone-300 text-base sm:text-lg leading-relaxed">
            Complete Construction Capability Under One Roof. We eliminate fragmented subcontractors by
            maintaining deep execution capabilities across all civil, structural, mechanical and interior trades.
          </p>
          <div className="w-16 h-1 bg-amber-500 mt-4" />
        </div>

        {/* 8 Capability Grid with Editorial Numbering */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {CAPABILITIES.map((cap, idx) => {
            const isSelected = selectedCapability === idx;
            return (
              <div
                key={cap.number}
                onClick={() => setSelectedCapability(idx)}
                className={`p-6 rounded-sm border cursor-pointer transition-all duration-200 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-stone-800 border-amber-400 shadow-lg ring-1 ring-amber-400/30'
                    : 'bg-stone-950/70 border-stone-800 hover:border-stone-700 hover:bg-stone-800/50'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-amber-400 tracking-wider">
                      {cap.number}
                    </span>
                    <div className="text-stone-400">
                      {icons[idx]}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight mb-2">
                    {cap.title}
                  </h3>

                  <p className="text-xs text-stone-300 leading-relaxed mb-4">
                    {cap.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-800">
                  <span className={`text-[11px] font-semibold flex items-center gap-1 ${
                    isSelected ? 'text-amber-400' : 'text-stone-400'
                  }`}>
                    {isSelected ? 'Viewing Scope Details' : 'Click to inspect'}
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Expanded Capability Detail Inspector */}
        <div className="p-8 sm:p-10 bg-stone-950 border border-stone-800 rounded-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-sm font-mono font-bold px-2 py-0.5 bg-amber-500/20 text-amber-400 border border-amber-500/30">
                  {CAPABILITIES[selectedCapability].number}
                </span>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {CAPABILITIES[selectedCapability].title}
                </h3>
              </div>

              <p className="text-stone-300 text-sm leading-relaxed">
                {CAPABILITIES[selectedCapability].details}
              </p>

              <div className="pt-2">
                <button
                  onClick={onStartInquiry}
                  className="px-6 py-2.5 text-xs font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 transition-colors rounded-sm uppercase tracking-wider inline-flex items-center gap-2"
                >
                  <span>Request Scope Evaluation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 bg-stone-900/80 p-6 rounded-sm border border-stone-800 space-y-3">
              <h4 className="text-xs uppercase tracking-wider text-amber-400 font-bold">
                Typical Scope Deliverables
              </h4>
              <ul className="space-y-2.5">
                {CAPABILITIES[selectedCapability].deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-xs text-stone-300">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
