import React from 'react';
import { X, MapPin, Calendar, Clock, Maximize2, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { ProjectItem } from '../data/projectsData';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onInquireProject: (projectName: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onInquireProject
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-fadeIn">
      <div className="relative w-full max-w-5xl bg-white border border-stone-300 rounded-sm shadow-2xl overflow-hidden max-h-[90vh] flex flex-col my-auto">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-stone-900 text-white shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold font-mono">
              {project.category} · {project.subCategory}
            </span>
            <span className="text-stone-500">|</span>
            <span className="text-xs text-stone-300">{project.status}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-white rounded-sm hover:bg-stone-800 transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 divide-y divide-stone-200">
          {/* Header & Hero Image */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
                {project.name}
              </h2>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-stone-600 mt-2">
                <span className="flex items-center gap-1 font-medium text-stone-800">
                  <MapPin className="w-3.5 h-3.5 text-amber-600" />
                  {project.location}
                </span>
                <span aria-hidden="true" className="text-stone-300">·</span>
                <span className="flex items-center gap-1">
                  <Maximize2 className="w-3.5 h-3.5 text-stone-400" />
                  {project.projectArea} Built-Up Area
                </span>
                <span aria-hidden="true" className="text-stone-300">·</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-stone-400" />
                  {project.duration}
                </span>
                <span aria-hidden="true" className="text-stone-300">·</span>
                <span className="flex items-center gap-1 font-mono">
                  <Calendar className="w-3.5 h-3.5 text-stone-400" />
                  Delivered {project.year}
                </span>
              </div>
            </div>

            {/* Large Professional Project Photography */}
            <div className="relative aspect-[16/9] w-full rounded-sm overflow-hidden bg-stone-200 shadow-sm border border-stone-200">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-stone-950/80 backdrop-blur-sm text-white text-xs rounded-sm border border-stone-800 flex items-center justify-between">
                <span className="font-medium">Project Gallery: Primary Site Photography &amp; Execution</span>
                <span className="text-amber-400 font-semibold">{project.subCategory}</span>
              </div>
            </div>
          </div>

          {/* Project Overview */}
          <div className="pt-6 space-y-4">
            <h3 className="text-lg font-bold text-stone-900 uppercase tracking-wider text-xs text-amber-700">
              Project Overview
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-stone-50 border border-stone-200 rounded-sm space-y-2">
                <p className="text-xs uppercase tracking-wider font-semibold text-stone-500">
                  Client Requirement
                </p>
                <p className="text-sm text-stone-700 leading-relaxed">
                  {project.clientRequirement}
                </p>
              </div>

              <div className="p-4 bg-stone-50 border border-stone-200 rounded-sm space-y-2">
                <p className="text-xs uppercase tracking-wider font-semibold text-stone-500">
                  Scope of Work
                </p>
                <p className="text-sm text-stone-700 leading-relaxed">
                  {project.scopeOfWork}
                </p>
              </div>
            </div>

            {/* Specifications Matrix */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {project.specifications.map((spec) => (
                <div key={spec.label} className="p-3 bg-stone-100/70 border border-stone-200 rounded-sm">
                  <p className="text-[11px] uppercase tracking-wider text-stone-500 font-medium">{spec.label}</p>
                  <p className="text-xs font-bold text-stone-900 mt-0.5">{spec.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* End-to-End Scope Journey */}
          <div className="pt-6 space-y-4">
            <div>
              <p className="text-xs uppercase tracking-wider text-amber-700 font-bold mb-1">
                Integrated Delivery Stages
              </p>
              <h3 className="text-base font-bold text-stone-900">
                Planning → Civil → Structural → MEP → Interiors → Finishing → Handover
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {project.scopeBreakdown.map((item, idx) => (
                <div
                  key={item.stage}
                  className="p-3.5 bg-stone-50 border border-stone-200 rounded-sm text-xs space-y-1"
                >
                  <div className="flex items-center gap-2 font-bold text-stone-900">
                    <span className="w-5 h-5 rounded-full bg-stone-900 text-amber-400 flex items-center justify-center text-[10px] font-mono">
                      0{idx + 1}
                    </span>
                    <span>{item.stage}</span>
                  </div>
                  <p className="text-stone-600 leading-relaxed pl-7">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Project Highlights */}
          <div className="pt-6 space-y-4">
            <p className="text-xs uppercase tracking-wider text-amber-700 font-bold mb-1">
              Engineering &amp; Architectural Highlights
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-start gap-2.5 p-3 bg-stone-50 border border-stone-200 rounded-sm text-xs text-stone-800"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer with Inquire Action */}
        <div className="p-4 sm:p-6 bg-stone-100 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <p className="text-xs text-stone-600 text-center sm:text-left">
            Interested in constructing or fitting out a similar <strong className="text-stone-900">{project.subCategory}</strong>?
          </p>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2.5 text-xs font-semibold text-stone-700 hover:text-stone-900 bg-white border border-stone-300 rounded-sm uppercase tracking-wider"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onInquireProject(project.name);
              }}
              className="w-1/2 sm:w-auto px-6 py-2.5 text-xs font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 transition-colors rounded-sm uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <span>Inquire About This Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
