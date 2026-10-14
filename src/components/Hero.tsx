import React from 'react';
import { ArrowRight, ChevronDown, CheckCircle2, Building, ShieldCheck, Clock, Award } from 'lucide-react';
import { HERO_IMAGE } from '../data/projectsData';
import { LogoEmblem } from './Logo';

interface HeroProps {
  onStartProject: () => void;
  onViewProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject, onViewProjects }) => {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-24 pb-12 bg-stone-950 text-white overflow-hidden">
      {/* Background Architectural Canvas with Measured Contrast Scrim */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img
          src={HERO_IMAGE}
          alt="Anthuvann Infra precision construction site"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/85 to-stone-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-12">
        <div className="max-w-3xl">
          {/* Eco-Construction Tagline & Logo Mark */}
          <div className="flex items-center gap-3 mb-4">
            <LogoEmblem size={44} className="drop-shadow-md" />
            <div>
              <div className="flex items-center gap-2">
                <span className="w-6 h-[2px] bg-emerald-500" />
                <span className="text-[11px] uppercase tracking-widest text-emerald-400 font-bold">
                  Eco-Construction &amp; Sustainable Infrastructure
                </span>
              </div>
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-amber-400 font-semibold mt-0.5">
                <span>Building A Greener Tomorrow</span>
              </div>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-3">
            <span className="text-emerald-400">ANTHUVANN</span> INFRA &amp; CONSTRUCTION
          </h1>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl font-medium text-stone-200 tracking-tight mb-4">
            End-to-End Construction &amp; Interior Solutions
          </p>

          {/* Value Proposition */}
          <p className="text-base sm:text-lg text-stone-300 leading-relaxed mb-8 max-w-2xl">
            From concept to completion, we deliver residential, commercial and large-scale projects with
            professional execution, quality and accountability.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <button
              onClick={onStartProject}
              className="px-7 py-3.5 text-sm font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 transition-all rounded-sm uppercase tracking-wider flex items-center gap-2 shadow-lg hover:shadow-amber-400/20"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onViewProjects}
              className="px-7 py-3.5 text-sm font-semibold text-stone-200 hover:text-white bg-stone-900/80 hover:bg-stone-800 transition-all rounded-sm border border-stone-700 uppercase tracking-wider"
            >
              View Our Projects
            </button>
          </div>

          {/* Small supporting line adhering to zero-pill discipline */}
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-stone-400 tracking-wide pt-2 border-t border-stone-800/80">
            <span className="text-stone-300 font-medium">Construction</span>
            <span aria-hidden="true" className="text-amber-500">·</span>
            <span className="text-stone-300 font-medium">Interiors</span>
            <span aria-hidden="true" className="text-amber-500">·</span>
            <span className="text-stone-300 font-medium">Turnkey Projects</span>
            <span aria-hidden="true" className="text-amber-500">·</span>
            <span className="text-stone-300 font-medium">Civil &amp; Infrastructure</span>
            <span aria-hidden="true" className="text-amber-500">·</span>
            <span className="text-stone-300 font-medium">Project Management</span>
          </div>
        </div>
      </div>

      {/* KPI Trust Strip placed in full-width row below hero */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 bg-stone-900/90 backdrop-blur-sm border border-stone-800 rounded-sm">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs uppercase tracking-wider text-stone-400">Quality Standard</p>
              <p className="text-sm font-bold text-white tabular-nums">100% Code Compliance</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Award className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs uppercase tracking-wider text-stone-400">Single Responsibility</p>
              <p className="text-sm font-bold text-white">Turnkey Accountability</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs uppercase tracking-wider text-stone-400">Structured Governance</p>
              <p className="text-sm font-bold text-white">7-Stage Delivery Model</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Building className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs uppercase tracking-wider text-stone-400">Primary Hub</p>
              <p className="text-sm font-bold text-white">Bengaluru, Karnataka</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
