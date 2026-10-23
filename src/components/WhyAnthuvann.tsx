import React from 'react';
import { Check, ShieldCheck, Clock, Award, Building, HeartHandshake, Sparkles, Scale } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/projectsData';

export const WhyAnthuvann: React.FC = () => {
  const icons = [
    <Building className="w-5 h-5 text-amber-600" />,
    <Clock className="w-5 h-5 text-amber-600" />,
    <ShieldCheck className="w-5 h-5 text-amber-600" />,
    <HeartHandshake className="w-5 h-5 text-amber-600" />,
    <Award className="w-5 h-5 text-amber-600" />,
    <Scale className="w-5 h-5 text-amber-600" />,
    <Sparkles className="w-5 h-5 text-amber-600" />
  ];

  return (
    <section className="py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs uppercase tracking-widest text-amber-600 font-bold mb-2">
            The Anthuvann Advantage
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight">
            Why Clients Choose Us
          </h2>
          <p className="mt-4 text-stone-600 text-base sm:text-lg leading-relaxed">
            Anthuvann Infra &amp; Construction bridges the gap between architectural artistry and structural permanence.
            Here is why individual home builders, corporate enterprises, and developers trust us.
          </p>
          <div className="w-16 h-1 bg-amber-500 mt-4" />
        </div>

        {/* 7 Key Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={item.title}
              className={`p-6 bg-stone-50 border border-stone-200 rounded-sm hover:border-amber-400 hover:shadow-md transition-all ${
                idx === 0 ? 'lg:col-span-2 bg-gradient-to-br from-stone-50 to-amber-50/30' : ''
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-sm bg-white border border-stone-200 flex items-center justify-center shadow-xs">
                  {icons[idx]}
                </div>
                <h3 className="text-base font-bold text-stone-900 tracking-tight">
                  {item.title}
                </h3>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed pl-12">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

