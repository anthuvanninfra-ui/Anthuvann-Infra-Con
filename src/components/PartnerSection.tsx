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
    <section id="partner" className="py-24 bg-stone-100 text-stone-900 border-b border-stone-200 relative overflow-hidden">

      {/* Subtle Construction Grid Backdrop */}
      <div className="absolute inset-0 construction-grid-pattern opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs uppercase tracking-widest text-amber-700 font-bold mb-2">
            Strategic Industry Collaboration
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight">
            Let's Build Together
          </h2>
          <p className="mt-4 text-stone-600 text-base sm:text-lg leading-relaxed">
            Whether you are an architectural atelier, interior designer, institutional developer, or corporate enterprise,
            Anthuvann Infra &amp; Construction is engineered to be your trusted execution powerhouse.
          </p>
          <div className="w-16 h-1 bg-amber-500 mt-4" />
        </div>

        {/* 4 Partner Category Segmented Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8 p-1.5 bg-stone-200/80 rounded-sm border border-stone-300">
          {PARTNER_PROFILES.map((profile) => {
            const isActive = profile.id === activeTab;
            return (
              <button
                key={profile.id}
                onClick={() => setActiveTab(profile.id)}
                className={`flex items-center gap-2.5 p-3.5 rounded-sm text-xs font-semibold transition-all text-left whitespace-nowrap ${
                  isActive
                    ? 'bg-stone-900 text-white shadow-md font-bold'
                    : 'text-stone-700 hover:text-stone-950 hover:bg-stone-300/50'
                }`}
              >
                <span className={isActive ? 'text-amber-400' : 'text-stone-600'}>{getPartnerIcon(profile.id)}</span>
                <span className="truncate">{profile.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Partner Profile Focus Box */}
        <div className="p-8 sm:p-12 bg-white border border-stone-300 rounded-sm mb-12 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-amber-700 font-bold">
                  Targeted Partnership Solution
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900 mt-1 tracking-tight">
                  {activeProfile.tagline}
                </h3>
              </div>

              <p className="text-stone-700 text-base leading-relaxed">
                {activeProfile.pitch}
              </p>

              {/* Workflow Flow Pipeline */}
              <div className="p-4 bg-stone-50 border border-stone-200 rounded-sm">
                <p className="text-[11px] uppercase tracking-wider text-stone-500 font-bold mb-1">
                  Synchronized Execution Pipeline
                </p>
                <p className="text-sm font-semibold text-emerald-800">
                  {activeProfile.flow}
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onPartnerInquiry(activeProfile.title)}
                  className="px-7 py-3.5 text-xs font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 transition-colors rounded-sm uppercase tracking-wider inline-flex items-center gap-2 shadow-md hover:shadow-amber-400/20"
                >
                  <span>Discuss Your Project as {activeProfile.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Benefits Matrix */}
            <div className="lg:col-span-5 bg-stone-50 p-6 sm:p-8 rounded-sm border border-stone-200 space-y-4">
              <h4 className="text-xs uppercase tracking-widest text-stone-800 font-bold">
                Collaboration Advantages
              </h4>
              <ul className="space-y-3">
                {activeProfile.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-xs text-stone-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4 border-t border-stone-200 text-[11px] text-stone-500">
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
                  ? 'bg-white border-amber-500 shadow-md ring-2 ring-amber-500/20'
                  : 'bg-white border-stone-200 hover:border-amber-400 hover:shadow-sm'
              }`}
            >
              <div className="flex items-center gap-2.5 text-amber-600 mb-3">
                {getPartnerIcon(profile.id)}
                <h4 className="font-bold text-stone-900 text-sm">{profile.title}</h4>
              </div>
              <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                {profile.pitch}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

