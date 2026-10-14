import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProjectCategories } from './components/ProjectCategories';
import { ProjectsPortfolio } from './components/ProjectsPortfolio';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { TurnkeySection } from './components/TurnkeySection';
import { SafetyQualitySection } from './components/SafetyQualitySection';
import { TeamSection } from './components/TeamSection';
import { PartnerSection } from './components/PartnerSection';
import { WhyAnthuvann } from './components/WhyAnthuvann';
import { ProjectEstimator } from './components/ProjectEstimator';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectItem } from './data/projectsData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const [contactInitialData, setContactInitialData] = useState<{
    projectType?: string;
    area?: string;
    specification?: string;
    estimatedBudget?: string;
    projectName?: string;
    partnerType?: string;
  } | null>(null);

  const scrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const projectsElem = document.getElementById('projects');
    if (projectsElem) {
      projectsElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategoryFromCategories = (categoryName: string) => {
    setCategoryFilter(categoryName);
    scrollToProjects();
  };

  const handleApplyEstimate = (data: {
    projectType: string;
    area: string;
    specification: string;
    estimatedBudget: string;
  }) => {
    setContactInitialData(data);
    const formElem = document.getElementById('enquiry-form');
    if (formElem) {
      formElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInquireProject = (projectName: string) => {
    setContactInitialData({ projectName });
    const formElem = document.getElementById('enquiry-form');
    if (formElem) {
      formElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePartnerInquiry = (partnerType: string) => {
    setContactInitialData({ partnerType });
    const formElem = document.getElementById('enquiry-form');
    if (formElem) {
      formElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col selection:bg-amber-500 selection:text-white">
      {/* Top Bar Header */}
      <Header onOpenConsultation={scrollToContact} />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onStartProject={scrollToContact}
          onViewProjects={scrollToProjects}
        />

        {/* 2. About Section */}
        <AboutSection />

        {/* 3. Project Categories (MNC-Style Positioning) */}
        <ProjectCategories onSelectCategory={handleSelectCategoryFromCategories} />

        {/* 4. Projects / Portfolio */}
        <ProjectsPortfolio
          onSelectProject={(project) => setSelectedProject(project)}
          selectedCategoryFilter={categoryFilter}
          onClearFilter={() => setCategoryFilter(null)}
        />

        {/* 5. End-to-End / Turnkey Solutions */}
        <TurnkeySection onStartTurnkey={scrollToContact} />

        {/* 6. Our Capabilities */}
        <CapabilitiesSection onStartInquiry={scrollToContact} />

        {/* 7. Safety & Quality */}
        <SafetyQualitySection />

        {/* 8. Our Team Organization */}
        <TeamSection />

        {/* 9. Partner With Us (Architects, Designers, Developers, Corporates) */}
        <PartnerSection onPartnerInquiry={handlePartnerInquiry} />

        {/* 10. Why Anthuvann & Testimonials */}
        <WhyAnthuvann />

        {/* 11. Interactive Project Budget & Timeline Estimator */}
        <ProjectEstimator onApplyEstimate={handleApplyEstimate} />

        {/* 12. CTA & Contact Section */}
        <ContactSection initialData={contactInitialData} />
      </main>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquireProject={handleInquireProject}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
