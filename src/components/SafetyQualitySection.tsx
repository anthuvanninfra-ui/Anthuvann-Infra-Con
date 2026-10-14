import React from 'react';
import { ShieldCheck, HardHat, CheckCircle, AlertTriangle, Activity, Award, FileCheck2, Ruler } from 'lucide-react';
import { SAFETY_QUALITY_ITEMS } from '../data/projectsData';

export const SafetyQualitySection: React.FC = () => {
  return (
    <section id="safety" className="py-24 bg-stone-100 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs uppercase tracking-widest text-amber-600 font-bold mb-2">
            Institutional Quality Assurance &amp; HSE Protocol
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight">
            Quality &amp; Safety at Every Stage
          </h2>
          <p className="mt-4 text-stone-600 text-base sm:text-lg leading-relaxed">
            We believe quality is not a final-stage activity. It is part of every stage of construction.
            Our rigorous QA/QC inspection protocols and safety culture meet international corporate standards.
          </p>
          <div className="w-16 h-1 bg-amber-500 mt-4" />
        </div>

        {/* 2-Column Split: Quality Focus vs Safety Focus */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {/* Quality Focus */}
          <div className="bg-white border border-stone-300 rounded-sm p-8 shadow-sm space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-stone-200">
              <div className="w-10 h-10 rounded-sm bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-stone-900">Quality Focus</h3>
                <p className="text-xs text-stone-500">Engineered Precision &amp; Material Longevity</p>
              </div>
            </div>

            <div className="space-y-5">
              {SAFETY_QUALITY_ITEMS.quality.map((item) => (
                <div key={item.title} className="space-y-1">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-600 shrink-0" />
                    <h4 className="text-sm font-bold text-stone-900">{item.title}</h4>
                  </div>
                  <p className="text-xs text-stone-600 pl-6 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-4 bg-stone-50 border border-stone-200 rounded-sm text-xs text-stone-700 flex items-center justify-between">
              <span className="font-semibold text-stone-900">240-Point Pre-Pour &amp; Finishing Checklists</span>
              <FileCheck2 className="w-4 h-4 text-emerald-600" />
            </div>
          </div>

          {/* Safety Focus */}
          <div className="bg-white border border-stone-300 rounded-sm p-8 shadow-sm space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-stone-200">
              <div className="w-10 h-10 rounded-sm bg-stone-900 text-amber-400 flex items-center justify-center font-bold">
                <HardHat className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-stone-900">Safety Focus</h3>
                <p className="text-xs text-stone-500">Zero-Compromise Site Health &amp; Safety</p>
              </div>
            </div>

            <div className="space-y-5">
              {SAFETY_QUALITY_ITEMS.safety.map((item) => (
                <div key={item.title} className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-stone-900 shrink-0" />
                    <h4 className="text-sm font-bold text-stone-900">{item.title}</h4>
                  </div>
                  <p className="text-xs text-stone-600 pl-6 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-4 bg-stone-50 border border-stone-200 rounded-sm text-xs text-stone-700 flex items-center justify-between">
              <span className="font-semibold text-stone-900">Mandatory Daily Morning Toolbox Talks (TBT)</span>
              <ShieldCheck className="w-4 h-4 text-amber-600" />
            </div>
          </div>
        </div>

        {/* Rigorous Testing Protocol Strip */}
        <div className="p-6 sm:p-8 bg-stone-900 text-white rounded-sm border border-stone-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-xl">
              <p className="text-xs uppercase tracking-widest text-amber-400 font-bold mb-1">
                Standard On-Site Quality Verification
              </p>
              <h4 className="text-lg font-bold text-white">
                Laboratory-Certified Testing on Every Pour &amp; Install
              </h4>
              <p className="text-xs text-stone-400 mt-1">
                Compressive strength concrete cube test (7 &amp; 28 days), ultrasonic rebar spacing scan, 10 bar MEP hydrostatic pressure tests, and laser flatness audits.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-amber-300">
              <span className="p-2.5 bg-stone-800 rounded-sm border border-stone-700">IS 456 Compliant</span>
              <span className="p-2.5 bg-stone-800 rounded-sm border border-stone-700">NBC 2016 Certified</span>
              <span className="p-2.5 bg-stone-800 rounded-sm border border-stone-700">Zero LTI Target</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
