import React, { useState, useId } from 'react';
import { Calculator, ArrowRight, CheckCircle2, Clock, Calendar, IndianRupee, Info } from 'lucide-react';

interface ProjectEstimatorProps {
  onApplyEstimate: (data: {
    projectType: string;
    area: string;
    specification: string;
    estimatedBudget: string;
  }) => void;
}

export const ProjectEstimator: React.FC<ProjectEstimatorProps> = ({ onApplyEstimate }) => {
  const [projectType, setProjectType] = useState<string>('Residential');
  const [area, setArea] = useState<number>(4500);
  const [tier, setTier] = useState<'Standard' | 'Premium' | 'Luxury Turnkey'>('Premium');

  const areaSliderId = useId();

  // Benchmark estimation rates per sq ft (INR)
  const rates: Record<string, Record<'Standard' | 'Premium' | 'Luxury Turnkey', number>> = {
    Residential: { Standard: 2200, Premium: 3100, 'Luxury Turnkey': 4500 },
    Commercial: { Standard: 2600, Premium: 3800, 'Luxury Turnkey': 5200 },
    Industrial: { Standard: 1800, Premium: 2500, 'Luxury Turnkey': 3400 },
    Institutional: { Standard: 2400, Premium: 3400, 'Luxury Turnkey': 4800 },
    'Large-Scale': { Standard: 2100, Premium: 2900, 'Luxury Turnkey': 4200 },
    Interiors: { Standard: 1400, Premium: 2200, 'Luxury Turnkey': 3500 }
  };

  const selectedRate = rates[projectType]?.[tier] || 3100;
  const totalCost = area * selectedRate;

  // Format currency in Indian numbering (Lakhs / Crores)
  const formatINR = (val: number) => {
    if (val >= 10000000) {
      return `₹${(val / 10000000).toFixed(2)} Cr`;
    }
    return `₹${(val / 100000).toFixed(2)} Lakhs`;
  };

  // Timeline estimation
  const getDuration = () => {
    if (projectType === 'Interiors') {
      if (area < 5000) return '3 – 5 Months';
      return '5 – 8 Months';
    }
    if (area < 5000) return '10 – 12 Months';
    if (area < 25000) return '14 – 18 Months';
    return '18 – 24+ Months';
  };

  const handleApply = () => {
    onApplyEstimate({
      projectType,
      area: `${area.toLocaleString()} sq.ft`,
      specification: tier,
      estimatedBudget: `${formatINR(totalCost * 0.95)} - ${formatINR(totalCost * 1.05)}`
    });
  };

  return (
    <section className="py-20 bg-stone-100 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <p className="text-xs uppercase tracking-widest text-amber-600 font-bold mb-2">
            Project Planning Utility
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight">
            Interactive Scope &amp; Budget Estimator
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            Obtain an instant preliminary estimation of budget parameters and project timeline milestones based on
            our verified Bengaluru execution benchmarks.
          </p>
          <div className="w-16 h-1 bg-amber-500 mt-4" />
        </div>

        <div className="p-6 sm:p-10 bg-white border border-stone-300 rounded-sm shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Input Controls */}
            <div className="lg:col-span-7 space-y-6">
              {/* Step 1: Typology */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-stone-700 mb-2">
                  1. Select Typology
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {['Residential', 'Commercial', 'Industrial', 'Institutional', 'Large-Scale', 'Interiors'].map((type) => (
                    <button
                      key={type}
                      onClick={() => setProjectType(type)}
                      className={`px-3 py-2 text-xs font-semibold rounded-sm border transition-all text-left truncate ${
                        projectType === type
                          ? 'bg-stone-900 text-white border-stone-900 shadow-sm'
                          : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Built-Up Area */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor={areaSliderId} className="text-xs uppercase tracking-wider font-bold text-stone-700">
                    2. Approximate Built-up Area
                  </label>
                  <span className="text-sm font-mono font-bold text-stone-900 tabular-nums">
                    {area.toLocaleString()} sq.ft
                  </span>
                </div>
                <input
                  id={areaSliderId}
                  type="range"
                  min="1500"
                  max="150000"
                  step="500"
                  value={area}
                  onChange={(e) => setArea(Number(e.target.value))}
                  className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-[11px] text-stone-500 mt-1 font-mono">
                  <span>1,500 sq.ft</span>
                  <span>50,000 sq.ft</span>
                  <span>150,000+ sq.ft</span>
                </div>
              </div>

              {/* Step 3: Finish & Specification Level */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-stone-700 mb-2">
                  3. Specification &amp; Finish Tier
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['Standard', 'Premium', 'Luxury Turnkey'] as const).map((spec) => (
                    <button
                      key={spec}
                      onClick={() => setTier(spec)}
                      className={`p-3 text-xs font-semibold rounded-sm border transition-all text-center ${
                        tier === spec
                          ? 'bg-amber-400 text-stone-950 border-amber-400 font-bold shadow-sm'
                          : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                      }`}
                    >
                      {spec}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Calculated Output Summary Card */}
            <div className="lg:col-span-5 bg-stone-900 text-white p-6 sm:p-8 rounded-sm border border-stone-800 space-y-6">
              <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
                  Indicative Parameters
                </span>
                <span className="text-[10px] text-stone-400 font-mono">Bengaluru Benchmarks</span>
              </div>

              <div>
                <p className="text-xs text-stone-400 uppercase tracking-wider">Estimated Budget Range</p>
                <p className="text-2xl sm:text-3xl font-extrabold text-white mt-1 tabular-nums tracking-tight">
                  {formatINR(totalCost * 0.95)} – {formatINR(totalCost * 1.05)}
                </p>
                <p className="text-[11px] text-stone-400 mt-1">
                  Approx. ₹{selectedRate.toLocaleString()} / sq.ft ({tier} Specification)
                </p>
              </div>

              <div className="space-y-3 pt-3 border-t border-stone-800 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-stone-400 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    Target Timeline:
                  </span>
                  <span className="font-semibold text-white">{getDuration()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-stone-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Contract Type:
                  </span>
                  <span className="font-semibold text-white">Itemized Turnkey BOQ</span>
                </div>
              </div>

              <div className="p-3 bg-stone-800/80 rounded-sm text-[11px] text-stone-300 flex items-start gap-2 border border-stone-700">
                <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  Estimates vary with site soil conditions, architectural cantilevers, and imported materials. A site visit ensures fixed pricing.
                </span>
              </div>

              <button
                onClick={handleApply}
                className="w-full py-3 text-xs font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 transition-colors rounded-sm uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <span>Prefill Consultation Form With These Specs</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
