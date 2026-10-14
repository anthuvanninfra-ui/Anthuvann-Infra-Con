import React from 'react';
import { Users2, Compass, Briefcase, Wrench, HardHat, Check } from 'lucide-react';
import { TEAM_STRUCTURE } from '../data/projectsData';

export const TeamSection: React.FC = () => {
  const icons = [
    <Compass className="w-5 h-5" />,
    <Briefcase className="w-5 h-5" />,
    <Wrench className="w-5 h-5" />,
    <HardHat className="w-5 h-5" />,
    <Users2 className="w-5 h-5" />
  ];

  return (
    <section className="py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs uppercase tracking-widest text-amber-600 font-bold mb-2">
            Organized Project Hierarchy
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight">
            People Behind the Projects
          </h2>
          <p className="mt-4 text-stone-600 text-base sm:text-lg leading-relaxed">
            Our strength comes from the people who plan, coordinate and execute every project.
            We structure each project team as a dedicated project delivery unit with clear chains of technical and operational accountability.
          </p>
          <div className="w-16 h-1 bg-amber-500 mt-4" />
        </div>

        {/* 5 Project Organization Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAM_STRUCTURE.map((item, idx) => (
            <div
              key={item.role}
              className={`p-6 border rounded-sm flex flex-col justify-between transition-all ${
                idx === 0
                  ? 'bg-stone-900 text-white border-stone-800 shadow-md md:col-span-2 lg:col-span-1'
                  : 'bg-stone-50 text-stone-900 border-stone-200 hover:border-stone-400 hover:bg-white'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-mono font-bold ${idx === 0 ? 'text-amber-400' : 'text-amber-600'}`}>
                    Tier 0{idx + 1}
                  </span>
                  <div className={idx === 0 ? 'text-amber-400' : 'text-stone-700'}>
                    {icons[idx]}
                  </div>
                </div>

                <h3 className={`text-xl font-bold tracking-tight mb-1 ${idx === 0 ? 'text-white' : 'text-stone-900'}`}>
                  {item.role}
                </h3>

                <p className={`text-xs font-semibold uppercase tracking-wider mb-3 ${
                  idx === 0 ? 'text-amber-300' : 'text-amber-700'
                }`}>
                  {item.summary}
                </p>

                <p className={`text-xs leading-relaxed ${idx === 0 ? 'text-stone-300' : 'text-stone-600'}`}>
                  {item.description}
                </p>
              </div>

              <div className={`mt-6 pt-3 border-t text-[11px] font-medium ${
                idx === 0 ? 'border-stone-800 text-stone-400' : 'border-stone-200 text-stone-500'
              }`}>
                Strict RACI matrix governance on all active sites
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
