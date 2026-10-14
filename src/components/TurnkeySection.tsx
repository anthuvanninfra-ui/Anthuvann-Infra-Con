import React, { useState } from 'react';
import { ArrowDown, CheckCircle2, ChevronRight, Users, Shield, Layers, CalendarCheck } from 'lucide-react';
import { TURNKEY_STEPS } from '../data/projectsData';

interface TurnkeySectionProps {
  onStartTurnkey: () => void;
}

export const TurnkeySection: React.FC<TurnkeySectionProps> = ({ onStartTurnkey }) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  return (
    <section id="turnkey" className="py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs uppercase tracking-widest text-amber-600 font-bold mb-2">
            Single-Point Turnkey Responsibility
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight">
            One Partner. One Team. Complete Project.
          </h2>
          <p className="mt-4 text-stone-600 text-base sm:text-lg leading-relaxed">
            Instead of coordinating with different contractors for different stages, clients can work with
            one integrated team. We assume end-to-end accountability from soil testing to final key handover.
          </p>
          <div className="w-16 h-1 bg-amber-500 mt-4" />
        </div>

        {/* Turnkey Process Timeline / Flow */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-sm uppercase tracking-wider font-bold text-stone-900">
              Our 7-Step Turnkey Process
            </h3>
            <span className="text-xs text-stone-500">Click any stage to view deliverables</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-7 gap-3">
            {TURNKEY_STEPS.map((step, idx) => {
              const isActive = activeStepIndex === idx;
              return (
                <div
                  key={step.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-4 border rounded-sm cursor-pointer transition-all flex flex-col justify-between ${
                    isActive
                      ? 'bg-stone-900 text-white border-stone-900 shadow-md ring-2 ring-amber-400'
                      : 'bg-stone-50 text-stone-800 border-stone-200 hover:border-amber-400 hover:bg-white'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-xs font-mono font-bold ${
                        isActive ? 'text-amber-400' : 'text-amber-600'
                      }`}>
                        {step.step}
                      </span>
                      {idx < TURNKEY_STEPS.length - 1 && (
                        <ChevronRight className={`w-3.5 h-3.5 hidden md:block ${
                          isActive ? 'text-stone-400' : 'text-stone-300'
                        }`} />
                      )}
                    </div>
                    <h4 className="text-sm font-bold tracking-tight mb-1">
                      {step.name}
                    </h4>
                  </div>
                  <div className="mt-3 pt-2 border-t border-stone-200/50">
                    <span className={`text-[10px] font-semibold uppercase tracking-wider ${
                      isActive ? 'text-amber-300' : 'text-stone-500'
                    }`}>
                      {isActive ? 'Selected' : 'View Stage'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Active Stage Deep Dive */}
        <div className="p-8 sm:p-10 bg-stone-50 border border-stone-300 rounded-sm mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-sm font-mono font-bold px-2 py-0.5 bg-stone-900 text-amber-400 rounded-xs">
                  Stage {TURNKEY_STEPS[activeStepIndex].step} of 07
                </span>
                <h4 className="text-2xl font-bold text-stone-900 tracking-tight">
                  {TURNKEY_STEPS[activeStepIndex].name}
                </h4>
              </div>

              <p className="text-base font-semibold text-stone-800">
                {TURNKEY_STEPS[activeStepIndex].headline}
              </p>

              <p className="text-sm text-stone-600 leading-relaxed">
                {TURNKEY_STEPS[activeStepIndex].desc}
              </p>

              <div className="pt-2">
                <button
                  onClick={onStartTurnkey}
                  className="px-6 py-2.5 text-xs font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 transition-colors rounded-sm uppercase tracking-wider"
                >
                  Inquire For Turnkey Execution
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white p-6 border border-stone-200 rounded-sm space-y-3 shadow-sm">
              <p className="text-xs uppercase tracking-wider font-bold text-stone-500">
                Key Stage Outcomes &amp; Checkpoints
              </p>
              <ul className="space-y-2.5">
                {TURNKEY_STEPS[activeStepIndex].outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-2.5 text-xs text-stone-800 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-3 border-t border-stone-100 text-[11px] text-stone-500">
                Logged transparently in the Anthuvann Client Project Dashboard.
              </div>
            </div>
          </div>
        </div>

        {/* Traditional Fragmented Contractors vs. Anthuvann Integrated Model */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-red-50/50 border border-red-200 rounded-sm space-y-3">
            <h4 className="text-sm uppercase tracking-wider font-bold text-red-900">
              The Problem: Traditional Fragmented Contractors
            </h4>
            <ul className="space-y-2 text-xs text-stone-700">
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">✕</span>
                <span>Client must coordinate 10-15 independent vendors (Civil, MEP, Painter, Carpenter, Glass).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">✕</span>
                <span>Subcontractors blame each other for delays, conduit clashes, and poor wall finishes.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">✕</span>
                <span>Unpredictable budget escalation and hidden variation costs midway through construction.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">✕</span>
                <span>No single warranty or legal accountability once subcontractors exit the site.</span>
              </li>
            </ul>
          </div>

          <div className="p-6 bg-emerald-50/50 border border-emerald-200 rounded-sm space-y-3">
            <h4 className="text-sm uppercase tracking-wider font-bold text-emerald-950">
              The Anthuvann Turnkey Advantage
            </h4>
            <ul className="space-y-2 text-xs text-stone-700">
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>Single Point of Contact: One dedicated Project Manager and unified contractual obligation.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>Synchronized in-house teams: Civil, MEP, Joinery, and Finishes executed seamlessly.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>Fixed Bill of Quantities (BOQ) with transparent stage billing linked to milestone sign-offs.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>Comprehensive 5-year structural warranty and structured asset handover documentation.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
