import React, { useState } from 'react';
import {
  Home,
  Building2,
  Factory,
  GraduationCap,
  Landmark,
  Layers,
  ArrowRight,
  CheckCircle2,
  SlidersHorizontal
} from 'lucide-react';
import { PROJECT_CATEGORIES, ProjectCategory } from '../data/projectsData';

interface ProjectCategoriesProps {
  onSelectCategory: (categoryName: string) => void;
}

export const ProjectCategories: React.FC<ProjectCategoriesProps> = ({ onSelectCategory }) => {
  const [activeTabId, setActiveTabId] = useState<string>(PROJECT_CATEGORIES[0].id);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home':
        return <Home className="w-5 h-5" />;
      case 'Building2':
        return <Building2 className="w-5 h-5" />;
      case 'Factory':
        return <Factory className="w-5 h-5" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5" />;
      case 'Landmark':
        return <Landmark className="w-5 h-5" />;
      case 'Layers':
        return <Layers className="w-5 h-5" />;
      default:
        return <Building2 className="w-5 h-5" />;
    }
  };

  const activeCategory = PROJECT_CATEGORIES.find((c) => c.id === activeTabId) || PROJECT_CATEGORIES[0];

  return (
    <section id="categories" className="py-24 bg-stone-100 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs uppercase tracking-widest text-amber-600 font-bold mb-2">
            MNC-Grade Multi-Disciplinary Positioning
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight">
            Comprehensive Project Categories
          </h2>
          <p className="mt-4 text-stone-600 text-base sm:text-lg leading-relaxed">
            Anthuvann Infra &amp; Construction operates across dedicated specialized sectors, deploying custom
            engineering methodologies tailored to each typology.
          </p>
          <div className="w-16 h-1 bg-amber-500 mt-4" />
        </div>

        {/* Interactive Category Selector Tabs adhering to functional button controls */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-8 p-1.5 bg-stone-200/80 rounded-sm">
          {PROJECT_CATEGORIES.map((cat) => {
            const isActive = cat.id === activeTabId;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTabId(cat.id)}
                className={`flex items-center gap-2 px-3 py-3 rounded-sm text-xs font-semibold transition-all whitespace-nowrap text-left ${
                  isActive
                    ? 'bg-stone-900 text-white shadow-sm'
                    : 'text-stone-700 hover:text-stone-950 hover:bg-stone-300/60'
                }`}
              >
                <span className={isActive ? 'text-amber-400' : 'text-stone-500'}>
                  {getIcon(cat.iconName)}
                </span>
                <span className="truncate">{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Spotlight Card */}
        <div className="p-8 sm:p-10 bg-white border border-stone-300 rounded-sm shadow-sm mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-sm bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                  {getIcon(activeCategory.iconName)}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-stone-900 tracking-tight">
                    {activeCategory.name}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-amber-700 font-semibold">
                    {activeCategory.typicalScale} typical build area
                  </p>
                </div>
              </div>

              <p className="text-stone-700 text-base leading-relaxed">
                {activeCategory.description}
              </p>

              <div>
                <p className="text-xs uppercase tracking-wider text-stone-500 font-bold mb-3">
                  Scope &amp; Typology Portfolio
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeCategory.subTypes.map((sub) => (
                    <div
                      key={sub}
                      className="flex items-center gap-2 p-2.5 bg-stone-50 border border-stone-200 rounded-sm text-xs font-medium text-stone-800"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>{sub}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onSelectCategory(activeCategory.name)}
                  className="px-6 py-3 text-xs font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 transition-colors rounded-sm uppercase tracking-wider inline-flex items-center gap-2"
                >
                  <span>Filter {activeCategory.name} Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 bg-stone-900 text-white p-6 sm:p-7 rounded-sm border border-stone-800 space-y-5">
              <h4 className="text-sm uppercase tracking-widest text-amber-400 font-bold">
                Technical Highlights
              </h4>
              <ul className="space-y-3 text-xs text-stone-300">
                {activeCategory.keyStrengths.map((strength) => (
                  <li key={strength} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5" />
                    <span>{strength}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-stone-800 text-xs text-stone-400">
                <p className="font-semibold text-stone-200 mb-1">Standard Turnkey Inclusions:</p>
                <p>
                  Architectural review, structural compliance, complete civil supervision, certified MEP, and statutory handover support.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Category Summary Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECT_CATEGORIES.map((category) => (
            <div
              key={category.id}
              onClick={() => setActiveTabId(category.id)}
              className={`p-6 border rounded-sm cursor-pointer transition-all ${
                activeTabId === category.id
                  ? 'bg-white border-amber-500 shadow-md ring-1 ring-amber-500/20'
                  : 'bg-white border-stone-200 hover:border-stone-400 hover:shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="text-stone-800">{getIcon(category.iconName)}</div>
                  <h4 className="font-bold text-stone-900 text-base">{category.name}</h4>
                </div>
                <span className="text-[11px] font-mono text-stone-500">{category.typicalScale}</span>
              </div>
              <p className="text-xs text-stone-600 line-clamp-2 mb-4 leading-relaxed">
                {category.tagline}
              </p>
              <div className="space-y-1">
                {category.subTypes.slice(0, 3).map((sub) => (
                  <p key={sub} className="text-[11px] text-stone-500 truncate flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-stone-400" />
                    {sub}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
