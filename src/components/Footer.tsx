import React from 'react';
import { Phone, Mail, MapPin, MessageSquare, ArrowUp } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/projectsData';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 text-stone-400 text-xs border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Info with authentic Logo */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="compact" theme="dark" size="md" />
            <p className="text-stone-400 text-xs leading-relaxed max-w-sm mt-3">
              Full-service construction and infrastructure company delivering end-to-end residential,
              commercial, industrial, and turnkey interior solutions with precision engineering and transparency.
            </p>
            <div className="text-[11px] text-stone-500">
              Licensed Civil Contractor &amp; Project Management Practice
            </div>
          </div>

          {/* Navigation Links Mirror */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-white font-bold uppercase tracking-wider text-xs">Navigation</p>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-amber-400 transition-colors">About Anthuvann</a></li>
              <li><a href="#categories" className="hover:text-amber-400 transition-colors">Project Categories</a></li>
              <li><a href="#projects" className="hover:text-amber-400 transition-colors">Our Portfolio</a></li>
              <li><a href="#capabilities" className="hover:text-amber-400 transition-colors">Capabilities</a></li>
              <li><a href="#turnkey" className="hover:text-amber-400 transition-colors">Turnkey Process</a></li>
              <li><a href="#safety" className="hover:text-amber-400 transition-colors">Safety &amp; Quality</a></li>
            </ul>
          </div>

          {/* Project Sectors */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-white font-bold uppercase tracking-wider text-xs">Project Sectors</p>
            <ul className="space-y-2 text-stone-400">
              <li>Luxury Villas &amp; Residences</li>
              <li>Commercial &amp; Corporate Offices</li>
              <li>Industrial Plants &amp; Warehouses</li>
              <li>Healthcare &amp; Institutional Facilities</li>
              <li>Large-Scale Developments</li>
              <li>Turnkey Interior Fit-Outs</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-white font-bold uppercase tracking-wider text-xs">Headquarters</p>
            <div className="space-y-2.5">
              <p className="flex items-center gap-2 text-stone-300">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{COMPANY_CONTACT.address}</span>
              </p>
              <div className="flex items-start gap-2 text-stone-300">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <div className="flex flex-col gap-0.5">
                  <a href={`tel:${COMPANY_CONTACT.phone}`} className="hover:text-white transition-colors">
                    {COMPANY_CONTACT.phone}
                  </a>
                  <a href={`tel:${COMPANY_CONTACT.phoneSecondary}`} className="hover:text-white transition-colors">
                    {COMPANY_CONTACT.phoneSecondary}
                  </a>
                </div>
              </div>
              <p className="flex items-center gap-2 text-stone-300">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href={`mailto:${COMPANY_CONTACT.email}`} className="hover:text-white">{COMPANY_CONTACT.email}</a>
              </p>
              <div className="flex items-start gap-2 text-emerald-400">
                <MessageSquare className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                <div className="flex flex-col gap-0.5">
                  <a
                    href={`https://wa.me/${COMPANY_CONTACT.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    WhatsApp: +91 98443 92232
                  </a>
                  <a
                    href={`https://wa.me/${COMPANY_CONTACT.whatsappNumberSecondary}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-emerald-400/90"
                  >
                    WhatsApp: +91 77603 84188
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Quiet Sub-footer */}
        <div className="mt-12 pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <p>© {new Date().getFullYear()} Anthuvann Infra &amp; Construction. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Bengaluru, Karnataka, India</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-stone-400 hover:text-white transition-colors"
              aria-label="Scroll to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
