import React, { useState } from 'react';
import { MapPin, Calendar, Maximize2, ArrowUpRight, CheckCircle2, SlidersHorizontal } from 'lucide-react';
import { PROJECTS, ProjectItem } from '../data/projectsData';

interface ProjectsPortfolioProps {
  onSelectProject: (project: ProjectItem) => void;
  selectedCategoryFilter?: string | null;
  onClearFilter?: () => void;
}

export const ProjectsPortfolio: React.FC<ProjectsPortfolioProps> = ({
  onSelectProject,
  selectedCategoryFilter,
  onClearFilter
}) => {
  const [activeCategory, setActiveCategory] = useState<string>(selectedCategoryFilter || 'All');

  // Sync if external filter updates
  React.useEffect(() => {
    if (selectedCategoryFilter) {
      setActiveCategory(selectedCategoryFilter);
    }
  }, [selectedCategoryFilter]);

  const categories = ['All', 'Residential', 'Commercial', 'Industrial', 'Institutional', 'Large-Scale', 'Interiors'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section id="projects" className="py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-widest text-amber-600 font-bold mb-2">
              Featured Portfolio
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight">
              Our Projects
            </h2>
            <p className="mt-3 text-stone-600 text-base sm:text-lg">
              Every project represents our commitment to quality, precision and professional execution.
            </p>
            <div className="w-16 h-1 bg-amber-500 mt-4" />
          </div>

          {/* Functional Category Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-100 border border-stone-200 rounded-sm">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  if (onClearFilter && cat === 'All') onClearFilter();
                }}
                className={`px-3 py-1.5 text-xs font-semibold rounded-sm transition-all whitespace-nowrap ${
                  activeCategory.toLowerCase() === cat.toLowerCase()
                    ? 'bg-stone-900 text-white shadow-sm'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-stone-50 border border-stone-200 rounded-sm overflow-hidden flex flex-col hover:border-stone-400 hover:shadow-lg transition-all duration-300"
            >
              {/* Media Container with 4:3 Ratio */}
              <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />

                {/* Status Indicator (unboxed clean text) */}
                <div className="absolute top-3 right-3 bg-stone-900/90 text-stone-100 text-[11px] font-semibold px-2.5 py-1 tracking-wider uppercase border border-stone-700/60 rounded-xs">
                  {project.status}
                </div>

                {/* Bottom Overlay Category & Year (unboxed metadata) */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-stone-200">
                  <span className="font-semibold text-amber-400">{project.subCategory}</span>
                  <span className="font-mono text-stone-300">{project.year}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  {/* Clean unboxed metadata with typographic separators */}
                  <div className="flex items-center gap-2 text-xs text-stone-500 mb-2">
                    <span>{project.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1 truncate">
                      <MapPin className="w-3 h-3 text-stone-400" />
                      {project.location}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-stone-900 group-hover:text-amber-700 transition-colors tracking-tight">
                    {project.name}
                  </h3>

                  <div className="mt-3 pt-3 border-t border-stone-200/80 space-y-1.5 text-xs text-stone-600">
                    <div>
                      <span className="font-semibold text-stone-800">Scope:</span> {project.scopeOfWork}
                    </div>
                    <div>
                      <span className="font-semibold text-stone-800">Project Area:</span>{' '}
                      <span className="font-mono tabular-nums font-semibold text-stone-900">{project.projectArea}</span>
                    </div>
                  </div>
                </div>

                {/* Action Trigger */}
                <div className="pt-2">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="w-full py-2.5 px-4 text-xs font-semibold text-stone-900 bg-stone-200/80 hover:bg-amber-400 hover:text-stone-950 transition-colors rounded-sm uppercase tracking-wider flex items-center justify-center gap-1.5"
                  >
                    <span>View Project</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
