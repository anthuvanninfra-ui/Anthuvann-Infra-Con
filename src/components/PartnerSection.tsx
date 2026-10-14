import React, { useState } from 'react';
import { Compass, Palette, Building, Briefcase, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PARTNER_PROFILES } from '../data/projectsData';

interface PartnerSectionProps {
  onPartnerInquiry: (partnerType: string) => void;
}

export const PartnerSection: React.FC<PartnerSectionProps> = ({ onPartnerInquiry }) => {
  const [activeTab, setActiveTab] = useState<string>(PARTNER_PROFILES[0].id);

  const getPartnerIcon = (id: string) => {
    switch (id) {
      case 'architects':
        return <Compass className="w-5 h-5" />;
      case 'interior-designers':
        return <Palette className="w-5 h-5" />;
      case 'developers':
        return <Building className="w-5 h-5" />;
      case 'corporate-clients':
        return <Briefcase className="w-5 h-5" />;
      default:
        return <Compass className="w-5 h-5" />;
    }
  };

  const activeProfile = PARTNER_PROFILES.find((p) => p.id === activeTab) || PARTNER_PROFILES[0];

  return (
    <section id="partner" className="py-24 bg-stone-900 text-white border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs uppercase tracking-widest text-amber-400 font-bold mb-2">
            Strategic Industry Collaboration
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Let's Build Together
          </h2>
          <p className="mt-4 text-stone-300 text-base sm:text-lg leading-relaxed">
            Whether you are an architectural atelier, interior designer, institutional developer, or corporate enterprise,
            Anthuvann Infra &amp; Construction is engineered to be your trusted execution powerhouse.
          </p>
          <div className="w-16 h-1 bg-amber-500 mt-4" />
        </div>

        {/* 4 Partner Category Segmented Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8 p-1.5 bg-stone-950 rounded-sm border border-stone-800">
          {PARTNER_PROFILES.map((profile) => {
            const isActive = profile.id === activeTab;
            return (
              <button
                key={profile.id}
                onClick={() => setActiveTab(profile.id)}
                className={`flex items-center gap-2.5 p-3.5 rounded-sm text-xs font-semibold transition-all text-left whitespace-nowrap ${
                  isActive
                    ? 'bg-amber-400 text-stone-950 shadow-md font-bold'
                    : 'text-stone-300 hover:text-white hover:bg-stone-800'
                }`}
              >
                <span>{getPartnerIcon(profile.id)}</span>
                <span className="truncate">{profile.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Partner Profile Focus Box */}
        <div className="p-8 sm:p-12 bg-stone-950 border border-stone-800 rounded-sm mb-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
                  Targeted Partnership Solution
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 tracking-tight">
                  {activeProfile.tagline}
                </h3>
              </div>

              <p className="text-stone-300 text-base leading-relaxed">
                {activeProfile.pitch}
              </p>

              {/* Workflow Flow Pipeline */}
              <div className="p-4 bg-stone-900 border border-stone-800 rounded-sm">
                <p className="text-[11px] uppercase tracking-wider text-stone-400 font-bold mb-1">
                  Synchronized Execution Pipeline
                </p>
                <p className="text-sm font-semibold text-amber-400">
                  {activeProfile.flow}
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onPartnerInquiry(activeProfile.title)}
                  className="px-7 py-3.5 text-xs font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 transition-colors rounded-sm uppercase tracking-wider inline-flex items-center gap-2 shadow-lg hover:shadow-amber-400/20"
                >
                  <span>Discuss Your Project as {activeProfile.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Benefits Matrix */}
            <div className="lg:col-span-5 bg-stone-900/90 p-6 sm:p-8 rounded-sm border border-stone-800 space-y-4">
              <h4 className="text-xs uppercase tracking-widest text-amber-400 font-bold">
                Collaboration Advantages
              </h4>
              <ul className="space-y-3">
                {activeProfile.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-xs text-stone-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4 border-t border-stone-800 text-[11px] text-stone-400">
                Direct NDA protection, shared Gantt charts, and joint client presentations available.
              </div>
            </div>
          </div>
        </div>

        {/* 4 Cards Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PARTNER_PROFILES.map((profile) => (
            <div
              key={profile.id}
              onClick={() => setActiveTab(profile.id)}
              className={`p-6 border rounded-sm cursor-pointer transition-all ${
                activeTab === profile.id
                  ? 'bg-stone-800 border-amber-400 shadow-md ring-1 ring-amber-400'
                  : 'bg-stone-950/60 border-stone-800 hover:border-stone-700'
              }`}
            >
              <div className="flex items-center gap-2.5 text-amber-400 mb-3">
                {getPartnerIcon(profile.id)}
                <h4 className="font-bold text-white text-sm">{profile.title}</h4>
              </div>
              <p className="text-xs text-stone-400 line-clamp-3 leading-relaxed">
                {profile.pitch}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
