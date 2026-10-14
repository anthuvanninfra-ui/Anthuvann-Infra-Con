import React from 'react';
import { Target, Compass, CheckCircle2, Shield, Eye, Clock, Award, Hammer } from 'lucide-react';
import { LogoEmblem } from './Logo';

export const AboutSection: React.FC = () => {
  const missionPillars = [
    { title: 'Quality', desc: 'Lab-tested certified materials and zero-tolerance structural tolerances.' },
    { title: 'Safety', desc: '100% PPE compliance, zero-incident culture, and proactive hazard prevention.' },
    { title: 'Transparency', desc: 'Itemized BOQ billing, real-time photographic updates, and open accounting.' },
    { title: 'Professional Execution', desc: 'BIM-coordinated drawings, qualified civil engineers, and critical path scheduling.' },
    { title: 'Timely Delivery', desc: 'Contractual milestone commitments backed by mechanized execution speeds.' }
  ];

  return (
    <section id="about" className="py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs uppercase tracking-widest text-amber-600 font-bold mb-2">
            About Anthuvann Infra &amp; Construction
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight">
            Building More Than Structures. Building Trust.
          </h2>
          <div className="w-16 h-1 bg-amber-500 mt-4" />
        </div>

        {/* Narrative & Proposition Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-7 space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
            <p>
              <strong className="text-stone-950 font-semibold">Anthuvann Infra &amp; Construction</strong> is a
              full-service construction company delivering end-to-end construction and interior solutions.
            </p>
            <p>
              We work across residential, commercial and large-scale projects, providing coordinated execution
              from initial planning through construction, interiors, finishing and handover.
            </p>
            <p className="text-stone-600 text-base">
              Our approach combines professional project management, skilled execution, quality-focused
              construction and transparent communication. By consolidating multi-disciplinary engineering and
              craftsmanship under one accountable partner, we protect our clients from cost overruns, vendor
              clashes, and schedule drift.
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-stone-100">
              <div className="p-4 bg-stone-50 border border-stone-200 rounded-sm">
                <p className="text-2xl font-bold text-stone-950 tabular-nums">100%</p>
                <p className="text-xs uppercase tracking-wider text-stone-600 mt-1">Single-Point Accountability</p>
              </div>
              <div className="p-4 bg-stone-50 border border-stone-200 rounded-sm">
                <p className="text-2xl font-bold text-stone-950 tabular-nums">7 Steps</p>
                <p className="text-xs uppercase tracking-wider text-stone-600 mt-1">Turnkey Lifecycle</p>
              </div>
              <div className="p-4 bg-stone-50 border border-stone-200 rounded-sm">
                <p className="text-2xl font-bold text-stone-950 tabular-nums">Bengaluru</p>
                <p className="text-xs uppercase tracking-wider text-stone-600 mt-1">Headquarters &amp; Operations</p>
              </div>
            </div>
          </div>

          {/* Vision & Mission Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Vision */}
            <div className="p-6 bg-stone-900 text-white rounded-sm border border-stone-800 shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-sm bg-amber-500/20 text-amber-400 flex items-center justify-center">
                  <Compass className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold tracking-tight text-white">Our Vision</h3>
              </div>
              <p className="text-stone-300 text-sm leading-relaxed">
                To become a trusted construction and infrastructure partner recognized for quality, reliability,
                innovation and excellence in project execution.
              </p>
            </div>

            {/* Mission */}
            <div className="p-6 bg-stone-50 border border-stone-300 rounded-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-sm bg-stone-900 text-amber-400 flex items-center justify-center">
                  <Target className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold tracking-tight text-stone-900">Our Mission</h3>
              </div>
              <p className="text-stone-700 text-sm leading-relaxed mb-4">
                To deliver projects that meet the highest expectations of our clients through:
              </p>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-stone-800 font-semibold">
                <span>Quality</span>
                <span aria-hidden="true" className="text-amber-600">|</span>
                <span>Safety</span>
                <span aria-hidden="true" className="text-amber-600">|</span>
                <span>Transparency</span>
                <span aria-hidden="true" className="text-amber-600">|</span>
                <span>Professional Execution</span>
                <span aria-hidden="true" className="text-amber-600">|</span>
                <span>Timely Delivery</span>
              </div>
            </div>

            {/* Logo Emblem & Eco-Construction Identity */}
            <div className="p-6 bg-emerald-950/20 border border-emerald-900/40 rounded-sm">
              <div className="flex items-center gap-4">
                <LogoEmblem size={52} />
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-700">
                    Eco-Construction Philosophy
                  </span>
                  <h4 className="text-sm font-bold text-stone-900">
                    Building A Greener Tomorrow
                  </h4>
                  <p className="text-xs text-stone-600 leading-snug">
                    Synthesizing modern civil skyscrapers with natural ecology, sustainable materials, and low-carbon engineering.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The 5 Pillars of Our Mission */}
        <div className="mt-8 pt-8 border-t border-stone-200">
          <p className="text-xs uppercase tracking-wider text-stone-500 font-bold mb-6">
            Core Delivery Disciplines
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {missionPillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="p-5 bg-stone-50/80 border border-stone-200 rounded-sm hover:border-amber-400 transition-colors"
              >
                <div className="text-amber-600 font-mono text-xs font-semibold mb-2">
                  0{idx + 1}
                </div>
                <h4 className="text-sm font-bold text-stone-900 mb-1">{pillar.title}</h4>
                <p className="text-xs text-stone-600 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
